function sendMail() {
 var params = {
name: document.getElementById("name").Value,
email: document.getElementById("email").Value,
message: document.getElementById("message").value, 
 }; 


const seviceID = "service_5ryrdmm";
const templeteID = "template_i6enwd8";

emailjs.send(seviceID,templeteID,params)
.then(
  res =>{
   document.getElementById("name").value = ""; 
   document.getElementById("email").value = ""; 
   document.getElementById("message").value = ""; 
   console.log(res);
   alert("you message sent successfully");
  })
.catch((er) => console.log(err));
}