import { loadSignUp } from "./signup.js";

export function onClickLogIn() {
  const loginIcon = document.getElementById("login-icon");
  const loginModal = document.getElementById("loginModal");
  const closeButton = loginModal.querySelector(".close-button");

  if (loginIcon && loginModal && closeButton) {
      loginIcon.addEventListener("click", (e) => {
          e.preventDefault();
          loginModal.showModal(); // Open the modal
      });

      closeButton.addEventListener("click", () => {
          loginModal.close(); // Close the modal
      });

      // Optional: Close modal when clicking outside of it
      loginModal.addEventListener("click", (e) => {
          if (e.target === loginModal) {
              loginModal.close();
          }
      });
  } else {
      console.error("Can't find modal elements!");
  }

  const signupButton = document.querySelector(".signup-button");
        signupButton.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default action if necessary
            loginModal.close(); // Close the modal first
            loadSignUp();
        });
}