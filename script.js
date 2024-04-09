const form=document.querySelector("form");
const names=document.getElementById("name");
const email=document.getElementById("email");
const message=document.getElementById("message")
function sendEmail(){
    const bodyMessage=`full name:${names.value}
    <br> Email:${email.value} <br> Mesage:${message.value}`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "naveenviki13@gmail.com",
        Password : "C75BE1ACB2D86D466287618E748BDB0B267F",
        To : 'paulrajnaveen13@gmail.com',
        From : "naveenviki13@gmail.com",
        Subject : "New Enquiry",
        Body : bodyMessage
    }).then(
      message => alert("Your Enquiry has sent")
    );

}
form.addEventListener("submit",(e)=> {
    e.preventDefault();
    sendEmail();

})