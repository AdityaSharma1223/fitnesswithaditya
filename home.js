/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


const calculateform=document.getElementById('calculate-form'),
calculatecm=document.getElementById('calculate-cm'),
    calculatekg=document.getElementById('calculate-kg'),
    calculatemessage=document.getElementById('calculate-message')

    const calculatebmi=(e)=>{
        e.preventDefault()
        if(calculatecm.value=== '' || calculatekg.value=== ''){
            calculatemessage.classList.remove('color-green')
            calculatemessage.classList.add('color-red')

            calculatemessage.textContent='Fill in the height and weight 💀'
            setTimeout(()=>{
                calculatemessage.textContent=''
            },3000)
        }else{
            const cm=calculatecm.value/100,
            kg=calculatekg.value,
            bmi=Math.round(kg / (cm * cm))
            if(bmi<18.5){
                calculatemessage.classList.add('color-green')
                calculatemessage.textContent=`Your BMI is ${bmi} and you are Underweight: Consume more calories and focus on strength training. 😓`
            }
            else if(bmi<25){
                calculatemessage.classList.add('color-green')
                calculatemessage.textContent=`Your BMI is ${bmi} and you are Healthy: Maintain a balanced diet and regular exercise routine. ☺`
            }
            else{
                calculatemessage.classList.add('color-green')
                calculatemessage.textContent=`Your BMI is ${bmi} and you are Overweight: Focus on a calorie-controlled diet and cardiovascular exercises. 😞`
            }
            calculatecm.value=''
            calculatekg.value=''
            setTimeout(()=>{
                calculatemessage.textContent=''
            },4000)
        }
    }
    calculateform.addEventListener('submit',calculatebmi)

    const contactform = document.getElementById('contact-form'),
    contactmessage = document.getElementById('contact-message'),
    contactuser = document.getElementById('contact-user');

const sendemail = (e) => {
    e.preventDefault();
    if (contactuser.value === '') {
        contactmessage.classList.remove('color-green');
        contactmessage.classList.add('color-red');
        contactmessage.textContent = 'You must enter your email';
        setTimeout(()=>{
            contactmessage.textContent=''
        },3000);
    }else{
        emailjs.sendform('service_8ii265v','template_guf0dsp','#contact-form','VQaq6RG_bXgUd7BNm')
        .then(()=>{
            contactmessage.classList.add('color=green')
            contactmessage.textContent='Your registered succesfully'
            setTimeout(()=>{
                contactmessage.textContent=''
            },3000)
        },(error)=>{
            alert('oops ! something has failed...',error)
        })
        contactuser.value=''
    }
};

contactform.addEventListener('submit', sendemail);

// Initialize ScrollReveal
// const sr = ScrollReveal({
//     origin: 'top',       // Element's origin
//     distance: '60px',    // Distance from the origin
//     duration: 2000,      // Duration of the reveal animation
//     delay: 250           // Delay before the reveal
// });

// // Reveal the elements with class 'home__data'
// sr.reveal('.home__data, .footer__container, .footer__group');
// sr.reveal('.home__img',{delay:400,origin:'bottom'})
// sr.reveal('.logos__img, .program__card, .pricing__card',{interval: 100})
// sr.reveal('.choose__img, .calculate__content',{origin:'left'})
// sr.reveal('.choose__content, .calculate__img',{origin:'right'})

// Get the navbar element
// document.body.addEventListener('click', function() {
//     // Redirect to the login page
//     window.location.href = 'login.html'; // Replace 'login.html' with the actual URL of your login page
// })
