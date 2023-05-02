const save=()=>
{
    let email=document.getElementById("email").value;
    let pass=document.getElementById("password").value;
    localStorage.setItem(email,pass);
}