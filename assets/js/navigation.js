document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);

      if (targetId === "top") { // Check if it's a "scroll to top" link
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = -40; // Adjust this value to your preference

          window.scroll({
            top: targetElement.offsetTop + offset,
            left: 0,
            behavior: "smooth"
          });
        }
      }
    });
  });
});
