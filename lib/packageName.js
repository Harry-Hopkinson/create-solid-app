"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPackageName = isValidPackageName;
exports.toValidPackageName = toValidPackageName;
function isValidPackageName(projectName) {
    return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(projectName);
}
function toValidPackageName(projectName) {
    return projectName
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/^[._]/, "")
        .replace(/[^a-z0-9-~]+/g, "-");
}
