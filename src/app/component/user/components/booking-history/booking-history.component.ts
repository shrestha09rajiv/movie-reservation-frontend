import { Component, OnInit } from '@angular/core';
import {BookingService} from "../booking/booking.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  bookings: any;

  constructor(private bookingService: BookingService,private route: Router) {
  }

  ngOnInit(): void {
    this.bookingService.getBookingHistory().subscribe((data: any) => {
      console.log(data);
      this.bookings = data;
    }, error => {
      console.log(error);
    });
    console.log('hello');
  }

}
