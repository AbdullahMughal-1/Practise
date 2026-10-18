const button = document.querySelector(".notify")
const input = document.querySelector("#input")
const para = document.querySelector(".red")

button.addEventListener("click", function(){
    
    input.value.trim()
    if(input.value.endsWith("@gmail.com")){
     para.style.display = "none"
    }
    else{
        para.style.display = "block"
    }

})