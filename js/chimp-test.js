let content1 = document.getElementById('content1');
let content2 = document.getElementById('content2');
let content3 = document.getElementById('content3');
let gameWindow = document.getElementById('gameWindow');
// alert(123)
let table = document.getElementById('table')

let blocks = 5;
let level = 1;


let missCounter = 2;
let missCounterText = document.querySelector('.miss-counter');
// let missCounterText = document.querySelector('.miss-counter-text').style.display = 'none'

let blocksArr = [];
let trueArr = [];

// alert(123)

let trueBlockCounter = 0;
gameWindow.addEventListener('click', (e)=> {
    target = e.target;
    if(gameWindow.classList.contains('start')) {
        toGame();
        generateUniqueNumbers(5);
        changeThBackground(blocksArr);
        generateTrueArr();
    } if(gameWindow.classList.contains('game')){

        let blocksArrActive = document.querySelectorAll('.active')
        if(target.classList.contains('active')){


            console.log('trueBlockCounter ' + trueBlockCounter);
            console.log('trueBlockCounter arr ' + trueArr[trueBlockCounter]);
            console.log('hmtl ' + target.innerHTML);


            if(target.innerHTML == trueArr[trueBlockCounter]) { // если начал правильно

                console.log(target);
                target.parentElement.style.opacity = '0';

                blocksArrActive.forEach((e, i)=>{ // убираем цифры
                    e.style.backgroundColor = '#e8e8e8';
                    e.style.color = '#e8e8e8';
                    // console.log(i);
                })

                trueBlockCounter++;
                
                console.log(trueBlockCounter);
                if(trueBlockCounter == trueArr.length) {
                    // console.log('win');
                    winMenu()
                }
            } else { 
                // alert('miss');
                missCounter--;
                missCounterText.innerHTML = `Misses: ${missCounter}`;
                console.log(missCounter);
                if(missCounter == 0) {
                    loseMenu()
                }
                
            }
            //console.log('trueBlockCounter ' + trueBlockCounter);
            //console.log('trueArr[trueBlockCounter] ' + trueArr[trueBlockCounter]);
            //console.log('target.innerHTML ' + target.innerHTML); 
        }
    }


})

function winMenu() {
    gameWindow.classList.replace('game', 'win-menu');
    content1.innerHTML = `<div style='font-size: 40px; text-align: center;' class="">Numbers <br> <br> <span style='font-size:55px'>${trueArr.length + 1}</span></div>`;
    content2.innerHTML = `<button id='btn-submit' class='btn-submit'>Submit</button>`;
    let btnSubmit = document.getElementById('btn-submit')
    btnSubmit.addEventListener('click', ()=>{
        blocks++;
        arrForBlocks = [];
        trueArr = [];
        blockCounter = 1;
        trueBlockCounter = 0;
        missCounter = 2;
        toGame();
        generateUniqueNumbers(blocks);
        changeThBackground(blocksArr);
        generateTrueArr();
    })
}



function loseMenu () {
    gameWindow.classList.remove('game')
    gameWindow.classList.add('lose-menu')
    blocks = 5;
    arrForBlocks = [];
    trueArr = [];
    blockCounter = 1;
    trueBlockCounter = 0;
    missCounter = 2;
    blocksArr.length = 5;
    content3.innerHTML = `<button id='btn-lose' class='btn-submit'>Try again</button>`;
    let btnLose = document.getElementById('btn-lose');
    btnLose.addEventListener('click', ()=>{
        toGame();
        generateUniqueNumbers(5);
        changeThBackground(blocksArr);
        generateTrueArr();
    })
    content1.innerHTML = `<img class='logo' src="../img/svg/chimp.svg" alt="">`;
    content2.innerHTML = `<div style='font-size:40px; text-align: center;' class="">Score <br> ${blocks}</div>`;
    

}


function generateTrueArr() { // генерация чистого массива
    for(let i = 1; i <= blocks; i++){
        trueArr.push(i);
    }
    return trueArr;
}




function randomNum(max) {
    num = Math.floor(Math.random() * max)
    if(num == 0){randomNum(max)};
    return num;
}

function generateUniqueNumbers(count) {
    
    // Генерируем случайные числа и добавляем их в массив, пока не наберется нужное количество
    while (blocksArr.length < count) {
        let randomNumber = randomNum(40);
  
      // Проверяем, есть ли уже такое число в массиве
      if (blocksArr.indexOf(randomNumber) === -1) {
        blocksArr.push(randomNumber);
      }
    }
    
    return blocksArr;
}


function toGame () {
    gameWindow.classList.remove('win-menu');
    gameWindow.classList.remove('start');
    gameWindow.classList.add('game')
    content1.innerHTML = '';
    content2.innerHTML = tableHTML;
    content3.innerHTML = '';
    missCounterText.style.display = 'block'
    missCounterText.innerHTML = `Misses: ${missCounter}`
    // missCounterWindow.style.display = 'block'
    // missCounterText.style.display = 'block'


}

let arrForBlocks = []; // порядок чисел
let blockCounter = 1;

function randonmNumsForBlocks() {
    function shuffle(array) { // shuffle arr
        array.sort(() => Math.random() - 0.5);
    }
    for(let i = 1; i <= blocks;){
        arrForBlocks.push(blockCounter)
        blockCounter++
        i++
    }
    shuffle(arrForBlocks)
    return arrForBlocks
}

async function changeThBackground(arr) {
    try {
    newCounter = 0;
    let shuffleArr = randonmNumsForBlocks() // шафлим
      let thElements = document.querySelectorAll('th'); // Получаем все элементы th
  
      for (let i = 0; i < thElements.length; i++) {
        let thClass = thElements[i].getAttribute('class'); // Получаем класс элемента th
  
        if (thClass && arr.includes(parseInt(thClass))) { // Проверяем, содержится ли класс в массиве
        //   thElements[i].style.backgroundColor = '#8d82ba'; // Изменяем background-color
          thElements[i].classList.add('border')
          thElements[i].innerHTML = `<p class = 'active'>${shuffleArr[newCounter]}</p>`; // добавляем счётчик внутрь
          newCounter++;
        }
    }
    } catch (err) {console.error(err)}
}


let tableHTML = `
<table style='width: 1010px; heigth: 400px;' id="table" class="table">
<tr>
    <th class="1"></th>
    <th class="2"></th>
    <th class="3"></th>
    <th class="4"></th>
    <th class="5"></th>
    <th class="6"></th>
    <th class="7"></th>
    <th class="8"></th>
</tr>
<tr>
    <th class="9"></th>
    <th class="10"></th>
    <th class="11"></th>
    <th class="12"></th>
    <th class="13"></th>
    <th class="14"></th>
    <th class="15"></th>
    <th class="16"></th>
</tr>
<tr>
    <th class="17"></th>
    <th class="18"></th>
    <th class="19"></th>
    <th class="20"></th>
    <th class="21"></th>
    <th class="22"></th>
    <th class="23"></th>
    <th class="24"></th>
</tr>
<tr>
    <th class="25"></th>
    <th class="26"></th>
    <th class="27"></th>
    <th class="28"></th>
    <th class="29"></th>
    <th class="30"></th>
    <th class="31"></th>
    <th class="32"></th>
</tr>
<tr>
    <th class="33"></th>
    <th class="34"></th>
    <th class="35"></th>
    <th class="36"></th>
    <th class="37"></th>
    <th class="38"></th>
    <th class="39"></th>
    <th class="40"></th>
</tr>
</table>
`