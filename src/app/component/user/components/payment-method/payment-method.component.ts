import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PaymentMethodService} from "./payment-method.service";

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {

  payments: any;

  constructor(private paymentMethodService: PaymentMethodService, private router: Router) {
  }

  ngOnInit(): void {
    this.getPaymentMethods();
  }

  addPaymentMethod() {
    this.router.navigate(['user/add/payment']);
  }


  private getPaymentMethods() {
    this.paymentMethodService.getAll().subscribe((data: any) => {
      console.log(data);
      this.payments = data;
    }, error => {
      console.log("error");
    });
  }

}
