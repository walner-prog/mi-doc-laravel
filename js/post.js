document.addEventListener('DOMContentLoaded', function() {
    if (typeof markdownit === 'undefined') {
      console.error('markdown-it no está disponible.');
      return;
    }
  
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
  
    fetch(`http://localhost:3000/api/posts/${postId}`)
      .then(response => response.json())
      .then(post => {
        const postDetail = document.getElementById('post-detail');
        
        // Crear una instancia de markdown-it
        const md = window.markdownit();
        
        // Convertir el contenido Markdown a HTML
        const contentHtml = md.render(post.content);
  
        // Insertar el contenido convertido en el HTML
        postDetail.innerHTML = `
          <h2>${post.title}</h2>
          <p>Autor ID: ${post.author_id}</p>
          <p>Publicado en: ${new Date(post.published_at).toLocaleDateString()}</p>
          <div>${contentHtml}</div>
        `;
      })
      .catch(error => console.error('Error fetching post details:', error));
  });
  