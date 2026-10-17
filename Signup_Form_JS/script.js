const hiddenPara = document.querySelectorAll("#hidden");
const spacing = document.querySelectorAll("#spacing");
const button = document.querySelector("button")
const input = document.querySelectorAll("input")





hiddenPara.forEach(function(elem){
    elem.style.display = "none"
    spacing.forEach(function(elem2){
     elem2.style.marginTop = "20px";
    })
})


input.forEach(function(elem){
const parent = elem.parentElement;
console.log(parent);
button.addEventListener("click", function(){
    if(elem.value === ""){
        parent.querySelector("p").style.display = "block"
        parent.querySelector("p").style.marginTop = "5px"
    }
    else{
         parent.querySelector("p").style.display = "none"
    }
})

})



