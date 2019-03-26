class ListaNegociacoes {

    constructor(armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;

    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);

    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvazia() {

        this._negociacoes = [];
        this._armadilha = this;
    }
    ordena(criterio) {
        this._negociacoes.sort(criterio);        
    }
    inverteOrdem(){
        this._negociacoes.reverse();
    }
}