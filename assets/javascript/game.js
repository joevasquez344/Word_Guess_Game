var game = document.querySelector('#game');

//Generates an array of chosen words to play with
gameArr = ['dog', 'parrot', 'lion', 'tiger', 'wolf', 'mouse', 'rat', 'rabbit', 'bunny', 'bull', 'bear', 'seagull', 'crow', 'elephant', 'giraff', 'squirel'];

// displays dog, parrot, lion, tiger, OR wolf etc... from gameArr
randAnimal = gameArr[Math.floor(Math.random() * gameArr.length)];


// creates an empty array to push underscores and winning guesses into.
// will contain the letter length of the randomly choses animal
emptyArr = []

// displays and pushes underscores into the empty array
for (var i = 0; i < randAnimal.length; i++) {
    emptyArr[i] = '_ ';
    

}



// game.append(emptyArr);
var spaceBetweenLetters = emptyArr.join(" ");
game.append(spaceBetweenLetters);


// splits letters into separate indeces
// this is now an array of letters and NOT words
var randAnimalLetters = randAnimal.split("");

// var ind = randAnimalLetters.indexOf(randAnimalLetters[j]);
// console.log(ind);

console.log(emptyArr[1])


// var lettersRemaining = randAnimal.length;


document.onkeyup = function (e) {
    var userGuess = e.key;
    console.log(userGuess);



    for (var j = 0; j < randAnimalLetters.length; j++) {
        if (userGuess === randAnimalLetters[j]) {
        //    randAnimal[j] = emptyArr[j]
        console.log("ok")
        emptyArr.push(randAnimalLetters[j])
        
            

            // ind represents the index of the randAnimalLetter pressed
            var ind = randAnimalLetters.indexOf(randAnimalLetters[j]);
            console.log(ind)
            
            console.log(userGuess)

            

            

           
        
           console.log(emptyArr)
        }
    }

}

console.log(gameArr);
console.log(randAnimal);
console.log(randAnimalLetters);
console.log(emptyArr);


