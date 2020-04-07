import { Component, OnInit } from '@angular/core';
import {ContractorService} from '../contractor.service';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.css']
})
export class ContractorComponent implements OnInit {
  contractors: object[] = [];
  disabled: boolean[] = [];
  constructor(private contractorService: ContractorService) { }

  ngOnInit() {
    this.getAllContractors();
  }

  getAllContractors() {
    this.contractorService.getAllContractors().subscribe((result: object[]) => {
      this.contractors = result;
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
    return this.contractorService.deleteContractor(this.contractors[id]);
  }
  addContractor() {
    this.contractors.unshift({name: '', address: ''});
    this.disabled.unshift(false);
  }
}
