import './style.scss'

const loginBtn = document.getElementById("loginBtn");
const confirmLogin = document.getElementById("confirmLogin");
const popupBackdrop = document.getElementById("popupBackdrop");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");
const usernameInput = document.getElementById("username");
const welcomeMsg = document.getElementById("welcomeMsg");

// Show popup on nav login button
loginBtn.addEventListener('click', () => {
  if (loginBtn.textContent === 'Logga in') {
    togglePopup();
  } else {
    // Log out user
    welcomeMsg.textContent = '';
    loginBtn.textContent = 'Logga in';
  }
});

closeBtn.addEventListener('click', togglePopup);
popupBackdrop.addEventListener('click', togglePopup);

function togglePopup() {
  popup.classList.toggle('hidden');
  popupBackdrop.classList.toggle('hidden');
}

confirmLogin.addEventListener('click', () => {
  const name = usernameInput.value.trim();
  if (name) {
    const lastUser = localStorage.getItem('lastUser');

    if (lastUser && lastUser.toLowerCase() === name.toLowerCase()) {
      welcomeMsg.innerHTML = `Välkommen tillbaka! Du är inloggad som <strong>${name}</strong>`;
    } else {
      welcomeMsg.innerHTML = `Du är inloggad som <strong>${name}</strong>`;
    }

    localStorage.setItem('lastUser', name);

    loginBtn.textContent = 'Logga ut';
    togglePopup();
    usernameInput.value = '';
  }
});


