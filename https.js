const http =require('http');

const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
    res.end("Welcome to our home page")
    }

    if (req.url === '/about') {
        res.end("here is our short history")
    }

    res.end(`
    <h1>Opps!</h1>
    <p>We cant see the page ur looking for</p>
    <a href="/">Back home</a>
    `)

})
server.listen(5000);