import { Component, OnInit, Input } from '@angular/core';
import { Dungbeetle, DungbeetleService } from './../dungbeetle.service';

@Component({
  selector: 'app-dungbeetle',
  templateUrl: './dungbeetle.component.html',
  styleUrls: ['./dungbeetle.component.css']
})
export class DungbeetleComponent implements OnInit {

  dungbeetleService: DungbeetleService;
  @Input() dungbeetle: Dungbeetle;
  @Input() loggedinbeetle: Dungbeetle;

  constructor() { }

  ngOnInit() {
  }

}
