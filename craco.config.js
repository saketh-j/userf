module.exports = {
    style: {
      postcss: {
        plugins: [
          require('postcss-import'),
          require('antd'),
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  };