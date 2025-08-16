fetch('/data/recent-posts.json')
  .then(response => response.json())
  .then(posts => {
    const maxPosts = 3; // Change this if you want more posts
    const recentPostsHTML = `
      <div class="single-widget recent-post">
        <h3 class="title">Recent post</h3>
        ${posts.slice(0, maxPosts).map(post => `
          <div class="single-post">
            <div class="image">
              <img src="${post.image}" alt="#">
            </div>
            <div class="content">
              <h5><a href="${post.link}">${post.title}</a></h5>
              <ul class="comment">
                <li><i class="fa fa-calendar" aria-hidden="true"></i>${post.date}</li>
                <li><i class="fa fa-commenting-o" aria-hidden="true"></i>${post.comments}</li>
              </ul>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    document.getElementById('recent-posts-widget').innerHTML = recentPostsHTML;
  })
  .catch(error => console.error('Error loading recent posts:', error));
