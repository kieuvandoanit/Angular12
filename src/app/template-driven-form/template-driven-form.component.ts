import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  public name: string = '';
  constructor(private common: CommonService) { }

  ngOnInit(): void {
  }

  public submitForm(): void{
    console.log('Submit form!')
    this.common.submitData(this.name)
  }

}
