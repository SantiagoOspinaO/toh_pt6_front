import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-vista-registrar',
  templateUrl: './vista-registrar.component.html',
  styleUrls: ['./vista-registrar.component.css']
})
export class VistaRegistrarComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  

}
