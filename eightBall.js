const answersArray = ['yes', 'no', 'absolutely', 'possibly', 'highly unlikly', 'who knows'];
const userAnswers = ['test'];


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

// console.log(randomAnswer());

const button = document.getElementById('button');
button.addEventListener('click', clickHandler);

function clickHandler(){

    const displayAnswer = document.getElementById('displayAnswer');
    displayAnswer.textContent = randomAnswer();
}