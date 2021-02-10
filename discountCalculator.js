const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extende:true}));


app.get("/",function(req,res){

    res.sendFile(__dirname+"/discountCalculator.html");

});

app.post("/",function(req,res){
    var result, num1, num2, num3;
    num1 = Number(req.body.n1);
    num2 = Number(req.body.n2);
    num3 = Number(req.body.n3);
    if (num3<100){
    result = (num3/100)*num2
    result = num2-result
    //console.log(req.body, result)
    //console.log(req.body);
    res.send("Your total amount for the product with the  productID "+num1 +" after discount is " +result);
    } else {
    console.error("Enter the correct discount percentage");
    res.send("Enter the correct discount percentage");
    }


});


app.listen(3000,function(){
    console.log("Server is running on port 3000 ");
});
