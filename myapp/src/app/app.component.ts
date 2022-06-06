import { Component } from '@angular/core';
import { MyDataService } from './myDataService';
import { ConversionCtoF } from './conversionCtoF';
import { FahrenheitPipe } from './fahrenheitPipe';

@Component({
  selector: 'app-root',
  template: `<h1>Hello world! {{title}}</h1>
            <second-directive [firstName]="author"></second-directive>
            <ul>{{myName}}</ul>
            <ul>{{f}}</ul>
            <!-- Sep 17, 2019 -->
            {{ mydate | date }}<br>
            <!-- Sep 17, 2019 -->
            <p>{{ mydate | date: 'y MMMM d' }}<br>
            <!-- Sep 17, 2019 -->
            <p>{{ mydate | date: 'mediumDate' }}<br>
            <!-- Tuesday, Sep 17, 2019 -->
            <p>{{ mydate | date: 'fullDate' }}<br>
            <!-- 6:00 PM -->
            <p>{{ mydate | date: 'shortTime' }}<br>
            <!-- TUESDAY, Sep 17, 2019 -->
            <p>{{ mydate | date:'fullDate' | uppercase}}</p>
            <!-- Sep 17, 2019 6:00PM -->
            <p>{{ mydate | date:'EEEE, MMMM d, y h:mma' }}</p>
            {{price | currency:'USD':true}}<br/>
            <p>{{celsius | fahrenheitPipe }}
            <nav>
            <a routerLink="/page-a" routerLinkActive="active">A | </a>
            <a routerLink="/page-b/5/bob" routerLinkActive="active">B | </a>
            <!-- Where router should display a view-->
            <router-outlet></router-outlet>`,
  providers: [MyDataService, ConversionCtoF]
})
export class AppComponent {
  public title = 'This is Angular!';
  public author = "Joyce";
  myName: string;
  f: number;
  mydate = new Date(2019, 8, 17, 18, 0, 30);
  price: number = 23.333333;
  celsius: number;
  constructor(myDataService: MyDataService, conversionCtoF: ConversionCtoF){
    this.myName = myDataService.getmyNames();
    this.f = conversionCtoF.getConversion();
    this.celsius = 33;
  }
}
