const UserController=require("../controller/UserController")

module.exports=(app:any)=>{
     app.post("/user/signup",UserController.signup);
     app.post("/user/login",UserController.login);
}  