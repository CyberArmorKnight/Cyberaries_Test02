import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">
      <section className="services-hero" style={{
        background: '#0f172a',
        color: '#fff',
        padding: '100px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Our Services</h1>
        <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
          Comprehensive cybersecurity solutions to protect your business
        </p>
      </section>

      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            {
              title: "Vulnerability Assessment",
              desc: "Identify security weaknesses before attackers do"
            },
            {
              title: "Penetration Testing",
              desc: "Simulate real-world attacks to test your defenses"
            },
            {
              title: "Security Monitoring",
              desc: "24/7 threat detection and incident response"
            },
            {
              title: "Compliance Services",
              desc: "Meet industry standards and regulations"
            },
            {
              title: "Security Training",
              desc: "Educate your team on cybersecurity best practices"
            },
            {
              title: "Incident Response",
              desc: "Rapid response to security incidents and breaches"
            }
          ].map((service, idx) => (
            <div key={idx} style={{
              background: '#fff',
              padding: '30px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#dc2626', marginBottom: '15px' }}>{service.title}</h3>
              <p style={{ color: '#475569', lineHeight: '1.6' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;