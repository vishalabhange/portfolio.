import React from "react";

export default function Second() {
  return (
    <div>
      <div className="second">
        <section className="content-card contact" id="contact">
          <h1>Contact</h1>
          <form
            className="form"
            id="form"
            action="https://www.freecodecamp.com/email-submit"
          >
            <div className="input-box">
              <input
                type="text"
                className="text-input"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                className="text-input"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="input-box">
              <input
                type="subject"
                className="text-input"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <div className="input-box">
              <textarea
                name="text"
                className="message"
                placeholder="Message..."
              ></textarea>
            </div>
            <div className="input-box">
              <input
                type="submit"
                className="submit-btn"
                id="submit"
                value="submit"
              />
            </div>
          </form>
        </section>
      </div>

      <div className="second"></div>
    </div>
  );
}
