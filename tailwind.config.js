/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}", 
        "./components/**/*.{js,jsx,ts,tsx}",
        "./views/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-light" : "#334767",
                "primary" : "#0C213D",
                "primary-dark" : "#051326",
                "secondary" : "#FD7500",
            }
        },
    },
    plugins: [],
}

