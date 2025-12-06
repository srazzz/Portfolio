import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React Native', 'React', 'JavaScript', 'Redux', 'HTML/CSS'],
      icon: '📱'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'PHP', 'MySQL', 'REST API Design', 'Serverless architectures'],
      icon: '⚙️'
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS Lambda', 'SQS', 'SNS', 'EventBridge', 'RDS', 'EC2', 'VPC', 'CloudWatch', 'Firebase', 'AWS SAM'],
      icon: '☁️'
    },
    {
      title: 'Tools & Deployment',
      skills: ['Google Play Console', 'App Store Connect', 'TestFlight', 'Xcode', 'Android Studio', 'Git', 'GitHub', 'Bitbucket', 'Postman', 'Figma'],
      icon: '🛠️'
    },
    {
      title: 'Engineering Practices',
      skills: ['Code Reviews', 'Mentoring', 'Technical Interviews', 'End-to-End Ownership', 'Planning → Development → Deployment → Maintenance'],
      icon: '🎯'
    },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title fade-in-up">Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-horizontal fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="category-header-horizontal">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

