// Get HTML elements by ID

const btnClick = document.querySelector('.askButton');
const giveAnswer = document.querySelector('.answer');

//object with response bank
const eightBallResponses = {
    1: 'As I see it, yes.',
    2: 'Ask again later.',
    3: 'Better not tell you now.',
    4: 'Cannot predit that now.',
    5: 'Concentrate and ask again',
    6: 'Do not count on it.',
    7: 'It is certain.',
    8: 'It is decidedly so.',
    9: 'Most likely.',
    10: 'My reply is no.',
    11: 'My sources say no.',
    12: 'Outlook not so good.',
    13: 'Outlook good.',
    14: 'Reply hazy, try again.',
    15: 'Signs point to yes.',
    16: 'Very doubtful.',
    17: 'Without a doubt.',
    18: 'Yes.',
    19: 'Yes, definitely.',
    20: 'You may rely on it.',
    21: 'All signs point to no',
    22: 'Do 10 push-ups then ask again.',
    23: 'Run the block and ask again.',
    24: 'You are not ready to ask that question.',
    25: 'I am not comfortable answering that.',
    26: 'That is highly likely.',
    27: 'You should be ashamed of yourself.',
}

// create main function select response by random number.
function generateAnswer ()  {
    //let eightBallResponsesLength = objLength(eightBallResponses);
    let randomNumber = getRandomInt(1, objLength(eightBallResponses));
    return eightBallResponses[randomNumber];
}


// Function to generate a random number in a range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

//function to obtain number of keys in an object
function objLength(obj) {
    var count = 0;
    for(var prop in obj) {
        obj.hasOwnProperty(prop) ? count++ : count = count;
    }
    return count;
}
// create event listener for button click

console.log(generateAnswer);

btnClick.addEventListener('click', ()=>{
    let message = generateAnswer();
    giveAnswer.innerHTML = `<p class="message">${message}</p>`;
    const displayResult = giveAnswer.querySelector('.answer');
});

