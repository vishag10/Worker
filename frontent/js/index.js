async function getWorker(){
    const res=await fetch('http://localhost:3002/getworkers')
    if(res.status==200){
        const workers=await res.json();
        let firstobject=workers[0]
        let jsonString=Object.keys(firstobject)[1];
        let parseData=JSON.parse(jsonString)
        console.log(parseData);
        
         let str1=``
          workers.map((worker)=>{
            
            console.log(worker.name);
            
            // str1 += `
            //     <div class="card">
            //     <div class="img"><img src="./img/vecteezy_default-avatar-profile-icon-vector-in-flat-style_27708418.jpg" alt=""></div>
            //     <div class="title"><center><h1> ${worker.name}</h1></center></div>
            //     <h4>job-title: ${worker.job}</h4>
            //     <h4>age: ${worker.age}</h4>
                
            //     <h4>city: ${worker.city}</h4>
            //     <h4>gender: ${worker.gender}</h4>
            //     <h4>Mob no: ${worker.phone}</h4>
            //     <h4>Email: ${worker.email}</h4>
            //     <center><button class="cardb" onclick="location.href = './pages/edit.html'">Edit</button> <button class="cardb">delete</button></center>
            // </div>
            // `
        })
        
        document.getElementById("container").innerHTML=str1
        
    }
}
getWorker()