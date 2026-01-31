import React, { useRef, useState, useEffect } from "react";
import "./contact.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  const successRef = useRef(null);
  const errorRef = useRef(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    if (successRef.current) successRef.current.style.display = "none";
    if (errorRef.current) errorRef.current.style.display = "none";

    const data = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mreezzyw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setShowSuccess(true);
        e.target.reset();
      } else {
        errorRef.current.style.display = "block";
      }
    } catch {
      errorRef.current.style.display = "block";
    } finally {
      setSending(false);
    }
  };
  useEffect(() => {
  // 🧹 CLEAN old triggers (important in React)
  ScrollTrigger.getAll().forEach(t => t.kill());

  /* =========================
     HERO (RUNS ONCE – NO SCROLL)
     ========================= */

  gsap.fromTo(
    ".contact-hero-inner > div",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      clearProps: "all", // 🔥 prevents disappearing on scroll
    }
  );

  /* =========================
     LEFT INFO (SCROLL)
     ========================= */

  gsap.fromTo(
    ".contact-info-box",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-info-box",
        start: "top 80%",
        once: true, // ✅ animate only once
      },
    }
  );

  /* =========================
     FORM (SCROLL)
     ========================= */

  gsap.fromTo(
    ".contact-form-box",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-form-box",
        start: "top 80%",
        once: true,
      },
    }
  );

  return () => {
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}, []);

  return (
    <>
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-box">
            <h3>Message Sent Successfully</h3>
            <p>
              Thank you for contacting CyberAries. Our security experts will
              reach out shortly.
            </p>

            <button
              onClick={() => setShowSuccess(false)}
              className="success-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <main className="contact-page">
        {/* HERO */}
        <section className="contact-hero">
          <div className="contact-hero-inner">
            <div>
              <h1>Contact CyberAries</h1>
              <p>Talk to cybersecurity experts. Get audit-driven clarity.</p>
            <p className="hero-trust" >
                Trusted by enterprises for audits, VAPT & compliance
              </p>
            <div className="hero-quote" style={{color:"yellow"}}>
              “Prevention is cheaper than a breach”
            </div>   
            </div>
            <div className="sideimage">
              <img src="./globe_2-removebg-preview.png" alt="sideimage" />
            </div>

          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="contact-content">
          <div className="contact-grid">
            {/* LEFT – ADDRESS */}
            <div className="contact-info-box">
              <h3>Reach Us Directly</h3>

              <p>
                Whether you need compliance readiness, VAPT, or strategic
                consulting — our team is ready.
              </p>

              <div className="contact-info">
  <div className="contact-info-item">
    <span className="label">Office Address</span>
    <span className="value">
      Hiranandani Business Park, Powai, Mumbai
    </span>
  </div>

  <div className="contact-info-item">
    <span className="label">Phone</span>
    <span className="value">+91 8828495202</span>
  </div>

  <div className="contact-info-item">
    <span className="label">Email</span>
    <span className="value">info@cyberaries.com</span>
  </div>
</div>


              <iframe
                title="CyberAries Location"
                src="https://www.google.com/maps?q=Hiranandani+Business+Park+Powai+Mumbai&output=embed"
                loading="lazy"
              />
            </div>

            {/* RIGHT – FORM */}
            <div className="contact-form-box">
              <h3>Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-grid">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                  />

                  <input type="text" name="subject" placeholder="Subject" />

                  <textarea
                    name="message"
                    placeholder="Tell us about your security needs"
                    required
                  />

                  <button type="submit" disabled={sending}>
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
              {/* 
            <div ref={successRef} className="success">
            Message sent successfully. We’ll contact you shortly.
            </div> */}

              <div ref={errorRef} className="error">
                Something went wrong. Please try again.
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
