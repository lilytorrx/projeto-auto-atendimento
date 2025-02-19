-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_idRestaurante_fkey";

-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_idCategoriaMenu_fkey";

-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_idRestaurante_fkey";

-- DropForeignKey
ALTER TABLE "categoriaMenu" DROP CONSTRAINT "categoriaMenu_idRestaurante_fkey";

-- DropForeignKey
ALTER TABLE "pedidoProdutos" DROP CONSTRAINT "pedidoProdutos_idPedido_fkey";

-- DropForeignKey
ALTER TABLE "pedidoProdutos" DROP CONSTRAINT "pedidoProdutos_idProduto_fkey";

-- AddForeignKey
ALTER TABLE "categoriaMenu" ADD CONSTRAINT "categoriaMenu_idRestaurante_fkey" FOREIGN KEY ("idRestaurante") REFERENCES "Restaurante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_idRestaurante_fkey" FOREIGN KEY ("idRestaurante") REFERENCES "Restaurante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_idCategoriaMenu_fkey" FOREIGN KEY ("idCategoriaMenu") REFERENCES "categoriaMenu"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_idRestaurante_fkey" FOREIGN KEY ("idRestaurante") REFERENCES "Restaurante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidoProdutos" ADD CONSTRAINT "pedidoProdutos_idProduto_fkey" FOREIGN KEY ("idProduto") REFERENCES "Produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidoProdutos" ADD CONSTRAINT "pedidoProdutos_idPedido_fkey" FOREIGN KEY ("idPedido") REFERENCES "Pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;
