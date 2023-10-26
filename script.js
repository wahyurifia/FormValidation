/*
function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com", //gmail
        Username : "wahyurizki927@gmail.com",
        Password : "123kambing123",
        To : 'wahyurizki927@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value 
        + "<br> Email: " + document.getElementById("email").value 
        + "<br> Phone no: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Succesfully")
    );
}; */

// 8883d4b8-e8fd-415f-a1c3-7b2cdeb5510f
function sendEmail() {
    Email.send({
        SecureToken : "88d2a31b-d71b-4648-8688-f3b4bf49267e",
        To : 'wahyu120ajah@gmail.com',
        From : "wahyu120ajah@gmail.com",
        Subject : "wahyu@test.com",
        Body : "Name: " + document.getElementById("name").value 
        + "<br> Email: " + document.getElementById("email").value 
        + "<br> Phone no: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}