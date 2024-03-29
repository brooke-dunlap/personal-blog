const username = document.getElementById('username');
const title = document.getElementById('title');
const comment = document.getElementById('comment');
const submitButton = document.querySelector('button');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const blogPost = {
        username: username.value,
        title: title.value,
        comment: comment.value
    }

    if (!blogPost.username || !blogPost.title || !blogPost.comment) {
        alert('Please make sure all fields are filled out.');
        return;
    } 

    
    let posts = [];

    JSON.parse(localStorage.getItem('blogPost'));
    posts.push(blogPost);

    localStorage.setItem('posts', JSON.stringify(posts));

    window.location.href ='blog.html';
});

