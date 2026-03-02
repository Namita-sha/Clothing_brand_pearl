// ===== WOMEN PRODUCTS =====
import womenProducts, {
  shirtProducts as womenShirts,
  outerwearProducts as womenOuterwear,
  trousersProducts as womenTrousers,
  handbagsProducts as womenHandbags,
  footwearProducts as womenFootwear,
} from "../data/womenProducts";

// ===== MEN PRODUCTS =====
import {
  shirts as menShirts,
  trousers as menTrousers,
  outerwear as menOuterwear,
  footwear as menFootwear,
} from "../data/menProducts";

// ===== PRODUCT MAP =====
const productMap = {
  // Women
  "women-dresses": womenProducts,
  "women-shirts": womenShirts,
  "women-outerwear": womenOuterwear,
  "women-trousers": womenTrousers,
  "women-handbags": womenHandbags,
  "women-footwear": womenFootwear,

  // Men
  "men-shirts": menShirts,
  "men-trousers": menTrousers,
  "men-outerwear": menOuterwear,
  "men-footwear": menFootwear,
};

export const fetchProducts = async (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: productMap[category] || [] });
    }, 300);
  });
};