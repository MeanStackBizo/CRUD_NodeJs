const http=require("http")

const server=http.createServer((req,res)=>{
    res.end("Hello Bizo")
})

server.listen(3000);