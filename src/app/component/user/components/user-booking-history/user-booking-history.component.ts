import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingService} from "../booking/booking.service";

@Component({
  selector: 'app-user-booking-history',
  templateUrl: './user-booking-history.component.html',
  styleUrls: ['./user-booking-history.component.css']
})
export class UserBookingHistoryComponent implements OnInit {

  userId: any;
  bookings: any;

  constructor(private bookingService: BookingService, private router: ActivatedRoute, private route: Router) {
  }

  ngOnInit(): void {
    this.bookingService.getUserBookingHistory().subscribe((data: any) => {
      console.log(data);
      this.bookings = data;
    }, error => {
      console.log(error);
    });
    console.log('hello');
  }

}
