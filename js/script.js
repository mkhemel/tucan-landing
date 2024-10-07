let contentData;

const commonRender=()=>{
  console.log(document.querySelector('.menu_1').textContent, contentData?.footer?.section_1?.title);
  document.querySelector('.menu_1').textContent = contentData?.menu?.menu_1?.text;
  document.querySelector('.menu_2').textContent = contentData?.menu?.menu_2?.text;
  document.querySelector('.menu_3').textContent = contentData?.menu?.menu_3?.text;
  document.querySelector('.footer-menu-1').textContent = contentData?.footer?.section_1?.title;
  document.querySelector('.footer-menu-2').textContent = contentData?.footer?.section_2?.title;
  document.querySelector('.copyright-text').textContent = contentData?.footer?.section_3?.title;
  specificRender();

}

const specificRender=()=>{
  const dataPage = document.body.getAttribute('data-page');
    if(dataPage === 'home'){
      homeRender();
    }
    else if(dataPage === 'platform'){}
    else if(dataPage === 'key-feature'){}
    else if(dataPage === 'contact'){}
    else if(dataPage === 'terms-conditions'){}
    else if(dataPage === 'privacy'){}
}


const fetchData = async (language) => {
  return fetch(`./lang/${language}.json`)
      .then(response => response.json())
      .then(data => {
        contentData = data;
      })
      .catch(error => {
        console.error('Error fetching the JSON file:', error);
      });
}

function changeLanguage(languageCode, languageName, flagPath) {
  return new Promise((resolve, reject) => {
    // Update the button's flag and text
    const languageButton = document.getElementById('languageButton');
    const currentFlag = document.getElementById('currentFlag');

    // Change the button text and flag
    languageButton.innerHTML = `<img src="${flagPath}" alt="${languageName} Flag" id="currentFlag"> ${languageName}`;

    console.log("Selected Language: " + languageCode);

    localStorage.setItem('selectedLanguage', languageCode);
    localStorage.setItem('selectedLanguageName', languageName);
    localStorage.setItem('selectedLanguageFlag', flagPath);
    fetchData(languageCode)
        .then(() => {
          commonRender();
          resolve();
        })
        .catch(reject);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('selectedLanguage')) {
    changeLanguage(localStorage.getItem('selectedLanguage'), localStorage.getItem('selectedLanguageName'), localStorage.getItem('selectedLanguageFlag'));
  } else {
    changeLanguage('en', 'Eng (US)', 'assets/flag/gb.svg');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  commonRender();
});



const homeRender=()=>{
  document.querySelector('.home-header-title').textContent = contentData?.main_theme?.main_title;
  document.querySelector('.home-header-desc').textContent = contentData?.main_theme?.sub_title;
  document.querySelectorAll('.book-demo-btn').forEach((element)=>{
    element.textContent = contentData?.main_theme?.button?.title || 'Book a Demo';
  });
  document.querySelector('.demo-modal-title').textContent = contentData?.main_theme?.button?.after_click?.title || '';
   document.querySelector('#demo-request input[name="first_name"]').placeholder = contentData?.main_theme?.button?.after_click?.placeholder_text_in_form?.input_1 || 'First Name';
   document.querySelector('#demo-request input[name="last_name"]').placeholder = contentData?.main_theme?.button?.after_click?.placeholder_text_in_form?.input_2 || 'Last Name';
   document.querySelector('#demo-request input[name="email"]').placeholder = contentData?.main_theme?.button?.after_click?.placeholder_text_in_form?.input_3 || 'Email';
   document.querySelector('#demo-request input[name="title"]').placeholder = contentData?.main_theme?.button?.after_click?.placeholder_text_in_form?.input_4 || 'Title';
   document.querySelector('#demo-request input[name="organization"]').placeholder = contentData?.main_theme?.button?.after_click?.placeholder_text_in_form?.input_5 || 'organization';
  const countrySelect = document.querySelector('#demo-request select[name="country"]');
  if (countrySelect && countrySelect.options.length > 0) {
    console.log('countrySelect.options[0]', countrySelect.options[0])
    countrySelect.options[0].textContent = contentData?.main_theme?.button?.after_click?.placeholder_text_in_form?.input_6.toUpperCase() || 'Select Country'.toUpperCase();
  }
  document.querySelectorAll('.agree-label').forEach((element)=>{
    element.textContent = contentData?.main_theme?.button?.after_click?.placeholder_text_in_form?.checkbox_text || 'i consent to tucan’s privacy policies, including marketing communications via email and telephone';
  });
  document.querySelector('#demo-request button[type="submit"]').textContent = contentData?.main_theme?.button?.after_click?.submit_button_text || 'Submit';

    document.querySelector('.welcome-card-title-text').textContent = contentData?.introduction?.title || '';
    document.querySelector('.welcome-card-desc-1').textContent = contentData?.introduction?.description || '';
    if(!contentData?.introduction?.description_2){
      document.querySelector('.welcome-card-desc-2').classList.add('d-none');
    }

    document.querySelector('.home-access-title').textContent = contentData?.explore?.title || '';
    document.querySelector('.home-access-desc').textContent = contentData?.explore?.description || '';

    document.querySelector('.home-platform-title').textContent = contentData?.platform?.title || '';

    document.querySelector('.platform-1-title').textContent = contentData?.platform?.feature_1?.title || '';
    document.querySelector('.platform-1-desc').textContent = contentData?.platform?.feature_1?.description || '';
    document.querySelector('.platform-2-title').textContent = contentData?.platform?.feature_1?.title || '';
    document.querySelector('.platform-2-desc').textContent = contentData?.platform?.feature_1?.description || '';
    document.querySelector('.platform-3-title').textContent = contentData?.platform?.feature_1?.title || '';
    document.querySelector('.platform-3-desc').textContent = contentData?.platform?.feature_1?.description || '';
    document.querySelector('.home-platform-btn').textContent = contentData?.platform?.button?.title || '';

}


document.addEventListener('DOMContentLoaded', function() {
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

});


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

