let form = document.getElementById("form");

let fnameMsg = document.getElementById("fnameMsg");

let pinMsg = document.getElementById("PinMsg");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("submit clicked");
     userNameRange();

    
  });
  
let userNameRange = () => {
    let name= document.getElementById("fname").value;
    if(name.length < 6 ){
        fnameMsg.innerHTML = "UserName should be 6-8 character";

    }else{
        fnameMsg.innerHTML = "";
       isAlphanumeric();
    }

};


 const isAlphanumeric = () => {
    let pin = document.getElementById("Pin").value;
    let isAlpha = /^[a-zA-Z0-9]+$/.test(pin);
    if(isAlpha){
        pinMsg.innerHTML ="Pin Should be alpha numeric";

    }else{
        pinMsg.innerHTML = "";
    }
  }
