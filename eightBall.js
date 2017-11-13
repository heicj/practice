const answersArray = ['yes', 'no', 'absolutely', 'possibly', 'highly unlikly', 'who knows'];
const userAnswers = [];


// returns random answer. If userAnswers contains answers returns random one from it otherwise random one from answersArray
function randomAnswer(){
    if(userAnswers.length > 0){
        const userAns = userAnswers[Math.floor(Math.random() * userAnswers.length)];
        return userAns;

    }else{
        const ans = answersArray[Math.floor(Math.random() * answersArray.length)];
        return ans;
    }
}

//event handler to add user input as possible answers
const form = document.getElementById('userInput');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const newAnswer = document.getElementById('newAnswer').value;
    userAnswers.push(newAnswer);

});

//event handler to clear user answer array. Which makes answers used
//the original provided answers
const clear = document.getElementById('clear');
clear.addEventListener('click', function(e){
    e.preventDefault();
    userAnswers.length = 0;
});





const button = document.getElementById('button');
button.addEventListener('click', clickHandler);

function clickHandler(){

    const displayAnswer = document.getElementById('displayAnswer');
    displayAnswer.textContent = randomAnswer();
}