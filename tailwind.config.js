/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        colors:{
            'white': '#ffffff',
            'amp-blue': {
                DEFAULT: '#1e61f0',
                100: '#031233',
                200: '#062566',
                300: '#0a3798',
                400: '#0d49cb',
                500: '#1e61f0',
                600: '#4b80f3',
                700: '#78a0f6',
                800: '#a5c0f9',
                900: '#d2dffc'
            },
            'amp-dark-blue': {
                DEFAULT: '#0d1f91',
                100: '#03061d',
                200: '#050c3a',
                300: '#081257',
                400: '#0a1874',
                500: '#0d1f91',
                600: '#122cd2',
                700: '#3d54ee',
                800: '#7e8df4',
                900: '#bec6f9'
            },
            'amp-dark-teal': {
                DEFAULT: '#0f4f73',
                100: '#030f17',
                200: '#061f2d',
                300: '#092e44',
                400: '#0c3d5a',
                500: '#0f4f73',
                600: '#177bb5',
                700: '#34a4e5',
                800: '#78c2ed',
                900: '#bbe1f6'
            },
            'amp-red': {
                DEFAULT: '#f54f4f',
                100: '#3e0404',
                200: '#7b0707',
                300: '#b90b0b',
                400: '#f11414',
                500: '#f54f4f',
                600: '#f77474',
                700: '#f99797',
                800: '#fbbaba',
                900: '#fddcdc'
            },
            'amp-light-purple': {
                DEFAULT: '#c9c2f5',
                100: '#150c4b',
                200: '#291997',
                300: '#422bdc',
                400: '#8576e9',
                500: '#c9c2f5',
                600: '#d3cef7',
                700: '#dedaf9',
                800: '#e9e6fb',
                900: '#f4f3fd'
            },
            'amp-light-blue': {
                DEFAULT: '#c1e0fe',
                100: '#012d58',
                200: '#035ab1',
                300: '#1287fb',
                400: '#6ab4fd',
                500: '#c1e0fe',
                600: '#cfe7fe',
                700: '#dbedfe',
                800: '#e7f3ff',
                900: '#f3f9ff'
            },
            'amp-light-teal': {
                DEFAULT: '#91d9e3',
                100: '#0f363b',
                200: '#1f6c76',
                300: '#2ea2b2',
                400: '#56c5d4',
                500: '#91d9e3',
                600: '#a7e1e8',
                700: '#bde8ee',
                800: '#d3f0f4',
                900: '#e9f7f9'
            },
            'amp-pink': {
                DEFAULT: '#f5d9e1',
                100: '#491323',
                200: '#932745',
                300: '#ce486e',
                400: '#e291a8',
                500: '#f5d9e1',
                600: '#f7e2e8',
                700: '#f9e9ee',
                800: '#fbf0f4',
                900: '#fdf8f9'
            },
            'mountain-mist': {
                '50': '#f6f6f6',
                '100': '#e7e7e7',
                '200': '#d1d1d1',
                '300': '#b0b0b0',
                '400': '#949494',
                '500': '#6d6d6d',
                '600': '#5d5d5d',
                '700': '#4f4f4f',
                '800': '#454545',
                '900': '#3d3d3d',
                '950': '#262626',
            },
            
        },
        extend: {},
    },

    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
};
