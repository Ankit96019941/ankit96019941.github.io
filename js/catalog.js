document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      // Highlight active button
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter products
      products.forEach(product => {
        if (category === "all" || product.getAttribute("data-category") === category) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  });

  // Contact button alert
  document.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("contact-btn")) {
      const phone = e.target.getAttribute("data-phone");
      alert("Please contact us at: " + phone);
    }
  });
});
