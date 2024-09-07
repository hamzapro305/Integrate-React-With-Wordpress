import typescript from "rollup-plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: "./src/index.tsx",
    output: {
        file: "./dist/bundle.js",
    },
    format: "life",
    plugins: [resolve(), typescript(), commonjs()],
};
