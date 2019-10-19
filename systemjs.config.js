   
SystemJS.config({
    baseURL: './',
    defaultExtension: 'js',
    babelOptions:{
        stage1:true,
        modularRuntime: true
        },
    map:{
        jquery:"node_modules/jquery/dist/jquery.min.js",
        react:'node_modules/react/umd/react.development.js',
        'react-dom':'node_modules/react-dom/umd/react-dom.development.js',
        css: 'node_modules/systemjs-plugin-css/css.js',
        text: 'src/text.js',
        'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build':'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
        
    },
    packages:{
       
    },
    meta: {
        '*.css': { loader: 'css' },
        'src/templ/*.html': {loader: 'text'},     
        'plugin-babel':{
          
        },
        'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js':{
           
        }
    }
    ,transpiler: 'plugin-babel'
    })
    
    SystemJS.import('src/index-bis.js');
    