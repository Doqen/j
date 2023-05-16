function getTagColorClass(tag) {
  switch (tag) {
    case 'Entertainment':
      return 'tag-color-entertainment';
    case 'Gaming':
      return 'tag-color-gaming';
    case 'Esports':
      return 'tag-color-esports';
    default:
      return 'tag-color-default';
  }
}

function timeDifference(current, previous) {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago';
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago';
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + ' days ago';
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + ' months ago';
  } else {
    return Math.round(elapsed / msPerYear) + ' years ago';
  }
}

fetch('articles.json')
  .then(response => response.json())
  .then(data => {
    displayEntertainmentArticles(data);
    displayGamingArticles(data);
    displayEsportsArticles(data);
  })
  .catch(error => {
    console.error('Error fetching articles:', error);
  });

  function displayEntertainmentArticles(articles) {
    const entertainmentSection = document.getElementById('entertainmentSection');
    const now = new Date();
  
    const entertainmentArticles = articles.filter(article => article.tag === 'Entertainment');
    entertainmentArticles.sort((a, b) => b.id - a.id);
  
    const [latestArticle, ...restArticles] = entertainmentArticles;
    const limitedRestArticles = restArticles.slice(0, 4);
    const timeAgo = timeDifference(now, new Date(latestArticle.date));
    const latestArticleHTML = `
    <div class="card mb-3 d-flex flex-column flex-md-row">
        <a href="${latestArticle.html_name}"><img src="${latestArticle.image_frontpage}" class="image-articles-front" alt="${latestArticle.title}"></a>
        <div class="card-body d-flex flex-column justify-content-between">
            <div>
            <a href="${latestArticle.html_name}"><h5 class="card-title text-start front-title">${latestArticle.title}</h5></a>
            </div>
            <p class="card-text">
            <small class="text-muted"><span>${latestArticle.author}</span>, ${timeAgo}</small>
          </p>
        </div>
    </div>
`;

entertainmentSection.innerHTML += latestArticleHTML;

limitedRestArticles.forEach(article => {
  const timeAgo = timeDifference(now, new Date(article.date));

  const articleHTML = `
  <div class="col-md-3 mb-4">
  <div class="card card_mob">
    <a href="${article.html_name}">
      <img 
        src="${article.image_frontpage}" 
        class="card-img-top card-img-b position-relative" 
        alt="${article.title}" 
        style="width: 100%; height: 200px; object-fit: cover;"
      />
    </a>
    <div class="card-body">
      <a href="${article.html_name}">
        <h5 class="card-title">${article.title}</h5>
      </a>
      <p class="card-text">
        <small class="text-muted"><span>${article.author}</span>, ${timeAgo}</small>
      </p>
    </div>
  </div>
</div>
`;
  entertainmentSection.innerHTML += articleHTML;
});
}

  function displayEsportsArticles(articles) {
    const esportsSection = document.getElementById('esportsSection');
    const now = new Date();

    const esportsArticles = articles.filter(article => article.tag === 'Esports');
    esportsArticles.sort((a, b) => b.id - a.id);

    const [latestArticle, ...restArticles] = esportsArticles;
    const limitedRestArticles = restArticles.slice(0, 4);
    const timeAgo = timeDifference(now, new Date(latestArticle.date));
    
    const latestArticleHTML = `
    <div class="card mb-3 d-flex flex-column flex-md-row">
    <a href="${latestArticle.html_name}"><img src="${latestArticle.image_frontpage}" class="image-articles-front" alt="${latestArticle.title}"></a>
        <div class="card-body d-flex flex-column justify-content-between">
            <div>
            <a href="${latestArticle.html_name}"><h5 class="card-title text-start front-title">${latestArticle.title}</h5></a>
            </div>
            <p class="card-text">
            <small class="text-muted"><span>${latestArticle.author}</span>, ${timeAgo}</small>
          </p>
        </div>
    </div>
  `;

  esportsSection.innerHTML += latestArticleHTML;

  limitedRestArticles.forEach(article => {
  const timeAgo = timeDifference(now, new Date(article.date));

  const articleHTML = `
  <div class="col-md-3 mb-4">
  <div class="card card_mob">
    <a href="${article.html_name}">
      <img 
        src="${article.image_frontpage}" 
        class="card-img-top card-img-b position-relative" 
        alt="${article.title}" 
        style="width: 100%; height: 200px; object-fit: cover;"
      />
    </a>
    <div class="card-body">
      <a href="${article.html_name}">
        <h5 class="card-title">${article.title}</h5>
      </a>
      <p class="card-text">
        <small class="text-muted"><span>${article.author}</span>, ${timeAgo}</small>
      </p>
    </div>
  </div>
  </div>
  `;
  esportsSection.innerHTML += articleHTML;
  });
  }


  function displayGamingArticles(articles) {
    const gamingSection = document.getElementById('gamingSection');
    const now = new Date();

    const gamingArticles = articles.filter(article => article.tag === 'Gaming');
    gamingArticles.sort((a, b) => b.id - a.id);

    const [latestArticle, ...restArticles] = gamingArticles;
    const limitedRestArticles = restArticles.slice(0, 4);
    const timeAgo = timeDifference(now, new Date(latestArticle.date));

    const latestArticleHTML = `
    <div class="card mb-3 d-flex flex-column flex-md-row">
    <a href="${latestArticle.html_name}"><img src="${latestArticle.image_frontpage}" class="image-articles-front" alt="${latestArticle.title}"></a>
        <div class="card-body d-flex flex-column justify-content-between">
            <div>
            <a href="${latestArticle.html_name}"><h5 class="card-title text-start front-title">${latestArticle.title}</h5></a>
            </div>
            <p class="card-text">
            <small class="text-muted"><span>${latestArticle.author}</span>, ${timeAgo}</small>
          </p>
        </div>
    </div>
`;


  gamingSection.innerHTML += latestArticleHTML;

  limitedRestArticles.forEach(article => {
  const timeAgo = timeDifference(now, new Date(article.date));

  const articleHTML = `
  <div class="col-md-3 mb-4">
  <div class="card card_mob">
    <a href="${article.html_name}">
      <img 
        src="${article.image_frontpage}" 
        class="card-img-top card-img-b position-relative" 
        alt="${article.title}" 
        style="width: 100%; height: 200px; object-fit: cover;"
      />
    </a>
    <div class="card-body">
      <a href="${article.html_name}">
        <h5 class="card-title">${article.title}</h5>
      </a>
      <p class="card-text">
        <small class="text-muted"><span>${article.author}</span>, ${timeAgo}</small>
      </p>
    </div>
  </div>
  </div>
  `;
  gamingSection.innerHTML += articleHTML;
  });
  }


  