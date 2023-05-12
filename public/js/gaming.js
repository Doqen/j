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
    <div class="card card-a">
    <a href="${latestArticle.html_name}"><img src="${latestArticle.image_frontpage}" class="card-img-top card-img-a" alt="${latestArticle.title}"></a>
      <div class="card-body">
      <a href="${latestArticle.html_name}"><h5 class="card-title">${latestArticle.title}</h5></a>
        <p class="card-text">${latestArticle.content_index}</p>
        <a href="${latestArticle.html_name}" class="btn btn-danger">Read more</a>
      </div>
    </div>
  </div>
`;

gamingSection.innerHTML += latestArticleHTML;

limitedRestArticles.forEach(article => {
  const articleHTML = `
  <div class="col-md-4 mb-4">
  <div class="card card_mob">
  <a href="${article.html_name}"><img src="${article.image_frontpage}" class="card-img-top card-img-b" alt="${article.title}" style="object-fit: cover; object-position: center; height: 100%;"></a>
    <div class="card-body">
    <a href="${article.html_name}"><h5 class="card-title">${article.title}</h5></a>
    <p class="card-text"><small class="text-muted">${article.date}</p>
    </div>
  </div>
    `;
      gamingSection.innerHTML += articleHTML;
    });
  }
  