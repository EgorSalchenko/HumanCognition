let numbers = [];
let gameWindow = document.getElementById('game-window');
let content1 = document.getElementById('content1');
let content2 = document.getElementById('content2');
let content3 = document.getElementById('content3');
let numsCount = 1;
let filtredNums;
let levelCount = 1;
// let timeTolvl


gameWindow.addEventListener('click', ()=>{
    if(gameWindow.classList.contains('start')) {
        gameWindow.classList.remove('start');
        toTimer(1800);
    }
})
function filterNums(nums) { // фильтр чисел
    return nums.filter(num => typeof num === 'number').join('');
}

function toTimer(time) {

    getNumbers(numsCount)// получаем массив

    gameWindow.classList.add('timer'); 
    gameWindow.classList.remove('win-menu');

    content1.innerHTML = '';
    content2.innerHTML = filterNums(numbers); // отфильтрованные числа без запятых
    content3.innerHTML = '<p style="font-size:20px">Remember numbers!</p>';

    setTimeout(()=>{
        answer();
        console.log(time);
    }, time)
    
}

function getNumbers(count) { // получаем рандомные числа

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    numbers.push(randomNumber);
  }

  return numbers;

}
function answer () {
    gameWindow.classList.remove('timer');
    gameWindow.classList.add('answer');

    content1.innerHTML = `<p style="font-size:40px" >Whats was the number?</p>`;
    content2.innerHTML = `<input id="answer-input" style="width: 1200px; 
    height: 50px;font-size: 35px;
    background-color: #546857;
    border-radius: 5px;
    border: none; text-align: center; color: #e8e8e8;" 
    type="text">`;
    content3.innerHTML = `<button id='btn-submit' class='btn-submit'>Submit</button>`;


    let btnSubmit = document.getElementById('btn-submit');
    let input = document.getElementById('answer-input');
    levelCount = numbers.length;
    btnSubmit.addEventListener('click', ()=>{
        // alert(input.value);
        if(input.value == filterNums(numbers)){
            //win menu

            gameWindow.classList.replace('answer', 'win-menu');

            content1.innerHTML = `<div style='font-size: 30px; text-align: center' class="">Correct numbers <br> ${filterNums(numbers)} <br></div>`;
            content2.innerHTML = `<div style='font-size: 30px; text-align: center' class="">Your answer <br> ${input.value} <br></div><br>
            <div style='font-size:40px; text-align: center' class="">Level ${levelCount}</div>`;
            content3.innerHTML = `<button id='btn-correct' class='btn-submit'>Submit</button>`;

            let btnCorrect = document.getElementById('btn-correct') // кнопка

            btnCorrect.addEventListener('click', ()=> {
                gameWindow.classList.remove('win-menu');
                // console.log('было '+ numsCount);
                numbers = [];
                numsCount++;
                let timeTolvl = levelCount * 1000 + 800;
                // console.log("стало " + numsCount);
                toTimer(timeTolvl);
            })
        } else {
            //lose menu
            gameWindow.classList.replace('answer', 'lose-menu');

            content1.innerHTML = `<div style='font-size: 30px; text-align: center' class="">Correct numbers <br> ${filterNums(numbers)} <br></div>`;
            content2.innerHTML = `<div style='font-size: 30px; text-align: center;' class="">Your answer <br> <s style='color: #770859;'>${input.value}</s> <br></div><br>
            <div style='font-size:40px; text-align: center' class="">Level ${levelCount}</div>`;
            content3.innerHTML = `<button id='btn-lose' class='btn-submit'>Retry</button>`;

            let btnLose = document.getElementById('btn-lose'); // кнопка

            btnLose.addEventListener('click', ()=> {
                
                numbers = [];
                numsCount = 1;
                levelCount = 1;
                toTimer(1800);
            })
        }
    })

}