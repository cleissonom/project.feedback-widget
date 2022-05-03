module.exports = {
   content: ["./src/**/*.tsx"],
   theme: {
      extend: {
         colors: {
            brand: "#8557e5",
            brandHover: "#996dff"
         },
         borderRadius: {
            md: "4px"
         }
      },
   },
   plugins: [
      require('@tailwindcss/forms'),
      require('tailwind-scrollbar'),
   ],
}