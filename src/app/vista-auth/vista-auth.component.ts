import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-vista-auth',
  templateUrl: './vista-auth.component.html',
  styleUrls: ['./vista-auth.component.css']
})
export class VistaAuthComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
