
const expres=require("express");
var bodyParser = require("body-parser");  
const app=expres();
var router = expres.Router();
var not=require("./notification");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/',router);    

router.post("/api",not.api);

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>console.log('server Started'))