import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { cargarUsuario } from '../../store/actions/usuario.actions';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;

  constructor( private router: ActivatedRoute,
               private store: Store<AppState>) { }

  ngOnInit() {

    this.store.select('usuario').subscribe( ({ user, loading, error }) => {
      this.usuario = user;
    });


    this.router.params.subscribe( ({ id }) => {
      
      this.store.dispatch( cargarUsuario({ id }) );

    });

  }

}
