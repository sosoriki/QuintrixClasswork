import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router"

@Component({
    // template: '<br/>ID: {{id}}<br/>Name: {{firstname}} <br>'
    template: `This is page b.
    <input type="input" (ngModelChange)="mychange($any($event))" [ngModel]="val">

    <input type="input" (ngModelChange)="mychange2($any($event))" [ngModel]="val2">
    `
})
export class PageBComponent{
    id!: number;
    firstname!: string;
    val!: string;
    val2!: string;

    // constructor(private route: ActivatedRoute){
    //     let str = "This is where the class is initialized.";
    //     console.log(str);
    // }

    mychange(val:string){
        sessionStorage.setItem("asd", val);
        console.log(val);
    }

    mychange2(val2:string){
        sessionStorage.setItem("asd2", val2);
        console.log(val2);
    }

    // ngOnInit(){
    //     this.route.params.forEach((params: Params) =>{
    //         let localID = params['id'];
    //         let localName = params['firstname'];
    //         this.id = localID;
    //         this.firstname = localName;
    //     })
    // }
}