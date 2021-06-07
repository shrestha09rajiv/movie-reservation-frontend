import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingService} from '../booking.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  singleTicketCost: any;
  movieId: any;
  bookForm: any;


  constructor(private bookingService: BookingService, private router: ActivatedRoute, private route: Router) {
    this.buildForm();
  }

  get formControls() {
    return this.bookForm.controls;
  }

  ngOnInit(): void {
    this.movieId = this.router.snapshot.paramMap.get('id');
    this.bookingService.getTicketInfo(this.movieId).subscribe((data: any) => {
      console.log(data);
      this.singleTicketCost = data;
      this.formControls.unitCost.patchValue(data);
    }, error => {
      console.log(error);
    });
    console.log('hello');
  }

  onSubmit() {
    const formValue = this.bookForm.value;
    formValue.movieId = this.movieId;
    this.bookingService.save(formValue).subscribe(data => {
      console.log(data);
      this.route.navigate(['user/pay', data.object.id]);
    });

  }

  private buildForm() {
    this.bookForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      unitCost: new FormControl(this.singleTicketCost, Validators.required),
      totalCost: new FormControl('', Validators.required),
      totalTickets: new FormControl('', Validators.required)
    });
  }

  calculatePrice(event: KeyboardEvent) {
    const quantity = +(<HTMLInputElement>event.target).value;
    const totalCost = quantity * this.singleTicketCost;
    this.bookForm.get('totalCost').setValue(totalCost);
  }
}
