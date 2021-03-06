import { Component, OnInit } from '@angular/core';

import { Rent } from '../models/rent.model';
import { Vehicle } from '../models/vehicle.model';
import { AppUser } from '../models/appUser.model';
import { Branch } from '../models/branch.model';
import { DateModel } from '../models/date.model';

import {RentService} from './rentService/rent.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  vehicles: Vehicle[];
  branches: Branch[];
  appUser: AppUser;
  rentVehicle: Vehicle;
  rentGetbranch: Branch;
  rentRetbranch: Branch;
  rent: Rent;

  constructor(private rentService: RentService) { }

  ngOnInit() {
    this.getAllVehicles();
    this.getAllBranches();
  }

  getAllVehicles(){
    this.rentService.getAllVehicles()
    .subscribe(
      data => {
        this.vehicles = data;
      },
      error => {
        console.log(error);
      })
  }
  
  checkUserType()
  {
    return localStorage.role == 'Admin' || localStorage.role == 'Manager';
  }

  checkVehiclesDeleted(i:number)
  {
    return this.vehicles[i].Deleted == false;
  }

  checkBranchesDeleted(i:number)
  {
    return this.branches[i].Deleted == false;
  }

  getAllBranches(){
    this.rentService.getAllBranches()
    .subscribe(
      data => {
        this.branches = data;
      },
      error => {
        console.log(error);
      })
  }

  checkAvailable(i){
    return this.vehicles[i].Unvailable == false;
  }

  addVehicle(i){
    this.rentVehicle = this.vehicles[i];
     alert("Vehicle added "+this.rentVehicle.Model)
  }

  addGetBranch(i){
   this.rentGetbranch = this.branches[i];
   alert("Get Branch added "+this.rentGetbranch.Address)
  }

  addRetBranch(i){
    this.rentRetbranch = this.branches[i];
    alert("Ret Branch added "+this.rentRetbranch.Address)
   }

  finishRent(date: DateModel){

    alert(date.StartDate +" "+date.EndDate);
    this.rent = new Rent(undefined,false, date.StartDate, date.EndDate, this.rentGetbranch.Id,this.rentRetbranch.Id ,this.rentVehicle.Id,null,null,null);

    this.rentService.postRent(this.rent)
    .subscribe(
      data => {
        alert("Rent successfully added!");
        this.getAllVehicles();
      },
      error => {
        alert("Rent error!");
      })

  }
}
