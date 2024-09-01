"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pkgFromUserAgent = pkgFromUserAgent;
/**
 * @param {string | undefined} userAgent process.env.npm_config_user_agent
 * @returns object | undefined
 */
function pkgFromUserAgent(userAgent) {
    if (!userAgent) {
        return undefined;
    }
    const pkgSpec = userAgent.split(" ")[0];
    const pkgSpecArr = pkgSpec.split("/");
    return {
        name: pkgSpecArr[0],
        version: pkgSpecArr[1],
    };
}
