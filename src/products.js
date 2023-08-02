
const products = [
    {
      id: 1,
      name: "Adidas Samba",
      description: "Classic",
      price: 79.99,
      discountedPrice: null,
      rating: 4.5,
      imageURL: "samba.webp",
      category: 'Shoes',
      color: 'white',
      brand: 'Adidas',
    },
    {
      id: 2,
      name: "Nike tracksuit",
      description: "Comfortable",
      price: 49.99,
      discountedPrice: 24.99,
      rating: 3.8,
      imageURL: "tracksuit1.webp",
      category: 'Clothes',
      color: 'black',
      brand: 'Nike',
    },
    {
        id: 3,
        name: "Nike Dunk High",
        description: "Classic",
        price: 119.99,
        discountedPrice: 99.99,
        rating: 4.8,
        imageURL: "dunkHigh.webp",
        category: 'Shoes',
        color: 'white',
        brand: 'Nike',
      },
      {
        id: 4,
        name: "Adidas Gazelle",
        description: "Classic",
        price: 89.99,
        discountedPrice: null,
        rating: 4.0,
        imageURL: "gazelle.webp",
        category: 'Shoes',
        color: 'red',
        brand: 'Adidas',
      },
      {
        id: 5,
        name: "Adidas Niteball",
        description: "Modern",
        price: 69.99,
        discountedPrice: null,
        rating: 3.9,
        imageURL: "niteball.webp",
        category: 'Shoes',
        color: 'grey',
        brand: 'Adidas',
      },
      {
        id: 6,
        name: "Adidas Ozweego",
        description: "Modern",
        price: 79.99,
        discountedPrice: 69.99,
        rating: 3.6,
        imageURL: "ozweego.webp",
        category: 'Shoes',
        color: 'grey',
        brand: 'Adidas',
      },
      {
        id: 7,
        name: "Nike shorts",
        description: "Comfortable",
        price: 29.99,
        discountedPrice: null,
        rating: 4.8,
        imageURL: "shorts1.webp",
        category: 'Clothes',
        color: 'black',
        brand: 'Nike',
      },
      {
        id: 8,
        name: "Nike AIR FORCE 1",
        description: "Comfortable",
        price: 99.99,
        discountedPrice: null,
        rating: 4.6,
        imageURL: "airforceOrange.webp",
        category: 'Shoes',
        color: 'orange',
        brand: 'Nike',
      },
      {
        id: 9,
        name: "The North Face T-shirt",
        description: "Classic",
        price: 24.99,
        discountedPrice: null,
        rating: 4.1,
        imageURL: "northfaceWhite.webp",
        category: 'Clothes',
        color: 'white',
        brand: 'North Face',
      },
      {
        id: 10,
        name: "The North Face T-shirt",
        description: "Classic",
        price: 24.99,
        discountedPrice: null,
        rating: 4.1,
        imageURL: "northfaceBlack.webp",
        category: 'Clothes',
        color: 'black',
        brand: 'North Face',
      },
      {
        id: 11,
        name: "AIR MAX 97",
        description: "Classic",
        price: 119.99,
        discountedPrice: null,
        rating: 3.8,
        imageURL: "airmax97.webp",
        category: 'Shoes',
        color: 'grey',
        brand: 'Nike',
      },
      {
        id: 12,
        name: "T-Shirt",
        description: "Classic",
        price: 29.99,
        discountedPrice: 19.99,
        rating: 4.8,
        imageURL: "adidasT.webp",
        category: 'Clothes',
        color: 'white',
        brand: 'Adidas',
      },
      {
        id: 13,
        name: "Adidas Capmus",
        description: "Comfortable",
        price: 49.99,
        discountedPrice: null,
        rating: 3.6,
        imageURL: "campus.webp",
        category: 'Shoes',
        color: 'grey',
        brand: 'Adidas',
      },
      {
        id: 14,
        name: "Nike Hoodie",
        description: "Comfortable",
        price: 49.99,
        discountedPrice: 39.99,
        rating: 4.4,
        imageURL: "nikeHoodie.webp",
        category: 'Clothes',
        color: 'yellow',
        brand: 'Nike',
      },
      {
        id: 15,
        name: "Nike T-Shirt",
        description: "Modern",
        price: 29.99,
        discountedPrice: 19.99,
        rating: 3.7,
        imageURL: "nikeT.webp",
        category: 'Clothes',
        color: 'white',
        brand: 'Nike',
      },
      {
        id: 16,
        name: "Superstar",
        description: "Classic",
        price: 59.99,
        discountedPrice: null,
        rating: 4.5,
        imageURL: "superstar.webp",
        category: 'Shoes',
        color: 'black',
        brand: 'Adidas',
      },
      {
        id: 17,
        name: "Slides",
        description: "Comfortable",
        price: 49.99,
        discountedPrice: 24.99,
        rating: 3.8,
        imageURL: "theNorthFaceFlipFlops.webp",
        category: 'Shoes',
        color: 'yellow',
        brand: 'North Face',
      },
      {
        id: 18,
        name: "Courtic",
        description: "Classic",
        price: 49.99,
        discountedPrice: null,
        rating: 3.8,
        imageURL: "courtic.webp",
        category: 'Shoes',
        color: 'grey',
        brand: 'Adidas',
      },
      {
        id: 19,
        name: "Chuck 70",
        description: "Classic",
        price: 69.99,
        discountedPrice: 54.99,
        rating: 3.6,
        imageURL: "chuck70.webp",
        category: 'Shoes',
        color: 'white',
        brand: 'Converse',
      },
      {
        id: 20,
        name: "Terminator",
        description: "Modern",
        price: 59.99,
        discountedPrice: 39.99,
        rating: 3.2,
        imageURL: "terminator.webp",
        category: 'Shoes',
        color: 'white',
        brand: 'Nike',
      },
      {
        id: 21,
        name: "Hat",
        description: "Comfortable",
        price: 29.99,
        discountedPrice: 14.99,
        rating: 3.4,
        imageURL: "adidasHat.webp",
        category: 'Accessories',
        color: 'black',
        brand: 'Adidas',
      },
      {
        id: 22,
        name: "Backpack",
        description: "Classic",
        price: 29.99,
        discountedPrice: null,
        rating: 4.8,
        imageURL: "NikeBackpack.webp",
        category: 'Accessories',
        color: 'black',
        brand: 'Nike',
      },
      {
        id: 23,
        name: "Backpack",
        description: "Modern",
        price: 49.99,
        discountedPrice: 39.99,
        rating: 4.3,
        imageURL: "JordanBackpack.webp",
        category: 'Accessories',
        color: 'black',
        brand: 'Jordan',
      },
      {
        id: 24,
        name: "Bucket Hat",
        description: "Classic",
        price: 14.99,
        discountedPrice: null,
        rating: 3.8,
        imageURL: "nikeBucketHat.webp",
        category: 'Accessories',
        color: 'black',
        brand: 'Nike',
      },
      {
        id: 25,
        name: "Socks",
        description: "Comfortable",
        price: 19.99,
        discountedPrice: 9.99,
        rating: 4.6,
        imageURL: "nikeSocks.webp",
        category: 'Accessories',
        color: 'white',
        brand: 'Nike',
      },
      {
        id: 26,
        name: "Socks",
        description: "Comfortable",
        price: 9.99,
        discountedPrice: null,
        rating: 3.6,
        imageURL: "socksFila.webp",
        category: 'Accessories',
        color: 'white',
        brand: 'Fila',
      },
      {
        id: 27,
        name: "Terrex",
        description: "Comfortable",
        price: 89.99,
        discountedPrice: null,
        rating: 4.0,
        imageURL: "adidasTerrex.webp",
        category: 'Shoes',
        color: 'black',
        brand: 'Adidas',
      },
      {
        id: 28,
        name: "Jordan Socks",
        description: "Comfortable",
        price: 14.99,
        discountedPrice: null,
        rating: 3.9,
        imageURL: "jordanSocks.webp",
        category: 'Accessories',
        color: 'grey',
        brand: 'Jordan',
      },
      {
        id: 29,
        name: "Nike Hat",
        description: "Classic",
        price: 24.99,
        discountedPrice: null,
        rating: 3.7,
        imageURL: "nikeHat.webp",
        category: 'Accessories',
        color: 'black',
        brand: 'Nike',
      },
      {
        id: 30,
        name: "Stan Smith White",
        description: "Classic",
        price: 59.99,
        discountedPrice: null,
        rating: 4.4,
        imageURL: "adidasStanSmith.webp",
        category: 'Shoes',
        color: 'white',
        brand: 'Adidas',
      },
      {
        id: 31,
        name: "Stan Smith Black",
        description: "Classic",
        price: 59.99,
        discountedPrice: null,
        rating: 4.4,
        imageURL: "adidasStanSmithBlack.webp",
        category: 'Shoes',
        color: 'black',
        brand: 'Adidas',
      },
      {
        id: 32,
        name: "Nike Blazer",
        description: "Classic",
        price: 64.99,
        discountedPrice: null,
        rating: 3.4,
        imageURL: "nikeBlazer.webp",
        category: 'Shoes',
        color: 'grey',
        brand: 'Nike',
      },
      {
        id: 33,
        name: "Nike Trunks",
        description: "Comfortable",
        price: 19.99,
        discountedPrice: null,
        rating: 4.3,
        imageURL: "nikeTrunks.webp",
        category: 'Accessories',
        color: 'black',
        brand: 'Nike',
      },
      {
        id: 34,
        name: "Adidas NMD",
        description: "Comfortable",
        price: 89.99,
        discountedPrice: null,
        rating: 4.7,
        imageURL: "adidasNmd.webp",
        category: 'Shoes',
        color: 'grey',
        brand: 'Adidas',
      },
      {
        id: 35,
        name: "Adidas Hoodie",
        description: "Classic",
        price: 39.99,
        discountedPrice: null,
        rating: 3.8,
        imageURL: "adidasHoodie.webp",
        category: 'Clothes',
        color: 'white',
        brand: 'Adidas',
      },
      {
        id: 36,
        name: "Adidas Long Sleeve",
        description: "Comfortable",
        price: 29.99,
        discountedPrice: null,
        rating: 3.9,
        imageURL: "adidasLongSleeve.webp",
        category: 'Clothes',
        color: 'blue',
        brand: 'Adidas',
      },
      {
        id: 37,
        name: "Nike Hoodie",
        description: "Comfortable",
        price: 49.99,
        discountedPrice: null,
        rating: 3.6,
        imageURL: "nikeGreyHoodie.webp",
        category: 'Clothes',
        color: 'grey',
        brand: 'Nike'
      },
      {
        id: 38,
        name: "Nike Crew Fleece",
        description: "Classic",
        price: 29.99,
        discountedPrice: 24.99,
        rating: 4.0,
        imageURL: "nikeCrewFlece.webp",
        category: 'Clothes',
        color: 'grey',
        brand: 'Nike',
      },
      {
        id: 39,
        name: "Nike Crew Fleece",
        description: "Classic",
        price: 29.99,
        discountedPrice: 24.99,
        rating: 4.0,
        imageURL: "nikeYellowShirt.webp",
        category: 'Clothes',
        color: 'yellow',
        brand: 'Nike',
      },
      {
        id: 40,
        name: "Adidas Adimatic",
        description: "Modern",
        price: 69.99,
        discountedPrice: null,
        rating: 4.0,
        imageURL: "adidasAdimatic.webp",
        category: 'Shoes',
        color: 'orange',
        brand: 'Adidas',
      },
      {
        id: 41,
        name: "Jordan Hat",
        description: "Classic",
        price: 29.99,
        discountedPrice: null,
        rating: 4.0,
        imageURL: "jordanHat.webp",
        category: 'Accessories',
        color: 'black',
        brand: 'Jordan',
      },
      {
        id: 42,
        name: "Converse John Elliott",
        description: "Modern",
        price: 69.99,
        discountedPrice: null,
        rating: 4.2,
        imageURL: "converseJohnElliot.webp",
        category: 'Shoes',
        color: 'red',
        brand: 'Converse',
      },
      {
        id: 43,
        name: "Converse All Stars",
        description: "Classic",
        price: 59.99,
        discountedPrice: null,
        rating: 4.5,
        imageURL: "converseAllStars.webp",
        category: 'Shoes',
        color: 'black',
        brand: 'Converse',
      },
      {
        id: 44,
        name: "Adidas Socks",
        description: "Classic",
        price: 14.99,
        discountedPrice: null,
        rating: 4.4,
        imageURL: "adidasSocks.webp",
        category: 'Accessories',
        color: 'black',
        brand: 'Adidas',
      },
      {
        id: 45,
        name: "Adidas Socks",
        description: "Classic",
        price: 19.99,
        discountedPrice: null,
        rating: 4.4,
        imageURL: "adidasWhiteSocks.webp",
        category: 'Accessories',
        color: 'white',
        brand: 'Adidas',
      },

      
    
    // Add more products here if needed
  ];
  
  export default products;