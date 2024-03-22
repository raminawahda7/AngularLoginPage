// app.component.ts

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public loginForm: FormGroup;
  public isLoggedIn = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.loginForm.invalid) {
      console.error('Invalid login form');
      return;
    }

    const loginData = this.loginForm.value;

    this.http.post<any>('http://127.0.0.1:5000/login', loginData).subscribe(
      (response) => {
        alert(response['message']);
        if (response && response['token']) {
          localStorage.setItem('token', response['token']);
          this.isLoggedIn = true;
          this.loginForm.reset();
        }
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Login failed: Server error');
      }
    );
  }

  logout() {
    this.http.post<any>('http://127.0.0.1:5000/logout', {}).subscribe(
      (response) => {
        alert(response['message']);
        localStorage.removeItem('token');
        this.isLoggedIn = false;
      },
      (error) => {
        console.error('Logout failed:', error);
        alert('Logout failed: Server error');
      }
    );
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });

    const token = localStorage.getItem('token');
    this.isLoggedIn = !!token;
  }
}
