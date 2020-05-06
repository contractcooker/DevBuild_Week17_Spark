import { Component, OnInit } from '@angular/core';
import { RootObject, Result, DonutDetail } from '../interfaces/donutList';
import { DonutService } from '../donuts.service'



@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.scss']
})
export class DonutsComponent implements OnInit {
  donuts:Result;
  constructor(private donutData:DonutService) { 
    
  }

  ngOnInit(): void {
    this.donutData.getDonuts().subscribe(
      (data: Result) => this.donuts = { ...data }, 
      error => console.error(error)
    );
  }

}
