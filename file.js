form=document.getElementById("form");
function show(){
    let email=form.elements["email"].value;
    let pass=form.elements["password"].value;
    if((email==="")&&(pass==="")){
        alert("Please fill the values")
    }
    else{
        alert("Login successfull");
        window.location.href="cafe.html";
    }
}