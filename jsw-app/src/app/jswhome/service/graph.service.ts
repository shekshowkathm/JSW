import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  private graphSource = new BehaviorSubject<string>('red');
  currentgraph = this.graphSource.asObservable();


  constructor() { }
  changeGraph(grap:string){
    this.graphSource.next(grap);
  }
}
