export function loadHero() {
  console.log("im clicked")
  const template = document.getElementById("hero-page");
  const pageElement = template.content.cloneNode(true); // Clone the template content
  return pageElement; // Return cloned task list element
}