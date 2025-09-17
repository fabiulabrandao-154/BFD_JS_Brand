//código construído na pasta "/Pessoas/usaPFDAO.mjs"

import PF from './Pessoas/PF.js';
import PFDAO from './Pessoas/DAOs/PFDAO.mjs';                              
import Endereco from './Pessoas/Endereco.js';          
import Telefone from './Pessoas/Telefone.js';          
import IE from './Pessoas/IE/IEclss.js';                
import Titulo from './Pessoas/Titulo.js';

// ========== Criação do objeto PF ==========

const pf = new PF();                                   
pf.setNome("Pedro");
pf.setCPF('123.456.789-10');                                   
pf.setEmail("pedro@ifb.edu.br");                    

// ========== Endereço ==========

const end = new Endereco();                            
end.setLogradouro("QNM 40");                           
end.setCep("12345-678");                              
pf.setEndereco(end);                                 

// ========== Telefones ==========

const fone = new Telefone();                           
fone.setDdd("61");                                    
fone.setNumero("99999-8888");                          
pf.addTelefone(fone);                                  

const fone2 = new Telefone();                          
fone2.setDdd("62");                                     
fone2.setNumero("99999-7777");                          
pf.addTelefone(fone2);                                  

// ========== Inscrição Estadual ==========

const ie = new IE();                                    
ie.setNumero('123456');                                 
ie.setEstado('SP');                                    
ie.setDataRegistro(new Date());                         
pf.setIE(ie);

// ========== Título ==========

const titulo = new Titulo();
titulo.setNumero('123456789101');
titulo.setZona('123');
titulo.setSecao('1234');
pf.setTitulo(titulo);

// ========== DAO: Serialização, Salvamento e Leitura ==========

const pfdao = new PFDAO(pf);                            

var x = pfdao.toJSON();                                 
pfdao.saveJSON();                                       

console.log(x);                                         
console.log(JSON.stringify(x));                        
console.log(pfdao.recoveryJSON());