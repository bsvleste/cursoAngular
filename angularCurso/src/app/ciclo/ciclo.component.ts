import { Component,Input, OnInit, OnChanges, DoCheck, AfterContentChecked, OnDestroy, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit,OnChanges,
DoCheck,AfterContentChecked, AfterContentInit,AfterViewInit,AfterViewChecked,OnDestroy {
  
  @Input() valorinicial:number = 1;
  
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
   this.log('ngAfterViewinit');
  }
  ngAfterContentInit(){
    this.log("ngAfterContentInit");
  }
  
  ngAfterContentChecked() {
    this.log("ngAfterContentChecked");
    
  }
  ngDoCheck() {
    
    this.log("ngDoCheck");
  }
  ngOnInit() {
    this.log("ngOnInit");
  }
  ngOnChanges() {
    this.log("ngOnchanges");
    
  }
  private log(hook: string)
  {
    console.log(hook);
  }
}
