let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart .classList.remove('active');
    loginForm .classList.remove('active');
    navBar.classList.remove('active');

};

// ---------------------------------------------------------------------------------------------------

let shoppingCart= document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart .classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm .classList.remove('active');
    navBar.classList.remove('active');

};
// ------------------------------------------------------------------------------------------------------
let loginForm= document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm .classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart .classList.remove('active');
    navBar.classList.remove('active');

};
// -------------------------------------------------------------------------------------------------------
let navBar= document.querySelector('.navbar');

document.querySelector('#list-btn').onclick = () => {
    navBar .classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart .classList.remove('active');
    loginForm .classList.remove('active');

};
// -------------------------------------------------------------------------------------------------------
Window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart .classList.remove('active');
    loginForm .classList.remove('active');
    navBar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


function showToast(message, type = "error") {
  const toaster = document.getElementById("toaster");

  // Create toast element
  const toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.textContent = message;

  // Append toast to the toaster container
  toaster.appendChild(toast);

  // Auto-remove toast after 3 seconds
  setTimeout(() => {
    toast.classList.add("fade-out");
    toast.addEventListener("transitionend", () => toast.remove());
  }, 3000);
}

function validateForm(event) {
  event.preventDefault(); // Prevent form from submitting

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Simple regex for email validation

  if (!email.match(emailPattern)) {
    showToast("Please enter a valid email address", "error");
    return;
  }

  if (password.length < 6) {
    showToast("Password must be at least 6 characters long", "error");
    return;
  }

  // Save to local storage
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password); // Not recommended to store passwords like this in real apps

  showToast("Login successful!", "success");
  const timer = setTimeout(() => { 
loginForm.classList.remove("active");

   }, 2000)
  
  
}
