import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingPaymentService} from './booking-payment.service';
import {PaymentMethodService} from '../payment-method/payment-method.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-booking-payment',
  templateUrl: './booking-payment.component.html',
  styleUrls: ['./booking-payment.component.css']
})
export class BookingPaymentComponent implements OnInit {

  bookingId: any;
  bookForm: any;
  bookFormControl: any;
  paymentMethods: any;
  data: any;
  movieId: any;
  userId: any;

  constructor(private bookingPaymentService: BookingPaymentService,
              private paymentMethodService: PaymentMethodService,
              private router: ActivatedRoute, private route: Router) {
  }

  get formControls() {
    return this.bookForm.controls;
  }

  ngOnInit(): void {
    this.getBookingInfo();
    this.getPaymentMethods();
    this.bookFormControl = new FormControl('Select Payment Method', [Validators.required]);

    this.bookForm = new FormGroup({
      paymentMethod: this.bookFormControl,
    });
  }

  getBookingInfo() {
    this.bookingId = this.router.snapshot.paramMap.get('id');
    this.bookingPaymentService.getBookingInfo(this.bookingId).subscribe(res => {
      this.data = res;
      this.movieId = this.data.movieId;
      this.userId = this.data.userId;
      console.log(res);
    });
  }


  onSubmit() {
    const data = this.bookForm.value;
    data.bookingId = this.bookingId;
    this.bookingPaymentService.pay(data).subscribe(
      res => {
        if (res) {
          this.route.navigate(['user/userHistory']);
        }
      }
    );

  }

  getPaymentMethods() {
    this.paymentMethodService.getAll().subscribe(data => {
      this.paymentMethods = data;
      console.log(this.paymentMethods);
    });
  }

}
