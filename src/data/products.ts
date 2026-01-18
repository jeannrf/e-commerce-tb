export interface Product {
    id: string;
    name: string;
    price: number;
    oldPrice?: number;
    category: 'Camisetas' | 'Accesorios' | 'Retro';
    isNew?: boolean;
    image: string;
    description: string;
}

export const products: Product[] = [
    // Camisetas
    {
        id: '1',
        name: "Camiseta Local Alianza Lima 2026",
        price: 189,
        category: 'Camisetas',
        isNew: true,
        image: "/images/hero-jersey.png",
        description: "La piel del equipo del pueblo para la temporada 2026. Siente el orgullo blanquiazul."
    },
    {
        id: '2',
        name: "Camiseta Visitante 2026",
        price: 189,
        category: 'Camisetas',
        isNew: true,
        image: "/images/hero-jersey.png",
        description: "Diseño elegante para brillar en cualquier cancha. Edición limitada 2026."
    },
    {
        id: '3',
        name: "Camiseta Alternativa Color Grana 2026",
        price: 199,
        category: 'Camisetas',
        isNew: true,
        image: "/images/hero-jersey.png",
        description: "Inspirada en nuestra historia y tradición. Un color que impone respeto."
    },
    // Retro
    {
        id: '4',
        name: "Camiseta Retro 1987 Edición Especial",
        price: 169,
        oldPrice: 199,
        category: 'Retro',
        image: "/images/hero-jersey.png",
        description: "Homenaje a los potrillos. Una pieza de colección para el verdadero hincha."
    },
    {
        id: '5',
        name: "Camiseta Campeón 1997",
        price: 159,
        category: 'Retro',
        image: "/images/hero-jersey.png",
        description: "Revive el título que rompió la racha. Diseño clásico de los años 90."
    },
    {
        id: '6',
        name: "Chaqueta Retro 'Íntimos'",
        price: 219,
        category: 'Retro',
        isNew: true,
        image: "/images/hero-jersey.png",
        description: "Inspirada en la vestimenta de los años 70. Estilo y elegancia victoriana."
    },
    // Accesorios
    {
        id: '7',
        name: "Mochila Blanquiazul",
        price: 129,
        category: 'Accesorios',
        image: "/images/hero-jersey.png",
        description: "Espaciosa y resistente. Perfecta para el día a día o para ir al estadio."
    },
    {
        id: '8',
        name: "Gorra Snapback Tribuna SVR",
        price: 59,
        category: 'Accesorios',
        image: "/images/hero-jersey.png",
        description: "El accesorio infaltable para protegerte del sol con estilo."
    },
    {
        id: '9',
        name: "Bufanda 'Arriba Alianza'",
        price: 45,
        category: 'Accesorios',
        image: "/images/hero-jersey.png",
        description: "Para alentar en las noches frías de Copa. 100% acrílico de alta calidad."
    },
    {
        id: '10',
        name: "Llavero Escudo Alianza Lima",
        price: 15,
        category: 'Accesorios',
        image: "/images/hero-jersey.png",
        description: "Lleva tu pasión en cada llave. Metal con acabado premium."
    }
];
