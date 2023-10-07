import { findAll ,AddBook,getById,DeleteById,UpdateBYId} from "../controller/bookController"

module.exports=(router:any)=>{
    router.get("/allBooks",findAll);
    router.post("/AddBook",AddBook);
    router.get("/getById/:id",getById);
    router.delete("/DeleteById/:id",DeleteById);
    router.put("/UpdateBYId/:id",UpdateBYId);
}