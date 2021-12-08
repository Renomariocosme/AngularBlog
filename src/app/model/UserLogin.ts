export class UserLogin{

    public id: number; //resolvido o problema das models sem contrustor, indo no ts.config.json e colocando embaixo do strict "strictPropertyInitialization": false,
    public nome: string;
    public usuario: string;
    public senha: string;
    public token: string;
    public foto: string;
    public tipo: string;

}