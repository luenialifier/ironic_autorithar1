import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.page.html',
  styleUrls: ['./journals.page.scss'],
})
export class JournalsPage implements OnInit {
userId:any
  constructor(private authServeices:AuthenticationService) { }

  ngOnInit() {
    this.authServeices.getProfile().then(user => {
      this.userId = user.uid
      console.log(this.userId);
    })
  }

}
