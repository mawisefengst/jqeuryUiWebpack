const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin({
    filename: "css/webpackBundle.css"
});


module.exports = {
	entry: "./src/entry.js",
	output : {
		filename: "js/webpackBundle.js",
		path: __dirname + "/dist"
	},
	module:{
		rules:[
            {
              test: /\.html$/,
              use:'raw-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        query: {
                          name:'assets/[name].[ext]'
                        }
                      }
                    },
                    {
                      loader: 'image-webpack-loader',
                      options: {
                        query: {
                          mozjpeg: {
                            progressive: true,
                          },
                          gifsicle: {
                            interlaced: true,
                          },
                          optipng: {
                            optimizationLevel: 7,
                          }
                        }
                      }
                    }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                        use: [{
                            loader: "css-loader"
                        }],
                        fallback: "style-loader"
                     })
            }
		]
	},
    plugins: [
        extractCSS
    ],
    devServer:{
      contentBase: "./dist",
      inline:true
    }
}