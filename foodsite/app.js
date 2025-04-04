let opens = document.getElementById('open_modal');
let modal = document.getElementById('modal');
let image1 = 'imgs/ic-menu-navigation.png'; // первая картинка
let image2 = 'imgs/ic-menu-navigation2.png'; // вторая картинка
let image = document.getElementById('button_image');

function modalopen (){
    opens.addEventListener('click', () => {
         if (modal.style.display === 'none' || modal.style.display === '') {
                modal.style.display = 'flex';
        } else {
                modal.style.display = 'none';
        }
     });
}

opens.addEventListener('click', () => {
    if (image.src.includes(image1)) {
            image.src = image2; // меняем на вторую картинку
    } else {
            image.src = image1; // меняем обратно на первую картинку
    }
});

modalopen();