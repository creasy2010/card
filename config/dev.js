var moonConfig=require('../.moon.json');

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    __DEV__:JSON.stringify(true),
    __Config__:JSON.stringify({
      host:"https://programbff.s2btest.kstore.shop",
    }),
    __ApiMock__:JSON.stringify(moonConfig.api.mock.mockApi)
  },
  weapp: {},
  h5: {}
}
