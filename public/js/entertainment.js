fetch('articles.json')
  .then(response => response.json())
  .then(data => {
    displayEntertainmentArticles(data);
  })
  .catch(error => {
    console.error('Error fetching articles:', error);
  });

  function displayEntertainmentArticles(articles) {
    const entertainmentSection = document.getElementById('entertainmentSection');
  
    const entertainmentArticles = articles.filter(article => article.tag === 'Entertainment');
    entertainmentArticles.sort((a, b) => b.id - a.id);
  
    const [latestArticle, ...restArticles] = entertainmentArticles;
    const limitedRestArticles = restArticles.slice(0, 3);
  
    const latestArticleHTML = `
      <div class="col-12 mb-4">
        <div class="card">
          <img src="${latestArticle.image_frontpage}" class="card-img-top" alt="${latestArticle.title}">
          <div class="card-body">
            <h5 class="card-title">${latestArticle.title}</h5>
            <p class="card-text">${latestArticle.content_index}</p>
            <a href="${latestArticle.html_name}" class="btn btn-success">Read more</a>
          </div>
        </div>
      </div>
    `;
  
    entertainmentSection.innerHTML += latestArticleHTML;
  
    limitedRestArticles.forEach(article => {
      const articleHTML = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${article.image_frontpage}" class="card-img-top" alt="${article.title}">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.content_index}</p>
              <a href="${article.html_name}" class="btn btn-success">Read more</a>
            </div>
          </div>
        </div>
      `;
      entertainmentSection.innerHTML += articleHTML;
    });
  }
  