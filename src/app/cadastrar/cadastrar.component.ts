import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  Usuario: Usuario = new Usuario;
  confirmarSenha: string;
  tipoUsuario: string;
 
  ngOnInit() {
    window.scroll(0,0);
  }
  
  confirmSenha(event: any){
    this.confirmarSenha = event.target.value;
  }

  tipoUser(event: any){
    this.tipoUsuario =  event.target.value;
  }

  cadastrar(){
    this.Usuario.tipo = this.tipoUsuario;

    if(this.Usuario.senha != this.confirmarSenha){
          alert("A senhas estão incorretas 👉⚠👈")
    } else{
      this.authService.cadastrar(this.Usuario).subscribe((resp: Usuario) => {
        this.Usuario = resp;
        this.router.navigate(['/entrar'])
        alert("Usuário cadastrado com sucesso! 😳❤")
      })
    }


  }

}
