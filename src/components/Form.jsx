import { useRef, useState } from "react";
import Header from "./Header.jsx";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbw6VBUnuLAX9rwb2AIhe69GtPdU0vYKHXnQBpzuriybGLBDqPQ1BnQmqurgXTLr8JPLiQ/exec";

export default function Form() {
  const form = useRef(null);
  const btn = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form.current),
    })
      .then((response) => {
        alert("Success! Your information has been sent.");
        form.current.reset();
        setIsSending(false);
      })
      .catch((error) => {
        console.error("Error!", error.message);
        alert("There was an error submitting the form. Please try again.");
        setIsSending(false);
      });
  };

  return (
    <form action="" className="form" ref={form} onSubmit={handleSubmit}>
      <Header />
      <fieldset className="form__fieldset">
        <input
          id="name"
          name="Name"
          type="text"
          className="form__input"
          placeholder="Name Surname"
          required
        />
        <input
          id="number"
          name="Phone Number"
          type="number"
          className="form__input"
          placeholder="Phone Number"
          required
        />
        <input
          id="email"
          name="Email"
          type="email"
          className="form__input"
          placeholder="Email"
        />
        <input
          id="adress"
          name="City & state"
          type="text"
          className="form__input"
          placeholder="City & State"
          required
        />
        <select
          id="model"
          name="Model of Interest"
          className="form__select"
          defaultValue=""
          required
        >
          <option value="">Model of Interest</option>
          <option value="Hanover 255">Hanover 255</option>
          <option value="Hanover 265">Hanover 265</option>
          <option value="Hanover 305">Hanover 305</option>
          <option value="Hanover 447">Hanover 327</option>
          <option value="Hanover 347">Hanover 347</option>
          <option value="Hanover 355">Hanover 355</option>
          <option value="Hanover 375">Hanover 375</option>
          <option value="Hanover 377">Hanover 377</option>
          <option value="Hanover 387">Hanover 387</option>
          <option value="Hanover 415">Hanover 415</option>
          <option value="Hanover 447">Hanover 447</option>
          <option value="Not sure">Not Sure</option>
        </select>
        <select
          id="sales"
          name="Salesperson"
          className="form__select"
          defaultValue=""
          required
        >
          <option value="">Sales Person</option>
          <option value="Roni Meirovitz">Roni Meirovitz</option>
          <option value="Yohanan Castillo">Yohanan Castillo</option>
          <option value="Naama Issachar">Naama Issachar</option>
          <option value="Mike Wynn">Mike Wynn</option>
          <option value="Andrew Rapoport">Andrew Rapoport</option>
          <option value="Esther Toribio">Esther Toribio</option>
          <option value="TBD">Not Determined Yet</option>
        </select>
        <button
          type="submit"
          className="form__button"
          ref={btn}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </fieldset>
    </form>
  );
}
