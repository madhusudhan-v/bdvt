var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var slideshowInterval;

function showSlides() {
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "inline-block";
}

function plusSlides(n) {
    clearInterval(slideshowInterval);
    showSlides();
    slideshowInterval = setInterval(showSlides, 5000); // Restart slideshow after button click
}

// Function to load image slideshow dynamically from a folder or specified image paths
function loadDynamicSlideshow() {
    var slideshowContainer = document.getElementById("slideshow-container");

    if (slideshowContainer) {
        // Check if imagePaths is provided and contains valid images
        if (content.imagePaths && content.imagePaths.length > 0) {
            // Create slideshow from specified image paths
            for (var i = 0; i < content.imagePaths.length; i++) {
                var img = document.createElement("img");
                img.src = content.imagePaths[i];
                img.alt = "Slide " + (i + 1);
                img.className = "mySlides";
                slideshowContainer.appendChild(img);
            }
        } else if (content.imageFolderPath) {
            // Make an AJAX request to get the list of images in the folder
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var imagePaths = JSON.parse(xhr.responseText);

                    // Create slideshow from fetched image paths
                    for (var i = 0; i < imagePaths.length; i++) {
                        var img = document.createElement("img");
                        img.src = content.imageFolderPath + imagePaths[i];
                        img.alt = "Slide " + (i + 1);
                        img.className = "mySlides";
                        slideshowContainer.appendChild(img);
                    }
                }
            };

            xhr.open("GET", "get_images.php?folder=" + content.imageFolderPath, true);
            xhr.send();
        }

        // Start automatic slideshow
        showSlides();
        slideshowInterval = setInterval(showSlides, 5000);
    }
}

// Load dynamic image slideshow on page load
loadDynamicSlideshow();



// Function to load image slideshow
/* function loadSlideshow(imagePaths) {
    alert(imagePaths.length);
    var slideshowContainer = document.getElementById("slideshow-container");

    if (slideshowContainer) {
        for (var i = 0; i < imagePaths.length; i++) {
            var img = document.createElement("img");
            img.src = imagePaths[i];
            img.alt = "Slide " + (i + 1);
            img.className = "mySlides fade";
            slideshowContainer.appendChild(img);
        }
    }
}*/