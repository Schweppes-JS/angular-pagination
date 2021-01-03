import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userData: User[] = [];
  isLoading: boolean = false;
  cardsAmount: number = 2;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.userData = users;
      this.isLoading = true;
    })
  }
}
