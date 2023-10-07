const UserController=require("../controller/UserController")

module.exports=(app:any)=>{
     app.post("/signup",UserController.signup);
     app.post("/login",UserController.login);
}  