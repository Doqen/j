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
  .then(articles => {
    const container = document.querySelector('.container .row');
    const now = new Date();
    const windowWidth = window.innerWidth;
    let numberOfArticles;

    if (windowWidth <= 768) {
      numberOfArticles = 3;
    } else {
      numberOfArticles = 6;
    }

    const articlesToDisplay = articles.slice(-numberOfArticles);

    // Reverse the articles array so the last article is displayed first
    const reversedArticles = articlesToDisplay.reverse();

    reversedArticles.forEach(article => {
      const tagColorClass = getTagColorClass(article.tag);
      const timeAgo = timeDifference(now, new Date(article.date));
      const articleHtml = `

          <div class="card col-md-4 mb-4">
            <a href="${article.html_name}"><img class="card-img-top position-relative card-img-b" src="${article.image_frontpage}" alt="${article.title}"></a>
              <div class="p-2 tag3">
                <a href="${article.tag_link} "><p class="tag ${getTagColorClass(article.tag)}">${article.tag}</p></a>
              </div>
            <div class="card-body">
            <a href="${article.html_name}"><h5 class="card-title">${article.title}</h5></a>
              <p class="card-text">${article.content_index.slice(0, 100)}</p>
              <p class="card-text"><small class="text-muted">${timeAgo}</small></p>
            </div>
          </div>
      `;

      container.innerHTML += articleHtml;
    });

  })
  .catch(error => {
    console.error('Error fetching articles:', error);
  });

