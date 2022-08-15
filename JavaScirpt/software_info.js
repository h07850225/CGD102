$(function () {
    let divWidth = $('.pic').width()
    let imgCount = $('.pic').length

    for(let i = 0; i < imgCount; i++){
        $('.switch').append(`<div class='button' onclick='btn(this)'></div>`)
    }
    $('.button:first').addClass('clicked')
    $('.info').first().addClass('show')


    let index=0;
    let timer = setInterval(goNext,5000)

    $('.button').click(function(){
        
        
        index = $(this).index()
        clearInterval(timer)
        $('.wrap').animate({
            left: divWidth * index * -1
        })
        
        $(this).addClass('clicked')
        $('.button').not(this).removeClass('clicked')
        // console.log($(`.info:nth-chlid(${index+1})`));
        for(let i = 1; i <=3 ; i++){
            $(`.info:nth-child(${i})`).removeClass('show');
        }
        $(`.info:nth-child(${index+1})`).addClass('show')
      
    })



    function goNext(){
        index++;
        if(index % imgCount == 0){
            index = 0
        }
       
        $('.wrap').animate({
            left: divWidth * index *-1
        })
        $(`.button:nth-child(${index+1})`).addClass('clicked')
        $('.button').not(`.button:nth-child(${index+1})`).removeClass('clicked')
        for(let i = 1; i <=3 ; i++){
            $(`.info:nth-child(${i})`).removeClass('show');
        }
        $(`.info:nth-child(${index+1})`).addClass('show');
    }
});
















//JS版本(做不出來)
// window.addEventListener("load", function(){

//     let i = 0;
//     let width = document.querySelector('.pic').clientWidth;
//     let imgCount = document.querySelector('.pic').length;
//     let button = document.querySelectorAll(".button").length;
//     // DEMO輪轉
//     for(let i = 0;i < button ; i ++){
//         document.querySelectorAll(".switch .button")[i].addEventListener('click',choosen,false)
//     }
    
//     // setInterval
//     let index=0;
//     function choosen(){
//         let wrap = document.querySelector(".wrap");
//         i++;
//         index++;
//         console.log(index)
//         wrap.style.left = width * -index + 'px';
//         if(i==3){
//             i=0
//         }
//         if(index==3){
//             index=0
//         }
//         console.log(wrap.style.left)
//         // console.log(i)
//         document.querySelectorAll(`.info`)[i].style.display = 'block'
//         document.querySelectorAll(`.info`)[i-1].style.display = 'none'
//         document.querySelectorAll('.button')[i].classList.add('clicked')
//         document.querySelectorAll('.button')[i-1].classList.remove('clicked');
//     }
//     timerd = setInterval(function(){
//         let wrap = document.querySelector(".wrap");
//         i++;
//         wrap.style.left = width * -i + 'px';
//         wrap.style.transition="0.4s"
//         if(i==2){
//             i=0
//         }
//     },3000)
// })