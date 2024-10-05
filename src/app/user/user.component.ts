import {
  Component,
  computed,
  signal,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
// const randomIndex= Math.floor(Math.random()*DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user!: User;
  @Input({ required: true }) selected: boolean = false;
  @Output() select = new EventEmitter();
  // avatar = input.required<string>()
  // name = input <string>()

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user);
    console.log(this.selected);
  }
}
