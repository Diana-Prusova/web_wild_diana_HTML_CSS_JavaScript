const hamburger = document.querySelector('.hamburger img')
const menu = document.querySelector('.menu')

    
hamburger.addEventListener('click', function(){
    menu.classList.toggle('mobilni_menu')
    
    if (hamburger.getAttribute('src') === 'img/con/menu_burger.png') {
        hamburger.setAttribute('src', 'img/con/menu_cross.png')
    } else {
        hamburger.setAttribute('src', 'img/con/menu_burger.png')
    }

    const mobilniPolozky = document.querySelectorAll('.mobilni_menu a');
    mobilniPolozky.forEach(function(polozka) {
        polozka.addEventListener('click', function() {
            menu.classList.remove('mobilni_menu');
            hamburger.setAttribute('src', 'img/con/menu_burger.png');
            console.log(menu.classList)
        });
    });
})



