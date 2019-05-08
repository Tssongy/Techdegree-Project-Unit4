/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 const $overlay = $('#overlay');

class Game{
    
    //Intiliase the game object
    constructor(){
        this.missed = 0;
        this.phrases = [
            'Ladder',
            'Tomorrow',
            'Kangaroo',
            'Toy',
            'England'
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
        $keyButtons.off();
        $overlay.fadeOut('slow');
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase(){
        const randomIndex = Math.floor((Math.random()*this.phrases.length));
        return new Phrase(this.phrases[randomIndex]);
    }

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

    removeLife(){
        this.missed++;
        const $lostHeart = $('#scoreboard img[src="images/liveHeart.png"]:last');
        $lostHeart.attr('src', 'images/lostHeart.png');
        if(this.missed >= 5){
            let isWon = false;
            this.gameOver(isWon);
        }
        
    }

    checkForWin(){
        const $hidenLetters = $('#phrase .hide');
        if($hidenLetters.length === 0){
            return true;
        }
            return false;
    }

    gameOver(isWon){
        
        const message = document.getElementById('game-over-message');
        if(isWon){
            message.textContent = 'Congratulations, You Won!';
            $overlay.addClass('won');
            $overlay.fadeIn('slow');
            
        }
        else{
            message.textContent = 'Bad luck, Try Again!';
            $overlay.addClass('lost')
            $overlay.fadeIn('slow');
        }
        this.missed = 0;
    }
}