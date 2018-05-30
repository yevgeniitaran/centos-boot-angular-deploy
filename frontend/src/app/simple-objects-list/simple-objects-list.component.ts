import { Component, OnInit } from '@angular/core';
import {SimpleObjectService} from "../simple-object.service";

@Component({
  selector: 'app-simple-objects-list',
  templateUrl: './simple-objects-list.component.html',
  styleUrls: ['./simple-objects-list.component.css']
})
export class SimpleObjectsListComponent implements OnInit {
  simpleObjects: Array<any>;

  constructor(private simpleObjectService : SimpleObjectService) { }

  ngOnInit() {
    this.simpleObjectService.getAll().subscribe(data => {
      this.simpleObjects = data;
    })
  }

}
