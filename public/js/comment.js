// const req = require("express/lib/request");

async function createComment(event) {
  // event.preventDefault();
  const newComment = document.querySelector('#comment-desc');
  console.log('this is your comment: ', newComment.textContent);

  const id = event.target.getAttribute('data-id');

  const response = await fetch(`/api/plants/${id}`, {
    method: 'POST', 
    body: JSON.stringify({
        newComment,
    }),
    headers: {
        'Content-Type' : 'application/json',
    },
  });
  if (response.ok) {
      console.log('response is ok');
      // document.location.reload();
  } else { 
      alert('Failed to add comment!');
  }
}

document.querySelector('#postButton').addEventListener('click', createComment())