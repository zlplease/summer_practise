const Vue = require('vue');
const fs = require('fs')
const server = require('express')();
const VueServerRenderer = require('vue-server-renderer');

server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: '<div>The Visted URL is :{{url}}</div>'
    })
    
    const template = fs.readFileSync('./index.html', 'utf-8')

    const renderer = VueServerRenderer.createRenderer({
        template
    })

    const context = {
        title: 'Vue SSR',
        metas: `
            <meta name="keyword" content="vue,ssr">
            <meta name="description" content="vue ssr demo">
        `
    }

    renderer.renderToString(app, context, (err, html) => {
        console.log(html)
        if (err) {
            res.status(500).end('Internal Server Error!')
        }
        res.end(html)
    })
})

server.listen(8080, () => {
    console.log('hi, 8080')
})
