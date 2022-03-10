
const aliasOption = {
    root: [
        "./src",
    ],
    alias: {
        src: "./src",
        "@": "./src"
    },
};
module.exports = {
    plugins: [
        ["module-resolver", aliasOption]
    ],
};