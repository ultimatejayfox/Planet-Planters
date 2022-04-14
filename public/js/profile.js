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
        document.location.reload();
    } else { 
        alert('Failed to add plant!');
    }
}

document
    .getElementById('postIt')
    .addEventListener('click', newFormHandler);

async function delPlant(event) {
    event.preventDefault();
    // grab comment.id from the button
    const id = event.target.getAttribute('data-id');
    console.log(id);
    const response = await fetch(`/api/plants/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
        console.log('response is ok');
        document.location.reload();
    } else {
        alert('Failed to delete comment!');
    }
  }

  document
  .querySelectorAll('.delBtn')
  .forEach(item => item.addEventListener('click', delPlant));