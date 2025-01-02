const allLinks = document.querySelectorAll("nav a");

allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        console.log(`Clicked link: ${link.href}`);
    });
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// events //////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// view_item_list event//////////////////////////////////////////////////////
// Create an Intersection Observer
const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // Check if the element is visible in the viewport
        if (entry.isIntersecting) {
          // Push data to the dataLayer
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "view_item_list",
            ecommerce: {
              item_list_id: "1", // Replace with dynamic data if needed
              item_list_name: "plp collection",
              items: [
                { item_id: "SKU_1", item_name: "Apple", index: 0, item_category: "fruits", price: 2 },
                { item_id: "SKU_2", item_name: "Banana", index: 1, item_category: "fruits", price: 53.3 },
                { item_id: "SKU_3", item_name: "Carrots", index: 2, item_category: "vegetables", price: 23 },
                { item_id: "SKU_4", item_name: "Tomatoes", index: 3, item_category: "fruits", price: 44 },
                { item_id: "SKU_5", item_name: "Milk", index: 4, item_category: "drinks", price: 2 },
              ],
            },
          });
  
          // Stop observing after the event is pushed (optional)
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null, // Default is the viewport
      threshold: 0.5, // Trigger when 50% of the element is visible
    }
  );
  
  // Select the element to observe
  const targetElement = document.querySelector("#product-list"); // Replace with your element's ID or class
  if (targetElement) {
    observer.observe(targetElement);
  }
  
