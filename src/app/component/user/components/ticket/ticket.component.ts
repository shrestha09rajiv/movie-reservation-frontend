import { Component, OnInit } from '@angular/core';
import {MovieService} from "../movie/movie.service";
import {Router} from "@angular/router";
import {TicketService} from "./ticket.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets: any;

  constructor(private ticketService: TicketService, private router: Router) {
  }

  ngOnInit(): void {
    this.getTickets();
  }

  private getTickets() {
    this.ticketService.getAll().subscribe((data: any) => {
      console.log(data);
      this.tickets = data;
    }, error => {
      console.log("error");
    });
  }



}
