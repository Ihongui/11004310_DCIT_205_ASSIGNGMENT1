import classNames from 'classnames';
import styles from './help-and-support.module.scss';

export interface HelpAndSupportProps {
    className?: string;
}


export const HelpAndSupport = ({ className }: HelpAndSupportProps) => {
    return <div className={classNames(styles.root, className)}>
        <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>
            <strong>Q:</strong> How can I report a missing grade?
            <br />
            <strong>A:</strong> You can report a missing grade on the Missing Grade Form page.
          </li>
          {/* Add more FAQ items as needed */}
        </ul>
      </section>

      <section className="contact-form">
        <h2>Contact Technical Support</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>;
};
