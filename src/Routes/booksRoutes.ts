import { findAll ,AddBook} from "../controller/bookController"

module.exports=(app:any)=>{
    app.get("/node/allBooks",findAll);
    app.post("/node/AddBook",AddBook);
}