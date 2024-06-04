const filters = ['todos','ramen', 'sushi', 'entradas', 'postres'];

const products = [
    {
        id: 0,
        name: 'Miso Ramen',
        description: 'A elegir pasta entre tallarines caseras, fideo de arroz, o udon. A elegir principal entre pollo rebozado o pollo teriyaki.',
        price: 9.50,
        category: "ramen"
    },
    {
        id: 1,
        name: 'Mochi',
        description: 'Dos piezas de pastel japonés hecho de mochigome, un pequeño grano de arroz glutinoso, de chocolate, matcha, mango o limón.',
        price: 2.50,
        category: "postres"
    },
    {
        id: 2,
        name: 'Shogun roll',
        description: 'Rollo de 8 piezas con espárrago frito, cangrejo y aguacate, albacora picante con salsa de soya y mostaza.',
        price: 8.25,
        category: "sushi"
    },
    {
        id: 3,
        name: 'Paitan Ramen',
        description: 'Paitan significa sopa blanca en japonés, cremoso y aterciopelado a base de verduras y pollo, cocido según la tradición.',
        price: 12.00,
        category: "ramen"
    },
    {
        id: 4,
        name: 'Imagawayaki',
        description: 'Dos panqueques de harina de trigo y huevos, relleno de pasta de judias dulces azuki.',
        price: 5.25,
        category: "postres"
    },
    {
        id: 5,
        name: 'California flambé roll ',
        description: 'Rollo de 8 piezas con cangrejo, aguacate y pepino, tempurizado y flambeado, con salsa de anguila.',
        price: 9.25,
        category: "sushi"
    },
    {
        id: 6,
        name: 'Kusa mochi',
        description: 'Es un tipo de wagashi. Está considerado un plato de la temporada primaveral. Se hace con mochi y hoja de yomogi. Rellena con anko.',
        price: 5.90,
        category: "postres"
    },
    {
        id: 7,
        name: 'Alaska roll',
        description: 'Rollo de 8 piezas con salmón, aguacate, pepino, queso crema cubierto de semillas de sésamo.',
        price: 6.50,
        category: "sushi"
    },
    {
        id: 8,
        name: 'Tonkotsu Ramen',
        description: 'El caldo de soya se prepara hirviendo huesos de cerdo en agua durante 12 horas, haciendo la soya espesa y cremosa.',
        price: 11.95,
        category: "ramen"
    },
    {
        id: 9,
        name: 'Fuwa Fuwa',
        description: 'Tarta de queso japonesa, ligera y esponjosa, contiene queso crema, leche, huevo, harina de trigo y azúcar.',
        price: 5.90,
        category: "postres"
    },
    {
        id: 10,
        name: 'Chintan Ramen',
        description: 'El caldo Chintan tiene una base de pollo y cerdo con un color claro. Su sabor es delicado y puedes saborear cada ingrediente en el que está hecho el Chintan.',
        price: 11.60,
        category: "ramen"
    },
    {
        id: 11,
        name: 'Dashi tofu',
        description: 'Cuatro piezas de migas de pan con tofu, fritas, con salsa de tempura.',
        price: 6.50,
        category: "entradas"
    },
    {
        id: 12,
        name: 'Taiyaki',
        description: 'Masa a base de harina en forma de pez, rellena de frijoles azuki, chocolate, helado o frutas.',
        price: 4.90,
        category: "postres"
    },
    {
        id: 13,
        name: 'Edamame',
        description: 'Cocinadas al vapor, sazonadas con sal kosher.',
        price: 4.75,
        category: "entrada"
    },
    {
        id: 14,
        name: 'Hakodate Ramen',
        description: 'Sopa ramen a base de sal. Las con fideos finos, rectos y sopa clara. Lleva verduras aromatizadas, algas, bonito y pollo.',
        price: 10.50,
        category: "ramen"
    },
    {
        id: 15,
        name: 'Rock & Roll roll',
        description: 'Rollo de 8 piezas con atún picante, aguacate, mango y pepino, cubierto de cangreso picante y atún blanco, con wasabi de miel.',
        price: 6.50,
        category: "sushi"
    },
    {
        id: 16,
        name: 'Melon pan',
        description: 'Pan blando, de forma redondeada crujiente por fuera con esencia de melón, chocolate o caramelo.',
        price: 2.90,
        category: "postres"
    },
    {
        id: 17,
        name: 'Kakigori',
        description: 'Nieve de hielo aderezado con sirope. Sabores: fresa, limón, té verde, uva, melón, blue Hawaii y otros. Endulzado con leche condensada. ',
        price: 4.50,
        category: "postres"
    },
    {
        id: 18,
        name: 'Wanton de cangrejo',
        description: 'Cinco piezas de wanton relleno con queso crema y cangrejo, fritas y cubiertas con salsa agridulce.',
        price: 8.00,
        category: "entradas"
    },
    {
        id: 19,
        name: 'Ramen Vegetariano',
        description: 'Caldo a base de miso fermentado, ligeramente picante acompanado de bambu, huevo, cebolleta, brotes de soja y cebolla frita.',
        price: 11.60,
        category: "ramen"
    },
    {
        id: 20,
        name: 'Pocky',
        description: 'Palitos de galleta cubiertos de chocolate negro, chocolate sabor a té verde, fresa o chocolate blanco.',
        price: 2.90,
        category: "postres"
    },
    {
        id: 21,
        name: 'Crystal roll',
        description: 'Rollo de 8 piezas cubierto con papel de arroz, con camarón tempurizado, salmón y espinaca, cubierto con salsa agridulce.',
        price: 6.50,
        category: "sushi"
    },
    {
        id: 22,
        name: 'Takoyaki',
        description: 'Bolas hechas a base de harina de trigo y pulpo con jengibre encurtido troceado y alga.',
        price: 7.50,
        category: "entradas"
    },
    {
        id: 23,
        name: 'Kare Kaiser Ramen',
        description: 'Camarones, cangrejo, huevo cocido, champiñones, brotes de soja, bambú, cebolla frita y bonito seco, a base de curry amarillo con leche de coco.',
        price: 10.50,
        category: "ramen"
    },
    {
        id: 24,
        name: 'Ostras',
        description: 'Ostras frescas servidas en salsa ponzu y cebollín. Contienen 2 raciones.',
        price: 12.50,
        category: "entradas"
    },
    {
        id: 25,
        name: 'Caterpillar roll',
        description: 'Rollo de 8 piezas con cangrejo, camarones fritos y pepino, cubierto de aguacate y salsa de anguila.',
        price: 6.50,
        category: "sushi"
    },
    {
        id: 26,
        name: 'Tempura de vegetales',
        description: 'Brócoli, cebolla, batata, pimiento rojo y verde, zanahoria y champiñones tempurizados con salsa agridulce.',
        price: 8.50,
        category: "entradas"
    },
    {
        id: 27,
        name: 'Maki roll',
        description: 'Rollo de 8 piezas, puede ser de atún, salmón, aguacate, cangrego, anguila o lubina envuelto en arroz y alga nori.',
        price: 6.50,
        category: "sushi"
    },
    {
        id: 28,
        name: 'Wakayama Ramen',
        description: 'Sopa con fideos finos y rectos, sopa a base de tonkotsu y salsa de soja, contiene costillas de cerdo y huevo hervido de yema líquida.',
        price: 12.00,
        category: "ramen"
    },
    {
        id: 29,
        name: 'Wanton lubina picante',
        description: 'Cuatro piezas de wanton relleno de lubina y jalapeño, fritas y cubiertas con salsa ponzu.',
        price: 8.00,
        category: "entradas"
    },
    {
        id: 30,
        name: 'Dorayaki',
        description: 'Dos bizcochos de forma redonda relleno de anko, que es una pasta de judías hecha con la variante de judías azuki.',
        price: 4.50,
        category: "postres"
    },
    {
        id: 31,
        name: 'Lobster roll',
        description: 'Rollo de 8 piezas con langosta frita, cangrejo picante y aguacate, cubierto con tobiko.',
        price: 6.50,
        category: "sushi"
    },
    {
        id: 32,
        name: 'Camarones yum-yum',
        description: 'Cuatro piezas de camarón frito con salsa yum-yum, servidos en una base de lechuga.',
        price: 8.75,
        category: "entradas"
    },
    {
        id: 33,
        name: 'Gyozas',
        description: 'Empanadillas de harina de trigo al vapor, rellenos de carne de cerdo o verduras, viene con salsa de soya.',
        price: 5.50,
        category: "entradas"
    },
    {
        id: 34,
        name: 'Onomichi Ramen',
        description: 'Sopa a base de salsa de soja con fideos planos y elásticos. Contiene pescado y tocino de cerdo. Aderezada con cebolletas, cerdo asado y brotes de bambú.',
        price: 11.95,
        category: "ramen"
    },
    {
        id: 35,
        name: 'Oishi roll',
        description: 'Rollo de 8 piezas con camarón tempurizado, aguacate, queso crema, cangrejo, salsa de anguila y salsa especial.',
        price: 6.50,
        category: "sushi"
    },
    {
        id: 36,
        name: 'Okonomiyaki',
        description: 'Una tortilla a la plancha de harina de trigo, ñame rallado, huevo y pulpo, cubierto de salsa okonomiyaki, katsuobushi, aonori y mayonesa.',
        price: 5.50,
        category: "entradas"
    }
];

export {filters, products}