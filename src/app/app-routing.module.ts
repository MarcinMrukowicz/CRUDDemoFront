import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ContractorComponent} from './contractor/contractor.component';
import {ItemComponent} from './item/item.component';
import {TransactionComponent} from './transaction/transaction.component';
import {ItemPriceComponent} from './item-price/item-price.component';
import {UnitComponent} from './unit/unit.component';

const routes: Routes = [{path: '', redirectTo: '/info', pathMatch: 'full'},
  { path: 'contractor', component: ContractorComponent },
  { path: 'item', component: ItemComponent},
  { path: 'transaction', component: TransactionComponent},
  { path: 'itemPrice', component: ItemPriceComponent},
  { path: 'unit', component: UnitComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
