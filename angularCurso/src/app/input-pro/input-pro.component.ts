import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-input-pro',
  templateUrl: './input-pro.component.html',
  styleUrls: ['./input-pro.component.css']
})
export class InputProComponent implements OnInit {

  @Input('pessoa') pessoa:string = '';
  constructor() { }
  
  ngOnInit() {
  }

}
