import React from "react";
import styles from "./newsletter.module.css"

const Newsletter = () => {
  return (
      <div className={`${styles.blogPostContainer}`}>
          <img src="/BigPost.svg" alt="Big Post Image" className={styles.blogPostImage} />
          <div className={styles.blogSlogan}>
              <h1>Sign Up for Our Newsletters</h1>
              <p>Get notified of the best deals on our WordPress themes.</p>
              <form action="/subscribe" method="POST">
                <div className={styles.form}>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </div>
              </form>
              <div className={styles.checkboxContainer}>
                  <input type="checkbox" id="terms" className={styles.checkbox} />
                  <label htmlFor="terms" className={styles.label}>
                      By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.
                  </label>
              </div>
          </div>
      </div>
  );
};

export default Newsletter;
