import router from "./Routes/index";
import app from "./configuration/app";
import ConnectMongo from "./configuration/dbConnect"
const uri:string='mongodb://localhost:27017/biblio'
const connect=new ConnectMongo(uri);


 connect.ConnectToBd().then(()=>{
   app.use('',router);
   connect.server(app,3000);
 }).catch((error:any)=>{
   console.log(error);
 })


