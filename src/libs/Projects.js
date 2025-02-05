import { logos } from "./logos";

export const projects = {
  devgram: {
    title: "Devgram",
    description: [
      "A social networking twitter like web app. Users can **create** posts, **like** posts and **comment** on posts.",
      "User can visit any **user profile** by clicking at their name or avatar to view posts by them",
    ],
    images: "/project/Devgram/devgram.png",

    stack: [logos.react, logos.reactquery, logos.typescript, logos.javascript],
    links: {
      live: "dev-gram.vercel.app",
      github: "https://github.com/neernegi/DevGram",
    },
  },
  manlydapper: {
    title: "TheManlyDapper:E-commerce Shoes Platform",
    description: [
      "E-commerce platform enabling users to browse, purchase, and manage shoes products. Key features include",
      "- User management: view products, **add to cart**, checkout.",
      "- Admin/seller management: **upload products**, **update product** details",
      "**Technical Stack:**",
      "- MongoDB",
      "- EJS (Embedded JavaScript)",
      "- Express.js",
      "- Node.js",
    ],
    media: "/project/TheManlyDapper/manlydapper.mp4",

    stack: [
      logos.html,
      logos.nodejs,
      logos.expressjs,
      logos.ejs,
      logos.mongodb,
      logos.css,
    ],
    links: {
      github: "https://github.com/neernegi/TheManlyDapper",
    },
  },
  tictactoe: {
    title: "Tic-Tac-Toe",
    description: [
      "A simple, interactive Tic-Tac-Toe game built with **HTML**, **CSS**, and **JavaScript**, featuring:",
      "**Two-Player Mode** – Players take turns marking X and O on a 3x3 grid.",
      "Winning Detection – Automatically detects **winning conditions** and announces the winner.",
      "Draw Condition – Displays a **draw message** when the grid is full and no player wins.",
    ],
    images: "/project/TicTacToe/tictactoe.png",

    stack: [logos.javascript, logos.html, logos.css],
    links: {
      live: "tic-tac-toe-mu-hazel.vercel.app",
      github: "https://github.com/neernegi/Tic-tac-toe",
    },
  },
  fashioncart: {
    title: "TheFashionCart",
    description: [
      "An e-commerce platform built with **TypeScript**, Material UI, React.js, **React-Redux**, Node.js, and MongoDB Atlas.",
      "**Key Features**",
      " – View and buy products with ease.",
      "– Add and manage products in the **cart**.",
      " – Smooth checkout and **payment process**.",
      "Login and sign-up functionality.",
      "– Managed with **Mongoose** for database interactions.",
    ],

    media: "/project/TheFashionCart/fashioncart.mp4",
    stack: [
      logos.react,
      logos.typescript,
      logos.redux,
      logos.nodejs,
      logos.mongodb,
      logos.expressjs,
    ],
    links: {
      github: "https://github.com/neernegi/TheFashionCart",
    },
  },
  todo: {
    title: "TODO",
    description: [
      "A task management app built with Node.js, EJS, JavaScript, Express, Mongoose, and CSS. Features include:",
      "**Key Features**:",
      "- **Create**, **edit**, and **delete** Todo items",
      "- Mark Todo items as complete using **checkboxes**",
    ],
    media: "/project/todo/todo.mp4",
    stack: [logos.nodejs, logos.html, logos.ejs, logos.mongodb, logos.css],
    links: {
      live: "todoo-2q8f.onrender.com",
      github: "https://github.com/neernegi/todoo",
    },
  },
};
