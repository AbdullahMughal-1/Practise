
let inputs = document.querySelectorAll("input")
let error = document.querySelector('error')

const form = document.querySelector('form').addEventListener('submit', (e)=>{
e.preventDefault()
console.log("Submitted")

    inputs.forEach(input=>{
        const parent = this.parent;
        console.log(parent)
        
        if(input.value.trim() == ""){
           if (error) {
                error.style.display = 'block'
            }
        }


        input.value = "";
    })


})






