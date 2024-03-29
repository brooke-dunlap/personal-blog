//This event triggers when blog.html has been loaded
document.addEventListener('DOMContentLoaded', function(){
    const getPosts = []
    lsPosts = JSON.parse(localStorage.getItem('posts'));
    getPosts.push(lsPosts);

    const blogPosts = document.getElementById('article');

    //Loops through each post within local storage, applies stylings, and posts content
    for (let i = 0; i < getPosts.length; i++) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = '<h2>getPosts[i].title</h2>';
      
        blogPosts.appendChild(postElement);
    }
});


