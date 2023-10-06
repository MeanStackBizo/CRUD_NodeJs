import { findAll ,AddBook,getById,DeleteById,UpdateBYId} from "../controller/bookController"

module.exports=(app:any)=>{
    app.get("/node/allBooks",findAll);
    app.post("/node/AddBook",AddBook);
    app.get("/node/getById/:id",getById);
    app.delete("/node/DeleteById/:id",DeleteById);
    app.put("/node/UpdateBYId/:id",UpdateBYId);
}