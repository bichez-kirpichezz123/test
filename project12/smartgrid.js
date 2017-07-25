const gulp = require('gulp'),
    smartgrid = require('smart-grid'),
    settings = {
        columns: 24,
        offset: '10px',
        container: {
            maxWidth: '1575px',
            fields: '20px'
        },
        breakPoints: {
            lg: {
                maxWidth: '1500px',
                fields: '30px'
            },
            md: {
                maxWidth: '950px',
                fields: '20px'
            },
            sm: {
                maxWidth: '600px',
                fields: '15px'
            },
            xs: {
                maxWidth: '400px',
                fields: '10px'
            }
        },
        properties: [],
        oldSizeStyle: false,
    };

smartgrid('./', settings)