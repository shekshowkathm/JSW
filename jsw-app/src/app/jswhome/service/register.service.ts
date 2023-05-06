import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Register } from '../model/register';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  loginSwitchCase='red';
  private colorSource = new BehaviorSubject<string>('red');
  currentColor = this.colorSource.asObservable();

  private apiUrl = 'http://localhost:8080/register/save';

  constructor(private http: HttpClient) { }

  submitForm(formDto: Register): Observable<any> {
    return this.http.post<any>(this.apiUrl, formDto);
  }
  changeColor(color: string) {
    this.colorSource.next(color);
  }
}
