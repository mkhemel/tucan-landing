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
    else if(dataPage === 'platform'){
      platformRender();
    }
    else if(dataPage === 'key-feature'){
      keyFeatureRender();
    }
    else if(dataPage === 'contact'){
      contactRender();
    }
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
    document.querySelector('.platform-2-title').textContent = contentData?.platform?.feature_2?.title || '';
    document.querySelector('.platform-2-desc').textContent = contentData?.platform?.feature_2?.description || '';
    document.querySelector('.platform-3-title').textContent = contentData?.platform?.feature_3?.title || '';
    document.querySelector('.platform-3-desc').textContent = contentData?.platform?.feature_3?.description || '';
    document.querySelector('.home-platform-btn').textContent = contentData?.platform?.button?.title || '';
    document.querySelector('.core-component-title').textContent = contentData?.key_feature?.title ||'';
    document.querySelector('.key-feature-btn').textContent= contentData?.key_feature?.button?.title || '';
    document.querySelector('.short-mv-subtitle-1').textContent = contentData?.video?.short_title || '';
    document.querySelector('.short-mv-title').textContent = contentData?.video?.main_title || '';
    document.querySelector('.short-mv-desc').textContent = contentData?.video?.sub_title || '';
    document.querySelector('.registerModalBtn').textContent = contentData?.video?.button?.title || 'Register';

  document.querySelector('.register-request-title').textContent = contentData?.video?.button?.after_click?.title || '';
  document.querySelector('#register-request input[name="first_name"]').placeholder = contentData?.video?.button?.after_click?.placeholder_text_in_form?.input_1 || 'First Name';
  document.querySelector('#register-request input[name="last_name"]').placeholder = contentData?.video?.button?.after_click?.placeholder_text_in_form?.input_2 || 'Last Name';
  document.querySelector('#register-request input[name="email"]').placeholder = contentData?.video?.button?.after_click?.placeholder_text_in_form?.input_3 || 'Email';
  document.querySelector('#register-request input[name="title"]').placeholder = contentData?.video?.button?.after_click?.placeholder_text_in_form?.input_4 || 'Title';
  document.querySelector('#register-request input[name="organization"]').placeholder = contentData?.video?.button?.after_click?.placeholder_text_in_form?.input_5 || 'organization';
  const countrySelect1 = document.querySelector('#register-request select[name="country"]');
  if (countrySelect1 && countrySelect1.options.length > 0) {
    countrySelect1.options[0].textContent = contentData?.video?.button?.after_click?.placeholder_text_in_form?.input_6.toUpperCase() || 'Select Country'.toUpperCase();
  }
  document.querySelector('.regSubmitBtn').textContent = contentData?.video?.button?.after_click?.submit_button_text || 'Submit';

  document.querySelector('.demo-sec-subtitle').textContent = contentData?.experience?.short_title || '';
  document.querySelector('.demo-sec-title').textContent = contentData?.experience?.main_title || '';
  document.querySelector('.demo-sec-desc').textContent = contentData?.experience?.sub_title || '';
  document.querySelector('.demoBookModalbtn').textContent = contentData?.experience?.button?.title || '';

  document.querySelector('.talk-title').textContent = contentData?.contact_us?.main_title || '';
  document.querySelector('.talk-desc').textContent = contentData?.contact_us?.sub_title || '';
  document.querySelector('.home-contact-btn').textContent = contentData?.contact_us?.button?.title || '';
  const hoverLayer1 = document.querySelector('.hover-layer-1');
  const hoverLayer2 = document.querySelector('.hover-layer-2');
  const hoverLayer3 = document.querySelector('.hover-layer-3');
  const hoverLayer4 = document.querySelector('.hover-layer-4');
  const hoverLayer5 = document.querySelector('.hover-layer-5');
  if(localStorage.getItem('selectedLanguage') === 'es'){
    if (hoverLayer1) {
      hoverLayer1.src = './assets/image/hover-layer-1-es.png';
    }
    if (hoverLayer2) {
      hoverLayer2.src = './assets/image/hover-layer-2-es.png';
    }
    if (hoverLayer3) {
      hoverLayer3.src = './assets/image/hover-layer-3-es.png';
    }

    if (hoverLayer4) {
      hoverLayer4.src = './assets/image/hover-layer-4-es.png';
    }
    if (hoverLayer5) {
      hoverLayer5.src = './assets/image/hover-layer-5-es.png';
    }
  } else{
    if (hoverLayer1) {
      hoverLayer1.src = './assets/image/hover-layer-1.png';
    }
    if (hoverLayer2) {
      hoverLayer2.src = './assets/image/hover-layer-2.png';
    }
    if (hoverLayer3) {
      hoverLayer3.src = './assets/image/hover-layer-3.png';
    }
    if (hoverLayer4) {
      hoverLayer4.src = './assets/image/hover-layer-4.png';
    }
    if (hoverLayer5) {
      hoverLayer5.src = './assets/image/hover-layer-5.png';
    }
  }


}

const platformRender=()=>{
  document.querySelector('.platform-page-title').textContent = contentData?.platform?.button?.after_click?.main_title || '';
    document.querySelector('.platform-page-subtitle').textContent = contentData?.platform?.button?.after_click?.sub_title || '';
    document.querySelector('.platform-single-title-1').textContent = contentData?.platform?.button?.after_click?.feature_4?.title || '';
    document.querySelector('.platform-single-title-2').textContent = contentData?.platform?.button?.after_click?.feature_5?.title || '';
    document.querySelector('.platform-single-title-3').textContent = contentData?.platform?.button?.after_click?.feature_6?.title || '';
    document.querySelector('.platform-single-desc-1').textContent = contentData?.platform?.button?.after_click?.feature_4?.description || '';
    document.querySelector('.platform-single-desc-2').textContent = contentData?.platform?.button?.after_click?.feature_5?.description || '';
    document.querySelector('.platform-single-desc-3').textContent = contentData?.platform?.button?.after_click?.feature_6?.description || '';

}

