import { green, magenta } from "kolorist";

const { yellow, blue } = require("kolorist");

export const frameWorks = [
  {
    name: "vanilla",
    colour: yellow,
    variants: [
      {
        name: "vanilla",
        display: "JavaScript",
        colour: yellow,
      },
      {
        name: "vanilla-ts",
        display: "TypeScript",
        colour: blue,
      },
    ],
  },
  {
    name: "vitest",
    colour: green,
    variants: [
      {
        name: "js-vitest",
        display: "JavaScript",
        colour: yellow,
      },
      {
        name: "ts-vitest",
        display: "TypeScript",
        colour: blue,
      },
    ],
  },
  {
    name: "bootstrap",
    colour: magenta,
    variants: [
      {
        name: "js-bootstrap",
        display: "JavaScript",
        colour: yellow,
      },
      {
        name: "ts-bootstrap",
        display: "TypeScript",
        colour: blue,
      },
    ],
  },
];
