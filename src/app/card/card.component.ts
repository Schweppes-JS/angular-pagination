import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { User } from '../models/User'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() user: User;
  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }

}
