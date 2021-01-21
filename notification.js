const express=require("express");

const fetch=require("node-fetch");

const router=express.Router();



exports.api =async function (req,res){
    // var tok=req.body.to;
    var name=req.body;
    console.log(name);

var notiifctaion={
    "title":"Hello User",
    "text":'Subtitle'
}

// var tok=req.body.to;
var tokens = [req.body.token];


var notificatio_body={
    'notification':notiifctaion,
    'registration_ids':tokens,


}
    fetch('https://fcm.googleapis.com/fcm/send',{
        'method':'POST',
        'headers':{
            'Authorization':'key='+'AAAA5WdAXhQ:APA91bGhaK0vpSJ5RBZ8eAt_rfvcSNbi4xVjatqL_PkmAB_hLYdFRvuJEOZyaeLKSz20n6RWO6DajZ0kVGhRZQ1eD1-x_6SsVNVc6w2EKX6ju75YbsagOL6aretBpewpmzjbypW0nIBK',
            'Content-Type':"application/json"
        },
        'body':JSON.stringify(notificatio_body)
    }).then(()=>
    res.status(200).send('Notificaion Send')
    
    ).catch((err)=>
    res.status.send('Something Went Wrong')
    )
}