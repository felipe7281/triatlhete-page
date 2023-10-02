module.exports = {
  plugins: [],
}

import('prettier-plugin-tailwindcss')
  .then((prettierPlugin) => {
    module.exports.plugins.push(prettierPlugin)
  })
  .catch((error) => {
    // Lida com erros de importação
    console.error(error)
  })
