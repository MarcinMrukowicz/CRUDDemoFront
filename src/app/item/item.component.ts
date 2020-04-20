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
  newItem = {name: '', unit: null};
  constructor(private itemService: ItemService, private unitService: UnitService) { }

  ngOnInit() {
    this.getAllUnits();
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
      this.newItem.unit = result[0];
      this.getAllItems();
    }, (error) => {}));
  }

  makeEnabled(id) {
    this.disabled[id] = false;
  }

  save(id) {
    this.disabled[id] = true;

    this.itemService.updateItem(this.items[id]).subscribe((success) => {
      console.log('Sukces');
      this.getAllItems();
    }, (error => {
      console.log('Error');
    }));
  }
  delete(id) {
    this.itemService.delete(this.items[id]).subscribe((next) => {
      console.log('Sukces');
      this.getAllUnits();
    }, (error) => {
      console.log('Error');
    });
  }
  addItem() {
    this.itemService.addItem(this.newItem).subscribe((success) => {
      console.log('Sukces');
      this.getAllItems();
    }, (error) => {
      console.log('Error');
    });
  }
  ngOnDestroy() {
   this.subscriptions.unsubscribe();
  }
}
