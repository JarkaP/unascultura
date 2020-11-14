const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    future: 'all',
    purge: ['./src/**/*.html', './src/**/*.md'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['OPTIMA CE', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                base: ['18px', '24px'],
            },
        },
    },
    variants: {},
    plugins: [],
}
