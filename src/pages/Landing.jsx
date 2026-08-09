import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, GitCommit, Briefcase, ArrowRight, LayoutGrid, Terminal } from 'lucide-react';
import './Landing.css';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <nav className="minimal-nav animate-fade-in">
        <div className="logo-container">
          <div className="logo-box"><Code2 size={16} /></div>
          <span className="logo-text">ABTalks</span>
        </div>
        <button className="btn btn-secondary nav-login" onClick={() => navigate('/dashboard')}>
          Log In
        </button>
      </nav>

      <main className="landing-main">
        <header className="hero animate-fade-in delay-100">
          <div className="status-badge">
            <span className="status-dot"></span> Next cohort starts soon
          </div>
          <h1 className="hero-title">
            Build proof of work.<br />
            <span className="text-dim">60 days at a time.</span>
          </h1>
          <p className="hero-subtitle">
            The platform for Indian college students to build consistency, ship daily, and get noticed by top recruiters.
          </p>
          
          <button className="btn btn-primary cta-btn" onClick={() => navigate('/dashboard')}>
            Start Challenge <ArrowRight size={16} style={{ marginLeft: '8px' }} />
          </button>
        </header>

        <section className="bento-grid animate-fade-in delay-200">
          <div className="card bento-item bento-large">
            <div className="bento-icon"><Terminal size={20} /></div>
            <h3>Code Daily</h3>
            <p>Real-world tasks every day. Escape tutorial hell by actually building things.</p>
          </div>

          <div className="card bento-item bento-medium">
            <div className="bento-icon"><GitCommit size={20} /></div>
            <h3>Commit</h3>
            <p>Paint your GitHub graph green.</p>
          </div>

          <div className="card bento-item bento-medium">
            <div className="bento-icon"><Briefcase size={20} /></div>
            <h3>Share</h3>
            <p>Build your brand on LinkedIn.</p>
          </div>
          
          <div className="card bento-item bento-wide">
            <div className="bento-stats">
              <div className="stat-group">
                <h4>10k+</h4>
                <span>Builders</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-group">
                <h4>60</h4>
                <span>Days</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-group">
                <h4>1</h4>
                <span>Goal</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
