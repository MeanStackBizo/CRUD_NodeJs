const http=require("http")
const app=require("./app")

app.set('port',process.env.Port || 3000)

// const server=http.createServer((req,res)=>{
//     res.end("Hello talel")
// })
const server=http.createServer(app);

server.listen(3000);