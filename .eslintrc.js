module.exports = {
  "plugins": [
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error"
  },
  "extends": ["airbnb-base", "prettier"]
};
/* package.json */
  ...
  
  "scripts": {
    "lint": "eslint 'src/**/*.js' --fix"
  }

  ...
  