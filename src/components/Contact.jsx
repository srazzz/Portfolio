import './Contact.css';

const Contact = () => {
  const emailBody = encodeURIComponent("Hey, I saw your portfolio. Let's connect!");
  const emailSubject = encodeURIComponent("Let's Connect");
  
  const socialLinks = [
    {
      name: 'Email',
      icon: '✉️',
      url: `mailto:sravs.vadlamanu@gmail.com?subject=${emailSubject}&body=${emailBody}`,
      label: 'sravs.vadlamanu@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/durga-sravani-vadlamanu-8bb2871a2',
      label: 'LinkedIn Profile'
    },
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-content fade-in-up">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-message">
            Always open to collaborating on impactful mobile, backend, and cloud projects.
          </p>
          <div className="social-buttons">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
              >
                <span className="social-icon">{link.icon}</span>
                <span className="social-label">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

