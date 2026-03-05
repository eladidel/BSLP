const scriptURL =
  "https://script.google.com/macros/s/AKfycbw6VBUnuLAX9rwb2AIhe69GtPdU0vYKHXnQBpzuriybGLBDqPQ1BnQmqurgXTLr8JPLiQ/exec"; // <--- Paste your URL here
const form = document.getElementById("submit-to-google");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Change button text to show it's working
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.disabled = true;
  submitBtn.innerHTML = "Sending...";

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = "Send Message";
    })
    .catch((error) => {
      console.error("Error!", error.message);
      msg.innerHTML = "Something went wrong. Try again.";
      submitBtn.disabled = false;
      submitBtn.innerHTML = "Send Message";
    });
});
