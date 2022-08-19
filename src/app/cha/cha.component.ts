import { Component, OnInit, ViewChild } from '@angular/core';
import { ConComponent } from '../con/con.component';

@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.scss']
})
export class ChaComponent implements OnInit {
  public chaMessage = '';
  @ViewChild('thangTeo') thangTeo: ConComponent | undefined;
  @ViewChild('thangTy') thangTy: ConComponent | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public conGoi(name: string):any{
    console.log("Chao con");
    this.chaMessage = "Chao con ("+name+")";
  }

  public choTien(){
    this.thangTeo?.choTien(10);
    this.thangTy?.choTien(5);
  }


}
