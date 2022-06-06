"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMPLATES = void 0;
const frameWorks_1 = require("./frameWorks");
exports.TEMPLATES = frameWorks_1.frameWorks
    .map((f) => {
    return (f.variants && f.variants.map((v) => v.name)) || [f.name];
})
    .reduce((a, b) => {
    return a.concat(b);
}, []);
