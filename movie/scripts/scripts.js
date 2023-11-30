// Add these global variables in your script
var currentVideoIndexes = {
    'trailer': 0,
    'youtube': 0
};
// Function to replace placeholder values with actual content
function replaceContent() {
    if (document.getElementById("movieTitle") && content.movieTitle)
        document.getElementById("movieTitle").innerText = content.movieTitle;
    if (document.getElementById("moviePageTitle") && content.movieTitle)
        document.getElementById("moviePageTitle").innerText = content.movieTitle;
    if (document.getElementById("wikiLink") && content.wikiLink)
        document.getElementById("wikiLink").href = content.wikiLink;
    if (document.getElementById("facebookPageLink") && content.facebookPageLink)
        document.getElementById("facebookPageLink").href = content.facebookPageLink;

    if (document.getElementById("officialWebsite") && content.officialWebsite)
        document.getElementById("officialWebsite").innerText = content.officialWebsite;

    if (document.getElementById("releaseDate") && content.releaseDate)
        document.getElementById("releaseDate").innerText = "Release Date: " + content.releaseDate;
    if (document.getElementById("director") && content.director)
        document.getElementById("director").innerText = "Director: " + content.director;
    if (document.getElementById("genre") && content.genre)
        document.getElementById("genre").innerText = "Genre: " + content.genre;

    if (document.getElementById("hotDetail1") && content.hotDetails && content.hotDetails[0])
        document.getElementById("hotDetail1").innerText = content.hotDetails[0];
    if (document.getElementById("hotDetail2") && content.hotDetails && content.hotDetails[1])
        document.getElementById("hotDetail2").innerText = content.hotDetails[1];
    if (document.getElementById("hotDetail3") && content.hotDetails && content.hotDetails[2])
        document.getElementById("hotDetail3").innerText = content.hotDetails[2];

    if (document.getElementById("facebookPageLink") && content.facebookPageLink)
        document.getElementById("facebookPageLink").href = content.facebookPageLink;

    // Load trailer video
    loadVideo('trailer', content.trailerVideoIds);
    // Load YouTube video
    loadVideo('youtube', content.youtubeVideoIds);

    // Load image slideshow
    // loadSlideshow(content.imagePaths);
}

// Function to load next video
function loadVideo(section, videoIds) {
    var iframe = document.getElementById(section + '-iframe');
    var thumbnail = document.getElementById(section + '-thumbnail');

    if (iframe && thumbnail) {
        // Calculate the index of the next video
        var nextVideoIndex = (currentVideoIndexes[section] + 1) % videoIds.length;
        var videoUrl = 'https://www.youtube.com/embed/' + videoIds[nextVideoIndex];

        // Set the video URL for the iframe
        iframe.src = videoUrl;

        // Set the thumbnail preview
        var thumbnailUrl = getThumbnailUrl(videoUrl);
        thumbnail.src = thumbnailUrl;

        // Update the current video index
        currentVideoIndexes[section] = nextVideoIndex;
    }
}

//todo thumbnail should be of next video,but its showing current...need to fix
function getThumbnailUrl(videoUrl) {
    // Extract video ID from the YouTube video URL using a more robust regex
    var match = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=))([^"&?\/\s]{11})/);

    // Check if a match is found
    if (match && match[1]) {
        // Construct the thumbnail URL directly from the video ID
        return 'https://img.youtube.com/vi/' + match[1] + '/maxresdefault.jpg';
    } else {
        // Return a default thumbnail or handle the error as needed
        return 'path/to/default_thumbnail.jpg';
    }
}

replaceContent(); // Call the function to replace placeholder content

// Load dynamic image slideshow
loadDynamicSlideshow();
// Rest of your existing code
