import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  isIncludeLetters = false;
  isIncludeNumbers = false;
  isIncludeSymbols = false;
  password = '';
  
  onSetLength(value : string){

    const parsedLength = parseInt(value)
    if(!isNaN(parsedLength))
    {
      this.length = parsedLength

    }
  }
  onChangeUseLetters()
  {
    this.isIncludeLetters = !this.isIncludeLetters

  }

  onChangeUseNumbers(){
    this.isIncludeNumbers = !this.isIncludeNumbers
  }

  onChangeUseSymbols(){
    this.isIncludeSymbols = !this.isIncludeSymbols
  }
  onButtonClick(){
   const numbers = '0123456789'
   const letters = 'abcdefghijklmnopqrstuvwxyz'
   const symbols = '!@#$%^&*()'

   let validChars = ''

   if(this.isIncludeLetters){
     validChars += letters
   }
   if(this.isIncludeNumbers){
    validChars += numbers

   }
   if(this.isIncludeSymbols){
    validChars += symbols

   }
   let generatedPassword = ''
   for(let i = 0; i< this.length ; i++){
const index = Math.floor(Math.random() * validChars.length)
generatedPassword += validChars[index]
   }
   this.password = generatedPassword
  }
}
