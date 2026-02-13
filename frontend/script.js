document.addEventListener('DOMContentLoaded', () => {
  const newsletterForm = document.getElementById('newsletterForm');
  if (!newsletterForm) return;

  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = (emailInput.value || '').trim();

    if (!email) {
      alert('Please enter your email.');
      return;
    }

    try {
      const resp = await fetch('http://localhost:5000/api/newsletter/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email })
});


      const data = await resp.json();
      alert(data.message || 'Subscribed — thanks!');
      emailInput.value = '';
    } catch (err) {
      console.error(err);
      alert('Network error — could not reach the server.');
    }
  });
});
