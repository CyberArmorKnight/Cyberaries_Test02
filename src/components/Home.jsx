import React from 'react';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Vulnerability Assessment',
      description: 'Identify weaknesses before attackers do, reduce risk exposure, and strengthen your overall security posture with comprehensive vulnerability scanning.'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Data Protection',
      description: 'Safeguard sensitive data against breaches and leaks with strong encryption, access control, and secure storage solutions.'
    },
    {
      icon: 'fas fa-award',
      title: 'Brand Reputation',
      description: 'Maintain customer trust and brand integrity by preventing cyber incidents and demonstrating strong data responsibility.'
    },
    {
      icon: 'fas fa-network-wired',
      title: 'Advanced Threat Detection',
      description: 'Leverage real-time monitoring and AI-driven analytics to detect threats on your systems before they cause damage.'
    },
    {
      icon: 'fas fa-fingerprint',
      title: 'Zero Trust Architecture',
      description: 'Enforce strict access control and verification at every level to prevent lateral movement in your network.'
    },
    {
      icon: 'fas fa-clipboard-check',
      title: 'Compliance & Governance',
      description: 'Achieve and maintain compliance with ISO 27001, RBI guidelines, GDPR, and other regulatory requirements.'
    }
  ];

  const services = [
    {
      icon: 'fas fa-lock',
      title: 'Network Security',
      description: 'Deploying firewalls and intrusion detection systems to safeguard networks from unauthorized access and threats.'
    },
    {
      icon: 'fas fa-key',
      title: 'Data Encryption',
      description: 'Encrypting sensitive data at rest and in transit using advanced encryption standards to prevent data breaches.'
    },
    {
      icon: 'fas fa-user-shield',
      title: 'Identity & Access Management',
      description: 'Managing user identities and access with MFA and detailed role-based control for enhanced security.'
    },
    {
      icon: 'fas fa-eye',
      title: '24/7 Security Monitoring',
      description: 'Round-the-clock monitoring with advanced SIEM systems for real-time detection and incident response.'
    },
    {
      icon: 'fas fa-database',
      title: 'Backup & Recovery',
      description: 'Protecting critical data with secure backups and rapid recovery plans to ensure business continuity.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Security Configuration',
      description: 'Hardening systems and applying secure configurations across all infrastructure components.'
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Security Assessment',
      description: 'We conduct a comprehensive analysis of your current security posture, identifying vulnerabilities and potential threats across all systems.'
    },
    {
      number: 2,
      title: 'Risk Analysis',
      description: 'Our experts prioritize risks based on impact and likelihood, creating a roadmap for addressing the most critical security gaps.'
    },
    {
      number: 3,
      title: 'Implementation',
      description: 'We deploy tailored security solutions, from firewalls to encryption, ensuring comprehensive protection across your infrastructure.'
    },
    {
      number: 4,
      title: 'Clearing Audit & Report Generation',
      description: 'Comprehensive audit documentation and detailed reporting to ensure compliance and provide clear insights into your security status.'
    }
  ];

  const testimonials = [
    {
      avatar: 'SJ',
      name: 'Sarah Johnson',
      date: '15 January 2025',
      text: 'CyberAries helped us identify critical vulnerabilities before attackers could exploit them. Their team is proactive and truly knows their craft.'
    },
    {
      avatar: 'MD',
      name: 'Mark Davis',
      date: '28 December 2024',
      text: 'Thanks to their 24/7 monitoring, we sleep better knowing our systems are safe. They\'ve prevented several potential breaches already.'
    },
    {
      avatar: 'EC',
      name: 'Emily Carter',
      date: '10 December 2024',
      text: 'Their penetration testing gave us a clear picture of our risks. The remediation plan was actionable and effective. Highly recommended.'
    }
  ];

  const stripItems = [
    'Endpoint Protection', 'Threat Intelligence', 'Penetration Testing',
    'Security Audits', 'Incident Response', 'Network Security',
    'Cloud Security', 'Compliance Management'
  ];

  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-subtitle">Cybersecurity Experts</div>
          <h1 className="hero-title">Cyber Aries Pvt Ltd</h1>
          <p className="hero-description">
            Empowering organizations with expert audits, continuous monitoring, and deep penetration testing — ensuring resilience, compliance, and confidence in every layer of your digital ecosystem.
          </p>
          <div className="hero-buttons">
            <a href="#book" className="btn-primary">Book Free Security Consultation</a>
            <a href="#services" className="btn-secondary">Explore Services</a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Security Audits Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Threat Detection Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Security Monitoring</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">Enterprise Clients</div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Cybersecurity Excellence</div>
            <h2 className="section-title">Comprehensive Solutions for Modern Threats</h2>
            <p className="section-description">
              Protect your business from ever-evolving cyber risks with our end-to-end security solutions. We offer advanced threat detection, real-time monitoring, and proactive defense strategies.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rotating-strip">
        <div className="strip-container">
          <div className="strip-content">
            {stripItems.map((item, index) => (
              <React.Fragment key={index}>
                <span className="strip-item">{item}</span>
                <span className="strip-separator">/</span>
              </React.Fragment>
            ))}
          </div>
          <div className="strip-content">
            {stripItems.map((item, index) => (
              <React.Fragment key={`duplicate-${index}`}>
                <span className="strip-item">{item}</span>
                <span className="strip-separator">/</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Our Process</div>
            <h2 className="section-title">How We Secure Your Business</h2>
            <p className="section-description">
              A systematic approach to identifying vulnerabilities, implementing defenses, and maintaining continuous security.
            </p>
          </div>
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {processSteps.map((step, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-content">
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-description">{step.description}</p>
                </div>
                <div className="timeline-number">{step.number}</div>
                <div style={{ width: '45%' }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">What We Provide</div>
            <h2 className="section-title">Robust Cybersecurity Services</h2>
            <p className="section-description">
              Whether you're safeguarding sensitive data or ensuring compliance, our robust cybersecurity services help you stay secure, resilient, and ahead of the threat curve.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href="#contact" className="btn-secondary">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Testimonials</div>
            <h2 className="section-title">Hear It from Our Happy Customers</h2>
            <p className="section-description">
              See how our cybersecurity solutions have helped businesses stay secure, compliant, and resilient.
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{testimonial.avatar}</div>
                  <div>
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-date">{testimonial.date}</div>
                  </div>
                </div>
                <div className="testimonial-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="book">
        <div className="container">
          <h2 className="cta-title">Ready to Secure Your Business?</h2>
          <p className="cta-description">
            Our approach begins with understanding your business and technologies - not selling tools or services. Let us help you build a resilient cybersecurity strategy. Schedule a technical consultation with our security engineering team to learn how we can help you build security that lasts.
          </p>
          <a href="#contact" className="btn-primary">Get Your Audit Quote Now</a>
        </div>
      </section>
    </main>
  );
};

export default Home;