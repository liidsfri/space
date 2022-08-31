import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  url:string=''
  optionMobile:boolean=false
  
  constructor(private router:Router) {
    console.log(router.url)
    this.url = router.url
  }

  ngOnInit(): void {
  }

  options(){
    this.optionMobile= !this.optionMobile
  }

}
