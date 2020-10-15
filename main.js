const home = document.querySelector(".home"),
      about = document.querySelector(".about"),
      project1st = document.querySelector(".project__content--1st"),
      project2nd = document.querySelector(".project__content--2nd"),
      project3rd = document.querySelector(".project__content--3rd")


window.addEventListener("scroll",()=>{
    let pageYOffset = window.pageYOffset + (screen.height/2);

    if( pageYOffset > home.offsetTop) {
        document.querySelector(".home__tit").classList.remove("hidden");
    }
    if( pageYOffset > about.offsetTop) {
        document.querySelector(".about__wrap").classList.remove("hidden");
    }
    if( pageYOffset > project1st.offsetTop) {
        document.querySelector(".project__content--1st").classList.remove("hidden");
    }
    if( pageYOffset > project2nd.offsetTop) {
        document.querySelector(".project__content--2nd").classList.remove("hidden");
    }
    if( pageYOffset > project3rd.offsetTop) {
        document.querySelector(".project__content--3rd").classList.remove("hidden");
    }
})