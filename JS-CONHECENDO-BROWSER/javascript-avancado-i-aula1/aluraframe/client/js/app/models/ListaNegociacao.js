class ListaNegociacaos {

    constructor() {


        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }


    get negociacoes() {


        // blindando o array para ele nao receber push de outro metodo
        return [].concat(this._negociacoes);
    }
}