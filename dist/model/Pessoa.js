"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    nome;
    cpf;
    datadenascimento;
    telefone;
    endereco;
    altura;
    peso;
    //metodo construtor
    constructor(_nome, _cpf, _data_nascimento, _tefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.datadenascimento = _data_nascimento;
        this.telefone = _tefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    // método GETTERS and SETTERS
    getNome() {
        return this.nome;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getCPF() {
        return this.cpf;
    }
    setCPF(_cpf) {
        this.cpf = _cpf;
    }
    getdata_nascimento() {
        return this.datadenascimento;
    }
    setdata_nascimento(_data_nascimento) {
        this.datadenascimento = _data_nascimento;
    }
    gettelefone() {
        return this.nome;
    }
    settelefone(_telefone) {
        this.telefone = _telefone;
    }
    getaltura() {
        return this.nome;
    }
    setaltura(_altura) {
        this.altura = _altura;
    }
    getpeso() {
        return this.peso;
    }
    setpeso(_peso) {
        this.peso = _peso;
    }
    // implementar os metodos 
    falar() {
        // logica de negócio
        console.log(`${this.nome} está falando...`);
    }
    falarfrase(_frase) {
        //lógica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }
    andar() {
        console.log(`${this.nome} está andando...`);
    }
    andarQuilometros(_quilometros) {
        setTimeout(() => {
            console.log(`${this.nome} caminhou ${_quilometros} quilometros`);
        }, 3000);
    }
    comer() {
        console.log(`${this.nome} está comendo...`);
    }
    comerPrato(_prato) {
        console.log(`${this.nome} está comendo ${_prato}`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map