import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DungbeetleService } from './../dungbeetle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  router: Router;

  dungbeetleService: DungbeetleService;

  constructor(private _router: Router, private _dungbeetleService: DungbeetleService) {
    this.router = _router;
    this.dungbeetleService = _dungbeetleService;
  }

  logOff() {
    console.log("attempting to logout");
    this.dungbeetleService.logout(() => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
  }

}
