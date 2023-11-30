// Use the API key and search engine ID
const apiKey = 'YOUR_GOOGLE_API_KEY';
const cx = 'YOUR_CUSTOM_SEARCH_ENGINE_ID';
const query = 'Movie Name';

// Fetch Google Search results
fetch(`https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cx}`)
    .then(response => response.json())
    .then(data => {
        // Process and display the top 3 results
        console.log(data.items.slice(0, 3));
    });
