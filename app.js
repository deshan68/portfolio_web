const text = ['YouTuber', "Developer", "Blogger", "Designer", 'Freelancer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

var htmlVal=0;
var sqlVal = 0;
var cssVal =0 ; 
var jsVal  = 0 ;
var isFirst = true;

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

    //my skillsa title animation
    var skTitle = document.querySelector('.sk-title');
    var skSubTitle = document.querySelector('.sk-sub-title');

    //my skills content animation
    var skText = document.querySelector('.skills-text');


    var dpImg = document.querySelector('.mydp');
    var txtContent = document.querySelector('.text-content');

    var about = document.querySelector('.about-main');
    var aboutPosition = about.getBoundingClientRect().top;

    var myService = document.querySelector('.my-service-main');
    var myServicetPosition = myService.getBoundingClientRect().top;

    var mySkills = document.querySelector('.my-skills-main');
    var mySkillsPosition = mySkills.getBoundingClientRect().top;

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

    if(mySkillsPosition < screenPosition){
        skTitle.classList.add('sk-title-appear');
        skSubTitle.classList.add('sk-sub-title-appear');
        skText.classList.add('skills-text-appear');

        var htmlAnimi = document.querySelector('.Html');
        var cssAnimi = document.querySelector('.css');
        var jsAnimi = document.querySelector('.js');
        var sqlAnimi = document.querySelector('.sql');

        htmlAnimi.style.animation = 'value_bar_html 2s ease';
        cssAnimi.style.animation = 'value_bar_css 2s ease';
        jsAnimi.style.animation = 'value_bar_js 2s ease';
        sqlAnimi.style.animation = 'value_bar_sql 2s ease';


        // ---------------skils bars
        if(isFirst == true){
            (function htmlCount(){
            
                document.querySelector('.value-html').textContent = htmlVal + '%';
                htmlVal++;
                if(htmlVal <= 60){
                    setTimeout(htmlCount, 16.66666666666667 *2);      
                }
    
            }());
    
            (function cssCount(){
                
                document.querySelector('.value-css').textContent = cssVal + '%';
                cssVal++;
                if(cssVal <= 85){
                    setTimeout(cssCount, 11.76470588235294 *2);      
                }
    
            }());
    
            (function jsCount(){
                
                document.querySelector('.value-js').textContent = jsVal + '%';
                jsVal++;
                if(jsVal <= 45){
                    setTimeout(jsCount, 22.22222222222222 *2);      
                }
    
            }());
            (function sqlCount(){
                
                document.querySelector('.value-sql').textContent = sqlVal + '%';
                sqlVal++;
                if(sqlVal <= 90){
                    setTimeout(sqlCount,11.11111111111111 * 2);      
                }
    
            }());

            isFirst = false;
        }

        
    }
}
window.addEventListener('scroll',scrollAppear);

