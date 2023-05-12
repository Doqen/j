function updateTime(timestamp) {
    // Convert the date string to a Date object
    const datePosted = new Date(timestamp);
    const now = new Date();
  
    // Calculate the difference in hours
    let hoursAgo = Math.abs(now - datePosted) / 36e5;
  
    // Round to the nearest hour
    hoursAgo = Math.round(hoursAgo);
  
    const display = document.querySelector('.article-date span');
    if (hoursAgo < 1) {
      display.textContent = 'Less than 1 hour ago';
    } else if (hoursAgo < 24) {
      display.textContent = hoursAgo > 1 ? `${hoursAgo} hours ago` : '1 hour ago';
    } else {
      const daysAgo = Math.floor(hoursAgo / 24);
      display.textContent = daysAgo > 1 ? `${daysAgo} days ago` : '1 day ago';
    }
  }
  
  window.onload = function() {
    const timestamp = document.querySelector('.article-date').getAttribute('data-timestamp');
    updateTime(timestamp);
    setInterval(() => updateTime(timestamp), 60000);
  }
  
  