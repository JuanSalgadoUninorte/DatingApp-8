import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, CommonModule], // Asegúrate de que CommonModule esté aquí
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title: string = 'Dating App';
  users: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: err => console.log(err),
      complete: () => console.log('complete')
    });
  }

}
//3 - 8 