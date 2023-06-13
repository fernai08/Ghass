// JavaScript code for filtering gallery items
document.addEventListener("DOMContentLoaded", function () {
    const filterBtns = document.querySelectorAll("#filter-btns li");
    const galleryItems = document.querySelectorAll(".portfolio-gallery .item");

    // Add click event listener to each filter button
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const target = this.dataset.target;

        // Remove active class from all buttons
        filterBtns.forEach(function (btn) {
          btn.classList.remove("active");
        });

        // Add active class to the clicked button
        this.classList.add("active");

        // Filter gallery items based on the selected category
        galleryItems.forEach(function (item) {
          const itemId = item.dataset.id;

          if (itemId === target || target === "latest") {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        });
      });
    });
  });







