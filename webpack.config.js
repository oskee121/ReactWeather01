module.exports = {
    entry: './src/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'src/components/Main.jsx',
            Nav: 'src/components/Nav.jsx',
            Weather: 'src/components/Weather.jsx',
            WeatherForm: 'src/components/WeatherForm.jsx',
            WeatherMessage: 'src/components/WeatherMessage.jsx',
            About: 'src/components/About.jsx',
            Examples: 'src/components/Examples.jsx',
            openWeathermap: 'src/api/openWeathermap.jsx',
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    },
    devtool: 'inline-source-map'
};
