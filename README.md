This repo is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with a version of 13.5. The primary language for this repo is Typescript. Also, a set of linting rules are injected in addition to pre-configured linting support of NextJS. (You can observe the rules inside `.eslintrc.json` file in the root directory.) In case of need, please do not hesitate to update existing rule(s) or remove/add rule(s) to further improve the ruleset.

Apart from linting, a demo application with Redux Toolkit (RTK) is also embedded so that all the Redux store setup boilerplate code is already available for use. Note that the folder structure and file name convention is NOT a must and it might also be updated based on personal preference. However, if you are like me using this kind of folder structure unlike the one suggested by [RTK Official docs](https://redux-toolkit.js.org/tutorials/typescript), directly go with it!

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
