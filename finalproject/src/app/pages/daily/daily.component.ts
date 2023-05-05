import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.services";

@Component({
  selector:'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['../../../styles.css']
})

export class DailyComponent implements OnInit{
  message: any;

  constructor(public appService: AppService){}

  ngOnInit()
  {
    this.message = this.appService.getPosts();
  }
}
