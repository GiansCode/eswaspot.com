module.exports = {
    purge: {
        content: [
            './*.html',
        ],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Rubik']
            },
            colors: {
                brand: {
                    primary: '#22B4EB',
                    dark: '#01052D'
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}