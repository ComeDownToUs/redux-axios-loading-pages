module.exports = {
  "plugins": [
      "react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  },
  "env": {
      "es6":     true,
      "browser": true,
      "node":    true
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "rules": {
    "semi": [
      "error",
      "always"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "indent": [
      "warn",
      2,
      {SwitchCase: 1}
    ],
    "quotes": [
      "warn",
      "single"
    ],
    "no-unused-vars": [
      "warn"
    ],
    "no-console": [
      "warn"
    ],
    "max-lines": [
      // "warn": {
      //   "max": 200,
      //   "skipBlankLines": true
      // }
      "warn",
      200
    ],
    "max-depth": [
      "warn",
      5
    ],
    "max-len": [
      // "warn": {
      //   "code": 120,
      //   "ignoreUrls": true,
      //   "ignoreTrailingComments": true
      // }
      "warn",
      120
    ],
    "react/prop-types": [
      2,
      { ignore: ['children'] }
    ]
  }
}

