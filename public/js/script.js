function updateTimeAgo(publishDateString, elementId) {
    const publishDate = new Date(publishDateString);
    const now = new Date();
    const timeDifference = now - publishDate;
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysAgo = Math.floor(hoursAgo / 24);
  
    const timeAgoElement = document.getElementById(elementId);
    if (hoursAgo < 24) {
      if (hoursAgo === 1) {
        timeAgoElement.innerText = `${hoursAgo} hour ago`;
      } else {
        timeAgoElement.innerText = `${hoursAgo} hours ago`;
      }
    } else {
      if (daysAgo === 1) {
        timeAgoElement.innerText = `${daysAgo} day ago`;
      } else {
        timeAgoElement.innerText = `${daysAgo} days ago`;
      }
    }
  }
  
  function updateAllArticles() {
    // Update each article by calling updateTimeAgo with the publish date and element ID
    updateTimeAgo('2023-05-08T12:00:00', 'timeAgo1');
    updateTimeAgo('2023-05-07T15:30:00', 'timeAgo2');
    updateTimeAgo('2023-05-06T12:00:00', 'timeAgo3');
    updateTimeAgo('2023-05-08T15:30:00', 'timeAgo4');
    // Add more updateTimeAgo calls for more articles
  }
  
  updateAllArticles(); // Call the function immediately to update the text
  setInterval(updateAllArticles, 60 * 60 * 1000); // Update the text every hour
  