const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    future: 'all',
    purge: ['./src/**/*.html', './src/**/*.md'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {},
    plugins: [],
}