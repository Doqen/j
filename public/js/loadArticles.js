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

    const nonFeaturedArticles = articles.filter(article => article.Featured !== 'Yes');

    const articlesToDisplay = nonFeaturedArticles.slice(-numberOfArticles);

    // Reverse the articles array so the last article is displayed first
    const reversedArticles = articlesToDisplay.reverse();

    let allArticleHtml = ''; // this will hold all article HTML
    reversedArticles.forEach(article => {
      const tagColorClass = getTagColorClass(article.tag);
      const timeAgo = timeDifference(now, new Date(article.date));
      
      let contentPreview = article.content_index.slice(0, 100);
      if (article.content_index.length > 100) {
        contentPreview += '...';
      }
      
      const articleHtml = `
      <div class="card mb-3" style="max-width: 1000px;">
      <div class="row g-0">
          <div class="col-md-4 mt-3">
              <a href="${article.html_name}">
                  <img src="${article.image_frontpage}" class="img-fluid rounded-start article-img" alt="${article.title}">
              </a>
              <div class="p-2 tag3" style="position: absolute; top: 50px;">
                  <a href="${article.tag_link}">
                      <p class="tag ${getTagColorClass(article.tag)}">${article.tag}</p>
                  </a>
              </div>
          </div>
          <div class="col-md-8">
              <div class="card-body">
                  <a href="${article.html_name}">
                      <h5 class="card-title">${article.title}</h5>
                  </a>
                  <p class="card-text mt-2">${contentPreview}</p>
  
                  <p class="card-text article-date" data-timestamp="${article.date}">
                      <small class="text-muted">${article.author}, ${timeAgo}</small>
                  </p>
              </div>
          </div>
      </div>
  </div>
  
    `;
    
    allArticleHtml += articleHtml; // append each article to the string
    });
    

  container.innerHTML = allArticleHtml; // set innerHTML all at once

})
.catch(error => {
  console.error('Error fetching articles:', error);
});


// Featured 

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

// Define the path to your JSON file
let url = 'articles.json';

// Fetch the JSON data
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then(articles => {
    // Filter for "Featured" articles and sort them by date in descending order
    let featuredArticles = articles
      .filter(article => article.Featured === "Yes")
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    // Select only the last four featured articles
    featuredArticles = featuredArticles.slice(0, 4);

    // Now generate the HTML for each article
    let html = '';
    
    const now = new Date();

    // First article
    let firstArticle = featuredArticles[0];
    let timeAgo1 = timeDifference(now, new Date(firstArticle.date));

    html += `
      <div class="col-md-3 col-sm-12 position-relative image-container" id="featured1">
        <a href="${firstArticle.html_name}"><img src="${firstArticle.image_frontpage}" class="img-fluid featured-image" alt="..."></a>
        <div class="image-gradient"></div>
        <div class="position-absolute bottom-0 start-0 p-2">
          <a href="${firstArticle.tag_link} "><p class="tag ${getTagColorClass(firstArticle.tag)}">${firstArticle.tag}</p></a>
        </div>
        <div class="position-absolute p-1" style="bottom: 0px; right: 0px;">
        <p class="author">${firstArticle.author}, <i><span id="timeAgo1">${timeAgo1}</span></i></p>
      </div>
        <div class="position-absolute description-container" style="bottom: 70px; right: 0; left: 0; padding-left: 20px; padding-right: 20px;">
          <a href="${firstArticle.html_name}" class="feat"><h5 class="text-white description-text"><b>${firstArticle.title}</b></h5></a>
        </div>       
      </div>
    `;

    // Other articles
    for (let i = 1; i < featuredArticles.length; i++) {
      let article = featuredArticles[i];
      let timeAgo = timeDifference(now, new Date(article.date));

      html += `
        <div class="col-md-3 col-sm-4 position-relative image-container art${i+1}">
          <a href="${article.html_name}"><img src="${article.image_frontpage}" class="img-fluid featured-image" alt="${article.title}"></a>
          <div class="image-gradient"></div>
          <div class="position-absolute bottom-0 start-0 p-2">
          <a href="${article.tag_link} "><p class="tag ${getTagColorClass(article.tag)}">${article.tag}</p></a>
          </div>
          <div class="position-absolute p-1" style="bottom: 0px; right: 5px;">
          <p class="author">${article.author}, <i><span id="timeAgo${i+1}">${timeAgo}</span></i></p>
        </div>
          <div class="position-absolute description-container" style="bottom: 50px; right: 0; left: 0; padding-left: 20px; padding-right: 20px;">
            <a href="${article.html_name}" class="feat"><h5 class="text-white description-text"><b>${article.title}</b></h5></a>
            </div>       
          </div>
        `;
      }
  
      // Inject the generated HTML into your page
      document.querySelector('.row.g-0').innerHTML = html;
    })
    .catch(function() {
      console.log("Fetch error");
    });
  
