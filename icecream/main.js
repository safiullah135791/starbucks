function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}
const showMenu = (menu,nav)=>{
    const menuId = document.getElementById(menu)
    const navId = document.getElementById(nav) 

    if(menuId && navId){
        menuId.addEventListener('click',()=>{
            navId.classList.toggle('show')
        })
    }
}

showMenu('navbar','nav');

const leftIcon = document.getElementById('left');
const rightIcon = document.getElementById('right');
const imagesAll = document.getElementById('images');

leftIcon.addEventListener('click',()=>{
    imagesAll.scrollLeft -= 400;
})

rightIcon.addEventListener('click',()=>{
    imagesAll.scrollLeft += 400;
})
