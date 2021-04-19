package br.unicesumar.esoft7s2021.back.produto;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST)
public class ProdutoInválidoExcep extends RuntimeException{
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    public ProdutoInválidoExcep(String message){
        super(message);
    }
}