const keyFeatureRender=()=>{
  document.querySelector('.key-page-title').textContent = contentData?.key_feature?.button?.after_click?.main_title || '';
  document.querySelector('.key-page-subtitle').textContent = contentData?.key_feature?.button?.after_click?.sub_title || '';
    document.querySelector('.feature-text-1').textContent = contentData?.key_feature?.button?.after_click?.feature_1?.description || '';
    document.querySelector('.feature-text-2').textContent = contentData?.key_feature?.button?.after_click?.feature_2?.description || '';
    document.querySelector('.feature-text-3').textContent = contentData?.key_feature?.button?.after_click?.feature_3?.description || '';
    document.querySelector('.feature-text-4').textContent = contentData?.key_feature?.button?.after_click?.feature_4?.description || '';
    document.querySelector('.feature-text-5').textContent = contentData?.key_feature?.button?.after_click?.feature_5?.description || '';
  const featureImg1 = document.querySelector('.feature-img-1');
  const featureImg2 = document.querySelector('.feature-img-2');
  const featureImg3 = document.querySelector('.feature-img-3');
  const featureImg4 = document.querySelector('.feature-img-4');
  const featureImg5 = document.querySelector('.feature-img-5');
  if(localStorage.getItem('selectedLanguage') === 'es'){
    if (featureImg1) {
      featureImg1.src = './assets/image/digital-foot-es.png';
    }
    if (featureImg2) {
      featureImg2.src = './assets/image/face-rec-es.png';
    }
    if (featureImg3) {
      featureImg3.src = './assets/image/link-ana-es.png';
    }
    if (featureImg4) {
      featureImg4.src = './assets/image/dark-net-es.png';
    }
    if (featureImg5) {
      featureImg5.src = './assets/image/big-data-es.png';
    }
    if(document.querySelector('.key-page-col').classList.contains('col-xxl-9')){
        document.querySelector('.key-page-col').classList.remove('col-xxl-9');
        document.querySelector('.key-page-col').classList.add('col-xxl-10');
    }
  }else{
    if (featureImg1) {
      featureImg1.src = './assets/image/digital-foot.png';
    }
    if (featureImg2) {
      featureImg2.src = './assets/image/face-rec.png';
    }
    if (featureImg3) {
      featureImg3.src = './assets/image/link-ana.png';
    }
    if (featureImg4) {
      featureImg4.src = './assets/image/dark-net.png';
    }
    if (featureImg5) {
      featureImg5.src = './assets/image/big-data.png';
    }

    if(document.querySelector('.key-page-col').classList.contains('col-xxl-10')){
      document.querySelector('.key-page-col').classList.remove('col-xxl-10');
      document.querySelector('.key-page-col').classList.add('col-xxl-9');
    }
  }

}


const contactRender=()=>{
    document.querySelector('.contact-page-title').textContent = contentData?.contact_us?.main_title || '';
    document.querySelector('.contact-page-subtitle').textContent = contentData?.contact_us?.sub_title || '';
    console.log(document.querySelector('#contactForm input[name="first_name"]'))
    document.querySelector('#contactForm input[name="first_name"]').placeholder = contentData?.contact_us?.button?.after_click?.placeholder_text_in_form?.input_1 || 'First Name';
    document.querySelector('#contactForm input[name="last_name"]').placeholder = contentData?.contact_us?.button?.after_click?.placeholder_text_in_form?.input_2 || 'Last Name';
    document.querySelector('#contactForm input[name="email"]').placeholder = contentData?.contact_us?.button?.after_click?.placeholder_text_in_form?.input_3 || 'Email';
    document.querySelector('#contactForm input[name="phone_number"]').placeholder = contentData?.contact_us?.button?.after_click?.placeholder_text_in_form?.input_4 || 'Phone Number';
    document.querySelector('#contactForm input[name="organization"]').placeholder = contentData?.contact_us?.button?.after_click?.placeholder_text_in_form?.input_5 || 'Organization';
    document.querySelector('#contactForm input[name="title"]').placeholder = contentData?.contact_us?.button?.after_click?.placeholder_text_in_form?.input_6 || 'Title';
    const countrySelect = document.querySelector('#contactForm select[name="country"]');
    if (countrySelect && countrySelect.options.length > 0) {
        countrySelect.options[0].textContent = contentData?.contact_us?.button?.after_click?.placeholder_text_in_form?.input_7.toUpperCase() || 'Select Country'.toUpperCase();
    }
  document.querySelector('#contactForm input[name="organization_website"]').placeholder = contentData?.contact_us?.button?.after_click?.placeholder_text_in_form?.input_8 || 'Organization website';
  document.querySelector('#contactForm textarea[name="message"]').placeholder = contentData?.contact_us?.button?.after_click?.placeholder_text_in_form?.input_9 || 'write Your message';
  document.querySelector('.agree-label').textContent = contentData?.contact_us?.button?.after_click?.placeholder_text_in_form?.checkbox_text || 'i consent to tucan’s privacy policies, including marketing communications via email and telephone';
  document.querySelector('.contact-form-btn').textContent = contentData?.contact_us?.button?.title || 'Submit';
}
const termsConditionsRender=()=>{}
const privacyRender=()=>{}


const dataPage = document.body.getAttribute('data-page');
if(dataPage === 'home'){
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
}




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

