async function getWorker(){
    const res=await fetch('http://localhost:3002/getworkers')
    if(res.status==200){
        const workers=await res.json();
        console.log(workers);
        let str1=``
        workers.map((worker)=>{
            console.log( worker.name);
            
           str1+=`
                
           ` 
        })
        

        
    }
}
getWorker()