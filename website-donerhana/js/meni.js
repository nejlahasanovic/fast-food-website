document.addEventListener("DOMContentLoaded", function() {
   
    const menuItems = [
        { id: 1, name: "Doner Combo", description: "Doner + pomfrit + piće", price: "10.00 KM", image: "./img/osma.jpg" },
        { id: 2, name: "Durum Combo", description: "Durum + pomfrit + piće", price: "10.00 KM", image: "./img/petnaesta.jpg" },
        { id: 3, name: "Doner Box Combo", description: "Doner box + pomfrit + piće", price: "10.00 KM", image: "./img/donerbox.jpg" },
        { id: 4, name: "Doner Salata Combo", description: "Doner salata + pomfrit + piće", price: "10.00 KM", image: "./img/deveta.jpg" },
        { id: 5, name: "Doner", description: "Meso, sos, sezonska salata, lepina.", price: "6.00 KM", image: "./img_menu/doner.jpg" },
        { id: 6, name: "Durum", description: "Meso, sos, sezonska salata, tortilja.", price: "6.00 KM", image: "./img_menu/durum.jpg" },
        { id: 7, name: "Doner Box", description: "Meso, sos, sezonska salata, pomfrit.", price: "6.00 KM", image: "./img_menu/donerbox_salata.jpg" },
        { id: 8, name: "Doner Salata", description: "Meso, sos, sezonska salata.", price: "6.00 KM", image: "./img_menu/donerbox_salata.jpg" },
        { id: 9, name: "Pomfrit", description: "Fry'n Dip", price: "3.00 KM", image: "./img_menu/pomfrit.jpg" },
        { id: 10, name: "Onion Rings", description: "Pohovani luk", price: "4.00 KM", image: "./img_menu/luk.jpg" },
        { id: 11, name: "Lepina", description: "Svježe pečena lepina", price: "1.00 KM", image: "./img_menu/lepina.jpg" },
        { id: 12, name: "Voda", description: "Olimpija mineralna", price: "2.00 KM", image: "./img_menu/voda_jedan.jpg" },
        { id: 13, name: "Voda", description: "Olimpija prirodna", price: "2.00 KM", image: "./img_menu/voda_dva.jpg" },
        { id: 14, name: "Coca-Cola", description: "Coca-Cola regular 500ml", price: "2.50 KM", image: "./img_menu/kola.jpg" },
        { id: 15, name: "Coca-Cola", description: "Coca-Cola zero 500ml", price: "2.50 KM", image: "./img_menu/kola_zero.jpg" },
        { id: 16, name: "Fanta", description: "Fanta Orange 500ml", price: "2.50 KM", image: "./img_menu/fanta.jpg" },
        { id: 17, name: "Sprite", description: "Sprite 500ml", price: "2.50 KM", image: "./img_menu/sprite.jpg" },
        { id: 18, name: "Schweppes", description: "Schweppes Bitter Lemon 500ml", price: "2.50 KM", image: "./img_menu/sveps.jpg" }

    ];

    const menuContainer = document.getElementById('menu-sections');
    
   
    function displayMenuItems() {
        menuContainer.innerHTML = ''; 

        menuItems.forEach(item => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('menu-card');
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            cardDiv.appendChild(img);

            const cardInfo = document.createElement('div');
            cardInfo.classList.add('menu-card-info');
            
            const name = document.createElement('h3');
            name.textContent = item.name;
            cardInfo.appendChild(name);
            
            const description = document.createElement('p');
            description.textContent = item.description;
            cardInfo.appendChild(description);
            
            const price = document.createElement('div');
            price.classList.add('price');
            price.textContent = item.price;
            cardInfo.appendChild(price);
            
            cardDiv.appendChild(cardInfo);

            const actionsDiv = document.createElement('div');
            actionsDiv.classList.add('actions');

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.classList.add('edit-btn');
            actionsDiv.appendChild(editBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            actionsDiv.appendChild(deleteBtn);

            cardDiv.appendChild(actionsDiv);

            menuContainer.appendChild(cardDiv);

          
            editBtn.addEventListener('click', function() {
                editMenuItem(item.id);
            });

            deleteBtn.addEventListener('click', function() {
                deleteMenuItem(item.id);
            });
        });
    }


    function editMenuItem(itemId) {
        const item = menuItems.find(i => i.id === itemId);
        if (item) {
            const newName = prompt("Edit product name", item.name);
            const newDescription = prompt("Edit product description", item.description);
            const newPrice = prompt("Edit product price", item.price);
            const newImage = prompt("Edit product image URL", item.image);

            if (newName && newDescription && newPrice && newImage) {
                item.name = newName;
                item.description = newDescription;
                item.price = newPrice;
                item.image = newImage;
                displayMenuItems();
                alert("Product updated successfully!");
            }
        }
    }

   
    function deleteMenuItem(itemId) {
        const itemIndex = menuItems.findIndex(i => i.id === itemId);
        if (itemIndex !== -1) {
            if (confirm("Are you sure you want to delete this item?")) {
                menuItems.splice(itemIndex, 1); 

                
                displayMenuItems();
                alert("Item deleted successfully!");
            }
        }
    }

   
    displayMenuItems();
});
