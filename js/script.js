window.onload = function() {
  // Get the parent div
  var parentDiv = document.querySelector('.core-image-inner-block-wrapper');

  // Loop to create 100 children divs
  for (var i = 0; i < 112; i++) {
    // Create a new div
    var childDiv = document.createElement('div');

    // Add the class to the new div
    childDiv.className = 'core-image-inner-block';

    // Append the new div to the parent div
    if(parentDiv){
      parentDiv.appendChild(childDiv);
    }
  }

  // Get the hover-layer-2 element
  var hoverLayer1 = document.querySelector('.hover-layer-1');
  var hoverLayer2 = document.querySelector('.hover-layer-2');
  var hoverLayer3 = document.querySelector('.hover-layer-3');
  var hoverLayer4 = document.querySelector('.hover-layer-4');
  var hoverLayer5 = document.querySelector('.hover-layer-5');

  // Get the core-image-inner-block elements
  var blocks = document.querySelectorAll('.core-image-inner-block');


  // Layer 1 hover effect
  for (var i = 1; i < 8; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer1.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer1.style.opacity = '0';
    });
  }

  for (var i = 16; i < 24; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer1.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer1.style.opacity = '0';
    });
  }
  for (var i = 32; i < 37; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer1.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer1.style.opacity = '0';
    });
  }
  for (var i = 48; i < 51; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer1.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer1.style.opacity = '0';
    });
  }

  // Layer 2 hover effect
  for (var i = 8; i < 16; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer2.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer2.style.opacity = '0';
    });
  }
  for (var i = 24; i < 32; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer2.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer2.style.opacity = '0';
    });
  }
  for (var i = 40; i < 45; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer2.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer2.style.opacity = '0';
    });
  }
  for (var i = 56; i < 60; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer2.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer2.style.opacity = '0';
    });
  }
  for (var i = 73; i < 75; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer2.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer2.style.opacity = '0';
    });
  }
    blocks[90].addEventListener('mouseover', function() {
      hoverLayer2.style.opacity = '1';
    });
    blocks[90].addEventListener('mouseout', function() {
      hoverLayer2.style.opacity = '0';
    });


  //Layer 3 hover effect
  for (var i = 102; i < 107; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer3.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer3.style.opacity = '0';
    });
  }

  for (var i = 86; i < 90; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer3.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer3.style.opacity = '0';
    });
  }

  for (var i = 70; i < 73; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer3.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer3.style.opacity = '0';
    });
  }

  for (var i = 54; i < 56; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer3.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer3.style.opacity = '0';
    });
  }

  for (var i = 38; i < 40; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer3.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer3.style.opacity = '0';
    });
  }

  //Layer 4 hover effect
  blocks[37].addEventListener('mouseover', function() {
    hoverLayer4.style.opacity = '1';
  });
  blocks[37].addEventListener('mouseout', function() {
    hoverLayer4.style.opacity = '0';
  });
  for (var i = 51; i < 54; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer4.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer4.style.opacity = '0';
    });
  }
  for (var i = 64; i < 70; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer4.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer4.style.opacity = '0';
    });
  }
  for (var i = 64; i < 70; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer4.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer4.style.opacity = '0';
    });
  }

  for (var i = 80; i < 86; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer4.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer4.style.opacity = '0';
    });
  }

  for (var i = 96; i < 102; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer4.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer4.style.opacity = '0';
    });
  }

    //Layer 5 hover effect
  for (var i = 107; i < 112; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer5.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer5.style.opacity = '0';
    });
  }

  for (var i = 91; i < 96; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer5.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer5.style.opacity = '0';
    });
  }

  for (var i = 75; i < 80; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer5.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer5.style.opacity = '0';
    });
  }

  for (var i = 60; i < 64; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer5.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer5.style.opacity = '0';
    });
  }

  for (var i = 45; i < 48; i++) {
    blocks[i].addEventListener('mouseover', function() {
      hoverLayer5.style.opacity = '1';
    });
    blocks[i].addEventListener('mouseout', function() {
      hoverLayer5.style.opacity = '0';
    });
  }

};


function showResponseMessage(message , type= 'alert-success', parentDiv= 'responseAlert'){
  // Select the alert
  const alert = document.getElementById(parentDiv);
  alert.classList.add(type);
  // Insert the message
  alert.textContent = message;

  // Remove the 'd-none' class to make the alert visible
  alert.classList.remove('d-none');

  // Set a timeout to add the 'd-none' class after 3 seconds, hiding the alert
  setTimeout(function() {
    alert.classList.add('d-none');
  }, 3000); // 3000 milliseconds = 3 seconds
}

