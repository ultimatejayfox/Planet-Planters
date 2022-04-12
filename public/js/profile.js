// empty on purpose

// const { post } = require("../../controllers");

async function newFormHandler(event) {
    event.preventDefault();
    const common_name = document.querySelector("#common-name").value;
    const latin_name = document.querySelector("#latin-name").value;
    const plant_desc = document.querySelector("#plant-desc").value;

    const response = await fetch('/api/plant', {
        method: 'POST', 
        body: JSON.stringify({
            common_name,
            latin_name,
            plant_desc
        }),
        headers: {
            'Content-Type' : 'application/json',
        },
    });
    if (response.ok) {
        document.location.replace('/');
    } else { 
        alert('Failed to add plant!');
    }
}

document.querySelector('.form').addEventListener('submit', newFormHandler);