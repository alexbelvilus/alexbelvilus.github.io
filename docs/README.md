<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Big Bro's Mobile Oil Change</title>
<link rel="stylesheet" href="css/configcssforoo.css">
  <script src="script.js" defer></script>
</head>
<body>
  <header>
    <div class="container">
      <h1>Big Bro's Mobile Oil Change</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section id="home" class="hero">
    <div class="hero-content">
      <h2>Your Trusted Mobile Oil Change Service</h2>
      <p>We come to you! Fast, reliable, and affordable oil changes right at your door.</p>   
      <!-- Updated CTA Button -->
      <a href="#contact" class="cta-button">Set up your first mobile oil change</a>
      <!-- Your phone number displayed under CTA button -->
      <h3 class="phone-number">Call us at: <strong>772-834-4209</strong></h3>
    </div>
  </section>

  <section id="services" class="services">
    <h2>Our Packages</h2>
    <div class="service-cards">
      <div class="card">
        <h3>One-Time Oil Change</h3>
        <p>Standard Oil Change: $70</p>
        <p>Synthetic Oil Change: $100</p>
      </div>
      <div class="card">
        <h3> Oil Changes Every 6 Months</h3>
        <p>Standard Oil Change Package: $120</p>
        <p>Synthetic Oil Change Package: $160</p>
        <p><strong>Save 10%!</strong></p>
      </div>
      <div class="card">
        <h3> Oil Change Every 3 Months</h3>
        <p>4 Oil Changes for $225 (Standard)</p>
        <p>4 Oil Changes for $320 (Synthetic)</p>
        <p><strong>Save 20%!</strong></p>
      </div>
    </div>
  </section>

  <!-- Contact Section (Form Integrated) -->
  <section id="contact" class="contact">
    <h2>Contact Us</h2>
    <p>If you have any questions or would like to schedule an oil change, feel free to reach out!</p>
    
    <!-- Contact Form -->
    <div class="form-container">
      <!-- Form with updated action to Formspree -->
      <form action="https://formspree.io/f/xwpvynjv" method="POST" id="contact-form">
        <div class="form-group">
          <label for="name">Your Name:</label>
          <input type="text" id="name" name="name" required placeholder="Enter your name">
        </div>
        
        <div class="form-group">
          <label for="email">Your Email:</label>
          <!-- Email input field -->
          <input type="email" id="email" name="email" required placeholder="Enter your email">
        </div>

        <!-- Added phone input -->
        <div class="form-group">
          <label for="phone">Your Phone Number:</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required>
        </div>

        <div class="form-group">
          <label for="message">Your Message:</label>
          <textarea id="message" name="message" required placeholder="Write your message here"></textarea>
        </div>
        
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
      <div class="form-messages">
        <div class="success-message" style="display:none;">Your message has been sent successfully!</div>
        <div class="error-message" style="display:none;">Oops! Something went wrong. Please try again.</div>
      </div>
    </div>
  </section>

  <footer>
    <p>&copy; 2025 Big Bro's Mobile Oil Change | All Rights Reserved</p>
  </footer>
</body>
</html>
