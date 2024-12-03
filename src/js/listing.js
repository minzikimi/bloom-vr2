export function loadListing() {
  const template = document.getElementById("product-listing-page");
  const pageElement = template.content.cloneNode(true); 
  return pageElement; 
}