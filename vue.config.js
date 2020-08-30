

module.exports = {
    publicPath: './',
    configureWebpack: {
        externals: {
            "echarts": "echarts",
            "cropperjs": "Cropper",
            "simplemde": "SimpleMDE"
        },
        // chainWebpack: config => {

        // }
    },
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        },
        disableHostCheck: true
    },
    lintOnSave: false
}