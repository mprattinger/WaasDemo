import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rmn',
  templateUrl: './rmn.component.html',
  styleUrls: ['./rmn.component.scss']
})
export class RmnComponent implements OnInit {

  rmnrForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.rmnrForm = formBuilder.group({
      rmnr: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });

    //, Validators.pattern("^[0-9]*$")
   }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.rmnrForm.value.rmnr);
    this.router.navigate(['/home', {'rmnr' : this.rmnrForm.value.rmnr}]);
  }

  getErrorMessage(){
    return "Bitte eine Zahl als Rückmeldenummer eingeben!";
  }
}
