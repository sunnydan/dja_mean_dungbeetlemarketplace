import { Component, OnInit, Input } from '@angular/core';
import { Dungbeetle, DungbeetleService } from './../dungbeetle.service';
import { Dungball, DungballService } from './../dungball.service';

@Component({
  selector: 'app-dungball',
  templateUrl: './dungball.component.html',
  styleUrls: ['./dungball.component.css']
})
export class DungballComponent implements OnInit {

  dungbeetleService: DungbeetleService;
  dungballService: DungballService;

  @Input() dungball: Dungball;
  @Input() loggedinbeetle: Dungbeetle;
  ownerbeetle: Dungbeetle;
  showowner: boolean = false;
  editball: boolean = false;

  constructor(private _dungbeetleService: DungbeetleService, private _dungballService: DungballService) {
    this.dungbeetleService = _dungbeetleService;
    this.dungballService = _dungballService;
  }

  showOwner() {
    this._dungbeetleService.retrieveOne(this.dungball.owner_id, (data) => {
      console.log(data);
      this.ownerbeetle = data;
    })
    this.showowner = !this.showowner;
  }

  onDelete() {
    console.log("attempting to delete dungball");
    this.dungballService.destroy(this.dungball._id, (data) => { });
    window.location.reload();
  }

  onEdit() {
    this.editball = !this.editball;
  }

  onRoll() {
    this.dungball.radius = this.dungball.radius * 2;
    this.pickupColor();
    this.update();
  }

  update() {
    this.dungballService.update(this.dungball, this.dungball._id, (data) => {
      console.log(data);
    })
  }

  pickupColor() {
    let rgb = this.hexToRgb(this.dungball.color);
    let rgbselector = this.getRandomInt(1, 6);
    if (rgbselector <= 3) {
      rgb.r += this.getRandomInt(-20, 20);
      if (rgb.r < 0) {
        rgb.r = 0;
      }
      if (rgb.r > 255) {
        rgb.r = 255;
      }
    } else if (rgbselector <= 5) {
      rgb.g += this.getRandomInt(-20, 20);
      if (rgb.g < 0) {
        rgb.g = 0;
      }
      if (rgb.g > 255) {
        rgb.g = 255;
      }
    } else {
      rgb.b += this.getRandomInt(-20, 20);
      if (rgb.b < 0) {
        rgb.b = 0;
      }
      if (rgb.b > 255) {
        rgb.b = 255;
      }
    }
    this.dungball.color = this.rgbToHex(rgb.r, rgb.g, rgb.b);
  }

  hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  ngOnInit() {
  }

}
