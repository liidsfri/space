import data from '../../../../data.json';
import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  data=data;
  title:string=_.find(data.destinations, {name : 'Moon'})?.name || '';
  description:string=_.find(data.destinations, {name : 'Moon'})?.description || '';
  travel:string=_.find(data.destinations, {name : 'Moon'})?.distance || '';
  distance:string=_.find(data.destinations, {name : 'Moon'})?.travel || '';
  img:string=_.find(data.destinations, {name : 'Moon'})?.images.png || '';

  constructor() { }

  ngOnInit(): void {}

  selectPlanet(planet:string){
    this.title=_.find(data.destinations, {name : planet})?.name || '';
    this.description=_.find(data.destinations, {name : planet})?.description || '';
    this.travel=_.find(data.destinations, {name : planet})?.distance || '';
    this.distance=_.find(data.destinations, {name : planet})?.travel || '';
    this.img=_.find(data.destinations, {name : planet})?.images.png || '';
  }

}