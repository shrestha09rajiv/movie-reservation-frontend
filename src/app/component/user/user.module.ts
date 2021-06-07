import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {MovieComponent} from './components/movie/movie.component';
import {TicketComponent} from './components/ticket/ticket.component';
import {MovieFormComponent} from './components/movie/movie-form/movie-form.component';
import {NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule} from '@nebular/theme';
import {ReactiveFormsModule} from '@angular/forms';
import {BookingComponent} from './components/booking/booking.component';
import {BookingFormComponent} from './components/booking/booking-form/booking-form.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {PaymentMethodComponent} from './components/payment-method/payment-method.component';
import {UserBookingHistoryComponent} from './components/user-booking-history/user-booking-history.component';
import {BookingPaymentComponent} from './components/booking-payment/booking-payment.component';
import {PaymentMethodFormComponent} from './components/payment-method/payment-method-form/payment-method-form.component';
import {BookingHistoryComponent} from './components/booking-history/booking-history.component';


@NgModule({
  declarations: [
    UserComponent,
    MovieFormComponent,
    TicketComponent,
    MovieComponent,
    BookingComponent,
    BookingFormComponent,
    DashboardComponent,
    MovieComponent,
    MovieFormComponent,
    TicketComponent,
    BookingComponent,
    BookingFormComponent,
    PaymentMethodComponent,
    PaymentMethodFormComponent,
    BookingPaymentComponent,
    UserBookingHistoryComponent,
    BookingHistoryComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NbCardModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbIconModule,
    NbSidebarModule,
    NbMenuModule,
  ]
})
export class UserModule {
}
