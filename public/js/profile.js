// empty on purpose

// const { post } = require("../../controllers");

async function newFormHandler(event) {
    event.preventDefault();
    const common_name = document.querySelector("#common-name").value;
    const latin_name = document.querySelector("#latin-name").value;
    const description = document.querySelector("#plant-desc").value;

    const response = await fetch('/api/plants', {
        method: 'POST', 
        body: JSON.stringify({
            common_name,
            latin_name,
            description
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

document.getElementById('postIt').addEventListener('click', newFormHandler);