import products from './products.js';


let displayedProducts = [];
let currentCategory = "all";
let currentSortOption = "none";
let currentFilterOption = "all"

// Function to update the product counter
function updateProductCounter(displayedCount, totalCount) {
  const displayedCountSpan = document.getElementById("displayed-count");
  const totalCountSpan = document.getElementById("total-count");

  displayedCountSpan.textContent = displayedCount;
  totalCountSpan.textContent = totalCount;
}

// Function to create product tiles
function createProductTile(product) {
  const productTile = document.createElement("div");
  productTile.classList.add("product-tile");

  

  const productImageLink = document.createElement("a");
  productImageLink.href = "#";
  const productImage = document.createElement("img");
  productImage.src = `assets/${product.imageURL}`;
  productImage.alt = product.name;
  productImage.classList.add("product-image");
  productImageLink.appendChild(productImage);

 
  productTile.appendChild(productImageLink);

  const productName = document.createElement("h2");
  productName.textContent = product.name;
  productTile.appendChild(productName);

  const productDescription = document.createElement("p");
  productDescription.textContent = product.description;
  productTile.appendChild(productDescription);

  const productPrice = document.createElement("p");
  productPrice.textContent = "Price: $" + product.price.toFixed(2);
  productTile.appendChild(productPrice);

  
  if (product.discountedPrice !== null) {
    const discountedPrice = document.createElement("p");
    discountedPrice.textContent = "Discounted Price: $" + product.discountedPrice.toFixed(2)
    discountedPrice.style.color = 'red';
    productTile.appendChild(discountedPrice);
  }

  const productRating = document.createElement("p");
  productRating.textContent = "Rating: " + product.rating;
  productTile.appendChild(productRating);

  // Add to cart button
  const addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Add to Cart";
  productTile.appendChild(addToCartButton);

  // Add event listener to 'Add to Cart' button
  addToCartButton.addEventListener("click", handleAddToCartClick);

  return productTile;
}

function handleFilterChange(event) {
  currentFilterOption = event.target.value;
  renderFilteredProductTiles(currentCategory);
}

// Sorting function 
function sortDisplayedProducts() {
  switch (currentSortOption) {
    case "none":
      break;
    case "az":
      displayedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "za":
      displayedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "price-asc":
      displayedProducts.sort((a, b) => {
        const aPrice = a.discountedPrice !== null ? a.discountedPrice : a.price;
        const bPrice = b.discountedPrice !== null ? b.discountedPrice : b.price;
        return aPrice - bPrice;
      });
      break;
    case "price-desc":
      displayedProducts.sort((a, b) => {
        const aPrice = a.discountedPrice !== null ? a.discountedPrice : a.price;
        const bPrice = b.discountedPrice !== null ? b.discountedPrice : b.price;
        return bPrice - aPrice;
      });
      break;
    default:
      break;
  }
}

function handleSortChange(event) {
  currentSortOption = event.target.value;
  renderFilteredProductTiles(currentCategory);
}

function clearProductGrid() {
  const productGrid = document.querySelector(".product-grid");
  while (productGrid.firstChild) {
    productGrid.removeChild(productGrid.firstChild);
  }
}

// Function to render filtered product tiles
function renderFilteredProductTiles(category) {
  clearProductGrid();

  currentCategory = category;
  displayedProducts = filterProductsByCategoryAndOption(currentCategory, currentFilterOption);
  sortDisplayedProducts();

  const productsPerPage = 12;
  let startIndex = 0;
  let endIndex = Math.min(productsPerPage, displayedProducts.length);

  while (startIndex < endIndex) {
    const productTile = createProductTile(displayedProducts[startIndex]);
    document.querySelector(".product-grid").appendChild(productTile);
    startIndex++;
  }

  updateProductCounter(endIndex, displayedProducts.length);

  const loadMoreButton = document.getElementById("load-more");
  if (endIndex === displayedProducts.length) {
    loadMoreButton.style.display = "none";
  } else {
    loadMoreButton.style.display = "block";
  }
}

function filterProductsByCategoryAndOption(category, option) {
  if (category === "all" && option === "all") {
    return products;
  } else if (category === "all") {
    return products.filter((product) => product.color === option || product.brand === option);
  } else if (option === "all") {
    return products.filter((product) => product.category === category);
  } else {
    return products.filter((product) => product.category === category && (product.color === option || product.brand === option));
  }
}

// Load more button handler
function handleLoadMore() {
  const productGrid = document.querySelector(".product-grid");
  const displayedProductsCount = productGrid.children.length;
  const remainingProductsCount = displayedProducts.length - displayedProductsCount;

  if (remainingProductsCount > 0) {
    const productsPerPage = 12;
    const endIndex = Math.min(displayedProductsCount + productsPerPage, displayedProducts.length);

    let startIndex = displayedProductsCount;
    while (startIndex < endIndex) {
      const productTile = createProductTile(displayedProducts[startIndex]);
      productGrid.appendChild(productTile);
      startIndex++;
    }

    updateProductCounter(endIndex, displayedProducts.length);

    const loadMoreButton = document.getElementById("load-more");
    if (endIndex === displayedProducts.length) {
      loadMoreButton.style.display = "none";
    } else {
      loadMoreButton.style.display = "block";
    }
  }
}

// Category handler
function handleCategoryItemClick(event) {
  const category = event.target.dataset.category;
  if (category) {
    renderFilteredProductTiles(category);
  }
}

// Function to initialize the page
function initializePage() {

  renderFilteredProductTiles("all");

 
  const loadMoreButton = document.getElementById("load-more");
  loadMoreButton.addEventListener("click", handleLoadMore);

 
  const categoryItems = document.querySelectorAll(".category-item");
  categoryItems.forEach((item) => {
    item.addEventListener("click", handleCategoryItemClick);
  });


  const sortDropdown = document.getElementById("sort");
  sortDropdown.addEventListener("change", handleSortChange);

 
  const filterSelect = document.getElementById("filter-select");
  filterSelect.addEventListener("change", handleFilterChange);
}




// Function to show the modal
function showModal() {
  const modal = document.getElementById("custom-modal");
  modal.style.display = "block";

  const modalOkButton = document.getElementById("modal-ok-button");
  modalOkButton.addEventListener("click", hideModal);

  window.addEventListener("click", handleModalOutsideClick);
}

// Function to hide the modal
function hideModal() {
  const modal = document.getElementById("custom-modal");
  modal.style.display = "none";
}


function handleModalOutsideClick(event) {
  const modal = document.getElementById("custom-modal");
  if (event.target === modal) {
    hideModal();
  }
}


function handleAddToCartClick() {
  showModal();
}

document.addEventListener("DOMContentLoaded", initializePage);