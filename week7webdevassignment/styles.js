document.getElementById('submitBtn').addEventListener('click', function () {
    const name = document.getElementById('username').value;
  
    if (name.trim() === '') {
      alert('Please enter your name!');
      return;
    }
  
    localStorage.setItem('userName', name);
    alert(`Hi ${name}, your feedback has been recorded!`);
    // Redirect or handle feedback here
  });
  