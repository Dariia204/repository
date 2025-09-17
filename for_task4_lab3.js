let images = ["picture1_for_lab3.jpg", "picture2_for_lab3.jpg", "picture3_for_lab3.jpg", "picture4_for_lab3.jpg"];


    let current = 0;
    let viewer = document.getElementById("viewer");

    function showImage() {
      viewer.src = images[current];
    }

    function nextImage() {
      current++; 
      if (current >= images.length) {
        current = 0; 
      }
      showImage();
    }

    function prevImage() {
      current--; 
      if (current < 0) {
        current = images.length - 1;
      }
      showImage();
    }

    showImage();