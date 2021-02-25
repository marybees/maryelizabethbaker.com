const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                    modifyVars: {
                        '@text-color': '#202020',
                        '@primary-color': '#9B8871',
                        '@font-family': 'Questrial',
                    },
                    javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};