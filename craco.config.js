/* craco.config.js */
const CracoLessPlugin = require('craco-less');

const path = require('path');


module.exports = {
    reactScriptsVersion: 'react-scripts' /* (default value) */,
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            // '@components': path.resolve(__dirname, 'src/components'),
            // '@pages': path.resolve(__dirname, 'src/pages'),
            // '@utils': path.resolve(__dirname, 'src/utils')
        },
        configure: {
            module: {
                rules: [
                    {
                        test: /\.(png|jp?eg|gif)$/i,
                        type: 'asset',
                        generator: {
                            filename: 'images/[name][ext]',
                        },
                        parser: {
                            dataUrlCondition: {
                                maxSize: 10 * 1024,
                            },
                        },
                    },
                ],
            },
        },
        configure: config => {
            config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
            return config;
        },
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        // modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    devServer: {
    },
};
