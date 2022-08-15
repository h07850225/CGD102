// 登入
function showLightBox(){
    let login_cellphone = document.querySelector('#cellphone').value;
    let login_others = document.querySelector('#others').value ;
    if(login_cellphone == '登入' || login_others == '登入'){
        login_section.style.display = 'block';
    }
    // if(login_cellphone == '登出' || login_others == '登出'){
    //     cellphon.innerHTML = '登入';
    //     others.innerHTML = '登入';
    // }
}
function cancelLogin(e){
    login_section.style.display = "none";
}


// 施工中
function showConstruction(){
    document.querySelector('.construction_section').style.display = 'flex';
}
function cancelConstruction(){
    document.querySelector('.construction_section').style.display ='none'
}



function init(){
    //show登入畫面
    cellphone.addEventListener("click",showLightBox,false);
    others.addEventListener("click",showLightBox,false);
    //離開登入畫面
    cancel.addEventListener("click",cancelLogin,false);
    // document.addEventListener("click",cancelLogin,false);
    

    // show施工畫面
    
        // 登入畫面(右上角按鈕)
    let login_by = document.querySelectorAll(`.login_by`).length;
    for(let i = 0 ; i < login_by; i++){
        document.querySelectorAll(`.login_by`)[i].addEventListener('click',showConstruction,false);
    }
        // 購買按鈕
    let buy = document.querySelectorAll(`.buy`).length;
    for(let i = 0 ; i < buy; i++){
        document.querySelectorAll(`.buy`)[i].addEventListener('click',showConstruction,false);
    }
        // 脫單卡片
    let lost_single_card = document.querySelectorAll(`.lost_single_card`).length;
    for(let i = 0 ; i < lost_single_card; i++){
        document.querySelectorAll(`.lost_single_card`)[i].addEventListener('click',showConstruction,false);
    }
        // 社群按鈕
    let community = document.querySelectorAll('.community button').length;
    for(let i = 0 ; i < community; i++){
        document.querySelectorAll(`.community button`)[i].addEventListener('click',showConstruction,false);
    }

        // 下載按鈕
    let download_from_store = document.querySelectorAll('.download_from_store button').length;
    for(let i = 0 ; i < download_from_store; i++){
        document.querySelectorAll(`.download_from_store button`)[i].addEventListener('click',showConstruction,false);
    }
        // footer清單
    let footer_column = document.querySelectorAll('.footer_column li').length;
    for(let i = 0 ; i < footer_column; i++){
        document.querySelectorAll(`.footer_column li`)[i].addEventListener('click',showConstruction,false);
    }
        // 交友攻略卡片
    let raiders_card = document.querySelectorAll('.raiders_card ').length;
    for(let i = 0 ; i < footer_column; i++){
        document.querySelectorAll(`.raiders_card`)[i].addEventListener('click',showConstruction,false);
    }
        // 註冊(第一頁)
    document.querySelector('.register').addEventListener('click',showConstruction,false);
        // 下載(第一頁)
    document.querySelector('.download').addEventListener('click',showConstruction,false);
    

    // 離開施工畫面
    document.querySelector('.construction_cancel').addEventListener('click',cancelConstruction,false)
};
window.addEventListener("load", init, false);