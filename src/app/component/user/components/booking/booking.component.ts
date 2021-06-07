import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BookingService} from "./booking.service";
import {TicketService} from "../ticket/ticket.service";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookings: any;
  availableTickets: any;
  ticket: any;

  constructor(private bookingService: BookingService, private ticketService: TicketService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAvailableTickets();
  }

  private getBookings() {
    this.bookingService.getAvailableBooking().subscribe((data: any) => {
      console.log(data);
      this.bookings = data;
    }, error => {
      console.log("error");
    });
  }

  private getAvailableTickets() {
    this.ticketService.getAll().subscribe((data: any) => {
      console.log(data);
      this.availableTickets = data;
    }, error => {
      console.log("error");
    });
  }

  book(ticket:any) {
    this.ticket = ticket;
    this.router.navigate(['user/book/movie']);
  }

}
