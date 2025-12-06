import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Vaave',
      role: 'Product Engineer',
      period: '06/2024 – Present',
      location: 'Hyderabad, India',
      achievements: [
        'Developed a secure, encrypted Single Sign-On (SSO) solution enabling third-party applications to authenticate through Vaave, and published a reusable NPM package to streamline client integration',
        'Built a scalable push-notification system using AWS Lambda, SQS, EventBridge, and Firebase FCM, supporting both real-time and scheduled notifications for a large user base; leveraged AWS SAM for efficient serverless infrastructure management and deployment',
        'Led development and maintenance of the My Alumni Network React Native app, improving crash-free sessions from 96% to 99.87% and resolving VAPT-identified security vulnerabilities',
        'Enhanced app stability by monitoring and addressing issues through Firebase Crashlytics',
        'Managed release cycles for internal and production builds via Google Play Console (150k+ installs) and App Store Connect (145k+ installs), including regular dependency and library upgrades',
        'Developed and maintained PHP backend services to support mobile app features',
        'Participated in code reviews and conducted technical interviews to support hiring and uphold engineering quality standards'
      ]
    },
    {
      company: 'Aspire Info Labs',
      role: 'Software Development Engineer 1',
      period: '11/2022 – 05/2024',
      location: 'Hyderabad, India',
      achievements: [
        'Fixed bugs and implemented new features across multiple React-based client projects',
        'Rebuilt a React Native application by replacing deprecated dependencies, resulting in major improvements to app performance and stability',
        'Designed and developed a feature-flag system enabling OTA (over-the-air) rollout of new functionality without requiring an app release—teams can toggle features instantly by updating a single database value',
        'Built a robust coupon engine supporting reusable, unlimited, and limited-quantity coupons; rule-based validation (minimum cart value, product-level restrictions, etc.); product-targeted promotions; and a secure hold-time mechanism to minimize payment-related errors',
        'Mentored students in the MERN Stack program under Springboard by Infosys, guiding them through coursework and successful project completion',
        'Trained and supported interns, helping them build technical proficiency and complete their internship projects; actively participated in code reviews and provided ongoing mentorship'
      ]
    },
  ];

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section-title fade-in-up">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="company-name">{exp.company}</h3>
                    <p className="role-name">{exp.role}</p>
                    {exp.location && <p className="location">{exp.location}</p>}
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="achievement-item">
                      <span className="bullet">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

