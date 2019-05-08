/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 //Create Phrase Class
 class Phrase{
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
      }

    //Display each letter in the phrase as a 'hide' class
    addPhraseToDisplay(){
        const ul = document.getElementById('phrase').querySelector('ul');
        for (let i = 0; i < this.phrase.length; i++){
            const li = document.createElement('li');
             li.textContent = this.phrase[i];
             if(phrase[i] === ' '){
                li.className = 'space';
             }
             else{
                li.className = `hide letter ${this.phrase[i]}`;
             }
             
             ul.appendChild(li);
        }
    }
    //Check if the selectedLetter is in the phrase and show it if so.
    checkLetter(selectedLetter){
       const lis = document.getElementById('phrase').querySelector('ul').children;
       let isCorrect = false;
       for(let i = 0; i < lis.length; i++){
          if(lis[i].textContent === selectedLetter){
             this.showMatchedLetter(lis[i]);
             isCorrect = true;
          }
       }
       return isCorrect;
    }
    //Show correctLetter by removing and adding appropriate classes.
    showMatchedLetter(correctLetter){
         correctLetter.classList.remove('hide');
         correctLetter.classList.add('show');
    }
} 

