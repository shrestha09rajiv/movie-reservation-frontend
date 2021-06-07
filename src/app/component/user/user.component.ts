import {Component, OnInit} from '@angular/core';
import {NbMenuItem, NbSidebarService} from '@nebular/theme';
import {AuthService} from '../login/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private readonly sidebarService: NbSidebarService, private userService: AuthService) {
  }
  title = 'ticket-reservation-frontend';

  items: any;

  item: NbMenuItem[] = [
    {
      title: 'Logout',
      icon: 'person-outline',
    }
  ];

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }

  ngOnInit(): void {
    this.getSideNavMenus();
  }

  private getSideNavMenus() {
    this.userService.getSideNavMenus().subscribe(data => {
      console.log(data);
      this.items = data;
    });
  }

  logout() {
  this.userService.logout();
  }
}
