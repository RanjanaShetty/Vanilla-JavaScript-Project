const menuItems = [
    {
        name: "Burger",
        description: "Juicy beef patty with lettuce, tomato, and cheese",
        image: "burger.jpg"
    },
    {
        name: "Pizza",
        description: "Delicious pizza topped with pepperoni, mushrooms, and cheese",
        image: "pizza.jpg"
    },
    {
        name: "Salad",
        description: "Fresh salad with mixed greens, tomatoes, cucumbers, and vinaigrette dressing",
        image: "salad.jpg"
    },
    {
        name: "Pasta",
        description: "Spaghetti pasta with marinara sauce and meatballs",
        image: "pasta.jpg"
    },
    {
        name: "Sushi",
        description: "Assorted sushi rolls with soy sauce and wasabi",
        image: "sushi.jpg"
    },
    {
        name: "Steak",
        description: "Grilled steak with mashed potatoes and steamed vegetables",
        image: "steak.jpg"
    },
    {
        name: "Sandwich",
        description: "Classic sandwich with ham, cheese, lettuce, and tomato",
        image: "sandwich.jpg"
    },
    {
        name: "Soup",
        description: "Homemade vegetable soup with croutons",
        image: "soup.jpg"
    },
    {
        name: "Cake",
        description: "Decadent chocolate cake with whipped cream",
        image: "cake.jpg"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const menuContainer = document.getElementById("menu-items");

    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;

        const name = document.createElement("h2");
        name.textContent = item.name;

        const description = document.createElement("p");
        description.textContent = item.description;

        menuItem.appendChild(img);
        menuItem.appendChild(name);
        menuItem.appendChild(description);

        menuContainer.appendChild(menuItem);
    });
});
