import "../../css/ContactUs/faq.css";

import "../../Component/ContactUsComponent/ContactUsJS/FAQ.js";

function FAQ() {
    return (
        <div class="faq-section">
  <h2>Frequently Asked Questions</h2>
  <div class="faq-item">
    <div class="faq-header">
      <button class="faq-toggle">+</button><span>  </span>
      <span class="faq-question">What services do you offer as a wedding planner?</span>
    </div>
    <div class="faq-answer">
      <p>We offer full-service wedding planning, including venue selection, vendor coordination, decor design, timeline management, and on-the-day coordination.</p>
    </div>
  </div>

  <div class="faq-item">
    <div class="faq-header">
      <button class="faq-toggle">+</button>
      <span class="faq-question">How far in advance should I book your services?</span>
    </div>
    <div class="faq-answer">
      <p>We recommend booking our services at least 6 to 12 months in advance to ensure availability and allow ample time for planning.</p>
    </div>
  </div>

  <div class="faq-item">
    <div class="faq-header">
      <button class="faq-toggle">+</button>
      <span class="faq-question">Do you offer customizable wedding packages?</span>
    </div>
    <div class="faq-answer">
      <p>Yes, we offer customizable packages tailored to your specific needs, preferences, and budget.</p>
    </div>
  </div>

  <div class="faq-item">
    <div class="faq-header">
      <button class="faq-toggle">+</button>
      <span class="faq-question">Can you work with a specific theme or cultural tradition?</span>
    </div>
    <div class="faq-answer">
      <p>Absolutely! We specialize in creating personalized weddings that reflect your theme, culture, and traditions.</p>
    </div>
  </div>
</div>



      );
}

export default FAQ;
