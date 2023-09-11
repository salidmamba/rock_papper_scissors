let score = JSON.parse(localStorage.getItem('boardScore')) || {
    win:0,
    loose:0,
    tie:0
};

updateJsScore();

function function1(){
    let randy = Math.random();
    let computerGame = '';
    if(randy>= 0 && randy<=1/3){
        computerGame ='rock';
    }else if(randy>=1/3 && randy<=2/3){
        computerGame= 'paper';
    }else if(randy >=2/3 && randy <=1){
        computerGame= 'scissors';
    }
    return computerGame;
}

function display(myMove){
    computerGame = function1();
    let board = '';
    if (myMove === 'rock'){
                
        if(computerGame === 'rock'){
            board = 'Tie';
        }else if(computerGame === 'paper'){
            board = 'Oops! You loose';
        }else if(computerGame === 'scissors'){
            board = 'Hurray! You Win';
        }

    }else if(myMove ==='paper'){
        if(computerGame === 'rock'){
            board = 'Hurray! You Win';
        }else if(computerGame === 'paper'){
            board = 'Tie';
        }else if(computerGame === 'scissors'){
            board = 'Oops! You loose';
        }

    }else if(myMove==='scissors'){
        if(computerGame === 'rock'){
            board ='Oops! You loose';
        }else if(computerGame === 'paper'){
            board ='Hurray! You Win';
        }else if(computerGame === 'scissors'){
            board ='Tie';
        }
    }

    

    if(board === 'Hurray! You Win'){
        score.win +=1;
    }else if(board === 'Oops! You loose'){
    score.loose += 1;
    }else if(board === 'Tie'){
    score.tie += 1;
    };


    localStorage.setItem('boardScore', JSON.stringify(score));
    document.querySelector('.js-moves').innerHTML = `You<img src="/img/${myMove}-emoji.png" class="rocker"> <img src="/img/${computerGame}-emoji.png" class="rocker">Computer`;
    document.querySelector('.js-result').innerHTML = board;
    updateJsScore(); // Call the updateJsScore function to update the score display.
}

function resetScore(){
    score.win = 0;
    score.loose = 0;
    score.tie = 0;
    localStorage.removeItem('boardScore');
    updateJsScore(); // Call the updateJsScore function to update the score display.
}

function updateJsScore(){
    document.querySelector('.js-score').innerHTML =`You ${score.win} : ${score.loose} Computer   \nTie:${score.tie}`;
}
