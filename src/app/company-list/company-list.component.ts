import { Component, OnInit } from '@angular/core';
import { CrudOpService } from '../crud-op.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  lstitems: any[] | undefined;
  url = "/frontcrud"

  constructor(private http: CrudOpService) {}

  ngOnInit() {
    this.getlistitems();
  }

  getlistitems() {
    this.http.getapi('Crud/GetCompanyDetails').subscribe(res => {
      this.lstitems = res;
    });
  }

  deleteReason(id: any) {
    this.http.deleteapi(`Crud/${id}`).subscribe(
      res => {
        alert("Deleted successfully");
        this.getlistitems();  // Refresh the list after deletion
      }
    );
  }
  
    }

