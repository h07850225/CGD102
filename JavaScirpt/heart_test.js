$(function(){
    let index=0
    index=$(this).index()+2
    $(".next").click(function(){
     
        index++;
        console.log(index)
      
        $(`.question:nth-child(${index})`).css({
            display:"block"
        }).siblings().hide()
        console.log($('.answer').selectedIndex)
    })

    $(".back").click(function(){
        index--;
       console.log(index)
        $(`.question:nth-child(${index})`).css({
            display:"block"
        }).siblings().hide()
    })

    $('.see_result').click(result)

    function result(){
        $('.end_section').css({
            display:'block'
        })

        if($(".answer").val()=="1"){
            $('.appropriate').find("p").text("大哭一場")
        }
    }
    document.querySelector('.end_cancel').addEventListener('click',cancelEnd,false)

    function cancelEnd(){
        document.querySelector('.end_section').style.display ='none'
    }

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




















