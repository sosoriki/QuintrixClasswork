import { Component } from '@angular/core';

// This is the service.
export class MyDataService {
    myName: string;
    constructor(){
        this.myName="Kendrick";
    }
    getmyNames(){
        return this.myName;
    }
}