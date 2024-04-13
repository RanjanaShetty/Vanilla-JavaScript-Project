function toggleAccordion(id) {
    const accordionItem = document.getElementById(id);
    const accordionContent = accordionItem.querySelector(".accordion-content");
    const accordionBtn = accordionItem.querySelector(".accordion-btn");
  
    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
      accordionBtn.textContent = "+";
    } else {
      accordionContent.style.display = "block";
      accordionBtn.textContent = "-";
    }
  }
  