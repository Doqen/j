fetch('articles.json')
  .then(response => response.json())
  .then(data => {
    displayEsportsArticles(data);
  })
  .catch(error => {
    console.error('Error fetching articles:', error);
  });

  function displayEsportsArticles(articles) {
    const esportsSection = document.getElementById('esportsSection');
  
    const esportsArticles = articles.filter(article => article.tag === 'Esports');
    esportsArticles.sort((a, b) => b.id - a.id);
  
    const [latestArticle, ...restArticles] = esportsArticles;
    const limitedRestArticles = restArticles.slice(0, 3);
  
    const latestArticleHTML = `
    <div class="col-12 mb-4">
    <div class="card card-a">
    <a href="${latestArticle.html_name}"><img src="${latestArticle.image_frontpage}" class="card-img-top card-img-a" alt="${latestArticle.title}"></a>
      <div class="card-body">
      <a href="${latestArticle.html_name}"><h5 class="card-title">${latestArticle.title}</h5></a>
        <p class="card-text">${latestArticle.content_index}</p>
        <a href="${latestArticle.html_name}" class="btn btn-primary">Read more</a>
      </div>
    </div>
  </div>
`;

esportsSection.innerHTML += latestArticleHTML;

limitedRestArticles.forEach(article => {
  const articleHTML = `
  <div class="col-md-4 mb-4">
  <div class="card card_mob">
  <a href="${article.html_name}"><img src="${article.image_frontpage}" class="card-img-top card-img-b" alt="${article.title}" style="object-fit: cover; object-position: center; height: 100%;"></a>
    <div class="card-body">
    <a href="${article.html_name}"><h5 class="card-title">${article.title}</h5></a>
    <div class="article-date" data-timestamp="${article.date}">
    <span></span>
  </div>
    </div>
  </div>
      `;
      esportsSection.innerHTML += articleHTML;
    });
  }
  