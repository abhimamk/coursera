import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material'
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user = {username: '', password:'', remember : false};
  constructor(public dialoRef:MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }
onSubmit()
{
  console.log('user:',this.user);
  this.dialoRef.close();
}
}
