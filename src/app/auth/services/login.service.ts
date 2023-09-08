import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario, Login } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  private LS_CHAVE: string = "usuarioLogado";


  public get usuarioLogado(): Usuario {
    let usu = localStorage[this.LS_CHAVE];
    return (usu ? JSON.parse(localStorage[this.LS_CHAVE]) : null);
    }
    public set usuarioLogado(usuario: Usuario) {
    localStorage[this.LS_CHAVE] = JSON.stringify(usuario);
    }
    logout() {
    delete localStorage[this.LS_CHAVE];
    }

    login(login: Login): Observable<Usuario | null> {
      let usu = new Usuario(1, "Razer-Func",
      login.login, login.senha, "FUNC");
      if (login.login == login.senha) {
      if (login.login == "admin") {
      usu = new Usuario(1, "Razer-Admin",
      login.login, login.senha, "ADMIN");
      }
      else if (login.login == "gerente") {
      usu = new Usuario(1, "Razer-Gerente",
      login.login, login.senha, "GERENTE");
      }
      return of(usu);
      }
      else {
      return of(null);
      }
      }

    }