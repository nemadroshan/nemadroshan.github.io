 function sendEmail() {
                   console.log('inside send email');                    
                   let msg = document.getElementById("msg").value;
                   let fromEmail = document.getElementById("email").value;
                   let name= document.getElementById("name").value;
                    
                   console.log('msg -->'+msg); 
	                   console.log('from'+fromEmail);                    
                   console.log('name'+name);                                       
                Email.send({
                    SecureToken : "f4c47540-f8b4-46fa-ab5b-e56221cc421d",
                    To: 'nemadroshan@gmail.com',
                    From: "nimis343@gmail.com",
                    Subject:"mesasage from "+name,
                    Body: msg+" from this email  "+fromEmail,          
                }).then(
                    message => alert("Message  sent successfully")
                );
            }