const exp = require("express");
const bp = require("body-parser");
const jwt = require("jsonwebtoken");
const path = require("path");

const app = exp();

const router = exp.Router();
app.use("/", router); 
app.use(exp.static(__dirname + '/HTML'));

router.use(bp.json());
router.use(bp.urlencoded({extended: true}));


router.get("/",function(req,res){
    res.sendFile(path.join(__dirname+"/HTML/Homepage.html"));
});

router.get("/login",function(req,res){
    res.sendFile(path.join(__dirname+"/HTML/Login.html"));
});

router.get("/search",function(req,res){
    res.sendFile(path.join(__dirname+"/HTML/Search.html"));
});

router.get("/about",function(req,res){
    res.sendFile(path.join(__dirname+"/HTML/AboutUs.html"));
});

router.get("/result",function(req,res){
    res.sendFile(path.join(__dirname+"/HTML/Result.html"));
});

router.get("/register",function(req,res){
    res.sendFile(path.join(__dirname+"/HTML/Register.html"));
});

router.get("/admin_user",function(req,res){
    res.sendFile(path.join(__dirname+"/HTML/Admin_User.html"));
});
router.get("/admin_product",function(req,res){
    res.sendFile(path.join(__dirname+"/HTML/Admin_Product.html"));
});

app.listen(3100, function(){
    console.log("Connect to port " + 3100);
});