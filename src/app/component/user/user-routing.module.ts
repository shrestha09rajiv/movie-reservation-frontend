import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {MovieComponent} from './components/movie/movie.component';
import {MovieFormComponent} from './components/movie/movie-form/movie-form.component';
import {TicketComponent} from './components/ticket/ticket.component';
import {BookingFormComponent} from './components/booking/booking-form/booking-form.component';
import {BookingComponent} from './components/booking/booking.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {PaymentMethodComponent} from './components/payment-method/payment-method.component';
import {PaymentMethodFormComponent} from './components/payment-method/payment-method-form/payment-method-form.component';
import {BookingPaymentComponent} from './components/booking-payment/booking-payment.component';
import {UserBookingHistoryComponent} from './components/user-booking-history/user-booking-history.component';
import {BookingHistoryComponent} from './components/booking-history/booking-history.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      {
        path: 'movies',
        component: MovieComponent
      },
      {
        path: 'add/movie',
        component: MovieFormComponent
      },
      {
        path: 'bookings',
        component: BookingComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'book/:id',
        component: BookingFormComponent
      },
      {
        path: 'tickets',
        component: TicketComponent
      },
      {
        path: 'payments',
        component: PaymentMethodComponent
      },
      {
        path: 'add/payment',
        component: PaymentMethodFormComponent
      },
      {
        path: 'pay/:id',
        component: BookingPaymentComponent
      },
      {
        path: 'userHistory',
        component: UserBookingHistoryComponent
      },
      {
        path: 'history',
        component: BookingHistoryComponent
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
