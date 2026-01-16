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

export async function getProducts() {
  const query = `*[_type == "product"] {
    _id,
    name,
    price,
    oldPrice,
    category,
    isNew,
    image,
    description
  }`;
  const products = await client.fetch(query);
  return products;
}
