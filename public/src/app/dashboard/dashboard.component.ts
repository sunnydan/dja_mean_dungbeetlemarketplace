import { Component, OnInit } from '@angular/core';
import { Dungbeetle, DungbeetleService } from './../dungbeetle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dungbeetleService: DungbeetleService;
  dungbeetle: Dungbeetle = new Dungbeetle();

  constructor(private _dungbeetleService: DungbeetleService) {
    this.dungbeetleService = _dungbeetleService;
    this.dungbeetleService.retrieveLoggedIn((err, data) => {
      if(err) {
        console.log(err);
      } else {
        console.log(data);
        this.dungbeetle = JSON.parse(data);
      }
    });
  }

  ngOnInit() {
  }

}
