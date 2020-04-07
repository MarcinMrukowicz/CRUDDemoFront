import {Component, OnDestroy, OnInit} from '@angular/core';
import {UnitService} from '../unit.service';
import {ItemService} from '../item.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy  {
  subscriptions: Subscription = new Subscription();
  units: object[] = [];
  items: object[] = [];
  disabled: boolean[] = [];
  constructor(private itemService: ItemService, private unitService: UnitService) { }

  ngOnInit() {
    this.getAllUnits();
  }
  foo(a) {
    console.log(a);
  }
  getAllItems() {
    // @ts-ignore
    this.subscriptions.add(this.itemService.getAll().subscribe((result: any[]) => {
      this.items = result;
      for (const item of this.items) {
        for (const unit of this.units) {
        // @ts-ignore
          if (item.unit.id === unit.id) {
            // @ts-ignore
            item.unit = unit;
        }
        }
      }
      console.log(result);
      this.disabled = result.map(r => true);
      // this.getAllUnits();
    }, (error) => {}));
  }
  getAllUnits() {
    this.subscriptions.add(
    this.unitService.getAll().subscribe((result: object[]) => {
      this.units = result;

      this.getAllItems();
    }, (error) => {}));
  }

  makeEnabled(id) {
    this.disabled[id] = false;
  }

  save(id) {
    this.disabled[id] = true;
  }
  delete(id) {
    return this.itemService.delete(this.units[id]);
  }
  addItem() {
    this.items.unshift({name: 'abc', unit: this.units[0]});
    this.disabled.unshift(false);
  }
  ngOnDestroy() {
   this.subscriptions.unsubscribe();
  }
}
