import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class ErrorHandler {
    static handleError(error: Response | any){
        let errorMessage: string;
        if(error instanceof Response){
            switch(error.status){
                case 404:
                errorMessage = 'Página não encontrada.';
                    break;

                case 500:
                errorMessage = 'Erro Interno de Servidor.';
                    break;

                case 401:
                errorMessage = 'Erro nos dados fornecidos ao Servidor.';
                    break;

                default:
                errorMessage = 'Aconteceu algum erro.';
                    break;
            }
        } else {
            errorMessage = error.toString();
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}