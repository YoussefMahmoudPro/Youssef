/*01-a Menu toggle icon*/
const menuToggle = {
  toggleContainer: document.getElementById("#menu-toggle"),
  toggleCase: function () {
    this.toggleContainer.addEventListener("click", function () {
      menuToggle.toggleContainer.classList.toggle("close-menu");
    });
  },
};
menuToggle.toggleCase()


{
  const settingIcon = document.querySelector(".setting-icon");
  settingIcon.addEventListener("click", function () {
    settingIcon.classList.toggle("setting-shown");
  });
}

/*End Setting icon code block*/




/*Toggle Navbar*/
{
  const toggleIcon = document.getElementById("menu-toggle");
  const navList = document.getElementById("nav-list");
  toggleIcon.addEventListener("click", function () {
    navList.classList.toggle("navbar__list-opened");
  });
}

/*End toggle navbar*/

// Start Gallery
{
  const sliderCounter = document.querySelector(".slider__counter");
  const focusedImage = document.querySelector(".slider__image");
  const sliderPrev = document.querySelector(".slider__prev");
  const sliderNext = document.querySelector(".slider__next");
  const sliderCaption = document.querySelector(".gallery__text");
  const sliderImages = document.querySelectorAll(".gallery__row-img");

  //send main data to HTML
  sliderImages[0].style.opacity = "1";
  focusedImage.setAttribute("src", sliderImages[0].getAttribute("src"));
  sliderCounter.innerHTML = `${1}/6`;
  sliderCaption.innerHTML = sliderImages[0].getAttribute("alt");
  // set counter
  let counter = parseInt(sliderCounter.innerHTML[0]);
  // Next function
  sliderNext.addEventListener("click", function () {
    if (counter < sliderImages.length) {
      sliderCounter.innerHTML = `${counter + 1}/6`;
      focusedImage.setAttribute(
        "src",
        sliderImages[counter].getAttribute("src")
      );
      sliderCaption.innerHTML = sliderImages[counter].getAttribute("alt");

      // change the shown image opacity
      for (let image of sliderImages) {
        image.style.opacity = "0.6";
        sliderImages[counter].style.opacity = "1";
      }

      counter += 1;
    }
  });

  // prev function
  sliderPrev.addEventListener("click", function () {
    if (counter > 1) {
      sliderCounter.innerHTML = `${counter - 1}/6`;
      focusedImage.setAttribute(
        "src",
        sliderImages[counter - 2].getAttribute("src")
      );
      sliderCaption.innerHTML = sliderImages[counter - 2].getAttribute("alt");

      // change the shown image opacity
      for (let image of sliderImages) {
        image.style.opacity = "0.6";
        sliderImages[counter - 2].style.opacity = "1";
      }

      counter -= 1;
    }
  });
  // click on each image
  for (let image of sliderImages) {
    image.addEventListener("click", function () {
      for (let i of sliderImages) {
        i.style.opacity = "0.6";
      }
      image.style.opacity = "1";
      sliderCounter.innerHTML = `${image.getAttribute("id")}/6`;
      focusedImage.setAttribute("src", image.getAttribute("src"));
      sliderCaption.innerHTML = image.getAttribute("alt");
    });
  }
}
/* contact us*/
{
  const popupMsg = document.querySelector(".contact__popup");
  const userName = document.getElementById("contact-name");
  const userEmail = document.querySelector("#contact-email");
  const userMsg = document.getElementById("contact-msg");
  const btn = document.getElementById("contact-btn");
  /* When Writing */
  userName.addEventListener("focus", function () {
    popupMsg.innerHTML = "Name must be more than 10 letters";
    popupMsg.style.cssText = "border-left: 15px solid #213dd3";
  });
  userEmail.addEventListener("focus", function () {
    popupMsg.innerHTML =
      "Please enter a valid email. activation code will be sent there.";
    popupMsg.style.cssText = "border-left: 15px solid #213dd3";
  });

  userMsg.addEventListener("focus", function () {
    popupMsg.innerHTML = "Messge mustn't be more then 100 words.";
    popupMsg.style.cssText = "border-left: 15px solid #213dd3";
  });

  /*When submit*/

  btn.addEventListener("click", function () {
    let fullName = userName.value;
    let email = userEmail.value;
    let message = userMsg.value;
    if (fullName == "" || email == "" || message == "") {
      popupMsg.innerHTML =
        "Something went wrong. check your data and try again.";
      popupMsg.style.cssText =
        "border-left: 15px solid #f00; box-shadow: 0 0 3px #f00";
    } else {
      popupMsg.innerHTML = "Thank you! Your message has been sent.";
      popupMsg.style.cssText =
        "border-left: 15px solid #0f0; box-shadow: 0 0 3px #0f0";
      userName.value = "";
      userEmail.value = "";
      userMsg.value = "";
    }
  });
}
/*End contact us*/