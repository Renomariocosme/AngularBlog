import { Postagem } from "./Postagem";

export class Usuario{

    public id: number; //resolvido o problema das models sem contrustor, indo no ts.config.json e colocando embaixo do strict "strictPropertyInitialization": false,
    public nome: string;
    public usuario: string;
    public senha: string;
    public foto: string;
    public tipo: string;
    public postagem: Postagem[]; // AQUI É FEITO O RELACIONAMENTO ENTRE ELAS;

}