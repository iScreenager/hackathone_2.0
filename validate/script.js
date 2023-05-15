let form = document.getElementById("form");

let fnameMsg = document.getElementById("fnameMsg");
let pin = document.getElementById("Pin");
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


let str = pin.value;
 function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
  }

  if(msg != true){

    console.log("wrong");
  }else{
    console.log("right");
  }
