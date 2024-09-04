
function emailSend(){

   var userName = document.getElementById('name').value;
   var phone = document.getElementById('phone').value;
   var email = document.getElementById('email').value;

   var messageBody = "Name " + userName +
   "<br/> Phone " + phone +
   "<br/> Email " + email;
   Email.send({
   Host : "smtp.elasticemail.com",
   Username : "pthangaganesh@gmail.com",
   Password : "DD3A6D0C48782AB9CAFB2F086A22C9B1CA08",
   To : 'thangag555@gmail.com',
   From : "pthangaganesh@gmail.com",
   Subject : "This is the subject",
   Body : messageBody
}).then(
 message => {
     if(message=='OK'){
         swal("Error", "You clicked the button!", "error");

     }
     else{
        swal("Secussful", "You clicked the button!", "success");
    }
 }
);
}


