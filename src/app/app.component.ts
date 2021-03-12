import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxJS';
  data: any;
  constructor(private dataService: DataService) {

  }
  getData(): void {
    this.dataService.getConfig()
      .subscribe((d: any) => {
        console.log(d);
        this.data = d;
      });
  }
}
