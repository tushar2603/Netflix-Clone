let inputTouched = {
    email: false,
    password: false
}

const inputEmail = document.getElementById("inputEmail")
const inputPassword = document.getElementById("inputPassword")
const inputWrapperEmail = document.getElementById("input-wrapper-email")
const inputWrapperPassword = document.getElementById("input-wrapper-password")
const warningEmail = document.getElementById("warningEmail")
const warningPassword = document.getElementById("warningPassword")

const inputOnBlur = (ev) =>{
    if(inputTouched.email){
        if(!validateEmail(inputEmail.value) && !validatePhone(inputEmail.value)){
            warningEmail.style.display="block"
            inputEmail.style.borderBottom='2px solid #e87c03'
        }
        else{
            warningEmail.style.display="none"
            inputEmail.style.borderBottom="none"
        }
    }
    if(inputTouched.password){
        if(!(inputPassword.value.length >= 4 && inputPassword.value.length <= 60)){
            warningPassword.style.display="block"
            inputPassword.style.borderBottom='2px solid #e87c03'
        }
        else{
            warningPassword.style.display="none"
            inputPassword.style.borderBottom="none"
        }
    }
}

const inputOnFocus = (e) =>{
    inputTouched[e.name] = true;
}

const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validatePhone = email => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(email).toLowerCase());
}

const nav = document.getElementById('nav');
window.addEventListener('scroll',()=>{
    if(window.scrollY >= 100){
        nav.classList.add('nav_black')
    }else{
        nav.classList.remove('nav_black')
    }
})

const faqDiv = document.querySelector('.faq-list');
faqDiv.addEventListener('click', (event) => {
    let target = event.target;
    let content = event.target.parentElement.parentElement.nextElementSibling;
    if(event.target.className == "plus-icon"){
        collapseFAQ();
        target.src = "/img/cancel-icon.png";
        target.className = "cancel-icon";
        content.classList.add('show-faq-body');
    } else if(event.target.className == "cancel-icon"){
        target.src = "/img/plus-icon.png";
        target.className = "plus-icon";
        content.classList.remove('show-faq-body');
    }
});

function collapseFAQ(){
    faqDiv.querySelectorAll('.faq-body').forEach((faqItem) => {
        faqItem.classList.remove('show-faq-body');
        faqItem.previousElementSibling.querySelector('.faq-icon img').src = "/img/plus-icon.png";
    });
}

function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    trailer.classList.toggle('active');
}