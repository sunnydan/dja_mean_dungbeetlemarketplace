import { Component, OnInit } from '@angular/core';
import { Dungbeetle, DungbeetleService } from './../dungbeetle.service';
import { Dungball, DungballService } from './../dungball.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  dungbeetleService: DungbeetleService;
  loggedinbeetle: Dungbeetle = new Dungbeetle();

  dungballService: DungballService;
  dungball: Dungball = new Dungball();

  dungballs: Dungball[] = [];
  searchterm: string = "";
  ordermethod: string = "alphabetical";
  reverseorder: boolean = true;

  constructor(private _dungbeetleService: DungbeetleService, private _dungballService: DungballService) {

    this.dungbeetleService = _dungbeetleService;
    this.dungballService = _dungballService;

    this.dungbeetleService.retrieveLoggedIn((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        this.loggedinbeetle = JSON.parse(data);
        this.dungball.owner_id = this.loggedinbeetle._id;
      }
    });

    this.dungballService.retrieveAll((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        this.dungballs = data;
      }
    });
  }

  onReverse() {
    this.reverseorder = !this.reverseorder;
  }

  onMethodChange() {
    console.log(this.ordermethod);
  }


  ngOnInit() {
  }

}
