export function loadContact() {
  const template = document.getElementById("contact-us-page");
  const pageElement = template.content.cloneNode(true); 
  return pageElement; 
}