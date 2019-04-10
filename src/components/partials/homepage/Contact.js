import React from 'react';

const HomeContact = () => (
  <div id="contact" className="section section--lines-dark  scrollpoint">
    <div className="group">
      <h2 className="h2 h2__block">
        <span>Contact</span>
      </h2>
      <div data-grid="columns: 12">
        <div data-grid-item="width: 6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <form>
            <div className="form-item">
              <label htmlFor="item_id">Name</label>
              <input id="item_id" type="text" defaultValue="" />
            </div>
            <div className="form-item">
              <label htmlFor="item_id2">Email</label>
              <input id="item_id2" type="email" defaultValue="" />
            </div>
            <div className="form-item">
              <label htmlFor="item_id3">Your Message</label>
              <textarea />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default HomeContact;
