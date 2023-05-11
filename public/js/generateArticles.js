const fs = require('fs');

// Read the articles.json file and parse its content
fs.readFile('../articles.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading articles.json:', err);
        return;
      }
      const articles = JSON.parse(data);
    
      // Make sure the desired directory exists, if not, create it
      const outputDir = '../articles';
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
      }
    
      articles.forEach(article => {
        const filename = `${outputDir}/article-${article.id}.html`;

    // Check if the file already exists
    if (fs.existsSync(filename)) {
      console.log(`Skipping ${filename}, file already exists.`);
    } else {
      const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-CVS5EE2WZ8"></script>
      <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
      
          gtag('config', 'G-CVS5EE2WZ8');
      </script>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${article.title}</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet">
          <link href="style.css" rel="stylesheet">
      </head>
      <body>
      
      <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: rgb(14, 14, 14);">
      <div class="container">
        <div class="navbar-top">
          <a class="navbar-brand d-none d-md-block" href="../index.html"><img src="../assets/logo/XP.png" width="130px"></a>
          <a class="navbar-brand d-block d-sm-none" href="../index.html"><img src="../assets/logo/XP.png" width="90x"></a>
        </div>
        <div class="navbar-bottom">
          <button class="navbar-toggler hamburger-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>      
          <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" id="navbarDropdownHome" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Gaming
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" id="navbarDropdownPolitics" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                eSports
              </a>
              <div class="dropdown-menu horizontal-dropdown-menu" aria-labelledby="navbarDropdownPolitics">
                <a class="dropdown-item" href="#">Elections</a>
                <a class="dropdown-item" href="#">Government</a>
                <a class="dropdown-item" href="#">International Relations</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" id="navbarDropdownScience" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Entertainment
              </a>
              <div class="dropdown-menu horizontal-dropdown-menu" aria-labelledby="navbarDropdownScience">
                <a class="dropdown-item" href="#">Environment</a>
                <a class="dropdown-item" href="#">Space</a>
                <a class="dropdown-item" href="#">Research</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" id="navbarDropdownTechnology" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </a>
              <div class="dropdown-menu horizontal-dropdown-menu" aria-labelledby="navbarDropdownTechnology">
                <a class="dropdown-item" href="#">Gadgets</a>
                <a class="dropdown-item" href="#">Internet</a>
                <a class="dropdown-item" href="#">Artificial Intelligence</a>
              </div>
            </li>
            <!-- Dropdown menu -->
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" id="navbarDropdownMore" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Contact
                  </a>
                  <div class="dropdown-menu horizontal-dropdown-menu" aria-labelledby="navbarDropdownMore">
                  <a class="dropdown-item" href="#">Business</a>
                  <a class="dropdown-item" href="#">Health</a>
                  <a class="dropdown-item" href="#">Entertainment</a>
                  <hr class="d-block my-1 mx-auto w-75">
                  <a class="dropdown-item" href="#">Opinion</a>
                  <a class="dropdown-item" href="#">Lifestyle</a>
                  </div>
                  </li>
                  </ul>
                  </div>
                     </div>
                    </div>
                  </nav>
  <div class="menu-container d-md-none"> <!-- Add 'd-md-none' class to hide menu on larger devices -->
    <div class="menu-item">News</div>
    <div class="menu-item">eSports</div>
    <div class="logo-container">
      <img src="assets/logo/XP_phone.png" alt="Your Logo" class="menu-logo" />
    </div>
    <div class="menu-item">Enter</div>
    <div class="menu-item">More</div>
  </div>
          
                      <div class="container mt-5">
                          <div class="breadcrumb-container mt-3">
                          <nav aria-label="breadcrumb">
                              <ol class="breadcrumb">
                              <li class="breadcrumb-item"><a href="gaming.html">Gaming</a></li>
                              <li class="breadcrumb-item"><a href="celebrities.html">Celebrities</a></li>
                              <li class="breadcrumb-item active" aria-current="page">${article.title}</li>
                              </ol>
                          </nav>
                          </div>                  
                          <div class="row">
                              <div class="col-12 col-sm-12 col-md-6 cold-lg-6">
                                  <h1 class="article-title">${article.title}</h1>
                                  <div class="article-meta d-flex justify-content-between">
                                      <div class="article-author">
                                          <span>By ${article.author} </span>
                                      </div>
                                      <div class="article-date">
                                          <span>${article.date}</span>
                                      </div>
                                  </div>
                                  <hr>
                                  <center><img src="${article.image_article}" class="img-fluid article-image" alt="..."></center>
                                  <p class="article-text-1 mt-4">
                                  ${article.content_1}
                                  </p>
                                  <p class="article-text mt-4"></p>  ${article.content_2}
                              </p>  
                                  <p class="article-text mt-4"></p>  ${article.content_3}
                              </p>  
                                  <p class="article-text mt-4"></p>  ${article.content_4}
                              </p>
                                  <!-- Add more paragraphs as needed -->
                              </div>
                          </div>
                      </div>
      
      <!-- Footer -->
      <footer class="bg-light py-3 mt-4">
          <div class="container">
              <div class="row">
      <div class="col-md-6">
      <p class="mb-0">© 2023 GrindingXP. All rights reserved.</p>
      </div>
      <div class="col-md-6 text-md-right">
      <a href="#" class="text-dark">Terms of Use</a> |
      <a href="#" class="text-dark">Privacy Policy</a>
      </div>
      </div>
      </div>
      
      </footer>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js"></script>
      </body>
      </html>
      
      `;  

      fs.writeFile(filename, htmlTemplate, err => {
        if (err) {
          console.error(`Error generating ${filename}:`, err);
        } else {
          console.log(`Successfully generated ${filename}`);
        }
      });
    }
  });
});
