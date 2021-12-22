const text = ['YouTuber', "Developer", "Blogger", "Designer", 'Freelancer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    
    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector('.typing').textContent = letter;
    if(letter.length == currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 400);

}());


// nav bar animation
function scrollAppear(){
    var navBar = document.querySelector('.nav-bar-curr');
    var logo = document.querySelector('.logo-curr');

    var about = document.querySelector('.about');
    var aboutPosition = about.getBoundingClientRect().top;

    var screenPosition = window.innerHeight / 1.3 ;
    console.log(screenPosition);
    console.log(aboutPosition);


    if(aboutPosition < screenPosition){
        navBar.classList.add('nav-bar-change');
        logo.classList.add('logo-change');

    }else{
        navBar.classList.remove('nav-bar-change');
        logo.classList.remove('logo-change');


    }
}
window.addEventListener('scroll',scrollAppear);