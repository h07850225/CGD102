function $id(id){  //$id("btnLeft")
    return document.getElementById(id);  //document.getElementById("btnLeft")
}


window.addEventListener("load", function(){

    let wrap = document.querySelector(".soft_info_wrap");
    let i = 0;
    let width = window.innerWidth;
    //----------left_button.onclick
    // DEMO輪轉
    $id("left_button").onclick = function(){
        i--;
        if(width <= 767){
            wrap.style.left= -158 * i + 'px'
        }else if(width >=768 && width < 1023){
            wrap.style.left= -305 * i + 'px'
        }else{
            wrap.style.left= -392 * i + 'px'
        }

        // 介紹卡片切換
        document.querySelectorAll(`.soft_info_card`)[i].style.display = 'block'
        document.querySelectorAll(`.soft_info_card`)[i+1].style.display = 'none'

        // console.log(wrap.style.left)

        // 防止超出畫面
        if(i == 0){
            $id('left_button').disabled = true;
        }
        $id('right_button').disabled = false;
    }
    //----------right_button.onclick
    // DEMO輪轉
    $id("right_button").onclick = function(){
        i++;
        if(width <= 767){
            wrap.style.left= -158 * i + 'px'
        }else if(width >=768 && width < 1023){
            wrap.style.left= -305 * i + 'px'
        }else{
            wrap.style.left= -392 * i + 'px'
        }

        // 介紹卡片切換
        document.querySelectorAll(`.soft_info_card`)[i].style.display = 'block'
        document.querySelectorAll(`.soft_info_card`)[i-1].style.display = 'none'

        // console.log(wrap.style.left)

        // 防止超出畫面
        if(i == 2){
            $id('right_button').disabled = true;
        }
        $id('left_button').disabled = false;
        
    }
})