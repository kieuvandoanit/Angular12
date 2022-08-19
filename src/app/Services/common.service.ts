import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public counter = 0;

  constructor() { }

  public binhPhuong(n: number): number{
    return n * 2
  }

  public submitData(data: any): void{
    console.log("Send data to server! ", data)
  }
}
