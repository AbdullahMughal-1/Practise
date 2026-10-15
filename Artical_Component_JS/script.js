const share = document.querySelector(".share")
const sharesection = document.querySelector(".sharesection")
const profile = document.querySelector(".profile")
const mobileprofile = document.querySelector(".profilemobile")
const sharemobile = document.querySelector(".sharemobile")


share.addEventListener("click" , function(){
    if (window.innerWidth >= 600) {
    if(sharesection.style.display === "flex"){
        sharesection.style.display = "none"
    }else{
         sharesection.style.display = "flex"
    }
}
})

share.addEventListener("click" ,function(){
    if(window.innerWidth <= 600){
        if(profile.style.display === "flex"){
        profile.style.display = "none"
        mobileprofile.style.display="flex"
    }else{
        profile.style.display = "flex"
        mobileprofile.style.display="none"
    }
    }
} )

sharemobile.addEventListener("click" ,function(){
    if(window.innerWidth <= 600){
        if(profile.style.display === "flex"){
        profile.style.display = "none"
        mobileprofile.style.display="flex"
    }else{
        profile.style.display = "flex"
        mobileprofile.style.display="none"
    }
    }
} )
