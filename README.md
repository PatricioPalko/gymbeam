# GymBeam Case Study

GymBeam Case Study project created by Patrik Palko.

![Laptop mockup](https://github.com/PatricioPalko/gymbeam/blob/main/public/media/laptop_mockup.jpg)

![Mobile mockup](https://github.com/PatricioPalko/gymbeam/blob/main/public/media/mobile_mockup.jpg)

![Laptop screenshot](https://github.com/PatricioPalko/gymbeam/blob/main/public/media/laptop_screenshot.png)

![Mobile screenshot](https://github.com/PatricioPalko/gymbeam/blob/main/public/media/mobile_screenshot.png)

## Getting Started

My goal was to build a GymBeam Case Study. If you haven't seen it up until now, now would be a good time to go check it out :)

### Installing

Clone this repository to your computer.

```
git clone https://github.com/PatricioPalko/gymbeam.git
```

Run the installation of packages:

```bash
npm install
# or
npm i
```

Create .env file on the root of the project and paste there:

```
DATABASE_URL="file:./data/dev.db"
AUTH_TRUST_HOST=true
```

Then run command which generates the prisma:

```
npm run prisma:generate
```

Finally, run the development server:

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

## Sign in via Google OAuth

To use Google OAuth authentication, you need to create your own OAuth credentials:

- Go to the Google Cloud Console.
- Create a new project (or use an existing one).
- Navigate to APIs & Services → Credentials.
- Click "Create Credentials" → "OAuth 2.0 Client ID".
- Set the redirect URI to match your development or production URL (e.g., http://localhost:3000/api/auth/callback/google).
- After creation, copy the Client ID and Client Secret.

Then add these credentials to .evn file:

```
GOOGLE_CLIENT_ID=your-client-id-here
GOOGLE_CLIENT_SECRET=your-client-secret-here
```

## Built With

- [NextJS](https://nextjs.org/) - The React Framework for the Web
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [React](https://react.dev/) - The library for web and native user interfaces
- [tailwindcss](https://tailwindcss.com/) - A utility-first CSS framework
- **LOVE** - Enthusiasm for web developing and graphic design

## Authors

- **Patrik Palko** - [patrikpalko.com](https://patrikpalko.com/)
