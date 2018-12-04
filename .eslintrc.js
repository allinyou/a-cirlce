module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'indent': [0, 2],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: false
    //   ignorePropertyModificationsFor: [
    //     'state', // for vuex state
    //     'acc', // for reduce accumulators
    //     'e' // for e.returnvalue
    //   ]
    }],
    'max-len': ["error", { "code": 400 }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'linebreak-style': ["off", "windows"],
    'no-trailing-spaces': [2, { "skipBlankLines": true }],
    'eqeqeq': ["error", "smart"], 
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
};
