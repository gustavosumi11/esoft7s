package br.unicesumar.esoft7s2021.back.produto;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST)
public class ProdutoInvĂˇlidoExcep extends RuntimeException{
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    public ProdutoInvĂˇlidoExcep(String message){
        super(message);
    }
}
