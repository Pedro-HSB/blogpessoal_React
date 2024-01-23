import Postagem from "./Postagem";

export default interface Usuario{
    id:number;
    nome:string;
    usuario:string;
    senha:string;
    foto:string;
    postagem?:Postagem|null; // postagem e um vetor o usuario pode ter uma ou nao 
    //e na hora de criar o usuario seria necessario ter 
}