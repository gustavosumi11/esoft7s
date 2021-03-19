package br.unicesumar.esoft7s2021.back.editora;
import java.util.List;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class EditoraService {
    @Autowired
    private EditoraRepository repository;

    public List<Editora> obterTodos(){
        return repository.findAll();
    }
    public Editora obterPeloId(String id) {
        return repository.findById(id).orElseGet(Editora::new);
    }
    public void excluirPeloId(String id) {
        repository.deleteById(id);
    }
    public Editora salvar(Editora editora) {
        return repository.save(editora);
    }
}
