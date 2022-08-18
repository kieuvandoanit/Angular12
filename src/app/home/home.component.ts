import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Doan Kieu';
  public age = 25;
  public traiCay = ["Đào", "Nho", "Bưởi", "Cam", "Quýt"];
  public traiCay2 = [
    {ten: "Táo", gia:12, haGia: true}, 
    {ten: "Nho", gia:3, haGia: false}, 
    {ten: "Bưởi", gia: -10, haGia: true}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public resetName(): void{
    this.name = "";
  }

}
