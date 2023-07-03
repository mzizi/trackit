# TrackIt: A Fullstack Next.js 13 App Router, React, Tailwind, Prisma, MySQL

### Key Features:

- **Shadcn UI** for the taiwlwindcss theming and more
- **MySQL + PlanetScale** & **Prisma** as ORM
- **@Clerkjs** for Authentication.
- Multiple vendors(Stores) using a shared CMS like experience:
- Product management whose features include:
  - Create, update and delete products
  - Edit product details including uploading multiple images using **Cloudinary**
  - Create, update and delete categories
  - Create, update and delete filters such as "Color" and "Size", and then match them in the "Product" creation form.
  - Create, update and delete "Billboards" which are these big texts on top of the page.
  - Attach billboards to a single category, or use them  in standalone mode.
  - Search through all categories, products, sizes, colors, billboards with included pagination.
  - Control which products are "featured" so they show on the homepage
  - Order creation and management of all sales
  - See graphs of for total revenue and a nifty dashboard for all analytics
  - Stripe checkout & webhooks

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/rodgersgitau/trackit.git
```

### Install packages

```shell
pnpm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

### Connect to PlanetScale and Push Prisma
```shell
npx prisma generate
npx prisma db push
```


### Start the app

```shell
pnpm run dev
```

## Available commands

Running commands with pnpm `pnpm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
| `build`         | Builds app for production                |
| `preview`       | Startd a productions instance of the app |
