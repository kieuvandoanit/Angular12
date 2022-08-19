import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {
  

  constructor(private httpServerService: HttpServerService) { }

  public ngOnInit(): void {
    const payload = {"body": "some comment 3", "postId": 3};
    this.httpServerService.postComment(payload).subscribe(data => {
      console.log("postComment: ", data);
    })

    this.httpServerService.getComments().subscribe(data => {
      console.log("Data: ", data)
    })
  
  }


  

  

}
