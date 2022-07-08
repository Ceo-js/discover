# vender

teste de anúncio:
1 campanha
CBO
50% do ticket do produto
3 conjuntos de anuncios
otimizar para compra
público aberto => genero, brazil, sem idade, sem interesse, sem posicionamento
1 anúncio por conjunto de anúncio
rodar por 3 dias

analisar as métricas da campanha:
tive lucro? + 20% => leva o anúncio vencedor para a próxima fase
            se não => repete outros anúncios
if( tive lucro ) {
    leva o melhor anúncio para o teste de público 
}


próxima fase:
teste de público:
1 campanha
ABO
1 anúncio por conjunto de anúncio
orçamento 50% em cada conjunto de anúncio
otimizar para compra
publico aberto em 1 anúncio
2 e 3 anúncio com 1 interesse diferente
1 anúncio por conjunto de anúncio
rodar por 2 dias

if( lucro ) {
    x
} else {
    volta pro teste de anúncio
}

teste de escala = {
    1 campanha : {
        CBO
        orç 2* orçamento
        otimizar pra compra
        publico vencedor
        e anuncio vencedor
        rodar por 2 dias
        conjunto de anúncio 1 : [],
        conjunto de anúncio 2 : [],
        conjunto de anúncio 3 : [],
    },
    regra : (
        if( +40% ) {
            aumenta 50% do orça
        } else if { se continuar com 40% aumenta + 50% 
        } else { continua no nível anterior }
    )


};
