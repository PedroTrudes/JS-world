class ListaNegociacaos {

    constructor(armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        this._armadilha(this);
       // Reflect.apply(this._armadilha, this._contexto, [this])
    }


    get negociacoes() {
        // blindando o array para ele nao receber push de outro metodo
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
        this._armadilha(this);
        //Reflect.apply(this._armadilha, this._contexto, [this])


    }
}