const plugin = require("tailwindcss/plugin")

module.exports = plugin(({ theme, matchUtilities }) => {
  // Criar utilitários dinâmicos para classes mk-*
  matchUtilities(
    {
      'mk': (value) => ({
        maskImage: value, // Usar o valor como máscara
      }),
    },
    {
      // Puxar os valores do backgroundImage do tailwind.config.js
      values: theme('backgroundImage'),
      // Prefixo para classes, neste caso, "mk-"
      supportsNegativeValues: false,
    }
  )
})
