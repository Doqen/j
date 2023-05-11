fetch('articles.json')
  .then(response => response.json())
  .then(data => {
    displayGamingArticles(data);
  })
  .catch(error => {
    console.error('Error fetching articles:', error);
  });

  function displayGamingArticles(articles) {
    const gamingSection = document.getElementById('gamingSection');
  
    const gamingArticles = articles.filter(article => article.tag === 'Gaming');
    gamingArticles.sort((a, b) => b.id - a.id);
  
    const [latestArticle, ...restArticles] = gamingArticles;
    const limitedRestArticles = restArticles.slice(0, 3);
  
    const latestArticleHTML = `
      <div class="col-12 mb-4">
        <div class="card">
          <img src="${latestArticle.image_frontpage}" class="card-img-top" alt="${latestArticle.title}">
          <div class="card-body">
            <h5 class="card-title">${latestArticle.title}</h5>
            <p class="card-text">${latestArticle.content_index}</p>
            <a href="${latestArticle.html_name}" class="btn btn-danger">Read more</a>
          </div>
        </div>
      </div>
    `;
  
    gamingSection.innerHTML += latestArticleHTML;
  
    limitedRestArticles.forEach(article => {
      const articleHTML = `
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-sm-6">
              <img src="${article.image_frontpage}" class="card-img" alt="${article.title}"">
            </div>
            <div class="col-sm-6">
              <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.content_index}</p>
                <p class="card-text"><small class="text-muted">${article.date}</small></p>
              </div>
            </div>
          </div>
        </div>
    `;
      gamingSection.innerHTML += articleHTML;
    });
  }
  