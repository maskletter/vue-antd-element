

module.exports = {
    publicPath: '/dist/',
    configureWebpack: {
        externals: {
            "echarts": "echarts",
            "cropperjs": "Cropper",
            "simplemde": "SimpleMDE"
        }
        
    },
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        },
      
    },
    lintOnSave: false
}