const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <p>
        My inbox is always open. Whether you're looking to book a session, discuss a project, or just say hi, I'd love to hear from you!
      </p>
      <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '2.5rem', fontStyle: 'italic' }}>
        * When reaching out for bookings, please include your project requirements, estimated dates, and location.
      </p>
      <a href="mailto:saksham@example.com" className="cta-button">Say Hello</a>
    </section>
  );
};

export default Contact;