fetch('/data/recent-posts.json')
  .then(res => res.json())
  .then(posts => {
    const menuContainer = document.getElementById('blog-menu-list');

    const menuHTML = posts.map(post => `
      <li><a href="${post.link}">${post.titleforheader}</a></li>
    `).join('');

    menuContainer.innerHTML = menuHTML;
  })
  .catch(err => console.error("Error loading blog menu:", err));
