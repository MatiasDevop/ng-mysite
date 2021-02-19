import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get("https://localhost:5001/api/customer", {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
      .subscribe(response =>{
        this.customers = response;
      }), err =>{
        console.log(err);
      }
  }

}
