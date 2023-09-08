let startAim = document.getElementById('startAim')
// alert(123)
let gameWindow = document.getElementById('gameWindow')
let aim = document.getElementById('aim')
let content1 = document.getElementById('content1');
let content2 = document.getElementById('content2');
let content3 = document.getElementById('content3');
let targetsLost = 25;
let count = document.getElementById('count');
let countText = document.getElementById('count-text')


count.innerHTML = targetsLost;

startAim.addEventListener('click', ()=>{
    startAim.style.display = 'none';
    // setTimer ();
    hideVisual();
    // setRandomImagePosition()
    generate();
})


function hideVisual() {
    gameWindow.classList.replace('start', 'game');
    content1.innerHTML = '';
    content2.innerHTML = '';
    content2.style.position = 'relative';
    content3.innerHTML = '';
}

function endMenu() {

    gameWindow.classList.replace('game', 'end-menu');
    countText.style.display = 'none'
    startAim.style.display ='block'
    aim.display='none'
    content1.appendChild(startAim);
    content2.innerHTML = `<p>Average time per hit target</p> <br>
        <div style='font-size: 40px' class="">${Math.floor(getMiddleSum(timeArr))} ms</div>
    `;
    content3.innerHTML = `<button id='btn-submit' class='btn-submit'>Try again</button>`;

    let endBtn = document.getElementById('btn-submit')
    endBtn.addEventListener('click', ()=>{
        gameWindow.classList.replace('endMenu', 'start')

        content1.innerHTML = `<div style='font-size: 50px;' id='content1' class="content1"><h1 style='margin-bottom: 20px'>Aim Trainer</h1></div>`
        content2.innerHTML = `<div style='text-align: center; font-size: 25px' id='content2' class="content2"><img id='startAim' src="../img/svg/aim.svg" alt="" class="logo"><img id='aim' style='display: none' src="../img/svg/aim.svg" alt="" class="aim-logo"></div>`
        content3.innerHTML = `<div style='text-align: center; font-size: 25px;' id='content3' class="content3"><p>Hit 30 targets as quickly as you can.</p> <p>Click the target to start</p></div>`

        let startAim = document.getElementById('startAim')
        targetsLost = 25;
        
        startAim.addEventListener('click', ()=>{
            timeArr = []
            // let sum = 0;
            // let countSum = 0;
            countText.style.display = 'block'
            count.innerHTML = targetsLost
            startAim.style.display = 'none';
            // setTimer ();
            hideVisual();
            // setRandomImagePosition()
            generate();
        })
    })
}

// let aim = document.getElementById('image');
let countX = 0;
let countY = 0;
function generate(){ // генерим корды
    if(targetsLost != 0) {
        let windowWidth =  1000;
        let windowHeight = 500;
        countX++
        // console.log('countX ' + countX);
        // Генерируем рандомные координаты для изображения
        let maxX = 1000 - aim.clientWidth;
        let maxY = 500 - aim.clientHeight;
        let randomX = Math.floor(Math.random() * maxX);
        let randomY = Math.floor(Math.random() * maxY);
        // console.log('randomX' + randomX, 'randomY' + randomY);
        if(randomY >= 200){
            randomY -= 300
            // console.log(' new! randomY' + randomY);
        }
        if (randomX > 600) {
            randomX -=500
            // console.log(' new! randomX' + randomX);
        }
        if(countX % 4 == 0) {
            randomX = -randomX
            // randomY = -randomY
        }
        if(countY % 3 == 0){
            randomY = -randomY
        }
        setRandomImagePosition(randomY, randomX)
    } else {
        endMenu();
    }
    
}

let startTimer

function setRandomImagePosition(randomY, randomX, timer) {
  // Получаем элемент изображения

  // Получаем размеры окна просмотра
//   let windowWidth = window.innerWidth;
//   let windowHeight = window.innerHeight;
    // generate()

  // Устанавливаем координаты изображения
  aim.style.left = randomX + 'px';
  aim.style.top = randomY + 'px';
  aim.style.display = 'block';
  aim.style.width = '100px';
  aim.style.position = 'relative';
  content2.appendChild(aim);
  startTimer = new Date
}
let count1 = 0;
let timeArr = [];
// let timeTime = 
// Обработчик события клика на изображение
aim.addEventListener('click',  ()=> {
    let endTimer = new Date;
    let lastTime = endTimer - startTimer;
    timeArr.push(lastTime)
    // console.log(timeArr);

    count1++;
    // console.log(count1);

    targetsLost--;
    count.innerHTML = targetsLost;
    generate();
    
});

function getMiddleSum(arr) {
    let sum = 0;
    let countSum = 0;
    arr.forEach((el, index)=>{
        sum += el;
    })
    return sum / arr.length
}