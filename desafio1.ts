// let employee = {};
// employee.code = 10;
// employee.nome = 'Vini';

// Resolução 1
let employee = {
    code: 10,
    nome: 'Vini'
};
employee.code = 10;
employee.nome = 'Vini';

// Resolução 2
let funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'Vini'
}

// Resolução 3
interface IFuncionario {
    codigo: number,
    nome: string
}

let funcionario: IFuncionario = {
    codigo: 10,
    nome: 'Vini'
}