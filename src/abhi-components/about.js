import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./about.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldAlert, Lock, BadgeCheck } from "lucide-react";

// import about_image from "../../public/about_image.png";
const About = () => {
const heroTextRef = useRef(null);
const expTextRef = useRef(null);
const expImgRef = useRef(null);
const expertiseRef = useRef(null);
const overviewRef = useRef(null);
const teamRef = useRef(null);
const ctaRef = useRef(null);
const imgRef = useRef(null);
const titleRef = useRef(null);
const textRef = useRef(null);
const quoteRef = useRef(null);

 useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {

    /* ----------------------------------
       HERO TEXT (About Us)
    ---------------------------------- */
    if (heroTextRef.current?.children) {
      gsap.fromTo(
        heroTextRef.current.children,
        { opacity: 0, y: 25 },
        {
          scrollTrigger: {
            trigger: heroTextRef.current,
            start: "top 80%",
            once: true,
          },
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      );
    }

    /* ----------------------------------
       HERO IMAGE FLOAT
    ---------------------------------- */
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        y: -12,
        rotate: 1.5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    /* ----------------------------------
       EXPERIENCE IMAGE
    ---------------------------------- */
    if (expImgRef.current) {
      gsap.fromTo(
        expImgRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          scrollTrigger: {
            trigger: expImgRef.current,
            start: "top 80%",
            once: true,
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      );
    }

    /* ----------------------------------
       EXPERIENCE TEXT (EXCLUDES BUTTON)
    ---------------------------------- */
    if (expTextRef.current?.children) {
      const expTextItems = Array.from(expTextRef.current.children).filter(
        el => !el.classList.contains("exp-cta-btn")
      );

      gsap.fromTo(
        expTextItems,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: expTextRef.current,
            start: "top 80%",
            once: true,
          },
          opacity: 1,
          y: 0,
          stagger: 0.18,
          duration: 0.8,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      );
    }

    /* ----------------------------------
       EXPERTISE LIST
    ---------------------------------- */
    if (expertiseRef.current?.children) {
      gsap.fromTo(
        expertiseRef.current.children,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: expertiseRef.current,
            start: "top 80%",
            once: true,
          },
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      );
    }

    /* ----------------------------------
       OVERVIEW TEXT
    ---------------------------------- */
    if (overviewRef.current?.children) {
      gsap.fromTo(
        overviewRef.current.children,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: overviewRef.current,
            start: "top 80%",
            once: true,
          },
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      );
    }

    /* ----------------------------------
       TEAM CARDS
    ---------------------------------- */
    if (teamRef.current?.children) {
      gsap.fromTo(
        teamRef.current.children,
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 75%",
            once: true,
          },
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      );
    }

    /* ----------------------------------
       CTA SECTION (TEXT ONLY — BUTTON SAFE)
    ---------------------------------- */
    if (ctaRef.current?.children) {
      const [heading, text] = ctaRef.current.children;

      gsap.fromTo(
        [heading, text],
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      );
    }

  });

  return () => ctx.revert();
}, []);


  

  return (
      <>
    <section className="about-hero">
      <div className="about-hero-container">
        {/* LEFT CONTENT */}
        <div className="about-hero-text" ref={heroTextRef}>
          <h1 ref={titleRef}>About Us</h1>

          <p ref={textRef}>
            We are a cybersecurity-focused organization dedicated to protecting
            businesses from evolving digital threats through proactive defense,
            risk analysis, and continuous monitoring.
          </p>

          <span className="about-hero-quote" ref={quoteRef}>
            “Security is built on preparation, not reaction.”
          </span>
        </div>

        {/* RIGHT IMAGE */}
        {/* <div className="about-hero-image">
          <img
            ref={imgRef}
            src="../"
            alt="Cybersecurity confidence illustration"
          />
        </div> */}
        
      </div>
      </section>
      <section className="about-experience">

      <div className="about-exp">
        <div className="about-exp-container">
          <div className="about-exp-visual">
            <div className="exp-card">
              <span className="exp-number">15+</span>
              <span className="exp-label">Years of Experience</span>
            </div>

            <img
                ref={expImgRef}
                src="/experience.jpg"
                alt="Cybersecurity expertise"
                className="experience-img"
                />
          </div>
          
          {/* LEFT CONTENT */}
          <div className="about-exp-text" ref={expTextRef}>
            <span className="about-exp-tag" >OUR EXPERIENCE</span>

            <h2>
              Trusted Cybersecurity <br /> Expertise
            </h2>

            <p>
              With years of hands-on experience, we help organizations identify
              vulnerabilities before attackers do. Our approach combines deep
              technical expertise, risk analysis, and continuous monitoring to
              secure modern digital infrastructure.
            </p>
            <a href="/contact" className="exp-cta-btn">
              Start For Free
            </a>
          </div>

          {/* RIGHT VISUAL */}
        </div>
      </div>
      </section>

      <section className="about-expertise">
        <div className="about-expertise-header">
          <span className="expertise-tag" ref={textRef}>CYBERSECURITY EXPERTS</span>
          <h2 ref={titleRef}>Comprehensive Cybersecurity Solutions for Modern Threats</h2>
          {/* <a href="/contact" className="expertise-cta">Learn More</a> */}
        </div>

        <div className="about-expertise-content">
          {/* LEFT VISUAL */}
          <div className="expertise-visual">
            <img
              src="/expert.jpg"
              alt="Security Operations Center"
              className="img-main"
            />

            <img
            
              src="/download1.jpg"
              alt="Cybersecurity shield"
              className="img-overlay"
            />

            <div className="expertise-stat">
              <h3>99.9%</h3>
              <p>Threat detection and prevention rate</p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="expertise-list" ref={expertiseRef}>
            <div className="expertise-item">
              <div className="icon-circle"><ShieldAlert size={22} /></div>
              <div>
                <h4>Vulnerability Assessment</h4>
                <p>
                  Identify weaknesses before attackers do, reduce risk exposure,
                  and strengthen your overall security posture.
                </p>
              </div>
            </div>

            <div className="expertise-item">
              <div className="icon-circle"><Lock size={22} /></div>
              <div>
                <h4>Data Protection</h4>
                <p>
                  Safeguard sensitive data against breaches and leaks with
                  strong encryption and access control.
                </p>
              </div>
            </div>

            <div className="expertise-item">
              <div className="icon-circle"> <BadgeCheck size={22} /></div>
              <div>
                <h4>Brand Reputation</h4>
                <p>
                  Maintain customer trust and brand integrity by preventing
                  cyber incidents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-overview">
        <div className="wrap">
          <div className="overview-text" ref={overviewRef}>
            <span className="label">Company Overview</span>

            <h3>Cybersecurity Solutions for Complete Digital Safety</h3>

            <p>
              CyberAries provides comprehensive cybersecurity services that help
              organizations protect their digital assets, infrastructure, and
              data. Our solutions focus on proactive defense, continuous
              monitoring, and rapid response to evolving cyber threats.
            </p>

            <ul>
              <li>Continuous threat monitoring and incident response</li>
              <li>Advanced malware and ransomware protection</li>
              <li>Customized security architecture</li>
              <li>Compliance-aligned security practices</li>
            </ul>
          </div>

          <div class="overview-image">
            <img src="./team1.jpeg" alt="Security monitoring center" />
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content" ref={ctaRef}>
            <h2>24/7 Cyber Protection Backed by Experts</h2>
            <p>
              Protect your organization from evolving cyber threats with
              continuous monitoring, rapid incident response, and
              enterprise-grade security strategies tailored to your business.
            </p>

            <div className="cta-actions">
              <a href="/appointment" className="btn-primary">
                Schedule Free Consultation
              </a>
              <a href="/services" className="btn-secondary">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>
</>
  );
};
export default About; 


