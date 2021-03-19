package br.unicesumar.esoft7s2021.back.editora;

import java.math.BigDecimal;
import java.time.LocalDate;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;


@Entity
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Editora {
    @Getter
    @Id
    @EqualsAndHashCode.Include
    private String id;
    @Getter
    @Setter
    private String nome;
    @Getter
    @Setter
    private LocalDate fundadaEm;
    @Getter
    @Setter
    @Column(scale = 2)
    private BigDecimal faturamentoMedio;
    

    public Editora() {
        this.id = UUID.randomUUID().toString();
    }

    public Editora(String nome, LocalDate fundadaEm, BigDecimal faturamentoMedio) {
        this();
        this.nome=nome;
        this.fundadaEm=fundadaEm;
        this.faturamentoMedio=faturamentoMedio;
    }    
   
    
}