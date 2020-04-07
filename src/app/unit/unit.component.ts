import { Component, OnInit } from '@angular/core';
import {UnitService} from '../unit.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  units: object[] = [];
  disabled: boolean[] = [];
  constructor(private unitService: UnitService) { }

  ngOnInit() {
    this.getAllUnits();
  }
  addUnit() {
    this.units.unshift({name: '', address: ''});
    this.disabled.unshift(false);
  }
  getAllUnits() {
    this.unitService.getAll().subscribe((result: object[]) => {
      this.units = result;
      this.disabled = result.map(r => true);
    }, (error) => {});
  }

  makeEnabled(id) {
    this.disabled[id] = false;
  }

  save(id) {
    this.disabled[id] = true;
  }
  delete(id) {
    return this.unitService.delete(this.units[id]);
  }
  addContractor() {
    this.units.unshift({name: '', address: ''});
    this.disabled.unshift(false);
  }
}
