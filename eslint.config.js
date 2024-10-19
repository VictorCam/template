import pluginVue from 'eslint-plugin-vue'
export default [
    ...pluginVue.configs['flat/recommended'], {
        rules: {
            'vue/no-unused-vars': 'error',
            'vue/html-indent': 'off',
            'vue/max-attributes-per-line': 'off',
            'vue/singleline-html-element-content-newline': 'off',
            'vue/multiline-html-element-content-newline': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/html-self-closing': 'off',
            'vue/mustache-interpolation-spacing': 'off',
            'vue/first-attribute-linebreak': 'off',
            'vue/no-template-shadow': 'off',
            'vue/no-undef-properties': 'error'
        }
    }
]