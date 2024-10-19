/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'bg-img': "url(./assets/nft_bg.png)"
        'bg-img': "url(./assets/bg_5.png)"
        // 'bg-img': "url(./assets/bg_img.jpg)"
      },
    },
  },
  plugins: [],
}

