import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-rmn",
  templateUrl: "./rmn.component.html",
  styleUrls: ["./rmn.component.scss"]
})
export class RmnComponent implements OnInit {
  rmnrForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.rmnrForm = formBuilder.group({
      rmnr: ["", [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log(environment.production + " " + this.rmnrForm.value.rmnr);
    if (environment.production) {
      this.router.navigate(["/main"], {
        queryParams: { rmnr: this.rmnrForm.value.rmnr },
        skipLocationChange: true
      });
    } else {
      this.router.navigate(["/main"], {
        queryParams: { rmnr: this.rmnrForm.value.rmnr }
      });
    }
  }

  getErrorMessage() {
    return "Bitte eine Zahl als Rückmeldenummer eingeben!";
  }
}
