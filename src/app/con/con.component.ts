import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-con',
  templateUrl: './con.component.html',
  styleUrls: ['./con.component.scss']
})
export class ConComponent implements OnInit {
  @Input() name: string = '';
  @Output() conGoi: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public chaoCha(): void{
    this.conGoi.emit(this.name);   
  }

  public choTien(amount: number): void{
    console.log(
      `Con la ${this.name}. Cam on cha cho con ${amount} dong!`
    );
  }

}
