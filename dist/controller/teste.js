"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("../model/Pessoa");
let pessoa = new Pessoa_1.Pessoa('carol', '11111111', new Date(2000, 9, 15), '000000', 'Rua Numero 1', 170, 70);
pessoa.falar();
pessoa.falarfrase("Olá sou carolina");
console.log("\n");
let pessoa2 = new Pessoa_1.Pessoa('kemy', '3333333', new Date(1972, 8, 29), '99999999', 'Rua das Corridas', 165, 55);
pessoa2.andar();
pessoa2.andarQuilometros(20);
console.log("\n");
let pessoa3 = new Pessoa_1.Pessoa('bel', '222222222', new Date(1978, 6, 19), '999999999', 'Rua das Lasanhas', 40, 15);
pessoa3.comer();
pessoa3.comerPrato("lasanha");
console.log("\n");
pessoa.mostraPessoa();
pessoa2.mostrapessoa();
pessoa3.mostraPessoa();
//# sourceMappingURL=teste.js.map