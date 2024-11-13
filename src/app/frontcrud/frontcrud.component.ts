import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudOpService } from '../crud-op.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-frontcrud',
  templateUrl: './frontcrud.component.html',
  styleUrls: ['./frontcrud.component.css']
})
export class FrontcrudComponent implements OnInit {
  formmethod!: FormGroup;
  Id: any;
  isdisabled= false

  constructor(private http: CrudOpService, private router: Router, private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => this.Id = params.get('id'));
  }

  ngOnInit(): void {
    this.formmethod = new FormGroup({
      Id: new FormControl(null, Validators.required),
      DomainName: new FormControl(null, Validators.required),
      companyName: new FormControl(null, Validators.required),
      CompanyOwner: new FormControl(null),
      CompanyIndustry: new FormControl(null),
      HeadCount: new FormControl(null),
      AnnualRevenue: new FormControl(null),
      City: new FormControl(null),
      State: new FormControl(null),
      Country: new FormControl(null),
      PostalCode: new FormControl(null)
    });

    if (this.Id) {
      this.http.getapi(`Crud/${this.Id}`).subscribe(res => {
        this.formmethod.patchValue({
          Id: res.id,
          DomainName: res.domainName,
          companyName: res.companyName,
          CompanyOwner: res.companyOwner,
          CompanyIndustry: res.companyIndustry,
          HeadCount: res.headCount,
          AnnualRevenue: res.annualRevenue,
          City: res.city,
          State: res.state,
          Country: res.country,
          PostalCode: res.postalCode
        });  // Use patchValue to set multiple values at once
      });
    }
  }

  AddCompany() {
    this.isdisabled =true
    if (this.formmethod.valid) {
      if (this.Id) {
        // Perform update
        this.http.putapi(`Crud/${this.Id}`, this.formmethod.value).subscribe(
          res => {
            alert("Data updated successfully");
          },
          
          
          err => {
            alert("Failed to update data");
            console.error(err);
          }
        );
      } else {
        // Perform create
        this.http.postapi('Crud/AddCompany', this.formmethod.value).subscribe(
          res => {
            alert("Data saved successfully");
          },
          err => {
            alert("Failed to save data");
            console.error(err);
          }
        );
      }

      this.router.navigate(['/company-list'])
    } else {
      alert("Please fill out the form correctly.");
    }
  }
}
