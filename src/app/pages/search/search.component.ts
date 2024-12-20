import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { inject } from '@angular/core/testing';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{

  location$:Observable<any[]> =new Observable<any[]>;
    masterSrv = inject([MasterService], (service: MasterService) => {
      expect(MasterService).toBeTruthy();

    });
    

  ngOnInit(): void {
      this.getAllLocation();
  }
  getAllLocation(){
    this.location$ = this.masterSrv.getlocation()

  }

}
