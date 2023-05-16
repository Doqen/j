
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
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5957446475943274"
     crossorigin="anonymous"></script>
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
      
      </head>
      <body>
      
      <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: rgb(14, 14, 14);">
      <div class="container">
        <div class="navbar-top">
        <a class="navbar-brand d-none d-sm-block" href="/"><img src="../assets/logo/xp.png" width="240px"></a>
        <a class="navbar-brand d-block d-sm-none" href="/"><img src="../assets/logo/xp.png" width="200px"></a>      
        </div>
        <div class="navbar-bottom">
          <button class="navbar-toggler hamburger-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>      
          <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="gaming.html">Gaming</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="esports.html">eSports</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../about.html">About Us</a>
            </li>
            <!-- Dropdown menu -->
            <li class="nav-item">
              <a class="nav-link" href="../contact.html">Contact</a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
      <div class="menu-container d-md-none"> 
        <div class="menu-item"><a href="/"><i class="bi bi-house-door-fill"> Home</i></a></div>
        <div class="menu-item">
          <i class="bi bi-newspaper"></i> News
          <ul class="dropdown-menu">
            <a href="other.html"><li>More</li></a>
            <a href="entertainment.html"><li><span class="green-circle_mobile"></span> Entertainment</li></a>
            <a href="esports.html"><li><span class="blue-circle_mobile"></span> Esports</li></a>
            <a href="gaming.html"><li><span class="red-circle_mobile"></span> Gaming</li></a>
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
            <a href="../privacy.html"><li>Privacy Policy</li></a>
            <a href="../termsofservice.html"><li>Terms Of Service</li></a>
            <a href="../advertise.html"><li>Advertise with us</li></a>
            <a href="../contact.html"><li>Contact</li></a>
            <a href="../about.html"><li>About</li></a>
          </ul>
        </div>
      </div>       
          
      <div class="container mt-5">
          <div class="breadcrumb-container mt-3">
          <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="${article.breadcrumb_link}">${article.tag}</a></li>
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
                  <center><img src="${article.image_article}" class="img-fluid article-image" alt="${article.title}"></center>
                  <p class="article-text-1 mt-4">
                  ${article.content_1}
                  </p>
                  <p class="article-text mt-4"></p>  ${article.content_2}
              </p>  
                  <p class="article-text mt-4"></p>  ${article.content_3}
              </p>  
                  <p class="article-text mt-4"></p>  ${article.content_4}
              </p>
              </p>  
                  <p class="article-text mt-4"></p>  ${article.content_5}
              </p>
              </p>  
                  <p class="article-text mt-4"></p>  ${article.content_6}
              </p>
              </p>  
                  <p class="article-text mt-4"></p>  ${article.content_7}
              </p>
              </p>  
                  <p class="article-text mt-4"></p>  ${article.content_8}
              </p>
              </p>  
                  <p class="article-text mt-4"></p>  ${article.content_9}
              </p>
              </p>  
                  <p class="article-text mt-4"></p>  ${article.content_10}
              </p>
              </div>
          </div>
      </div>
      <br>
      <br>
      <br>
      <!-- Footer -->
      <footer class="bg-light py-3 mt-4">
          <div class="container">
              <div class="row">
      <div class="col-md-6">
      <p class="mb-0">© 2023 Endgame News. All rights reserved.</p>
      </div>
      <div class="col-md-6 text-md-right">
      <a href="../ptermsofservice.html" class="text-dark">Terms of Service</a> |
      <a href="../privacy.html" class="text-dark">Privacy Policy</a>
      </div>
      </div>
      </div>
      
      </footer>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js"></script>
      <script src="../js/loadArticles.js"></script>
      <script src="../js/generateArticles.js"></script>
      <script src="../js/entertainment.js"></script>

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
