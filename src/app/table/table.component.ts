import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { YourService } from '../your-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  data?: any;
  dataString?: string;
  constructor(private appComponent: AppComponent, private yourService: YourService) {

  }

  ngOnInit() {
    this.yourService.getData().subscribe(
      response => {
        this.data = response;
        this.dataString = JSON.stringify(this.data, null, 2);
        console.log(this.data);
      },
      error => {
        console.error('Error occurred:', error);
      }
    );
  }
}