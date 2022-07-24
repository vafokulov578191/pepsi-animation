window.addEventListener('DOMContentLoaded', () => {
    let bottomBlock = document.querySelector('.aziz_work_two')
    let pepsi_buttle = document.querySelector('.pepsi_buttle')
    let ger_more_div = document.querySelector('.ger_more_div')
    let main_right = document.querySelector('.main_right')
    let main_left = document.querySelector('.main_left')
    let img = document.querySelector('.main_right_img ')
    let icons_div = document.querySelector('.icons_div')
    
    

    setTimeout(() => {
        bottomBlock.classList.add('toBottom')
        setTimeout(() => {
            pepsi_buttle.classList.add('pepsi_buttle_active') 
            ger_more_div.classList.add('pepsi_buttle_active') 
            setTimeout(() => {
                main_right.classList.add('active_right')
                main_left.classList.add('active_left')
                img.classList.add('active_right')
                icons_div.classList.add('icons_div_active')
            }, 100);
        }, 100);
    }, 1000);
})