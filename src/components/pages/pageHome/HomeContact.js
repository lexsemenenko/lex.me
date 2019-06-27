import React from 'react';

const HomeContact = () => (
  <div className="group">
    <h2 className="section__title">
      <span>Contact</span>
    </h2>
    <div data-grid="columns: 12">
      <div data-grid-item="width: 6, offset: 3">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-item">
            <label htmlFor="name">Name</label>
            <input name="name" id="name" type="text" defaultValue="" />
          </div>
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input name="email" id="email" type="email" defaultValue="" />
          </div>
          <div className="form-item">
            <label htmlFor="message">Your Message</label>
            <textarea name="message" id="message" />
          </div>
          <p>
            <button className="btn" type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  </div>
);

export default HomeContact;
