let fadein=document.querySelector('.content .con h1')
let blink=document.querySelector('.content .con i')
let li=document.querySelector('.social ul .fa-linkedin')
let fb=document.querySelector('.social ul .fa-facebook')
let ig=document.querySelector('.social ul .fa-instagram')
let yt=document.querySelector('.social ul .fa-youtube')
let link=document.querySelectorAll('.navbar .link li a ')
let service=document.querySelector('#services')
let home=document.querySelector('#home')
let html=document.querySelector('.right .html')
let css=document.querySelector('.right .css')
let js=document.querySelector('.right .js')
let php=document.querySelector('.right .php')


let text="Hi, I'm Sivakumar V  Web Developer"
let i=0;
function homeanim(){
    
    if(i==text.length-1){
        blink.style.display="none"
    }
    fadein.innerHTML+=text.charAt(i) 
    i++
    setTimeout(()=>{
        li.style.display="block"
    },7600)
    setTimeout(()=>{
        fb.style.display="block"
    },8000)
    setTimeout(()=>{
        ig.style.display="block"
    },7800)
    setTimeout(()=>{
        yt.style.display="block"
    },8200)
}
setInterval(homeanim,200)



link.forEach((btn)=>{
    btn.addEventListener('click',()=>{
       html.classList.remove('anim')
       css.classList.remove('anim1')
       js.classList.remove('anim2')
       php.classList.remove('anim3')

       service.classList.remove('serviceanim')

        if(btn.classList.contains('btn-skills')){
                     anim()
        }
        if(btn.classList.contains('btn-service')){
            
          
           
      
           serv()
        }
    })
})
function anim(){
    html.classList.add('anim')
    css.classList.add('anim1')
    js.classList.add('anim2')
    php.classList.add('anim3')
}
function serv(){
    service.classList.add('serviceanim')
}
anim()
serv()



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const id = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(id);

        if (targetElement) {
            const offset = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - offset;
            window.scrollTo({

                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
