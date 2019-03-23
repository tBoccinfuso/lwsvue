// Below is an example to extend webpack so all our of css from the styles folder can be used without adding imports into components.

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/main.scss";
        `
      }
    }
  }
};
