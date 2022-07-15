const products = [
    { id: 340005523, title: "Nombre de Producto1", description: "Descripción del producto 1", price: "$500", stock: 9, hero: "https://cdn.shopify.com/s/files/1/0526/4175/9421/products/WALRUS-AUDIO-M1-HIGH-FIDELITY-MODULATION-MACHINE_500x.jpg?v=1643036376" },
    { id: 340005678, title: "Nombre de Producto2", description: "Descripción del producto 2", price: "$800", stock: 6, hero: "https://cdn.shopify.com/s/files/1/0526/4175/9421/products/walrusaudiomakoseriesacs1_500x.png?v=1625897624000.jpg" },
    { id: 340005298, title: "Nombre de Producto2", description: "Descripción del producto 2", price: "$800", stock: 6, hero: "https://cdn.shopify.com/s/files/1/0526/4175/9421/products/WALRUS-AUDIO-MAKO-SERIES-D1-HIGH-FIDELITY-DELAY-V2_500x.jpg?v=1650557123" },
    { id: 340005169, title: "Nombre de Producto2", description: "Descripción del producto 2", price: "$800", stock: 6, hero: "https://cdn.shopify.com/s/files/1/0526/4175/9421/products/walrus-audio-polychrome_500x.png?v=1628111833" },
];

export const getData = new Promise((res, rej) => {
    //acciones que realizará la Promise...

    // Funcion que emula posible valor de error random.
    const randomError = () => {
        return Math.random() > 0.3;
    };
    setTimeout(() => {
        if (randomError()) {
            //ejecutará el resolve. Lo ponemos en un  setTimeout para emular tiempo de espera.
            res(products);
            console.warn("se resolvió la promise");
        } else {
            //ejecutará el reject.
            rej("Algo salió mal");
        }
    }, 3000);
});
