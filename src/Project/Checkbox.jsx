// CookieConsent.js
import React, { useState } from 'react';

const Checkbox = () => {
  const [isCookieAccepted, setCookieAccepted] = useState(false);

  const handleCheckboxChange = (event) => {
    setCookieAccepted(event.target.checked);
  };

  const handleSubmit = () => {
    if (isCookieAccepted) {
      alert('Thank you! Cookies are enabled.');
      // Here you can perform any additional actions related to cookie acceptance.
    } else {
      alert('Please check the box to accept cookies.');
      // You can handle the error message or other actions if cookies are not accepted.
    }
  };

  return (
    <div>
     
     
        <label>
          <input
            type="checkbox"
            name="cookieConsent"
            checked={isCookieAccepted}
            onChange={handleCheckboxChange}
          />
          I agree to the Terms of Service and the Privacy Policy
        </label>
        
      
      
    </div>
  );
}

export default Checkbox;
