import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  irUsuario( id: string ) {

    if ( !id ) {
      return;
    }

    this.router.navigate([ '/usuario', id ]);

  }

}
