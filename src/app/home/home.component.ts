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
  public cities = [
    {
      city: "Tỉnh / Thành Phố",
      district: ["Quận / Huyện"]
    },
    {
      city: "An Giang",
      district: ["Long Xuyên", "Châu Đốc", "Tân Châu"]
    },
    {
      city: "Lâm Đồng",
      district: ["Đà Lạt", "Bảo Lộc", "Lâm Hà", "Đức Trọng"]
    },
  ]

  public districts: string[] = ["Quận / Huyện"]

  constructor() { }

  ngOnInit(): void {
  }

  public resetName(): void{
    this.name = "";
  }

  public changeCity(event: any){
    const city = event.target.value;
    if (!city){
      return;
    }

    // Cach 1
    // const search = this.cities.filter(data => data.city === city);
    // if(search && search[0]){
    //   this.districts = search[0].district
    // }

    //cach 2
    this.districts = this.cities.find(data => data.city === city)?.district || [];
  }

}
