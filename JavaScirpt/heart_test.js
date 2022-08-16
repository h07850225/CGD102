$(function(){
    $('.next').click(function(){
        index = $(this).index();
        console.log(index)
        index++;
        console.log(index)
        for(let i = 0 ; i <=4 ; i++){
            $(`.question:nth-child(${i+1})`).css({
                display : 'block'
            })
        }
        $(`.question:nth-child(${index+1})`).css({
            display : 'block'
        })
    })
})


























// js寫不出來== 

// window.addEventListener("load", function(){
//     let column =document.querySelectorAll(`.question`).length;

//     for(let i = 0 ; i < 3  ;i++){
//         console.log(document.querySelectorAll('.next')[i])
//         document.querySelectorAll('.next')[i].onclick = function(){
//         for(let j = 1 ; j < column;j++){
//             console.log(document.querySelectorAll(`.question`)[j])
//         document.querySelectorAll(`.question`)[j].style.display = 'none';
//         document.querySelectorAll(`.question`)[j+1].style.display = 'block';
//         }
//         }
//     }
    
// })
    // function go_next(e){
    //     document.querySelectorAll(`.question`)[i].style.display = 'block';
    //     document.querySelectorAll(`.question`)[i-1].style.display = 'none';
    // }




















