function addItem() {
    var itemInput = document.getElementById('itemInput');
    var item = itemInput.value.trim();

    if (item !== '') {
        var groceryList = document.getElementById('groceryList');
        var listItem = document.createElement('li');
        listItem.textContent = item;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function() {
            groceryList.removeChild(listItem);
        };
        listItem.appendChild(deleteButton);

        groceryList.appendChild(listItem);
        itemInput.value = '';
    } else {
        alert('Please enter an item.');
    }
}
