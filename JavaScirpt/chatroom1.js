// 施工中
function showConstruction(){
    document.querySelector('.construction_section').style.display = 'flex';
}
function cancelConstruction(){
    document.querySelector('.construction_section').style.display ='none'
}


function init(){
// 離開施工畫面
document.querySelector('.construction_cancel').addEventListener('click',cancelConstruction,false)


//Show 施工畫面
document.querySelector('#mate').addEventListener('click',showConstruction)
document.querySelector('#personal_info').addEventListener('click',showConstruction)
document.querySelector('.setting').addEventListener('click',showConstruction)
}
window.addEventListener("load", init, false);