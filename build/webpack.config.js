var path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'src': path.resolve(__dirname, '../src'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },
    module : {
        rules: [
            {
                test:/\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}
