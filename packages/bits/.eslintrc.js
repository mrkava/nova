module.exports = {
    extends: ["./../../.eslintrc.js"],
    overrides: [
        {
            files: ["*.ts"],
            parserOptions: {
                createDefaultProgram: true,
                projectService: true,
                tsconfigRootDir: __dirname,
            },
            settings: {
                "import/parsers": {
                    "@typescript-eslint/parser": [".ts", ".html"],
                },
                "import/resolver": {
                    typescript: {
                        project: ["tsconfig.lib.json"],
                    },
                },
            },
        },
        {
            files: ["*.spec.ts"],
            parserOptions: {
                createDefaultProgram: true,
                projectService: true,
                tsconfigRootDir: __dirname,
            },
        },
    ],
};
