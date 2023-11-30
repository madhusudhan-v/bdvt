// Use the YouTube API key
const apiKey = 'YOUR_YOUTUBE_API_KEY';
const query = 'Movie Name';

// Fetch YouTube search results
fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        // Process and display the top 3 video results
        console.log(data.items.slice(0, 3));
    });
