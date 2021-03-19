package br.unicesumar.esoft7s2021.back.editora;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/editora")
public class EditoraController {
   
    
        @Autowired
        private EditoraService service;
    
        @GetMapping  
        public List<Editora> get(){
            return service.obterTodos();
        }
        @GetMapping("/{idParaEditar}")
        public Editora getById(@PathVariable("idParaEditar") String idParaEditar){
            return service.obterPeloId(idParaEditar);
        }

        @PutMapping("/{id}")
        public void put(@PathVariable String id, @RequestBody Editora editoraEditado) {
            service.salvar(editoraEditado);
        }
        @PostMapping
        public String post(@RequestBody Editora novo) {
            Editora editoraSalvo = service.salvar(novo);
            return editoraSalvo.getId();
        }
        @DeleteMapping("/{id}")
        public void delete(@PathVariable String id) {
            service.excluirPeloId(id);
        }
    }
