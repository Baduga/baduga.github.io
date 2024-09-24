const  nav = document.querySelector('.nav');
const NavIcon = document.querySelector('.nav__icon') 
nav.addEventListener('click', function(){
    nav.classList.toggle('nav_active');
    NavIcon.classList.toggle('nav__icon_active');
})

const cards = document.querySelectorAll('.card');
for(const card of cards){
    card.addEventListener('click', ()=>{
        GetOutOfHere()
        card.classList.add('card_active')
    })
}
function GetOutOfHere(){
    for(const card of cards){
        card.classList.remove('card_active')
    }
}