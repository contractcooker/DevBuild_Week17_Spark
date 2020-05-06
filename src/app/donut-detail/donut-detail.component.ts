import { Component, OnInit, Input } from '@angular/core';
import { RootObject } from '../interfaces/donutList';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.scss']
})
export class DonutDetailComponent implements OnInit {

  @Input() donut:RootObject;

  constructor() { }

  ngOnInit(): void {
  }

}
