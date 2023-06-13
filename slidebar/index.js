// const slide=document.querySelectorAll('.slide');
// const slider=document.querySelector('.slider');

// // slider.style.transform='scale(0.5) translateX(-800PX)';

// // slide.forEach((s,i)=>s.style.transform=`translateX(${100*i}%)`);

// const btnRight=document.querySelector('.btn-right')
// const btnLeft=document.querySelector('.btn-left');

// let curSlide=0;
// let maxSlide=slide.length;


// function nextSlide(){
//     if(curSlide===maxSlide-1){
//         curSlide=0;
//     }
//     else{
//         curSlide++;
//     }
//     goToSlide(curSlide)
// }

// function previousSlide(){
//     if(curSlide===0){
//         curSlide=maxSlide-1;
//     }
//    else{curSlide--}
    
//     goToSlide(curSlide)
// }

// btnRight.addEventListener('click',nextSlide)
// btnLeft.addEventListener('click',previousSlide)


// function goToSlide(curSlide){
//     slide.forEach((s,i)=>s.style.transform=`translateX(${100*(i-curSlide)}%)`)

// }

// goToSlide(0)


const slider=document.querySelector('.slider');
const slides=document.querySelectorAll('.slide');
const btnRight=document.querySelector('.btn-right');
const btnLeft=document.querySelector('.btn-left')

let curSlide=0;
let maxSlide=slides.length;
 

function goToSlide(curSlide){
    slides.forEach((s,i)=>s.style.transform=`translateX(${100*(i-curSlide)}%)`)

}
goToSlide(0)
function nextSlide(){
    if(curSlide===maxSlide-1){
        curSlide=0;
    }
    else{
        curSlide++;
    }

goToSlide(curSlide)
}

function prevSlide(){
    if(curSlide===0){
        curSlide=maxSlide-1
    }
    else{
        curSlide--
    }
goToSlide(curSlide)
}

btnRight.addEventListener('click',nextSlide);
btnLeft.addEventListener('click',prevSlide)
