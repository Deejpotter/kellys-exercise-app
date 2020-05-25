let http = require("http")

let ourApp = http.createServer(function(req, res) {
    if (req.url == "/") {
        res.end("Hello, I did it")
    }
    
    if (req.url == "/about") {
        res.end("This is an about page")
    }

    res.end("No page here")
})

ourApp.listen(3000)