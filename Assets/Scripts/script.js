function addedToCart(){
    alert("Item added to cart")
}


function validateForm(){
    let error = "";

    let firstName = document.getElementById('firstNameInput').value;
    console.log(firstName);
    if(firstName == ""){
        error += "<li>Enter first name</li>"
        alert("Please enter your first name");
    }

    let lastName = document.getElementById('lastNameInput').value;
    console.log(lastName);
    if(lastName == ""){
        error += "<li>Enter your last name</li>"
        alert("Please enter your last name");
    }

    let email = document.getElementById('emailInput').value;
    console.log(email);
    if(email == ""){
        error += "<li>Enter your email</li>"
        alert("Please enter your email");
    }

    let message = document.getElementById('messageInput').value;
    console.log(message);
    if(message == ""){
        error += "<li>Enter your message</li>"
        alert("Please enter your message");
    }

    //we have validation errors in our form
    if(error!=""){
        document.getElementById('errorList').innerHTML = error;
        return false;
    }
    else{
        //form is valid
        document.getElementById('errorList').innerHTML = "";
        return true;  
    }
}

function resetErrors(){
    document.getElementById('errorList').innerHTML = "";
}