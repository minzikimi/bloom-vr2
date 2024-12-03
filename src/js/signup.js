export function loadSignUp() {
  const template = document.getElementById("signup-page");
  const pageElement = template.content.cloneNode(true); 
  return pageElement; 
} 
// its not working