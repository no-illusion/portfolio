# Getting Started

When running a development environment for the first time, first install all the node modules:

```
npm install
```

To then start the development server

```
npm run dev
```

# API Keys

This project uses resend (https://resend.com/) to handle sending emails from the contact form, which requires an API key. When developing locally, place the API key in an environment variable file named `.env.local` in the root directory and store the API key inside a variable named `RESEND_API_KEY=`. Subsequent configuration files related to resend are stored inside the directory `/lib/resend` in the source code.
der der der

# Project Structure

This project uses NextJS 14, which includes features such as react server components, server actions, and the app directory. At a high level:

- All overarching pages are in their own folder within the app directory. Page specific components are also within each page's folder. For example: `app/contact` would contain the overarching contact page inside `app/contact/page.tsx`, and contact specific components such as the `app/contact/ContactForm` and corresponding server actions required by that page, such as `app/contact/_actions.ts`.

- All resuable components that might be used across more than one specific page, exists inside the `components` directory. These include things like `Header.tsx`, `Logo.tsx`, `TextInput.tsx` and so on. Some components might be used only in one place, but still are put in the general components directory as convention, because they could theoretically be used in more than one place.

- Configuration files related to external APIs, such as `resend` are inside the `lib` directory and imported into the components that require it.

- Generic helper functions are inside the `utils` directory. In this project, the only function that is there is a `classNames` function, which is used to filter in / out specific classNames based on conditions.

# Deploying to Production

Whenever any update is made to the source code and pushed to the `main` branch, it is immediately deployed to vercel, which will build and deploy the website immediately. Therefore, if doing any development, it is better to work on a separate branch and then merge into the `main` branch only when the code is stable.

In addition, the `.env.local` keys need to be added to vercel directly through the project settings page. These are not pushed to the git repository, nor are read in by vercel.
