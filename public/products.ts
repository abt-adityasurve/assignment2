 
 
 
 const products =[
  { "id": 83, "title": "Blue & Black Check Shirt", "price": 29.99, "category": "mens-shirts", "image": "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp" },
  { "id": 84, "title": "Gigabyte Aorus Men Tshirt", "price": 24.99, "category": "mens-shirts", "image": "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/thumbnail.webp" },
  { "id": 85, "title": "Man Plaid Shirt", "price": 34.99, "category": "mens-shirts", "image": "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/thumbnail.webp" },
  { "id": 86, "title": "Man Short Sleeve Shirt", "price": 19.99, "category": "mens-shirts", "image": "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp" },
  { "id": 87, "title": "Men Check Shirt", "price": 27.99, "category": "mens-shirts", "image": "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/thumbnail.webp" },

  { "id": 162, "title": "Blue Frock", "price": 29.99, "category": "tops", "image": "https://cdn.dummyjson.com/product-images/tops/blue-frock/thumbnail.webp" },
  { "id": 163, "title": "Girl Summer Dress", "price": 19.99, "category": "tops", "image": "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/thumbnail.webp" },
  { "id": 164, "title": "Gray Dress", "price": 34.99, "category": "tops", "image": "https://cdn.dummyjson.com/product-images/tops/gray-dress/thumbnail.webp" },
  { "id": 165, "title": "Short Frock", "price": 24.99, "category": "tops", "image": "https://cdn.dummyjson.com/product-images/tops/short-frock/thumbnail.webp" },
  { "id": 166, "title": "Tartan Dress", "price": 39.99, "category": "tops", "image": "https://cdn.dummyjson.com/product-images/tops/tartan-dress/thumbnail.webp" },

  { "id": 177, "title": "Black Women's Gown", "price": 129.99, "category": "womens-dresses", "image": "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/thumbnail.webp" },
  { "id": 178, "title": "Corset Leather With Skirt", "price": 89.99, "category": "womens-dresses", "image": "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/thumbnail.webp" },
  { "id": 179, "title": "Corset With Black Skirt", "price": 79.99, "category": "womens-dresses", "image": "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/thumbnail.webp" },
  { "id": 180, "title": "Dress Pea", "price": 49.99, "category": "womens-dresses", "image": "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/thumbnail.webp" },
  { "id": 181, "title": "Marni Red & Black Suit", "price": 179.99, "category": "womens-dresses", "image": "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/thumbnail.webp" },

  { "id": 88, "title": "Nike Air Jordan 1 Red And Black", "price": 149.99, "category": "mens-shoes", "image": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp" },
  { "id": 89, "title": "Nike Baseball Cleats", "price": 79.99, "category": "mens-shoes", "image": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/thumbnail.webp" },
  { "id": 90, "title": "Puma Future Rider Trainers", "price": 89.99, "category": "mens-shoes", "image": "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp" },
  { "id": 91, "title": "Sports Sneakers Off White & Red", "price": 119.99, "category": "mens-shoes", "image": "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/thumbnail.webp" },
  { "id": 92, "title": "Sports Sneakers Off White Red", "price": 109.99, "category": "mens-shoes", "image": "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/thumbnail.webp" },

  { "id": 172, "title": "Blue Women's Handbag", "price": 49.99, "category": "womens-bags", "image": "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/thumbnail.webp" },
  { "id": 173, "title": "Heshe Women's Leather Bag", "price": 129.99, "category": "womens-bags", "image": "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/thumbnail.webp" },
  { "id": 174, "title": "Prada Women Bag", "price": 599.99, "category": "womens-bags", "image": "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/thumbnail.webp" },
  { "id": 175, "title": "White Faux Leather Backpack", "price": 39.99, "category": "womens-bags", "image": "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/thumbnail.webp" },
  { "id": 176, "title": "Women Handbag Black", "price": 59.99, "category": "womens-bags", "image": "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/thumbnail.webp" },

  { "id": 154, "title": "Black Sun Glasses", "price": 29.99, "category": "sunglasses", "image": "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/thumbnail.webp" },
  { "id": 155, "title": "Classic Sun Glasses", "price": 24.99, "category": "sunglasses", "image": "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/thumbnail.webp" },
  { "id": 156, "title": "Green and Black Glasses", "price": 34.99, "category": "sunglasses", "image": "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/thumbnail.webp" },
  { "id": 157, "title": "Party Glasses", "price": 19.99, "category": "sunglasses", "image": "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/thumbnail.webp" },
  { "id": 158, "title": "Sunglasses", "price": 22.99, "category": "sunglasses", "image": "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/thumbnail.webp" }
]

export default products;