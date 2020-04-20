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
  newUnit = {name: ''};
  constructor(private unitService: UnitService) { }

  ngOnInit() {
    this.getAllUnits();
  }
  addUnit() {
    this.unitService.addUnit(this.newUnit).subscribe((success) => {
      console.log('Sukces');
      this.getAllUnits();
    }, (error) => {
      console.log('Error');
    });
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
    this.unitService.updateUnit(this.units[id]).subscribe((success) => {
        console.log('Sukces');
        this.getAllUnits();
      }, (error => {
        console.log('Error');
      }));
  }
  delete(id) {
    console.log(this.units[id]);
    this.unitService.delete(this.units[id]).subscribe((success) => {
        this.units.splice(id, 1);
      },
      (error) => {
      console.log('Błąds');
      });
  }

}
