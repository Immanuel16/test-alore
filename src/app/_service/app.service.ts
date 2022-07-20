import { SegmentModel } from './../_model/app.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getAllSegment(){
    return this.http.get<SegmentModel[]>(`${this.baseUrl}/segments`);
  }

  addSegment(body: SegmentModel){
    return this.http.post<any>(`${this.baseUrl}/segments`, body);
  }
}
