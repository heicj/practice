'use strict';

function GolfCourse (name) {
    this.name = name;
    this.holes = 18;
    
}


function AvgScore () {
    let totalScore = 0;
    for (let i = 0; i < scores.length; i++){
        totalScore += scores[i];
    }
    const value = Math.round(totalScore / scores.length * 100) / 100;
    return value;
}

const scores = [3,2,4,5,7, 20, 4, 5, 100];

const avg = AvgScore(scores);
console.log(scores);
console.log(avg);
console.log(GolfCourse);

const header = document.getElementById('H1');
const div = document.createElement('H1');
div.textContent = avg;
header.appendChild(div);
