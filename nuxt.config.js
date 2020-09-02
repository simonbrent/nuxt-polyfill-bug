export default {
  build: {
    corejs: 3,

    // babel: {
    //   presets: [
    //     [ '@nuxt/babel-preset-app', {
    //       corejs  : { version: 3 },
    //       debug   : true, // envName === 'client',
    //       // targets : envName === 'client' ? { ie: 11 } : { node: 'current' },
    //     }],
    //   ],
    // },
  },

  server: {
    host: '0.0.0.0',
    port: 8001,
  },
}
