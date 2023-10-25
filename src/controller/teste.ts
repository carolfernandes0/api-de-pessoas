import { Pessoa } from "../model/Pessoa";

let pessoa = new Pessoa(`maria zeferina`, 
                            `66788`,
                            new Date(1972,8,29),
                           `9999999999999` ,
                           `Rua das corridas`,
                            165,
                            55);

pessoa.cadastroPessoa(pessoa);