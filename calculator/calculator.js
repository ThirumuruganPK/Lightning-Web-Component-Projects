import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    //get the user input
    //display the user input in the display area when the user typing
    //get the user action
    //once after get the user action, then do the operation regarding that
    numberTyped='';
    total;
    zero=0;
    one=1;
    two=2;
    three=3;
    four=4;
    five=5;
    six=6;
    seven=7;
    eight=8;
    nine=9;
    percentage='%';
    division ='/';
    multiply='*';
    substract ='-';
    addition = '+';
    dot='.';

    //used to handle the numbers click in the calcy
    handleNumberClick(event){

            console.log('numbers typed >>', event.target.value);
            this.numberTyped += event.target.value;
    }

    //Used to clear all value typed
    handleAllClear(event){
        console.log('OUTPUT : handle all clear');
        this.numberTyped ='';
        this.total ='';
    }

    //used to handle the operations that the user click like +,-,=,AC, CE,etc.
    handleClickEqualTo(event){
        try{
            console.log('OUTPUT : handleClickEqualTo');
            this.total = eval(this.numberTyped);
            //this.total = parseInt(this.numberTyped,10);
            console.log('this.total >>', this.total);
        }catch(error){
            console.log('OUTPUT : error >>', error);
        }
        
    } 
}