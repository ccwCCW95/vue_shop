/*
 * @Author: Changwei Cao
 * @Date: 2023-01-04 09:15:10
 * @LastEditors: Changwei Cao
 * @LastEditTime: 2023-01-06 12:09:19
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0
  }
}
