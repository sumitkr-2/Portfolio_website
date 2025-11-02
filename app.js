document.addEventListener('DOMContentLoaded', function () {
  initCustomCursor();
  initNavigation();
  initSmoothScrolling();
  initTypingName();
  initContactForm();

  function initTypingName() {
    const typingTarget = document.getElementById("typing-name");
    const name = "Sumit Kumar";
    let index = 0;

    function typeEffect() {
      if (index < name.length) {
        typingTarget.textContent += name.charAt(index);
        index++;
        setTimeout(typeEffect, 120);
      }
    }

    if (typingTarget) typeEffect();
  }

  function initCustomCursor() {
    const cursorDot = document.getElementById("cursor-dot");
    const cursorOutline = document.getElementById("cursor-outline");

    if (!cursorDot || !cursorOutline) return;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener("mousemove", e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    function animateOutline() {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;
      requestAnimationFrame(animateOutline);
    }

    animateOutline();
  }

  function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const section = document.querySelector(href);
          if (section) {
            window.scrollTo({
              top: section.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }

  function initContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = form?.querySelector('.btn-submit');

    if (!form || !submitBtn) return;

    // Append status message element
    const status = document.createElement('div');
    status.id = 'form-status';
    status.style.marginTop = '12px';
    status.style.fontWeight = 'bold';
    status.style.display = 'none';
    form.appendChild(status);

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const fullName = form.fullName.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      if (!fullName || fullName.length < 2) return alert("Enter valid name");
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert("Enter valid email");
      if (!subject || subject.length < 3) return alert("Enter valid subject");
      if (!message || message.length < 10) return alert("Enter longer message");

      submitBtn.classList.add('loading');

      const url = 'https://docs.google.com/forms/d/e/1FAIpQLSeSTPEwLs2vWg45Qvir8M_Piz2jtP5o7H163Rj1IOyUefq-YQ/formResponse';

      // ⚠️ Replace the following entry IDs with your actual Google Form field entry IDs
    const params = new URLSearchParams();
params.append('entry.934545434', fullName);   // Full Name
params.append('entry.1488788960', email);     // Email
params.append('entry.376984020', subject);    // Subject
params.append('entry.1923624029', message);    // Message




      fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        body: params
      }).then(() => {
        status.style.display = 'block';
        status.style.color = 'lightgreen';
        status.textContent = '✅ Message sent successfully!';
        form.reset();
        submitBtn.classList.remove('loading');
      }).catch(() => {
        status.style.display = 'block';
        status.style.color = 'red';
        status.textContent = '❌ Failed to send message.';
        submitBtn.classList.remove('loading');
      });
    });
  }
});
