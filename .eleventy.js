module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ './node_modules/@fontsource/orbitron/files/*.woff2': 'files' })
    // Return your Object options:
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};
