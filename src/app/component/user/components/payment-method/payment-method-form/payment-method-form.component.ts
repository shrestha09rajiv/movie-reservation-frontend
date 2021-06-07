import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PaymentMethodService} from '../payment-method.service';
import {NbToastrService} from '@nebular/theme';

@Component({
  selector: 'app-payment-method-form',
  templateUrl: './payment-method-form.component.html',
  styleUrls: ['./payment-method-form.component.css']
})
export class PaymentMethodFormComponent implements OnInit {

  paymentForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor(private paymentMethodService: PaymentMethodService, private router: Router, private toastrService: NbToastrService) {
  }

  get formControls() {
    return this.paymentForm.controls;
  }

  ngOnInit(): void {
    console.log('hello');
  }

  onSubmit() {
    const formValue = this.paymentForm.value;
    console.log(formValue);
    this.paymentMethodService.save(formValue).subscribe(data => {
      this.toastrService.show(data.message);
      this.router.navigate(['user/payments']);
      }
    );
  }

}
