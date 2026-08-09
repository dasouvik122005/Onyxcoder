import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, GitCommit, Briefcase, Check, ArrowRight } from 'lucide-react';
import mockData from '../data/mockUser.json';
import './ChallengeDay.css';

export default function ChallengeDay() {
  const { dayId } = useParams();
  const navigate = useNavigate();
  const { todayTask } = mockData;
  
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const task = todayTask;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!githubUrl || !linkedinUrl) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  if (isSuccess) {
    return (
      <div className="success-container animate-fade-in">
        <div className="success-content">
          <div className="success-icon">
            <Check size={48} />
          </div>
          <h2>Proof Accepted</h2>
          <p>Day {dayId} completed. Your streak is safe.</p>
          <div className="streak-update">
            <span className="streak-number">12</span>
            <span className="streak-text">Days</span>
          </div>
          <button className="btn btn-secondary return-btn" onClick={() => navigate('/dashboard')}>
            Back to Workspace
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="challenge-container">
      <nav className="minimal-nav challenge-nav">
        <button className="back-btn" onClick={() => navigate('/dashboard')}>
          <ChevronLeft size={16} />
          <span>Workspace</span>
        </button>
        <div className="day-indicator">Day {dayId}</div>
      </nav>

      <main className="challenge-main animate-fade-in delay-100">
        <header className="task-header">
          <h1 className="task-title">{task.title}</h1>
          <div className="task-meta">
            <span className="badge outline">{task.difficulty}</span>
            <span className="points-text">{task.points} points</span>
          </div>
        </header>

        <section className="task-details">
          <p className="task-desc">
            Create a custom React hook `useLocalStorage` that syncs state to local storage so that it persists through a page refresh.
          </p>
          <div className="requirements card">
            <h3>Requirements</h3>
            <ul>
              <li>Handle initialization from existing local storage data.</li>
              <li>Update local storage whenever the state changes.</li>
              <li>Handle JSON parsing errors gracefully.</li>
            </ul>
          </div>
        </section>

        <section className="submission-section">
          <h2>Submit Proof of Work</h2>
          
          <form className="submission-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="input-label" htmlFor="github">
                <GitCommit size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }} /> 
                GitHub Commit URL
              </label>
              <input 
                type="url" 
                id="github"
                className="input-field" 
                placeholder="https://github.com/..." 
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="linkedin">
                <Briefcase size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }} /> 
                LinkedIn Post URL
              </label>
              <input 
                type="url" 
                id="linkedin"
                className="input-field" 
                placeholder="https://linkedin.com/..." 
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary submit-btn" 
              disabled={!githubUrl || !linkedinUrl || isSubmitting}
            >
              {isSubmitting ? (
                <span className="loading-spinner"></span>
              ) : (
                <>Submit <ArrowRight size={14} style={{ marginLeft: '6px' }} /></>
              )}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
