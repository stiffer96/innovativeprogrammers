

function rsaveLeads(){
	 		var name = document.getElementById('name').value;
          	var phone = document.getElementById('phone').value;
          	var email = document.getElementById('email').value;
          	var message = document.getElementById('message').value;
          	var terms = document.getElementById('terms').checked;
           
            	if(name=="" ){
            		alert("Please enter your full name");
            	}
            	else if(phone == ""){
            		alert("Please enter contact number");
            	}
            	else if(email == ""){
            		alert("Please enter correct email id");
            	}
            	else if(message == ""){
            		alert("Please enter message");
            	}
            	else if(terms == false){
            		alert("Please agree to terms and conditions !");
            	}
            	else{   
            		var http = new XMLHttpRequest();
  					var url="api/saveLeads.php"
  					var data = new  FormData();
  					data.append("full_name", name);
  					data.append("phone", phone);
  					data.append("email",email);
  					data.append("message",message);
  					

  					http.open("POST",url,true);

  					http.onreadystatechange = function(){	
  					if(http.readyState == 4 && http.status == 200){
  						var res = JSON.parse(this.responseText);
              			if(res.code){
              				//document.getElementById("rmsgSubmit").style.color = "green";
              				//document.getElementById("rmsgSubmit").innerHTML = "Your reuest submitted ! \n Our executive will connect with you shortly ."

                			//alert("Your reuest submitted ! \n Our executive will connect with you shortly .")

                      toastr.success(' Our executive will connect with you shortly .', 'Reuest submitted ! ', {timeOut: 10000});

                			document.getElementById("name").value = "";
  							document.getElementById("phone").value ="";
  							document.getElementById("email").value ="";
  							document.getElementById("message").value ="";
  							document.getElementById("terms").checked = false ;
  						}
  						else{
  							alert("Invalid Data !");
  							
  						}
  					}
  				};
  				http.send(data);
  			}
}

function csaveLeads(){
	 		var name = document.getElementById('cname').value;
          	var phone = document.getElementById('cphone').value;
          	var email = document.getElementById('cemail').value;
          	var message = document.getElementById('cmessage').value;
          	var terms = document.getElementById('cterms').checked;
           
            	if(name=="" ){
            		alert("Please enter your full name");
            	}
            	else if(phone == ""){
            		alert("Please enter contact number");
            	}
            	else if(email == ""){
            		alert("Please enter correct email id");
            	}
            	else if(message == ""){
            		alert("Please enter message");
            	}
            	else if(terms == false){
            		alert("Please agree to terms and conditions !");
            	}
            	else{   
            		var http = new XMLHttpRequest();
  					var url="api/saveLeads.php"
  					var data = new  FormData();
  					data.append("full_name", name);
  					data.append("phone", phone);
  					data.append("email",email);
  					data.append("message",message);
  					

  					http.open("POST",url,true);

  					http.onreadystatechange = function(){	
  					if(http.readyState == 4 && http.status == 200){
  						var res = JSON.parse(this.responseText);
              			if(res.code){
              				
                      toastr.success(' Our executive will connect with you shortly .', 'Reuest submitted ! ', {timeOut: 10000});
                			document.getElementById("cname").value = "";
  							document.getElementById("cphone").value ="";
  							document.getElementById("cemail").value ="";
  							document.getElementById("cmessage").value ="";
  							document.getElementById("cterms").checked = false ;
  						}
  						else{
  							alert("Invalid Data !");
  							
  						}
  					}
  				};
  				http.send(data);
  			}
}