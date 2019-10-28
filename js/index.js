const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};




// Updating the nav bar with the anchor tag descriptions //
let anchorItems = document.querySelectorAll('a');
anchorItems[0].textContent = siteContent["nav"]["nav-item-1"];
anchorItems[1].textContent = siteContent["nav"]["nav-item-2"];
anchorItems[2].textContent = siteContent["nav"]["nav-item-3"];
anchorItems[3].textContent = siteContent["nav"]["nav-item-4"];
anchorItems[4].textContent = siteContent["nav"]["nav-item-5"];
anchorItems[5].textContent = siteContent["nav"]["nav-item-6"];

// Updating the nav system by adding two new items //
const parentElement = document.querySelector('nav');

const lastNewATag = document.createElement('a');
lastNewATag.textContent = 'Search';
lastNewATag.setAttribute('href', '#');
lastNewATag.style.color = 'green';
parentElement.appendChild(lastNewATag);

const firstNewATag = document.createElement('a');
firstNewATag.textContent = 'History';
firstNewATag.setAttribute('href', '#');
firstNewATag.style.color = 'green';
parentElement.prepend(firstNewATag);

// Updating the anchor tag text color //
anchorItems.forEach(function(item) {
  item.style.color = 'green';
});



// Updating the img src for the logo //
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



// Updating the cta heading // 
document.querySelector('.cta-text h1').id = 'domHeading';
document.getElementById('domHeading').innerHTML = 
"DOM" + "<br>" + "Is" + "<br>" + "Awesome";



// Updating the cta button //
let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;



// Updating the cta image //
let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);



// Updating the main content h4 //
let mainContentHeadings = document.querySelectorAll('.text-content h4');
mainContentHeadings[0].textContent = siteContent["main-content"]["features-h4"];
mainContentHeadings[1].textContent = siteContent["main-content"]["about-h4"];
mainContentHeadings[2].textContent = siteContent["main-content"]["services-h4"];
mainContentHeadings[3].textContent = siteContent["main-content"]["product-h4"];
mainContentHeadings[4].textContent = siteContent["main-content"]["vision-h4"];



// Updating the main content p tags //
let mainContentP = document.querySelectorAll('.text-content p');
mainContentP[0].textContent = siteContent["main-content"]["features-content"];
mainContentP[1].textContent = siteContent["main-content"]["about-content"];
mainContentP[2].textContent = siteContent["main-content"]["services-content"];
mainContentP[3].textContent = siteContent["main-content"]["product-content"];
mainContentP[4].textContent = siteContent["main-content"]["vision-content"];



// Updating the main content img //
let mainContentImg = document.getElementById('middle-img');
mainContentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);



// Updating the contact h4 //
let contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent["contact"]["contact-h4"];



// Updating the contact p tags //
document.querySelector('.contact p').id = 'addressID';
document.getElementById('addressID').innerHTML =
"123 Way 456 Street" + "<br>" + "Somewhere, USA";
let contactP = document.querySelectorAll('.contact p');
// contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;



// Updating the footer //
let footerContent = document.querySelector('footer p');
footerContent.textContent = siteContent.footer.copyright;