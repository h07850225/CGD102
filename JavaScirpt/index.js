// const sliderImage = document.querySelectorAll('.roll_in');

// function checkSlide(e) {
// 	sliderImage.forEach(sliderImage => {
// 		// halfway through the image
// 		const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
//         console.log(slideInAt);
// 		// bottom of the image
// 		const imageBottom = sliderImage.offsetTop + sliderImage.height;
// 		const isHalfShown = slideInAt > sliderImage.offsetTop;
// 		const isNotScrolledPast = window.scrollY < imageBottom;
//         console.log(isHalfShown);
// 		if (isHalfShown && isNotScrolledPast) {
// 			sliderImage.classList.add('active');
// 		} else {
// 			sliderImage.classList.remove('active');
// 		}

		
// 	});
// }

// window.addEventListener('scroll', checkSlide);

//scroll圖片出現
window.onload = function(){
    document.querySelector('.first_sight_pic').classList.add('active');
}




window.addEventListener('scroll',function(){
    // console.log(document.documentElement.scrollTop)
    let width = window.innerWidth;
    if(width <= 767 ){
        if(document.documentElement.scrollTop>100){
            document.querySelector('.publicity_pic').classList.add('active')
        }else{
            document.querySelector('.publicity_pic').classList.remove('active')
        }
        if(document.documentElement.scrollTop>1500){
            document.querySelector('.raiders_pic').classList.add('active')
        }else{
            document.querySelector('.raiders_pic').classList.remove('active')
        }
        if(document.documentElement.scrollTop>2350){
            document.querySelector('.heart_test_pic').classList.add('active')
        }else{
            document.querySelector('.heart_test_pic').classList.remove('active')
        }
        if(document.documentElement.scrollTop>3350){
            document.querySelector('.shop_pic').classList.add('active')
        }else{
            document.querySelector('.shop_pic').classList.remove('active')
        }
    }
    else if(width >=768 && width < 1023){
        if(document.documentElement.scrollTop>100){
            document.querySelector('.publicity_pic').classList.add('active')
        }else{
            document.querySelector('.publicity_pic').classList.remove('active')
        }
        if(document.documentElement.scrollTop>1600){
            document.querySelector('.raiders_pic').classList.add('active')
        }else{
            document.querySelector('.raiders_pic').classList.remove('active')
        }
        if(document.documentElement.scrollTop>2400){
            document.querySelector('.heart_test_pic').classList.add('active')
        }else{
            document.querySelector('.heart_test_pic').classList.remove('active')
        }
        if(document.documentElement.scrollTop>3300){
            document.querySelector('.shop_pic').classList.add('active')
        }else{
            document.querySelector('.shop_pic').classList.remove('active')
        }
    }
    else{
        if(document.documentElement.scrollTop>300){
            document.querySelector('.publicity_pic').classList.add('active')
        }else{
            document.querySelector('.publicity_pic').classList.remove('active')
        }
        if(document.documentElement.scrollTop>2500){
            document.querySelector('.raiders_pic').classList.add('active')
        }else{
            document.querySelector('.raiders_pic').classList.remove('active')
        }
        if(document.documentElement.scrollTop>3200){
            document.querySelector('.heart_test_pic').classList.add('active')
        }else{
            document.querySelector('.heart_test_pic').classList.remove('active')
        }
        if(document.documentElement.scrollTop>4200){
            document.querySelector('.shop_pic').classList.add('active')
        }else{
            document.querySelector('.shop_pic').classList.remove('active')
        }
    }
})