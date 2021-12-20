import { Directive, Input } from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCustomFieldValidator]',
  providers: [ 
    { 
      provide: NG_VALIDATORS,
      useExisting: CustomFieldValidatorDirective,
      multi: true
    }, 
  ]
})
export class CustomFieldValidatorDirective implements Validator {

  constructor() { }
  @Input('firstField') firstField!: string;
  @Input('secondField') secondField!: string;
  validate(form: FormGroup): ValidationErrors | null {
    if(!form.controls[this.firstField] || !form.controls[this.secondField]) {
      return null;
    }
    if(
      Object.keys(form.controls[this.firstField].errors || []).filter(
        (u)=> u !== "compareFieldValidator"
      ).length > 0 ||
      Object.keys(form.controls[this.secondField].errors || []).filter(
        (u)=> u !== "compareFieldValidator"
        ).length > 0 ){
      return null;
    }

    if(form.controls[this.firstField].value !== form.controls[this.secondField].value){
      form.controls[this.firstField].setErrors({ compareFieldValidator: true });
      form.controls[this.secondField].setErrors({ compareFieldValidator: true });
      return { compareFieldValidator: true };
    }
    if(form.controls[this.firstField].hasError('compareFieldValidator'))
    {
      //@ts-ignore
      delete form.controls[this.firstField].errors['compareFieldValidator'];
      form.controls[this.firstField].setErrors(null);
    }
    if(form.controls[this.secondField].hasError('compareFieldValidator'))
    {
      //@ts-ignore
      delete form.controls[this.secondField].errors['compareFieldValidator'];
      form.controls.confirmPassword.setErrors(null);
    }
    return null;
  }

}
