/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 const $overlay = $('#overlay');

class Game{
    
    //Intiliase the game object
    constructor(){
        this.missed = 0;
        this.phrases = [
            'Beat around the bush',
            'A piece of cake',
            'Eureka',
            'Barking up the wrong tree',
            'No stones unturned'
        ];
        this.activePhrase = null;
    }

    startGame(){
        
        // Remove any letters and refresh the lost hearts from the previous game
        $('#phrase ul').empty();
        const $hearts = $('#scoreboard img[src="images/lostHeart.png"]');
        $hearts.attr('src', 'images/liveHeart.png');
        $keyButtons.removeAttr('disabled');
        $keyButtons.removeClass();
        //Remove the click event listener from the previous game
        $keyButtons.off();
        $overlay.fadeOut('slow');
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    // Grab a random phrase from the phrases array
    getRandomPhrase(){
        const randomIndex = Math.floor((Math.random()*this.phrases.length));
        return new Phrase(this.phrases[randomIndex]);
    }
    //Check if the button pressed is correct and add the appropriate class while checking for win.
    handleInteraction(button){
        button.disabled = true;
        if(!this.activePhrase.checkLetter(button.textContent)){
            button.classList.add('wrong');
            this.removeLife();
        }
        else{
            button.classList.add('chosen');
            if(this.checkForWin()){
                let isWon = true;
                this.gameOver(isWon);
            }
        }
    }
    //Replace the heart with the lostheart image and check if the game is over
    removeLife(){
        this.missed++;
        const $lostHeart = $('#scoreboard img[src="images/liveHeart.png"]:last');
        $lostHeart.attr('src', 'images/lostHeart.png');
        if(this.missed >= 5){
            let isWon = false;
            this.gameOver(isWon);
        }
        
    }
    //Check for win by checking if there is any 'hide' class inside the phrase
    checkForWin(){
        const $hidenLetters = $('#phrase .hide');
        if($hidenLetters.length === 0){
            return true;
        }
            return false;
    }
    //Show the overlay and display a message depending on whether the player has won the game or not
    gameOver(isWon){
        
        const message = document.getElementById('game-over-message');
        if(isWon){
            message.textContent = 'Congratulations, You Won!';
            $overlay.removeClass('lost');
            $overlay.addClass('won');
            $overlay.fadeIn('slow');
            
        }
        else{
            message.textContent = 'Bad luck, Try Again!';
            $overlay.removeClass('won');
            $overlay.addClass('lost');
            $overlay.fadeIn('slow');
        }
        this.missed = 0;
    }
}