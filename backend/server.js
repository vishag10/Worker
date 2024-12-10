const http=require("http")
const fs=require("fs")
const url=require("url")
const querystring=require("querystring");
const {MongoClient, ObjectId}=require("mongodb");
const PORT=3002
const client=new MongoClient("mongodb://127.0.0.1:27017/")
const app=http.createServer(async(req,res)=>{

    const db=client.db("Worker")
    const collection=db.collection("WorkersData")
    const {pathname}=url.parse(req.url);
    console.log(pathname);

    if(pathname==="/"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../frontent/index.html"))
    } else if(pathname==="/css/index.css"){
        res.writeHead(200,{"Content-Type":"text/css"})
        res.end(fs.readFileSync("../frontent/css/index.css"))
    }else if(pathname==="/img/vecteezy_default-avatar-profile-icon-vector-in-flat-style_27708418.jpg"){
        res.writeHead(200,{"Content-Type":"text/png"})
        res.end(fs.readFileSync("../frontent/img/vecteezy_default-avatar-profile-icon-vector-in-flat-style_27708418.jpg"))
    }else if(pathname==="/img/workers.png"){
        res.writeHead(200,{"Content-Type":"text/png"})
        res.end(fs.readFileSync("../frontent/img/workers.png"))
    }else if(pathname==="/pages/reg.html"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../frontent/pages/reg.html"))
    } else if(pathname==="/css/reg.css"){
        res.writeHead(200,{"Content-Type":"text/css"})
        res.end(fs.readFileSync("../frontent/css/reg.css"))
    }else if(pathname==="/img/vecteezy_default-avatar-profile-icon-vector-in-flat-style_27708418.jpg"){
        res.writeHead(200,{"Content-Type":"text/png"})
        res.end(fs.readFileSync("../frontent/img/vecteezy_default-avatar-profile-icon-vector-in-flat-style_27708418.jpg"))
    }else if(pathname==="/img/8288032.jpg"){
        res.writeHead(200,{"Content-Type":"text/png"})
        res.end(fs.readFileSync("../frontent/img/8288032.jpg"))
    }else if(pathname==="/index.html"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../frontent/index.html"))
    }else if(pathname==="/pages/edit.html"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../frontent/pages/edit.html"))
    }else if(pathname==="/js/reg.js"){
        res.writeHead(200,{"Content-Type":"text/js"})
        res.end(fs.readFileSync("../frontent/js/reg.js"))
    }else if(pathname==="/js/index.js"){
        res.writeHead(200,{"Content-Type":"text/js"})
        res.end(fs.readFileSync("../frontent/js/index.js"))
    }


    if(pathname=="/submit"&&req.method=="POST"){
        let body="";
        req.on("data",(chunks)=>{
            body+=chunks.toString();
            console.log(body);
            
        })
        req.on("end",async()=>{
            const fromData=querystring.parse(body)
            console.log(fromData); 
            collection.insertOne(fromData).then(()=>{
                console.log("successfully inserted");

                
            })
            .catch((error)=>{
                console.log(error);
                
            })
        })
    }
    if(pathname=="/getworkers"&&req.method=="GET"){
        const data=await collection.find().toArray();
        console.log(data);
        const jsonData=JSON.stringify(data);
        res.writeHead(200, {"Content-Type": "text/json"});
        res.end(jsonData)
    }
    



}).listen(PORT,()=>{
    console.log("server created");
    
})
