import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, OnDestroy, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit,OnChanges,
DoCheck,AfterContentChecked, AfterContentInit,AfterViewInit,AfterViewChecked,OnDestroy {
  
  valorinicial:number = 1;
  
  constructor() {
    this.log('constructor');
   }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
    
  }
  ngAfterViewInit() {
   
  }
  ngAfterContentInit(){
   
  }

  ngAfterContentChecked() {
   
  }
  ngDoCheck() {
   
  }
  ngOnInit() {
  }
  ngOnChanges() {
    
  }
  private log(hook: string)
  {
    console.log(hook);
  }
}
