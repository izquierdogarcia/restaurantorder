const yourname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const btn = document.getElementById("send");
const result = document.querySelector(".result");



btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validate();
    if (error[0]) {
        result.innerHTML = error[1];
        result.classList.add("red");
    } else {
        result.classList.add("green");
        result.classList.remove("red");
        result.innerHTML = "Thank you. You will receive a confirmation very soon.";        
    }

})

const validate = ()=>{
    let error = [];
    if (yourname.value.length < 4 || yourname.value.length > 40) {
        error[0] = true;
        error[1] = "Name more than 3 characters and less than 40";
        return error;
    }
    else if(phone.value.length < 8) {
        error[0] = true;
        error[1] = "Number phone at least 8 numbers";
        return error;
    }
    error[0] = false;
    return false;
}