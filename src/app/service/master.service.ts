import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl:String='https://projectapi.gerasim.in/api/BusBooking/';

  constructor(private http:HttpClient) { }

  getlocation():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl +"GetBusLocations")
  }}