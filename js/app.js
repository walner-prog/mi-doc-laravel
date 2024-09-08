document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/api/posts/')
      .then(response => response.json())
      .then(posts => {
        const postsContainer = document.getElementById('posts');
        posts.forEach(post => {
          const postElement = document.createElement('div');
          postElement.className = 'col-md-4 mb-4';
          postElement.innerHTML = `
            <div class="card">
              <img src="${post.featured_image}" class="card-img-top" alt="${post.title}">
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">
                  Autor ID: ${post.author_id} <br>
                  Publicado en: ${new Date(post.published_at).toLocaleDateString()}
                </p>
                <a href="post.html?id=${post.id}" class="btn btn-primary">Ver Detalle</a>
              </div>
            </div>
          `;
          postsContainer.appendChild(postElement);
        });
      })
      .catch(error => console.error('Error fetching posts:', error));
  });
  