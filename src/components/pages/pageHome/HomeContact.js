import React from 'react';
import Icon from '../../elements/Icons';

const HomeContact = () => (
  <div className="group contact">
    <h2 className="section__title">
      <span>Contact</span>
    </h2>
    <div data-grid="columns: 12">
      <div data-grid-item="width: 3, offset: 2">
        <ul className="list-plain">
          <li>
            <a className="t-large" href="mailto:lex@lex.me">
              lex@lex.me
            </a>
          </li>
          <li>
            <a className="t-large" href="tel:1-412-328-1034">
              (412) 328-1034
            </a>
          </li>
          <li>
            <ul className="social-list ">
              <li>
                <a
                  href="http://www.linkedin.com/in/lexs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="linkedin" />
                </a>
              </li>
              <li>
                <a
                  href="http://github.com/lexsemenenko"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="github" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/lex.semenenko"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="facebook" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div data-grid-item="width: 5">
        <p>Or, reach out using the form below.</p>
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-item">
            <label htmlFor="name">Name</label>
            <input name="name" type="text" defaultValue="" />
          </div>
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input name="email" id="email" type="email" defaultValue="" />
          </div>
          <div className="form-item">
            <label htmlFor="message">Your Message</label>
            <textarea name="message" id="message" cols="50" />
          </div>
          <p>
            <button className="btn btn-accent" type="submit">
              Send
            </button>
          </p>
        </form>
      </div>
    </div>
  </div>
);

export default HomeContact;
