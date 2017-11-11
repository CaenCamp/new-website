const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: path.resolve(__dirname, '../'),
            },
            {
                test: /\.yml$/,
                loader: 'json-loader!yaml-loader',
                include: path.resolve(__dirname, '../'),
            },
            {
                test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
                loader: 'url-loader?limit=10000',
            },
        ],
    },
};
