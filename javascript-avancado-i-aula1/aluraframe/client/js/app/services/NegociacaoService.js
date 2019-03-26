class NegociacaoService {

    constructor(){
        this._http = new HttpService();
    }
    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {
         
            this._http.get('negociacoes/semana')
            .then(negociacoes => {
                resolve(negociacoes
                .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
            })
            .catch(erro => {
                console.log(erro);
                reject('não foi possivel obter as negociaçoes');
            });
        });
    }
    obterNegociacoesDaSemanaAnterior() {

        return new Promise((resolve, reject) => {
         
            this._http.get('negociacoes/anterior')
            .then(negociacoes => {
                resolve(negociacoes
                .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
            })
            .catch(erro => {
                console.log(erro);
                reject('não foi possivel obter as negociaçoes');
            });
        });
    }

    obterNegociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {
         
            this._http.get('negociacoes/retrasada')
            .then(negociacoes => {
                resolve(negociacoes
                .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
            })
            .catch(erro => {
                console.log(erro);
                reject('não foi possivel obter as negociaçoes');
            });
        });
    }
}