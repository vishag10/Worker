

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("hai");
    
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const city = document.getElementById("city").value;
    const job = document.getElementById("job-title").value;
    const phone = document.getElementById("phone").value; 

    const email = document.getElementById("email").value;



   console.log(name,age,gender, city, job, phone, email);
   fetch("http://localhost:3002/submit",{
    method:"POST",
    headers:{"Content-Type": "text/json"},
    body: JSON.stringify({name,age,gender,city,job,phone,email})
   })

})