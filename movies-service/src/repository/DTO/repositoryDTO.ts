
export type IMovieDTO = {
  _id: string;
  titulo: string;
  sinopse: string;
  duracao: number;
  dataLancamento: Date | string;
  imagem: string;
  categorias: string[]; 
}