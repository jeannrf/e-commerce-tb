import { getProducts, urlFor } from '../../lib/sanity';

export const prerender = false;

let cache: any = null;
let lastCacheTime = 0;
const CACHE_DURATION = 1000 * 60 * 5; // 5 minutos

export async function GET() {
  try {
    const now = Date.now();

    // Retornar caché si es válido (Súper rápido)
    if (cache && (now - lastCacheTime < CACHE_DURATION)) {
      return new Response(JSON.stringify(cache), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    const allProducts = await getProducts();

    const products = allProducts.map((p: any) => ({
      id: p._id,
      name: p.name,
      price: p.price,
      oldPrice: p.oldPrice,
      category: p.category,
      isNew: p.isNew,
      image: p.image ? urlFor(p.image).url() : null,
      description: p.description
    }));

    // Actualizar caché
    cache = products;
    lastCacheTime = now;

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error loading products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
