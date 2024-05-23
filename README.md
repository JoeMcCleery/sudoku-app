# sudoku-app

Suduku web app and api built using next.js

## Project Design

### Requirements

1. Multi-page website
2. User interaction (buttons, input, etc)
3. Fetch data from an api
4. Animations
5. CSS library/framework
6. Use graphs to display data

### Specifications

- Api [3]
  - /api/generate - generate soduku puzzle
  - /api/user - get user data
- User page [1, 3, 6]
  - display bar graph of games completed over time
  - display list of games (completed and in-progress)
  - resume in-progress games
- Sudoku page [1, 2, 3]
  - soduku puzzle using html grid
  - input answers into grid cells
  - can only make legal moves
  - check for solution
  - save games to database
- Animated user interations [2, 4, 5]
  - button/input animations
  - graph animations
  - soduku solved animation

## Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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
