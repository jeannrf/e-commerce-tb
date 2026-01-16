import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: '3u2452q3',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

import fs from 'fs';
import path from 'path';

// Util para saber si estamos en el servidor antes de usar fs
const isServer = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

export async function getProducts() {
  // Si no estamos en el servidor (ej. build cliente), llamar a Sanity directo
  if (!isServer) {
    return fetchProductsFromSanity();
  }

  const CACHE_FILE = path.join(process.cwd(), 'products-cache.json');
  const CACHE_DURATION = 1000 * 60 * 60; // 1 hora
  const now = Date.now();

  // 1. Intentar leer del archivo local (Súper rápido para desarrollo)
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const stats = fs.statSync(CACHE_FILE);
      if (now - stats.mtimeMs < CACHE_DURATION) {
        const fileContent = fs.readFileSync(CACHE_FILE, 'utf-8');
        console.log("⚡ Usando productos de caché en disco (instantáneo)");
        return JSON.parse(fileContent);
      }
    }
  } catch (err) {
    // Ignorar error de lectura de archivo
  }

  return fetchProductsFromSanity(CACHE_FILE);
}

async function fetchProductsFromSanity(cachePath?: string) {
  const query = `*[_type == "product"] {
    _id,
    name,
    "slug": slug.current,
    price,
    oldPrice,
    "category": category->title,
    isNew,
    image,
    "gallery": gallery[].asset->url,
    description
  }`;

  try {
    console.log("🌐 Conectando a Sanity...");
    const products = await client.fetch(query);

    // Guardar en disco si es posible
    if (cachePath) {
      try {
        fs.writeFileSync(cachePath, JSON.stringify(products));
        console.log("💾 Productos guardados en disco");
      } catch (e) { console.error("Error guardando caché", e); }
    }

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getHeroData() {
  const query = `*[_type == "hero"][0] {
    title,
    subtitle,
    heroImage,
    buttonText,
    buttonLink,
    badgeText
  }`;

  try {
    const heroData = await client.fetch(query);
    return heroData;
  } catch (error) {
    console.error("Error fetching hero data:", error);
    return null;
  }
}
