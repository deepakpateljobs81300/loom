fetch('/data/recent-posts.json')
  .then(response => response.json())
  .then(posts => {
    const maxPosts = 3; // Show only 3 latest blogs
    const blogHTML = posts.slice(0, maxPosts).map(post => `
      <div class="col-lg-4 col-md-6 col-12">
        <div class="single-news">
          <div class="news-head">
            <img src="${post.image}" alt="#">
          </div>
          <div class="news-body">
            <div class="news-content">
              <div class="date">${post.date}</div>
              <h2><a href="${post.link}">${post.title}</a></h2>
              <p class="text">${post.description}</p>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    document.getElementById('home-blog-list').innerHTML = blogHTML;
  })
  .catch(err => console.error("Error loading blogs:", err));
