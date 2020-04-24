
// challenge 1:
function ageInDay(){
    var birthYear = prompt('when you were born guys...?');
    var ageInDays = (2020 - birthYear)* 365;
    //document.getElementById('flex-box-result').innerHTML = ageInDays;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('your age is ' + ageInDays + ' days');
    h1.setAttribute('id','agedayss');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('flex-box-result').remove();
}

// challenge 2:
function generatorCat(){
    var img = document.createElement('img');
    var div = document.getElementById('cat-generator');
    img.src = 'https://cdn2.thecatapi.com/logos/thecatapi_256xW.png';
    div.appendChild(img);
}


//challenge 3:
function rpsGame(yourChoice){
    var humanChoice,botChoice;
    humanChoice = yourChoice.id;
    //console.log(humanChoice);
    botChoice = numberToChoice(randTorpsInt()); 
    //console.log(botChoice);
    result = decideWinner(humanChoice, botChoice); // 1 win 0 lost
    //console.log(result);
    message = finalMessage(result);
    //console.log([result]);
    //console.log(message);
    rpsFrontEnd(humanChoice,botChoice,message);    



    
}


function randTorpsInt(){
    return Math.floor(Math.random()*3);
}


function numberToChoice(number){
    return ['rock','paper','scissors'][number];

}

function decideWinner(yourChoice,computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock':0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper':0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors':0.5, 'rock': 0},
        
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
    
    
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 1) {
        return {'message': 'you win', 'color':'green'}
    } else if( yourScore === 0){
        return {'message': 'you lost', 'color':'red'}
    } else{
        return {'message': 'you tied', 'color':'yellow'}
    };

}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){ 
    var imgDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    // remove all of images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humdiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messdiv = document.createElement('div');

    
    humdiv.innerHTML = "<img src='" + imgDataBase[humanImageChoice] + "' height=150 width=150 style = 'box-shadow: 0px 10px 50px rgba(20,20,230,11);'>"
    botdiv.innerHTML = "<img src='" + imgDataBase[botImageChoice] + "' height=150 width=150 style = 'box-shadow: 0px 10px 50px rgba(230,20,23,11);'>"
    messdiv.innerHTML ="<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding:50px;'>" + finalMessage['message'] +"</h1>"
    
    document.getElementById('flex-box-rps').appendChild(humdiv);
    document.getElementById('flex-box-rps').appendChild(messdiv);
    document.getElementById('flex-box-rps').appendChild(botdiv);
}

