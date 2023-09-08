let gameWindow = document.getElementById('game-window');
let startBrn = document.getElementById('btn-start');
let content1 = document.getElementById('content1');
let content2 = document.getElementById('content2');
let content3 = document.getElementById('content3');
let maxSizeForContainer = 400; // максимальная ширина контейнера
let gridCounter = 3; // сколько на сколько сетка
let blocksCounter = 3; // сколько блоков должно закрасится
let blocksArr = []; // массив с class ами блоков 
let hideTimeBlocks = 800; //время до сокрытия блоков
let missCounter = document.getElementById('miss-counter');
let missNums = 3; // miss
let winCounter = 0; // количество раскрытых блоков
let lvl = 1; // уровень


let gridArr = [];

startBrn.addEventListener('click', ()=> {
    toGame();
    
})


function toGame() {
    gameWindow.classList.remove('start'); //clases
    gameWindow.classList.add('game'); //clases
    missCounter.style.display = 'block';
    content1.innerHTML = '';
    content2.innerHTML = `<div id='grid-container' class="grid-container"> </div>`;
    content3.innerHTML = '';
    missCounter.innerHTML = `Misses left: ${missNums}`
    createGrid(gridCounter); // создаём сетку
    getBlocks(gridCounter ** 2) // сождаём массив с блоками
}

function createGrid(size) {
    const container = document.getElementById('grid-container'); // предполагается наличие элемента с id "grid-container"
  
    // Рассчитываем размер каждого квадрата
    const squareSize = maxSizeForContainer / size;
  
    // Создаем цикл, чтобы создать нужное количество квадратов
    let classCounter = 1;
    for (let i = 0; i < size; i++) {
    
      for (let j = 0; j < size; j++) {
        
        const square = document.createElement('div');
        
        // Задаем размер и стиль каждого квадрата
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.border = '1px solid black';
        square.style.boxSizing = 'border-box';
        square.style.float = 'left';
        square.classList.add('gridBlock',classCounter);
  
        // Добавляем квадрат в контейнер
        container.appendChild(square);
        gridArr.push(square)

        classCounter++;
      }
    }
  }



async function getBlocks (max) {

    function randomNum(max) {
        num = Math.floor(Math.random() * max);
        if(num == 0){randomNum(max)};
        return num;
    }
    
    function generateUniqueNumbers(count) {

        // Генерируем случайные числа и добавляем их в массив, пока не наберется нужное количество
        try {
            while (blocksArr.length < count) {
                let randomNumber = randomNum(gridCounter ** 2);

                // Проверяем, есть ли уже такое число в массиве
                if (blocksArr.indexOf(randomNumber) === -1) {
                    blocksArr.push(randomNumber);
                }
            }

            return blocksArr;
        }

        catch (err) {
            console.log(err);
        }
    }
    generateUniqueNumbers(blocksCounter);

    let blocksTimerStart = setTimeout(()=>{

        function changeBGCBlocks(arr1, arr2, time) { // красим цвет блоков
            let counter = 0;
            while(counter != arr2.length){

                arr1.forEach(el => {
                    if(el.classList[1] == arr2[counter]) {
                        
                        el.classList.add('active');
                        el.style.backgroundColor = '#8d82ba';

                    }
                })

                counter++;
            }
            let blocksTimerEnd = setTimeout(()=>{

                arr1.forEach((el)=> {
                    if(el.classList.contains('active')){
                        el.style.backgroundColor = '#77a980';
                    }
                })

                let activeBlocksArr = document.querySelectorAll('.active');

            }, time)

            gridArr.forEach(el=>{ // накидываем click
                el.addEventListener('click', ()=>{

                    if(el.classList.contains('active')){ // если правильно

                        winCounter++;
                        el.style.backgroundColor = '#8d82ba';
                        if(winCounter == blocksArr.length){
                            setTimeout(()=>{
                                winMenu();
                            }, 500);
                        }
                        
                    } else { // если неправильно
                        missNums--;
                        el.style.backgroundColor = 'red';
                        setTimeout (()=>{
                            el.style.backgroundColor = '#77a980' ;
                        },400);

                    }
                    missCounter.innerHTML = `Misses left: ${missNums}`;
                    if(missNums == 0) {
                        loseMenu();
                        // alert('loose');
                    }

                })
            })
        }

        changeBGCBlocks(gridArr, blocksArr, hideTimeBlocks);
        
    }, 600);

}

function loseMenu() {
    content1.innerHTML = `<img class='logo' src="../img/svg/visual.svg" alt="">`;
    content2.innerHTML = ` <div style='text-align:center; font-size: 40px' class="">Level: <br> ${lvl}</div>`;
    content3.innerHTML = `<button id='btn-again' class='btn btn-again'>Try again</button>`;
    missCounter.style.display = 'none';
    let btnAgain = document.getElementById('btn-again');
    btnAgain.addEventListener('click', ()=>{
        maxSizeForContainer = 400; // максимальная ширина контейнера
        gridCounter = 3; // сколько на сколько сетка
        blocksCounter = 3; // сколько блоков должно закрасится
        gridArr = [];
        blocksArr = []; // массив с class ами блоков 
        missNums = 3; // miss
        winCounter = 0; // количество раскрытых блоков
        lvl = 1; // уровень
        toGame()
    })
}

function winMenu () {
    lvl++;
    blocksCounter++;
    
    if(lvl <= 2) {
        gridCounter = 3;

    } else if(lvl > 2 && lvl <= 5) {
        gridCounter = 4;

    } else if(lvl > 5 && lvl <= 8) {
        gridCounter = 5;

    } else if(lvl > 8 && lvl <= 11) {
        gridCounter = 6;

    } else {
        maxSizeForContainer == 450;
        gridCounter = 7;
    }
    winCounter = 0; // обновяем количество нуууу надо короче
    missNums = 3; // обновляем миссы
    content2.innerHTML = `<div id='grid-container' class="grid-container"> </div>`;
    gridArr = []; // очищаем массивы
    blocksArr = []; // очищаем массивы

    toGame();
}