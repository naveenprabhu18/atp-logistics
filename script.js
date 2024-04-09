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
        _message => {
            // Once email is sent, navigate to home page and show alert
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000); 
            alert("Your Enquiry has been sent");
        }
    ).catch(
        error => {
            console.error('Error sending email:', error);
            // In case of error, display error message and stay on the current page
            alert("Oops! Something went wrong. Your enquiry could not be sent.");
        }
    );


}
form.addEventListener("submit",(e)=> {
    e.preventDefault();
    sendEmail();

})