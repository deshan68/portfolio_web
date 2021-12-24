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


// nav bar appear animation
//content appear animatio


function scrollAppear(){
    var navBar = document.querySelector('.nav-bar-curr');
    var logo = document.querySelector('.logo-curr');

    // about titles appear animation
    var aboutTitle = document.querySelector('.about-title');
    var subTitle = document.querySelector('.sub-title');

    // my service section title animation
    var msTitle = document.querySelector('.ms-title');
    var msSubTitle = document.querySelector('.ms-sub-title');

    //my service content items appear animation
    var item1 = document.querySelector('.item1');
    var item2 = document.querySelector('.item2');
    var item3 = document.querySelector('.item3');


    var dpImg = document.querySelector('.mydp');
    var txtContent = document.querySelector('.text-content');

    var about = document.querySelector('.about-main');
    var aboutPosition = about.getBoundingClientRect().top;

    var myService = document.querySelector('.my-service-main');
    var myServicetPosition = myService.getBoundingClientRect().top;

    var screenPosition = window.innerHeight / 1.2 ;
    

    if(aboutPosition < screenPosition){
        navBar.classList.add('nav-bar-change');
        logo.classList.add('logo-change');

        aboutTitle.classList.add('about-title-appear');
        subTitle.classList.add('sub-title-appear');


        dpImg.classList.add('mydp-appear');
        txtContent.classList.add('text-content-appear');

    }else{
        navBar.classList.remove('nav-bar-change');
        logo.classList.remove('logo-change');
    }

    if(myServicetPosition < screenPosition){

        msTitle.classList.add('ms-title-appear');
        msSubTitle.classList.add('ms-sub-title-appear');
        item1.classList.add('item1-appear');
        item2.classList.add('item2-appear');
        item3.classList.add('item3-appear');


    }
}
window.addEventListener('scroll',scrollAppear);

