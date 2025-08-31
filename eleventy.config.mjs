import pugPlugin from "@11ty/eleventy-plugin-pug";

export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory("dist");
    eleventyConfig.addPassthroughCopy({ './node_modules/@fontsource-variable/atkinson-hyperlegible-next/files/*.woff2': 'files' });
    eleventyConfig.addPassthroughCopy({ './node_modules/@fontsource-variable/atkinson-hyperlegible-mono/files/*.woff2': 'files' });
    eleventyConfig.addPlugin(pugPlugin);
};
