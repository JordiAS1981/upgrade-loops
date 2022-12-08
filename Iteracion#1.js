const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
let camisas = 0;
for (let ropa of products) {
        if (ropa.includes('Camiseta')) {
                camisas++;
        }
}
console.log(camisas+' productos que contiene camisetas')