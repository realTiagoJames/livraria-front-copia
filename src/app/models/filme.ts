import { Autor } from "./autor"
export interface Filme {
    _id: string,
    titulo: string,
    autor: Autor,
    editora: string,
    numeroPaginas: number
}