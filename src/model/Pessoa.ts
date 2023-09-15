export
    class Pessoa {

    private nome: string;
    private cpf: string;
    private datadenascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;

    //metodo construtor
    public constructor(
        _nome: string,
        _cpf: string,
        _data_nascimento: Date,
        _tefone: string,
        _endereco: string,
        _altura: number,
        _peso: number) {

        this.nome = _nome;
        this.cpf = _cpf;
        this.datadenascimento = _data_nascimento
        this.telefone = _tefone;
        this.endereco = _endereco;
        this.altura = _altura
        this.peso = _peso;
    }
    // método GETTERS and SETTERS
    public getNome() { // get = recuperar
        return this.nome;
    }

    public setNome(_nome: string) {  //set =atribuir
        this.nome = _nome;
    }

    public getCPF() {
        return this.cpf;
    }

    public setCPF(_cpf: string) {
        this.cpf = _cpf;
    }

    public getdata_nascimento() {
        return this.datadenascimento
    }

    public setdata_nascimento(_data_nascimento: Date) {
        this.datadenascimento = _data_nascimento;
    }

    public gettelefone() {
        return this.nome;
    }

    public settelefone(_telefone: string) {
        this.telefone = _telefone;
    }

    public getaltura() {
        return this.nome;
    }

    public setaltura(_altura: number) {
        this.altura = _altura;
    }

    public getpeso() {
        return this.peso;
    }

    public setpeso(_peso: number) {
        this.peso = _peso;
    }

    // implementar os metodos 
    public falar(): void {
        // logica de negócio
        console.log(`${this.nome} está falando...`)
    }

    public falarfrase(_frase: string): void {
        //lógica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }

    public andar(): void {
        console.log(`${this.nome} está andando...`)
    }

    public andarQuilometros(_quilometros: number): void {
        setTimeout(() => {
            console.log(`${this.nome} caminhou ${_quilometros} quilometros`);
        }, 3000);
    }

    public comer(): void {
        console.log(`${this.nome} está comendo...`);
    }

    public comerPrato(_prato: string): void {
        console.log(`${this.nome} está comendo ${_prato}`);
    }
}