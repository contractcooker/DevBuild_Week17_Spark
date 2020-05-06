import { Injectable } from '@angular/core';
import { RootObject, Result, DonutDetail } from './interfaces/donutList';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DonutService {
  apiUrl = 'https://grandcircusco.github.io/demo-apis/donuts.json';
  constructor(private http:HttpClient) { }
 
  getDonuts() {
    return this.http.get<Result>(`${this.apiUrl}`)
  }

  // getSingleDonut() {
  //   return this.http.get<Result>(`${this.apiUrl}`)
  // }
}
