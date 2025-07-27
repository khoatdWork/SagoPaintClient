import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ColorModel } from '../interfaces/color.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public colorsData: BehaviorSubject<ColorModel[]> = new BehaviorSubject<ColorModel[]>([]);

  constructor(
    private http: HttpClient) { }

  getColorsData() {
    return this.http.get("/assets/colors_data.json");
  }

  setColorsData() {
    this.getColorsData().subscribe((data) => {
      this.colorsData.next(data as ColorModel[]);
    })
  }

}
