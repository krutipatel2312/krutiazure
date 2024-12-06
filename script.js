document.getElementById('addItem').addEventListener('click', function() {
    const newItemInput = document.getElementById('newItem');
    const newItemText = newItemInput.value.trim();
  
    if (newItemText) {
      const listItem = document.createElement('li');
      const textSpan = document.createElement('span');
      textSpan.textContent = newItemText;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete';
      deleteButton.addEventListener('click', function() {
        listItem.remove();
      });
  
      listItem.appendChild(textSpan);
      listItem.appendChild(deleteButton);
  
      document.getElementById('todoList').appendChild(listItem);
      newItemInput.value = '';
    } else {
      alert('Please enter an item.');
    }
  });
