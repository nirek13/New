module.exports = {
    module: {
        rules: [
            {
                test: /\.csv$/,
                use: 'csv-loader',
                options: {
                    // You can add any specific options here if needed
                    dynamicTyping: true,
                    header: true,
                },
            },
        ],
    },
};
