// Search the button
let botaoAddTime = document.querySelector("#add-time");
botaoAddTime.addEventListener('click', cloneField);

// When one click it

// Execute:
function cloneField () {
    // Duplicate the desired container
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true);

    // clear the fiels
    const fields = newFieldsContainer.querySelectorAll('input');

    fields.forEach(field => {
        field.value = "";
    })
    
    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldsContainer);
}