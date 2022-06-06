import { Component } from "@angular/core";

@Component({
    // templateUrl:'./pageA.html'
    template:'This is page A.<br>This content was set in page b: {{someItem}} {{someItem2}}'
})
export class PageAComponent{
    someItem!: string;
    someItem2!: string;

    constructor(){
        if(sessionStorage.getItem("asd") && sessionStorage.getItem("asd2")){
            this.someItem = sessionStorage.getItem("asd")!;
            this.someItem2 = sessionStorage.getItem("asd2")!;
        }
    }
}