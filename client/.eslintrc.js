module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',  // Recommended config for Vue 3
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',  // Use modules for imports/exports
  },
  globals: {
    defineProps: 'readonly',  // Declare defineProps as a global function
    defineEmits: 'readonly'   // Declare defineEmits as a global function
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // Add any other custom rules you may have
  }
};