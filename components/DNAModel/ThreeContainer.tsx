'use client';
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import * as THREE from 'three';
import { vertexShader, fragmentShader } from './shaders';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import styles from './styles.module.css';

export default function ThreeContainer() {
	const containerRef = useRef<HTMLDivElement>(null);
	const dnaRef = useRef<THREE.Points | null>(null);
	const materialRef = useRef<THREE.ShaderMaterial | null>(null);
	const geometryRef = useRef<THREE.BufferGeometry | null>(null);
	const animationFrameId = useRef<number | null>(null);

	useLayoutEffect(() => {
		if (typeof window === 'undefined' || !containerRef.current) return;

		// Get the container
		const container = containerRef.current;
		const width = container.offsetWidth;
		const height = container.offsetHeight;

		// Define a scene
		const scene = new THREE.Scene();

		// Setup the camera
		const camera = new THREE.PerspectiveCamera(70, width / height, 0.001, 1000);
		camera.position.set(-2, 2, 4);

		// Define the renderer
		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(width, height);
		renderer.setClearColor(0x000000, 0);
		renderer.outputColorSpace = THREE.SRGBColorSpace;

		// Add the renderer to the container
		container.appendChild(renderer.domElement);

		// Setup Loader
		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath('/draco/');
		const loader = new GLTFLoader();
		loader.setDRACOLoader(dracoLoader);

		loader.load(
			'/dna.gltf',
			(gltf) => {
				const mesh = gltf.scene.children[0] as THREE.Mesh;
				geometryRef.current = mesh.geometry;
				geometryRef.current.center();
				addObjects();
				handleResize();
				setupResize();
				animate();
			},
			undefined, // For progress, not needed here
			(error) => {
				console.error('An error happened during loading a model:', error);
			}
		);

		const addObjects = () => {
			// DNA Model
			materialRef.current = new THREE.ShaderMaterial({
				side: THREE.DoubleSide,
				uniforms: {
					time: { value: 0 },
					uColorStart: { value: new THREE.Color(0xb57edc) },
					uColorEnd: { value: new THREE.Color(0xb57edc) },
					uOpacity: { value: 0.2 },
					// uColor1: { value: new THREE.Color(0x0c0317) },
					// uColor2: { value: new THREE.Color(0x170624) },
					// uColor3: { value: new THREE.Color(0x07112e) },
					resolution: { value: new THREE.Vector4() },
				},
				// wireframe: true,
				transparent: true,
				vertexShader: vertexShader,
				fragmentShader: fragmentShader,
				depthTest: false,
				depthWrite: false,
				blending: THREE.AdditiveBlending,
			});

			if (geometryRef.current) {
				const number = geometryRef.current.attributes.position.array.length;
				let randoms = new Float32Array(number / 3);
				let colorRandoms = new Float32Array(number / 3);
				for (let i = 0; i < number / 3; i++) {
					randoms.set([Math.random()], i);
					colorRandoms.set([Math.random()], i);
				}

				// Set the size of the vertex
				geometryRef.current.setAttribute(
					'randoms',
					new THREE.BufferAttribute(randoms, 1)
				);

				// Set the color of vertex
				geometryRef.current.setAttribute(
					'colorRandoms',
					new THREE.BufferAttribute(colorRandoms, 1)
				);

				dnaRef.current = new THREE.Points(
					geometryRef.current,
					materialRef.current
				);
				scene.add(dnaRef.current);
			}
		};

		// Render loop
		const animate = () => {
			requestAnimationFrame(animate);
			if (dnaRef.current) dnaRef.current.rotation.y += 0.001;
			// Update the time uniform
			if (materialRef.current) materialRef.current.uniforms.time.value += 0.05;
			// Render the scene
			renderer.render(scene, camera);
		};

		const setupResize = () => {
			window.addEventListener('resize', handleResize);
		};

		// Handle resize
		const handleResize = () => {
			const width = container.offsetWidth;
			const height = container.offsetHeight;
			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		};

		window.addEventListener('resize', handleResize);

		// Cleanup function
		return () => {
			window.removeEventListener('resize', handleResize);
			container.removeChild(renderer.domElement);
			if (animationFrameId.current !== null) {
				cancelAnimationFrame(animationFrameId.current);
			}
			// Reset refs
			dnaRef.current = null;
			materialRef.current = null;
			geometryRef.current = null;
			animationFrameId.current = null;
		};
	}, []);

	return <div ref={containerRef} className={styles.dna}></div>;
}
