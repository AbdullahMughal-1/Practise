const toggle = document.querySelector("#themeToggle");
const body = document.querySelector('body')

    toggle.addEventListener("click", () => {

        
        if( toggle.classList.add("active")){
            body.style.backgroundColor = 'black'
        }else if(toggle.classList.remove("active")){
            body.style.backgroundColor = 'white'
        }

        

    });

    