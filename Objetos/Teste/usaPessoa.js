const Aluno = require('./Aluno');

const w = new Aluno();
let resposta = w.setNome('Pedro');
console.log(resposta); // true
console.log(w.getNome()); // 'Pedro'

resposta = w.setMatricula('20123456');
console.log(resposta); // true
console.log(w.getMatricula()); // '20123456'

resposta = w.setCurso('SIS');
console.log(resposta); // true
console.log(w.getCurso()); // 'SIS'