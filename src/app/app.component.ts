import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'myaggrid-app';

  @ViewChild('agGrid') agGrid: AgGridAngular;
  
  columnDefs = [
    { field: 'make', sortable: true, filter: true, checkboxSelection: true },
    { field: 'model', sortable: true, filter: true  },
    { field: 'price', sortable: true, filter: true }
  ];

  rowData: any;
  gridColumnApi: any;
  private gridApi: GridApi;
  constructor(private http: HttpClient) {

  }
 
  ngOnInit() {
    
    this.rowData = this.http.get('https://www.ag-grid.com/example-assets/row-data.json');
    // this.rowData = this.http.get('https://www.ag-grid.com/example-assets/small-row-data.json');
  }

  // onGridReady(params) {
  //   this.gridApi = params.api;
  //   this.gridColumnApi = params.columnApi;
  // }
  // getSelectedRows() {
  //   const selectedNodes = this.gridApi.getSelectedNodes();
  //   console.log(selectedNodes);
  //   const selectedData = selectedNodes.map(node => node.data );
  //   const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');

  //   alert(`Selected nodes: ${selectedDataStringPresentation}`);
  // }
//   rowData = [
//     { make: 'Toyota', model: 'Celica', price: 35000 },
//     { make: 'Ford', model: 'Mondeo', price: 32000 },
//     { make: 'Porsche', model: 'Boxter', price: 72000 }
// ];
}
