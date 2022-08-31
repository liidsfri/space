import { Component, OnInit } from '@angular/core';
import data from '../../../../data.json';
import * as _ from 'lodash';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  data=data;
  name:string=_.find(data.technology, {name : 'Launch vehicle'})?.name || '';
  description:string=_.find(data.technology, {name : 'Launch vehicle'})?.description || '';
  img:string=_.find(data.technology, {name : 'Launch vehicle'})?.images.portrait || '';

  constructor() { }

  ngOnInit(): void {
  }

  changeTech(vehicle:string){
    this.name=_.find(data.technology, {name : vehicle})?.name || '';
    this.description=_.find(data.technology, {name : vehicle})?.description || '';
    this.img=_.find(data.technology, {name : vehicle})?.images.portrait || '';
  }

}
