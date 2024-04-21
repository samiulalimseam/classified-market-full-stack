/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#ffc800",
        
"secondary": "#463AA1",
        
"accent": "#149777",
        
"neutral": "#021431",
        
"base-100": "#FFFFFF",
        
"info": "#93E6FB",
        
"success": "#80CED1",
        
"warning": "#EFD8BD",
        
"error": "#E58B8B",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  
  plugins: [
    require("daisyui")
  ],
}
