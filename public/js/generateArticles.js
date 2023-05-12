
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
      
          <script src="https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js"></script>
          <script src="https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js"></script>
      
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
          <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
          <link href="../css/style.css" rel="stylesheet">
          <script src="../js/script.js"></script>
      
      </head>
      <body>
      
        <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: rgb(14, 14, 14);">
          <div class="container">
            <div class="navbar-top">
              <a class="navbar-brand d-none d-sm-block" href="../index.html"><img src="../assets/logo/XP.png" width="130px"></a>
              <a class="navbar-brand d-block d-sm-none" href="../index.html"><img src="../assets/logo/XP.png" width="90px"></a>        
            </div>
            <div class="navbar-bottom">
              <button class="navbar-toggler hamburger-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>      
              <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#" id="navbarDropdownHome" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Gaming
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" id="navbarDropdownPolitics" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    eSports
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" id="navbarDropdownScience" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Entertainment
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" id="navbarDropdownTechnology" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About Us
                  </a>
                </li>
                <!-- Dropdown menu -->
                <li class="nav-item dropdown">
                  <a class="nav-link" href="#" id="navbarDropdownMore" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Contact
                      </a>
                      </li>
                      </ul>
                      </div>
                         </div>
                        </div>
                      </nav>
          <div class="menu-container d-md-none"> 
            <div class="menu-item"><a href="index.html"><i class="bi bi-house-door-fill"> Home</i></a></div>
            <div class="menu-item">
              <i class="bi bi-newspaper"></i> News
              <ul class="dropdown-menu">
                <li>More</li>
                <li><span class="green-circle_mobile"></span> Entertainment</li>
                <li><span class="blue-circle_mobile"></span> Esports</li>
                <li><span class="red-circle_mobile"></span> Gaming</li>
              </ul>
            </div>
            <div class="menu-item">
              <i class="bi bi-search"></i> Search
              <div class="search-input">
                <input type="text" placeholder="Type to search...">
              </div>
            </div>
            <div class="menu-item menu3">
              <i class="bi bi-three-dots"></i>
              <ul class="dropdown-menu dropdown-menu-right">
                <li>Privacy Policy</li>
                <li>Terms Of Service</li>
                <li>Advertise with us</li>
                <li>Contact</li>
                <li>About</li>
              </ul>
            </div>
          </div>     
          
      <div class="container mt-5">
          <div class="breadcrumb-container mt-3">
          <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="${article.tag_link}">${article.tag}</a></li>
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
                      <div class="article-date" data-timestamp="${article.date}">
                      <span></span>
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
      <p class="mb-0">© 2023 Grinding XP. All rights reserved.</p>
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
      <script src="../js/script.js"></script>
      <script src="../js/main.js"></script>
      <script src="../js/loadArticles.js"></script>
      <script src="../js/generateArticles.js"></script>
      <script src="../js/gaming.js"></script>
      <script src="../js/entertainment.js"></script>
      <script src="../js/esports.js"></script>
      <script src="time.js"></script>
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
