class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        if (itens.length == 0) {
            return "Não há itens no carrinho de compra!"
        }

        //logica para verificações
        //return 'Item extra não pode ser pedido sem o principal'

        var total = retornaValorTotalItem(itens)
        if (metodoDePagamento == "dinheiro") {  ///formas de pagamento            
            return "R$ " + (total * 0.95).toFixed(2).replace(".", ",");
        }
        else if (metodoDePagamento == "credito") {
            return "R$ " + (total * 1.03).toFixed(2).replace(".", ",");
        }
        else if (metodoDePagamento == "debito") {
            return "R$ " + total.toFixed(2).replace(".", ",");
        }
        else {
            console.log("forma de pagamento inválida")
        }

        return "";
    }

}

function retornaValorTotalItem(itens) {
    var total = 0; //conferir o total dos itens e suas verificações    
    itens.forEach(posicaoItem => {
        var produtos = posicaoItem.split(",")
    switch (produtos[0]) {
        case "cafe":
            total += 3.0 * produtos[1];
            break;
        case "chantily":
            total += 1.50;
            break;
        case "suco":
            total += 6.2;
            break;
        case "sanduiche":
            total += 6.5;
            break;
        case "queijo":
            total += 2.00
            break;
        case "salgado":
            total += 7.25
            break;
        case "combo1":
            total += 9.50
            break;
        case "combo2":
            total += 7.50
            break;
        default:
            "Não há itens no carrinho de compra!"
            break;
    }
})
    return total
}


export { CaixaDaLanchonete };
