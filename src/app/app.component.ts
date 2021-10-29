import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import CountriesJson from '../assets/countries.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-details-app';

  personalDetails : any;

  regexFistName : string = "^[A-Za-z]+$";

  regexName : string = "^[A-Za-z]*$";

  regexEmail : string = "^[A-Za-z0-9.]+[@]{1}[A-Za-z0-9]+[.]{1}[A-Za-z0-9.]+$";

  regexPhone : string = "^((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$";

  regexZipCode : string = "[0-9\-]+";

  countries : string[] = CountriesJson["countries"];

  ngOnInit() {
    this.personalDetails = new FormGroup({
      firstName: new FormControl("", Validators.compose([
        Validators.required, Validators.pattern(this.regexFistName)
      ])), 
      middleName: new FormControl("", Validators.pattern(this.regexName)), 
      lastName: new FormControl("", Validators.pattern(this.regexName)), 
      email: new FormControl("", Validators.compose([
        Validators.required, Validators.pattern(this.regexEmail)
      ])),
      phone: new FormControl("", Validators.compose([
        Validators.required, Validators.pattern(this.regexPhone)
      ])),
      dateOfBirth: new FormControl("", Validators.required),
      addressLine1: new FormControl("", Validators.required),
      addressLine2: new FormControl(""),
      city: new FormControl("", Validators.required),
      zipCode: new FormControl("", Validators.pattern(this.regexZipCode)),
      state: new FormControl("", Validators.required),
      country: new FormControl("", Validators.required)
    });
  }

  onPersonalDetailsFormSubmit(data : any) : void {
    for(const key in data) {
      console.log(`${key} = ${data[key]}`);
    }
  }

}
