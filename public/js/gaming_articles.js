// Fetch articles from JSON file
fetch('../articles.json')
    .then(response => response.json())
    .then(articles => {
        let gamingArticles = articles.filter(article => article.tag === 'Gaming');
        createArticles(gamingArticles);
    })
    .catch(error => console.error(error));

// Function to create articles
function createArticles(articles) {
    const articlesContainer = document.getElementById('gamingarticlesContainer'); // Get reference to the container
    let firstArticle = true;

    articles.forEach(article => {
        // If first article, make it bigger
        if (firstArticle) {
            // Create a bootstrap card for the first article
            articlesContainer.innerHTML += `
                <div class="card mb-3">
                    <img src="${article.image_article}" class="card-img-top" alt="${article.title}">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.content_index}</p>
                        <a href="${article.html_name_2}" class="btn btn-primary">Read more</a>
                    </div>
                </div>
            `;
            firstArticle = false;
        } else {
            // Create a more compact bootstrap card for the remaining articles
            articlesContainer.innerHTML += `
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="${article.image_article}" class="card-img" alt="${article.title}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${article.title}</h5>
                                <p class="card-text">${article.content_index}</p>
                                <a href="${article.html_name_2}" class="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    });
}
