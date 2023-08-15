class Veiculo {
    #marca;
    #modelo;
    #ano_de_fabricacao;

    constructor(marca, modelo, ano_de_fabricacao) {
        if (this.constructor === Veiculo) {
            throw new Error("A classe abstrata Veículo não pode ser instanciada.");
        }

        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano_de_fabricacao = ano_de_fabricacao;
    }

    get marca() { return this.#marca }
    get modelo() { return this.#modelo }
    get ano_de_fabricacao() { return this.#ano_de_fabricacao }

    set marca(marca) { this.#marca = marca }
    set modelo(modelo) { this.#modelo = modelo }
    set ano_de_fabricacao(ano_de_fabricacao) { this.#ano_de_fabricacao = ano_de_fabricacao }

    listarCaracteristicas() {
        return `Marca: ${this.#marca}
Modelo: ${this.#modelo}
Ano de fabricação: ${this.#ano_de_fabricacao}`
    }
}

class Caminhao extends Veiculo {
    #carga_maxima;

    constructor(marca, modelo, ano_de_fabricacao, carga_maxima) {
        super(marca, modelo, ano_de_fabricacao);

        this.#carga_maxima = carga_maxima;
    }

    get carga_maxima() { return this.#carga_maxima }
    
    set carga_maxima(carga_maxima) { this.#carga_maxima = carga_maxima }

    listarCaracteristicas() {
        return `${super.listarCaracteristicas()}
Carga máxima: ${this.#carga_maxima}`
    }
}

const veiculo = new Veiculo("Ford", "Ka", 2010); // Error: A classe abstrata Veículo não pode ser instanciada.
const caminhao = new Caminhao("Chevrolet", "Desconhecido", 2009, 500);

console.log(caminhao.listarCaracteristicas()); // Marca: Chevrolet
// Modelo: Desconhecido
// Ano de fabricação: 2009
// Carga máxima: 500

console.log(caminhao.carga_maxima); // 500
