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

window.addEventListener('scroll',function(){
    console.log(document.documentElement.scrollTop)
    let width = window.innerWidth;
    if(width <= 767 )
        if(document.documentElement.scrollTop>200){
            document.querySelector('.publicity_pic').classList.add('active')
        }else{
            document.querySelector('.publicity_pic').classList.remove('active')
        }
        if(document.documentElement.scrollTop>2500){
            document.querySelector('.raiders_pic').classList.add('active')
        }else{
            document.querySelector('.raiders_pic').classList.remove('active')
        }



})