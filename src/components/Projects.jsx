import { useState } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Convert JSON data to component format with rendered detailedContent
  const renderDetailedContent = (project) => {
    if (!project.details) return null;

    // Notification system with whatIBuilt structure
    if (project.details.whatIBuilt) {
      return (
        <div>
          {project.details.overview && (
            <>
              <h3>Overview</h3>
              <p>{project.details.overview}</p>
            </>
          )}
          {project.details.whatIBuilt && (
            <>
              <h3>What I Built</h3>
              <ul>
                {project.details.whatIBuilt.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {project.details.simpleTerms && (
            <>
              <h3>In Simple Terms</h3>
              <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>{project.details.simpleTerms}</p>
            </>
          )}
        </div>
      );
    }

    // Legacy notification system with steps (for backward compatibility)
    if (project.details.steps) {
      return (
        <div>
          {project.details.steps.map((step, index) => (
            <div key={index}>
              <h3>{step.title}</h3>
              {step.description && <p>{step.description}</p>}
              {step.dataPayload && (
                <>
                  <h4>Data Payload Structure:</h4>
                  <pre><code>{`// Immediate Notification
${step.dataPayload.immediate}

// Scheduled Notification
${step.dataPayload.scheduled}`}</code></pre>
                </>
              )}
              {step.points && (
                <ul>
                  {step.points.map((point, pointIndex) => {
                    // Convert markdown-style **text** to <strong>text</strong>
                    const formattedPoint = point
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/`(.*?)`/g, '<code>$1</code>');
                    return (
                      <li 
                        key={pointIndex} 
                        dangerouslySetInnerHTML={{ __html: formattedPoint }} 
                      />
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>
      );
    }

    // Projects with sections (like Feature Flag & Coupon System)
    if (project.details.sections) {
      return (
        <div>
          {project.details.overview && (
            <>
              <h3>Overview</h3>
              <p>{project.details.overview}</p>
            </>
          )}
          {project.details.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} style={{ marginTop: sectionIndex > 0 ? '2rem' : '1.5rem' }}>
              <h3 style={{ color: 'var(--primary-color)' }}>{section.title}</h3>
              {section.description && <p>{section.description}</p>}
              {section.features && (
                <>
                  <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Key Features:</h4>
                  <ul>
                    {section.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
              {section.impact && (
                <>
                  <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Impact:</h4>
                  <ul>
                    {section.impact.map((impact, impactIndex) => (
                      <li key={impactIndex}>{impact}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
          {project.details.impact && (
            <>
              <h3 style={{ marginTop: '2rem' }}>Overall Impact:</h3>
              <ul>
                {project.details.impact.map((impact, index) => (
                  <li key={index}>{impact}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      );
    }

    // Other projects with overview and features
    if (project.details.overview || project.details.features) {
      return (
        <div>
          {project.details.overview && (
            <>
              <h3>System Overview</h3>
              <p>{project.details.overview}</p>
            </>
          )}
          {project.details.npmPackage && (
            <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem', padding: '1rem', background: 'var(--bg-primary)', borderRadius: '8px', border: '1px solid rgba(0, 173, 181, 0.3)' }}>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>📦 NPM Package</h4>
              <p style={{ marginBottom: '0.5rem' }}><strong>Package:</strong> <code>{project.details.npmPackage.name}</code></p>
              <p style={{ marginBottom: '0.5rem' }}>{project.details.npmPackage.description}</p>
              <a 
                href={project.details.npmPackage.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: 'var(--primary-color)', 
                  textDecoration: 'underline',
                  display: 'inline-block',
                  marginTop: '0.5rem'
                }}
              >
                View on NPM →
              </a>
            </div>
          )}
          {project.details.features && (
            <>
              <h3>Key Features:</h3>
              <ul>
                {project.details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </>
          )}
          {project.details.impact && (
            <>
              <h3>Impact:</h3>
              <ul>
                {project.details.impact.map((impact, index) => (
                  <li key={index}>{impact}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      );
    }

    return null;
  };

  const projects = projectsData.projects.map(project => ({
    ...project,
    detailedContent: renderDetailedContent(project)
  }));

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section className="projects section" id="projects">
        <div className="container">
          <h2 className="section-title fade-in-up">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-stack">
                    {project.stack.map((tech, techIndex) => (
                      <span key={techIndex} className="stack-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-highlight">
                    <span className="highlight-icon">✨</span>
                    <span>{project.highlight}</span>
                  </div>
                  <button 
                    className="project-button"
                    onClick={() => handleViewDetails(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Projects;
