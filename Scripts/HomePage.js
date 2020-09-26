visit(); 

readMoreAboutMe();

function visit() {
    const visitButton = document.querySelector('.petCare-container .petCare-information div button');
    visitButton.addEventListener('click', () => {
      window.location.href = "Servicii.html";
    })
  }

function readMoreAboutMe() {
    const aboutMeButton = document.querySelector('.aboutMe-container .content-aboutMe button');
    aboutMeButton.addEventListener('click', () => {
        window.location.href = "DespreMine.html";
    })
}