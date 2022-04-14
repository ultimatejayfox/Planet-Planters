async function createComment(event) {
  event.preventDefault();
  
  console.log('here is the event? ', event);

  const newComment = document.getElementById('comment-desc').value;

  console.log('this is your comment: ', newComment);
  console.log(newComment);

  const id = event.target.getAttribute('data-id');
  console.log(id);

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
      document.location.reload();
  } else { 
      alert('Failed to add comment!');
  }
}

document
  .getElementById('postButton')
  .addEventListener('click', createComment);

async function delComment(event) {
  event.preventDefault();
  // grab comment.id from the button
  const id = event.target.getAttribute('data-id');
  console.log(id);
  const response = await fetch(`/api/comments/${id}`, {
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
  .querySelectorAll('.delComment')
  .forEach(item => item.addEventListener('click', delComment));
  // .addEventListener('click', delComment);