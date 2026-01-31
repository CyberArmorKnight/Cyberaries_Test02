import React, { useState, useEffect } from 'react';
import './Careers.css';

const Careers = () => {
  const JOBS = [
    { id: 'JOB-001', title: 'Senior Penetration Tester (Red Team)', location: 'Mumbai / Remote', exp: '3-5', dept: 'Red Team', bullets: ['OSCP / OSEP / CRTP or equivalent practical cert', '5+ years offensive experience: external/internal pentests & red team ops', 'Advanced exploitation skills (Python, C, PowerShell), C2 tooling knowledge (Cobalt Strike)', 'Active Directory attack techniques (Kerberoast, DCSync, Golden Ticket)', 'Strong report writing & client communication; deliver PoC exploit & remediation steps'] },
    { id: 'JOB-002', title: 'Red Team Engineer', location: 'Bengaluru', exp: '2-4', dept: 'Red Team', bullets: ['2+ years on red team or advanced pentest teams', 'Experience with adversary emulation and attack automation', 'Exploit chaining, PoC development and payload customization', 'Familiar with post-exploitation tools and covert channels', 'Good scripting (Python/Bash) and threat modelling skills'] },
    { id: 'JOB-003', title: 'Junior Penetration Tester', location: 'Mumbai', exp: '0-2', dept: 'Red Team', bullets: ['Hands-on OWASP Top10 web/API testing knowledge', 'Familiarity with Burp Suite and proxy-based testing', 'Basic scripting (Python/JS) and Linux skills', 'Strong desire to learn — lab/CTF experience preferred', 'Able to write clear findings and remediation recommendations'] },
    { id: 'JOB-004', title: 'Cloud Security Engineer', location: 'Mumbai / Remote', exp: '2-4', dept: 'Cloud', bullets: ['Experience securing AWS/Azure/GCP (well-architected security)', 'IaC security reviews (Terraform/CloudFormation) and drift detection', 'IAM hardening, least-privilege design and role scoping', 'CSPM/CASB tooling experience and cloud forensics basics', 'Automation using Python/Go and CI/CD integration for policy checks'] },
    { id: 'JOB-005', title: 'Network Security Engineer', location: 'Mumbai', exp: '2-5', dept: 'Infrastructure', bullets: ['Firewall architecture, segmentation and secure network design', 'VPN, SD-WAN and hybrid-cloud connectivity expertise', 'Network-based pentesting & packet analysis (Wireshark, tcpdump)', 'Logging, SIEM feed structuring and network detection engineering', 'Hands-on with IDS/IPS, network automation and HA designs'] },
    { id: 'JOB-006', title: 'Application Security Engineer', location: 'Remote', exp: '2-4', dept: 'AppSec', bullets: ['Implement SAST/DAST pipelines and fix-gating in CI', 'Perform secure code reviews across web, mobile and APIs', 'Threat modelling (STRIDE/PASTA) and secure design patterns', 'Integrate security into SDLC and run dev workshops', 'Experience with security linters, SBOMs and dependency scanning'] },
    { id: 'JOB-007', title: 'DevSecOps Engineer', location: 'Remote', exp: '2-4', dept: 'DevSecOps', bullets: ['Harden CI/CD pipelines and implement shift-left controls', 'Container image scanning and runtime hardening (K8s security)', 'Secrets management (HashiCorp Vault / SealedSecrets)', 'Policy-as-code (OPA/Rego) and automated compliance checks', 'Scripting for automation (Python/Bash) and infra-as-code'] },
    { id: 'JOB-008', title: 'SOC Analyst', location: 'Mumbai / Remote', exp: '1-3', dept: 'SOC', bullets: ['Triage alerts in SIEM (Elastic/Splunk/QRadar) and EDR tools', 'Log analysis, hunt basics and incident documentation', 'Familiarity with Windows/Linux artifacts and network indicators', 'Ability to perform initial containment and escalate to IR', 'Experience reading PCAPs and basic forensic triage'] },
    { id: 'JOB-009', title: 'Incident Response Specialist', location: 'Remote', exp: '2-4', dept: 'IR', bullets: ['Develop & run IR playbooks and tabletop exercises', 'Containment, eradication and root-cause analysis experience', 'Digital forensics: disk, memory and log analysis (SIFT, Volatility)', 'Coordinate cross-team remediation and client comms', 'Produce post-incident reports and remediation roadmaps'] },
    { id: 'JOB-010', title: 'Security Operations Intern', location: 'Remote', exp: 'Intern', dept: 'SOC', bullets: ['Exposure to SIEM and EDR platforms; basic alert triage', 'Linux/Windows fundamentals and networking basics', 'Eagerness to learn SOC workflows and incident handling', 'Participate in threat-hunting labs and CTFs', 'Document findings and assist analysts with investigations'] },
    { id: 'JOB-011', title: 'GRC Analyst', location: 'Mumbai (On-site)', exp: '2+', dept: 'GRC', bullets: ['ISO27001 / PCI-DSS understanding and audit support', 'Write policies, SOPs and risk treatment plans', 'Manage vendor risk assessments and evidence collection', 'Perform control gap analysis and compliance reporting', 'Work with auditors and coordinate remediation trackers'] },
    { id: 'JOB-012', title: 'Risk & Compliance Manager', location: 'Mumbai', exp: '5+', dept: 'GRC', bullets: ['Build enterprise risk frameworks and risk register', 'Lead internal & external audits and stakeholder committees', 'Regulatory advisory & controls implementation', 'Manage governance, risk appetite & board reporting', 'Strong leadership + cross-functional coordination experience'] },
    { id: 'JOB-013', title: 'Threat Intelligence Analyst', location: 'Remote', exp: '2-4', dept: 'Intel', bullets: ['Collect and contextualize threat feeds and IOCs', 'Map TTPs to ATT&CK and create actionable intel reports', 'OSINT investigations and infrastructure attribution', 'Deliver threat briefings and tactical detection suggestions', 'Familiarity with MISP, Sigma rules and CTI tooling'] },
    { id: 'JOB-014', title: 'Security Researcher', location: 'Remote', exp: '2-4', dept: 'Research', bullets: ['Vulnerability discovery and PoC exploit development', 'Fuzzing, reverse engineering and exploit maturation', 'Publish technical writeups and coordinate responsible disclosure', 'Tooling and automation for large-scale scanning', 'Strong C/C++/Python skills and Linux internals knowledge'] },
    { id: 'JOB-015', title: 'Business Development Associate', location: 'Remote / Mumbai', exp: '1-3', dept: 'Sales', bullets: ['Lead generation and pipeline management (CRM)', 'Draft RFP responses and coordinate demos', 'Qualify opportunities and manage discovery calls', 'Work closely with pre-sales to create technical proposals', 'Comfortable reaching decision-makers and follow-ups'] },
    { id: 'JOB-016', title: 'Sales Engineer (Pre-Sales)', location: 'Remote', exp: '2-4', dept: 'Sales', bullets: ['Technical demos, PoCs and solution architecture', 'Translate security requirements into technical proposals', 'Hands-on with demo environments and quick troubleshooting', 'Support commercial teams in RFPs and SOW scoping', 'Excellent presentation and client-facing skills'] },
    { id: 'JOB-017', title: 'Client Success Manager', location: 'Mumbai / Remote', exp: '3-5', dept: 'Account', bullets: ['Manage SLAs, renewals and client retention programs', 'Coordinate delivery and technical onboarding', 'Proactive risk & upsell identification', 'Act as single point of contact for strategic clients', 'Excellent stakeholder management and reporting'] },
    { id: 'JOB-018', title: 'Finance & Billing Associate', location: 'Mumbai', exp: '2-4', dept: 'Operations', bullets: ['Invoicing, reconciliations and payment follow-ups', 'Project finance tracking and revenue recognition basics', 'Maintain billing schedules and client statements', 'Coordinate with operations for billing disputes', 'Comfortable with accounting tools and spreadsheets'] },
    { id: 'JOB-019', title: 'HR & Recruitment Executive', location: 'Mumbai', exp: '1-3', dept: 'HR', bullets: ['Full-cycle hiring: sourcing to onboarding', 'Process payroll coordination and HRIS updates', 'Employee engagement and documentation', 'Coordinate interviews and build employer branding', 'Strong communication and candidate screening skills'] },
    { id: 'JOB-020', title: 'Office & Admin Coordinator', location: 'Mumbai', exp: '1-2', dept: 'Operations', bullets: ['Vendor management and facilities coordination', 'Procurement support and inventory tracking', 'Assist with travel and office admin tasks', 'Support events and office housekeeping', 'Good Excel and vendor negotiation basics'] },
    { id: 'JOB-021', title: 'Marketing & Content Specialist', location: 'Remote / Mumbai', exp: '2-4', dept: 'Marketing', bullets: ['Technical blogs, SEO and campaign planning', 'Create webinars, case studies and social assets', 'Work with engineering to produce technical content', 'Measure engagement and iterate on content strategy', 'Experience with CMS and analytics tools'] },
    { id: 'JOB-022', title: 'Technical Writer (Security)', location: 'Remote / Mumbai', exp: '1-3', dept: 'Content', bullets: ['Produce pentest reports, runbooks and SOPs', 'Translate technical findings to client-friendly language', 'Maintain document templates and quality standards', 'Work closely with engineering and delivery teams', 'Excellent grammar and version control awareness'] },
    { id: 'JOB-023', title: 'Operations Coordinator (Projects)', location: 'Mumbai', exp: '1-3', dept: 'Operations', bullets: ['Project trackers and delivery follow-ups', 'Vendor coordination and invoice verification', 'Assist leadership with operational reports', 'Support contract renewals and documentation', 'Good stakeholder communication and coordination'] },
    { id: 'JOB-024', title: 'Security Awareness Trainer', location: 'Remote / On-site', exp: '2-4', dept: 'Training', bullets: ['Design phishing simulations and training modules', 'Deliver employee awareness workshops and exec briefings', 'Measure program effectiveness and iterate', 'Create engaging learning content and assessments', 'Experience with LMS and simulation tooling'] },
    { id: 'JOB-025', title: 'Cybersecurity Engineer', location: 'Mumbai / Remote', exp: '3-5', dept: 'Cyber', bullets: ['Design & implement defensive controls across infra', 'Threat detection engineering & SIEM rule dev', 'Endpoint hardening (EDR), network hardening and playbooks', 'Automate detection pipelines and response actions', 'Collaborate with devs to integrate secure defaults and telemetry'] },
    { id: 'JOB-026', title: 'Malware Analyst', location: 'Remote', exp: '2-4', dept: 'Cyber', bullets: ['Static & dynamic malware analysis (sandboxing)', 'Reverse engineering (IDA/Ghidra) and memory analysis', 'IOC extraction and threat actor profiling', 'Develop YARA rules and detection signatures', 'Write clear technical reports for SOC and IR intake'] },
    { id: 'JOB-027', title: 'Security Architect (Cloud & Infra)', location: 'Mumbai', exp: '5+', dept: 'Cyber', bullets: ['Define secure architecture patterns for cloud & on-prem', 'Threat modelling & risk assessment for new platforms', 'Security design reviews, CBOM and compliance mapping', 'Work across engineering, ops and product to implement controls', 'Prior experience designing secure multi-tenant platforms'] },
    { id: 'JOB-028', title: 'Vulnerability & Patch Manager', location: 'Mumbai / Remote', exp: '2-4', dept: 'Cyber', bullets: ['Drive vuln management lifecycle and patch programs', 'Prioritize remediation based on risk & exploitability', 'Integrate scanner outputs into ticketing & workflows', 'Coordinate with infra/dev teams for patch windows', 'Measure MTTR and program KPIs; run exception processes'] },
    { id: 'JOB-029', title: 'Threat Hunter / Detection Engineer', location: 'Remote', exp: '3-5', dept: 'Cyber', bullets: ['Proactive hunts across endpoint/network/cloud telemetry', 'Create and test detection logic (Sigma/SPL/Rules)', 'Red-team collaboration to validate detection effectiveness', 'Develop playbooks for automated or human-assisted response', 'Strong scripting (Python) and telemetry experience'] }
  ];

  const CHUNK = 9;
  const [searchQuery, setSearchQuery] = useState('');
  const [deptFilter, setDeptFilter] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [visibleCount, setVisibleCount] = useState(CHUNK);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const departments = Array.from(new Set(JOBS.map(j => j.dept))).sort();

  const parseExp = (exp) => {
    if (!exp) return 0;
    const s = String(exp).toLowerCase();
    if (s.includes('intern')) return 0;
    if (s.includes('+')) return parseInt(s) || 0;
    if (s.includes('-')) return parseInt(s.split('-')[0]) || 0;
    return parseInt(s) || 0;
  };

  const filterAndSort = () => {
    let list = [...JOBS];
    
    if (deptFilter) {
      list = list.filter(j => j.dept === deptFilter);
    }
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(j =>
        j.title.toLowerCase().includes(q) ||
        j.location.toLowerCase().includes(q) ||
        j.bullets.join(' ').toLowerCase().includes(q) ||
        j.dept.toLowerCase().includes(q)
      );
    }
    
    if (sortOption) {
      if (sortOption === 'title-asc') list.sort((a, b) => a.title.localeCompare(b.title));
      else if (sortOption === 'title-desc') list.sort((a, b) => b.title.localeCompare(a.title));
      else if (sortOption === 'exp-asc') list.sort((a, b) => parseExp(a.exp) - parseExp(b.exp));
      else if (sortOption === 'exp-desc') list.sort((a, b) => parseExp(b.exp) - parseExp(a.exp));
      else if (sortOption === 'location-asc') list.sort((a, b) => a.location.localeCompare(b.location));
    }
    
    return list;
  };

  const filteredJobs = filterAndSort();
  const displayedJobs = filteredJobs.slice(0, visibleCount);

  const handleReset = () => {
    setSearchQuery('');
    setDeptFilter('');
    setSortOption('');
    setVisibleCount(CHUNK);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(filteredJobs.length, prev + CHUNK));
  };

  const openModal = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalOpen]);

  useEffect(() => {
    setVisibleCount(CHUNK);
  }, [searchQuery, deptFilter, sortOption]);

  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="hero-content">
          <div className="hero-subtitle">Join Our Team</div>
          <h1 className="hero-title">Build Your Career in Cybersecurity</h1>
          <p className="hero-description">
            Join CyberAries and work with industry-leading security professionals. We offer challenging roles, continuous learning opportunities, and a culture that values innovation and excellence.
          </p>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Security Professionals</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Coverage</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
        </div>
      </section>

      <main className="careers-main container">
        <div className="controls">
          <input
            className="input"
            type="search"
            placeholder="Search roles by title, skills, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <div className="controls-row">
            <select
              className="select"
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
            >
              <option value="">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            
            <select
              className="select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Sort: None</option>
              <option value="title-asc">Title A → Z</option>
              <option value="title-desc">Title Z → A</option>
              <option value="exp-asc">Experience Low → High</option>
              <option value="exp-desc">Experience High → Low</option>
              <option value="location-asc">Location A → Z</option>
            </select>
            
            <button className="btn" onClick={handleReset}>Reset Filters</button>
          </div>
        </div>

        <div className="meta-row">
          <div>Showing <strong>{filteredJobs.length}</strong> open positions</div>
        </div>

        {displayedJobs.length === 0 ? (
          <div className="empty-msg">
            <i className="fas fa-briefcase"></i>
            No positions found matching your criteria.<br />Try adjusting your filters.
          </div>
        ) : (
          <>
            <ul className="jobs-grid">
              {displayedJobs.map(job => (
                <li key={job.id} className="job-card">
                  <div>
                    <div className="card-head">
                      <h3 className="job-title">{job.title}</h3>
                      <div className="job-badge">{job.dept}</div>
                    </div>
                    <div className="job-meta">
                      <span><i className="fas fa-map-marker-alt"></i> {job.location}</span>
                      <span><i className="fas fa-briefcase"></i> {job.exp} yrs</span>
                    </div>
                    <ul className="job-bullets">
                      {job.bullets.slice(0, 4).map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="apply-row">
                    <button
                      className="apply-btn"
                      onClick={() => openModal(job)}
                    >
                      Apply Now <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {visibleCount < filteredJobs.length && (
              <div className="load-more-wrap">
                <button className="load-more-btn" onClick={handleLoadMore}>
                  Load More ({Math.min(CHUNK, filteredJobs.length - visibleCount)} more)
                </button>
              </div>
            )}
          </>
        )}
      </main>

      {modalOpen && selectedJob && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={closeModal}>&times;</button>
            <h3>{selectedJob.title}</h3>
            <p>Ready to join our team? Send your resume to:</p>
            <a
              className="modal-email"
              href={`mailto:info@cyberaries.com?subject=${encodeURIComponent(`Application for ${selectedJob.title} (${selectedJob.id})`)}&body=${encodeURIComponent(`Hello CyberAries Team,\n\nI would like to apply for the role "${selectedJob.title}" (Ref: ${selectedJob.id}).\n\nName:\nEmail:\nPhone:\nLocation:\nLinkedIn:\n\nShort note:\n\nRegards,\n`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              info@cyberaries.com
            </a>
            <p className="note">
              <i className="fas fa-info-circle"></i> Email subject will auto-fill with the job title and reference ID. Please attach your CV and cover letter.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;