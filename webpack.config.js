const path=require('path')
const webpack = require('webpack')

module.exports={
    mode: 'development', //실서바스:production
    devtool: 'eval', 

    resolve:{
        extensions:['.js','.jsx','.css']
    },

    entry:{
        app: ['./client']
    }, 

    module:{
        rules:[{
            test:/\.jsx?$/,
            loader:'babel-loader',
            options:{
                presets:[
                    ['@babel/preset-env',{
                        targets:{
                            browsers:['>2% in KR']
                        },
                        debug:true,
                    }],
                    '@babel/preset-react'
                ],
                plugins:[
                    '@babel/plugin-proposal-class-properties',
                ]
            }
        },
        //  {
        //     test: /\.css$/,
        //     use: ['style-loader', 'css-loader'],
        //   }
    ]
    }, 
    plugins:[
        new webpack.LoaderOptionsPlugin({debug:true})
    ],
    output:{
        path:path.join(__dirname,'dist'),
        filename:'app.js'
    }, 
    devServer:{
        historyApiFallback:true,
    }
}