const PF = require('./PF'); // CORRIGIDO
class Aluno extends PF {
  #matricula;
  #curso;
  setMatricula(matricula){
    if(matricula){
      if((matricula.length === 8) && (matricula.startsWith("20"))){
        this.#matricula = matricula; // CORRIGIDO
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }
  getMatricula() { return this.#matricula; }
  setCurso(curso){
    if(curso){
      if(curso === 'ADS' || curso === 'SIS' || curso === 'SI'){ // CORRIGIDO
        this.#curso = curso; // CORRIGIDO
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }
  getCurso(){ return this.#curso }
}
module.exports = Aluno;

const w = new Aluno();
resposta = w.setNome('Pedro');
console.log(resposta); // true
console.log(w.getNome()); // 'Pedro'

resposta = w.setMatricula('20123456');
console.log(resposta); // true
console.log(w.getMatricula()); // '20123456'

resposta = w.setCurso('SI');
console.log(resposta); // true
if (resposta) {
  console.log(w.getCurso()); // 'SI'
} else {
  console.log("Curso Inválido");
}
