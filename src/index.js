import React from 'react'
import ReactDOM from 'react-dom'


import Layout from '/src/WebComponents/Layout.js'


import jquery from './import-jquery.js'

console.dir(window.$)
const cadenaweblatoutsstring = (
    <Layout></Layout>
);


ReactDOM.render(cadenaweblatoutsstring,document.querySelector(".container .pages"));

//console.dir($)

