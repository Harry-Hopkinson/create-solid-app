"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frameWorks = void 0;
const kolorist_1 = require("kolorist");
const { yellow, blue } = require("kolorist");
exports.frameWorks = [
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
        colour: kolorist_1.green,
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
        colour: kolorist_1.magenta,
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
