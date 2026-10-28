const scriptURL =
  "https://script.google.com/macros/s/AKfycbzxAw3og4varwByYhSxXx7b6Ikz64N6kGYLgsEKpvl3MwAzXgnvAxujKZl3L307XEQ/exec";
const form = document.querySelector(".form");
const btn = form.querySelector(".form__button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  btn.disabled = true;
  btn.innerHTML = "Sending...";

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result !== "success") {
        throw new Error(data.error);
      }
      alert("Success! Your information has been sent.");
      form.reset();
      btn.disabled = false;
      btn.innerHTML = "Send";
    })
    .catch((error) => {
      console.error("Error!", error.message);
      alert("There was an error submitting the form. Please try again.");
      btn.disabled = false;
      btn.innerHTML = "Send";
    });
});
