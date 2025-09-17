const Pessoa = require('./Pessoa');
class PF extends Pessoa { // CORRIGIDO
  #cpf;
  setCPF(cpf){
    if(cpf){
      this.#cpf = cpf;
      return true;
    }else{
      return false;
    }
  }
  getCPF(){ return this.#cpf; }
}
module.exports = PF;