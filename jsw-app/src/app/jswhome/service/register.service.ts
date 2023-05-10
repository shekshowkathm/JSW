import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Register } from '../model/register';
import { Login } from '../model/login';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  loginSwitchCase = 'red';
  private colorSource = new BehaviorSubject<string>('red');
  currentColor = this.colorSource.asObservable();

  private apiUrl = 'http://localhost:8080/register/save';
  private loginapiUrl = 'http://localhost:8080/authenticate/login';
  private baseurlgetforgotpassword =
    'http://localhost:8080/register/retrieveregisterbyemailforpassword';
  private baseurlupdatepassword = 'http://localhost:8080/register/updatepasswordbyemail';
  private TOKEN_KEY = '';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    responseType: 'text' as const,
  };
  // requestHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  submitForm(formDto: Register): Observable<any> {
    return this.http.post<any>(this.apiUrl, formDto);
  }
  submitLoginForm(loginForm: Login): Observable<any> {
    return this.http.post<any>(this.loginapiUrl, loginForm, {
      responseType: 'text' as 'json',
    });
  }
  changeColor(color: string) {
    this.colorSource.next(color);
  }

  setAuthToken(token: string) {
    localStorage.setItem('token', token);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  removeAuthToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }
  Update(change:any) {
    const body = JSON.stringify(change);
    console.log('ejfenjfejn', change.email, change);
    return this.http.put(
      this.baseurlupdatepassword + `/${change.email}`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
  getEmail(item: any): Observable<Register[]> {
    // console.log(item, 'ddffggSERVICE');
    return this.http.get<Register[]>(
      this.baseurlgetforgotpassword + `/${item}`
    );
  }
}
