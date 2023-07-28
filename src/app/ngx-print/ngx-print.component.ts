import { Component } from '@angular/core';

@Component({
  selector: 'app-ngx-print',
  templateUrl: './ngx-print.component.html',
  styleUrls: ['./ngx-print.component.scss']
})
export class NgxPrintComponent {
  form = {
    name:'kamalesh',
    age:'20',
    dateOfBirth:'18-02-2000',
    nationality:'Indian',
    address:'4/804,14th manai street kuduvanchery',
    // otherdetails:'----------'
  }
}
