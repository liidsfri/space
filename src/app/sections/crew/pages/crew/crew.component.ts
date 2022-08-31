import { Component, OnInit } from '@angular/core';
import data from '../../../../data.json';
import * as _ from 'lodash';


@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  data=data;
  name:string=_.find(data.crew, {name : 'Douglas Hurley'})?.name || '';
  description:string=_.find(data.crew, {name : 'Douglas Hurley'})?.bio || '';
  img:string=_.find(data.crew, {name : 'Douglas Hurley'})?.images.png || '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.data.crew)
  }

  changePerson(person:string){
    this.name=_.find(data.crew, {name : person})?.name || '';
    this.description=_.find(data.crew, {name : person})?.bio || '';
    this.img=_.find(data.crew, {name : person})?.images.png || '';
  }

}
