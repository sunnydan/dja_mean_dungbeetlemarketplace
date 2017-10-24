import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dungbeetle, DungbeetleService } from './../dungbeetle.service';
import { Dungball, DungballService } from './../dungball.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dungballform',
  templateUrl: './dungballform.component.html',
  styleUrls: ['./dungballform.component.css']
})
export class DungballformComponent implements OnInit {

  dungbeetleService: DungbeetleService;
  @Input() loggedinbeetle: Dungbeetle;

  dungballService: DungballService;
  @Input() dungball: Dungball = new Dungball();

  @Input() mode: string;

  @Output() cancelEmitter = new EventEmitter();

  constructor(private _dungbeetleService: DungbeetleService, private _dungballService: DungballService) {
    this.dungbeetleService = _dungbeetleService;
    this.dungballService = _dungballService;
  }

  onSubmit() {
    if (this.mode == "create") {
      this.dungball.owner_id = this.loggedinbeetle._id;
      console.log(this.dungball);
      this.dungballService.create(this.dungball, (data) => {
        console.log(data);
        window.location.reload();
      });
    } else {
      this.dungballService.update(this.dungball, this.dungball._id, (data) => {
        console.log(data);
        window.location.reload();
      })
    }
  }

  cancelEdit() {
    this.cancelEmitter.emit();
  }

  ngOnInit() {
  }

}
