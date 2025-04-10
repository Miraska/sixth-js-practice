// Задание 1: Получение элементов
console.log("Div элемент:", document.querySelector('div'));
console.log("UL элемент:", document.querySelector('ul'));
console.log("Второй LI (Пит):", document.querySelectorAll('li')[1]);

// Добавление класса к элементам li
document.querySelectorAll('li').forEach(li => {
    li.classList.add('list-item');
});

// Задание 3: Генерация блоков
document.getElementById('generateBlocks').addEventListener('click', function() {
    const count = prompt("Введите количество блоков:");
    const container = document.getElementById('blocksContainer');
    container.innerHTML = '';
    
    if (count && !isNaN(count)) {
        for (let i = 0; i < parseInt(count); i++) {
            const block = document.createElement('div');
            block.className = 'block';
            container.appendChild(block);
        }
    } else {
        alert("Пожалуйста, введите корректное число!");
    }
});

// Задание 4: Обработка формы
document.addEventListener('DOMContentLoaded', function() {
    const formContainer = document.createElement('div');
    const form = document.createElement('form');
    form.id = 'dynamicForm';
    
    const nameGroup = document.createElement('div');
    nameGroup.className = 'form-group';
    
    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'dynamicName';
    nameLabel.textContent = 'Имя:';
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'dynamicName';
    nameInput.name = 'name';
    nameInput.required = true;
    
    nameGroup.appendChild(nameLabel);
    nameGroup.appendChild(nameInput);
    
    const emailGroup = document.createElement('div');
    emailGroup.className = 'form-group';
    
    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'dynamicEmail';
    emailLabel.textContent = 'Email:';
    
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'dynamicEmail';
    emailInput.name = 'email';
    emailInput.required = true;
    
    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);
    
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Отправить';
    
    form.appendChild(nameGroup);
    form.appendChild(emailGroup);
    form.appendChild(submitButton);
    
    formContainer.appendChild(form);
    
    document.body.appendChild(formContainer);
    
    form.style.margin = '20px';
    form.style.padding = '20px';
    form.style.border = '1px solid #ddd';
    form.style.borderRadius = '5px';
});

