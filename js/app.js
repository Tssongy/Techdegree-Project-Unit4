/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 let newGame;
 const $startButton = $('#btn__reset');
 const $keyButtons = $('.key');
 $startButton.on('click', function(){
    newGame = new Game()
    newGame.startGame();
     
    $keyButtons.on('click', function(e){
        newGame.handleInteraction(e.target);
    });
 });

// Enalbe physical computer keyboard to enter guesses
$(document).on('keydown', function(e){
    $keyButtons.each(function(){
        if(e.key === this.textContent){
            this.click();
        }
    })
})
    

 