import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { FilmeAdd } from "../models/filmeAdd";

@Injectable()
export class FilmeService {

    constructor(private http: HttpClient) {}

    public getAll(){
        return this.http.get(`${environment.apiUrl}filmes`)
    }

    public incluir(filmeAdd: FilmeAdd){
        return this.http.post(`${environment.apiUrl}filmes`, filmeAdd);   
    }


}