import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, Trophy, Zap, ArrowRight, GitCommit, Briefcase } from 'lucide-react';
import './Landing.css';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Background blobs for premium feel */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <nav className="glass-nav landing-nav animate-fade-in">
        <div className="logo-container">
          <Code2 className="logo-icon" size={24} />
          <span className="logo-text">ABTalks</span>
        </div>
        <button className="btn btn-secondary nav-login" onClick={() => navigate('/dashboard')}>
          Log In
        </button>
      </nav>

      <main className="landing-main">
        <header className="hero animate-fade-in delay-100">
          <div className="badge">🚀 The 60-Day Coding Challenge</div>
          <h1 className="hero-title">
            Build consistency. <br />
            <span className="text-gradient">Get noticed.</span>
          </h1>
          <p className="hero-subtitle">
            Code every day. Commit to GitHub. Share on LinkedIn. <br/>
            Join thousands of Indian students building their proof of work.
          </p>
          
          <button className="btn btn-primary cta-btn" onClick={() => navigate('/dashboard')}>
            Start Your Journey <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </button>
        </header>

        <section className="features animate-fade-in delay-200">
          <div className="glass-panel feature-card">
            <div className="feature-icon-wrapper blue">
              <Code2 size={24} />
            </div>
            <h3>Code Daily</h3>
            <p>Get a real-world task every day for 60 days. No more tutorial hell.</p>
          </div>

          <div className="glass-panel feature-card">
            <div className="feature-icon-wrapper purple">
              <GitCommit size={24} />
            </div>
            <h3>Build Proof</h3>
            <p>Push your code to GitHub. Build a commit graph that recruiters love.</p>
          </div>

          <div className="glass-panel feature-card">
            <div className="feature-icon-wrapper green">
              <Briefcase size={24} />
            </div>
            <h3>Get Visible</h3>
            <p>Share your learnings on LinkedIn. Build your personal brand.</p>
          </div>
        </section>

        <section className="social-proof animate-fade-in delay-300">
          <div className="glass-panel stats-panel">
            <div className="stat">
              <span className="stat-value">10k+</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat">
              <span className="stat-value">60</span>
              <span className="stat-label">Days</span>
            </div>
            <div className="stat">
              <span className="stat-value">1</span>
              <span className="stat-label">Goal</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
