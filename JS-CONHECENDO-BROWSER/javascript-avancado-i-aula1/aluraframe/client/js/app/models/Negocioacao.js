class Negociacao {

    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this);//para depois que o construtor for criado ele não poder sofrer alterações
    }
    obtemVolume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }
    
    get quantidade() {
        return this._quantidade;
    }
    
    get valor(){
        return this._valor;
    }

    get volume(){
        return this.obtemVolume();
    }
}