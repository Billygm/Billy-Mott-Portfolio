import React from "react";

const styles = {
  primary: {
    background: "#00243d",
    color: "#75A3A5",
  },
  secondary: {
    background: "#75A3A5",
    color: "#00243d",
  },
};
const Contact = () => {
  return (
    <form style={styles.primary} class="m-3">
      <p>Please email me at <a href="mailto:Billy.g.m@gmail.com">Billy.g.m@gmail.com</a></p>
      {/* <fieldset>
        <legend>Contact Me</legend>
        <div class="mb-3">
          <label for="nameInput" class="form-label">
            Name
          </label>
          <input
            type="text"
            id="nameInput"
            class="form-control"
            placeholder="Name"
          />
        </div>
        <div class="mb-3">
          <label for="emailInput" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="messageInput" class="form-label">
            Message
          </label>
          <textarea
            type="text"
            id="messageInput"
            class="form-control"
            rows="3"
            placeholder="Message"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <p>Form currently not working; to contact me send an email to <a href="mailto:Billygm@uw.edu">Billygm@uw.edu</a></p>
      </fieldset> */}
    </form>
  );
};

export default Contact;
