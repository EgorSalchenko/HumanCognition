window.addEventListener('DOMContentLoaded', ()=>{
    let windowSpeed = document.getElementById('window');
    let content1 = document.getElementById('content1');
    let content2 = document.getElementById('content2');
    let content3 = document.getElementById('content3');
    let timer;

    windowSpeed.addEventListener('click', ()=> {

        if(windowSpeed.classList.contains('start')){ // START
            toWait();
            windowSpeed.classList.remove('start');
        }
        else if(windowSpeed.classList.contains('click')) { // CLICK

            inClick();
            end();
        }
        else if(windowSpeed.classList.contains('end')) { //END
            toWait();
            windowSpeed.classList.remove('end');
            clearTimeout(timer)
        }
        else if (windowSpeed.classList.contains('wait')) { // W8
            windowSpeed.classList.remove('wait');
            toW8Menu();

        }
        else if(windowSpeed.classList.contains('wait-menu')){ // W8 MENU
            toWait();
            windowSpeed.classList.remove('wait-menu');
            
        }
    })



    function toWait() {
        windowSpeed.classList.add('wait');
        content1.innerHTML = '';
        content2.innerHTML = 'Wait for green!';
        content3.innerHTML = '...';
        timer = setTimeout( ()=> { click() } , getRandomNumber() * 1000)
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * 5) + 2; // рандомное чило от 2 до 6
    }


    function click() {
        windowSpeed.classList.remove('wait')
        windowSpeed.classList.add('click');
        content1.innerHTML = ''
        content2.innerHTML = 'CLICK!';
        content3.innerHTML = '';
        startTime = new Date(); // стартуем таймер
    }

    function end() {
        windowSpeed.classList.remove('click')
        windowSpeed.classList.add('end');
        content1.innerHTML = '<img class=logo src="../img/svg/reaction.svg" alt="logo">';
        content3.innerHTML = 'click to keep going';
    }

    function inClick() {
        let endTime = new Date();
        let timeLost = endTime - startTime;
        content2.style.fontSize = '40px';
        content2.innerHTML = `${timeLost} ms`;
    }

    function toW8Menu() {

        clearTimeout(timer)
        windowSpeed.classList.add('wait-menu')
        content1.innerHTML = '<img class=logo src="../img/svg/exclamationPoint.svg" alt="logo">'
        content2.innerHTML = 'Too soon!'
        content3.innerHTML = 'click to keep going';

    }

})

