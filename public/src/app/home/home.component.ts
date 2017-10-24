import { Component, OnInit } from '@angular/core';
import { DungballService } from './../dungball.service';
import { Dungbeetle, DungbeetleService } from './../dungbeetle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  router: Router;

  dungbeetleService: DungbeetleService;
  dungballService: DungballService;

  dungballs = [];
  dotd = {};
  password_bool = true;
  password_state = 'password';

  login_beetle: Dungbeetle = new Dungbeetle();
  register_beetle: Dungbeetle = new Dungbeetle();

  constructor(private _router: Router, private _dungbeetleService: DungbeetleService, private _dungballService: DungballService) {
    this.router = _router;
    this.dungbeetleService = _dungbeetleService;
    this.dungballService = _dungballService;
    this.register_beetle.color = "#000000";

    this.dungballService.retrieveAll((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        this.dungballs = data;
        if (this.dungballs.length > 0) {
          this.dotd = data[Math.floor(Math.random()*data.length)];
        }
      }
    });
  }

  onLogin() {
    console.log(this.login_beetle);
    let self = this;
    this.dungbeetleService.login(this.login_beetle, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        this.router.navigate(['/dashboard']);
      }
    });
  }

  onRegister() {
    this.dungbeetleService.create(this.register_beetle, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        this.router.navigate(['/dashboard']);
      }
    });
  }

  showPassword() {
    this.password_bool = !this.password_bool;
    if (this.password_bool) {
      this.password_state = "password";
    } else {
      this.password_state = "text";
    }
  }

  ngOnInit() {
  }

}
