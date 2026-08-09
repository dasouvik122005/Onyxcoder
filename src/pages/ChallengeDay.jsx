import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, GitCommit, Briefcase, CheckCircle, Send, ArrowRight } from 'lucide-react';
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

  // If we try to access a day other than today for demo purposes, just use today's task data
  const task = todayTask;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!githubUrl || !linkedinUrl) return;
    
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="success-container animate-fade-in">
        <div className="success-content glass-panel">
          <div className="success-icon">
            <CheckCircle size={64} color="#10b981" />
          </div>
          <h2>Proof Accepted!</h2>
          <p>Day {dayId} completed. Your streak is safe.</p>
          <div className="streak-update">
            <span className="flame">🔥</span>
            <span className="streak-number">12</span>
            <span className="streak-text">Day Streak</span>
          </div>
          <button className="btn btn-primary return-btn" onClick={() => navigate('/dashboard')}>
            Back to Dashboard <ArrowRight size={16} style={{ marginLeft: '8px' }} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="challenge-container">
      <nav className="glass-nav challenge-nav">
        <button className="back-btn" onClick={() => navigate('/dashboard')}>
          <ChevronLeft size={20} />
          <span>Dashboard</span>
        </button>
        <div className="day-indicator">Day {dayId}</div>
      </nav>

      <main className="challenge-main animate-fade-in delay-100">
        <header className="task-header">
          <div className="task-meta">
            <span className="difficulty">{task.difficulty}</span>
            <span className="points">{task.points} pts</span>
          </div>
          <h1 className="task-title">{task.title}</h1>
        </header>

        <section className="task-details glass-panel">
          <h2>The Assignment</h2>
          <p>
            Create a custom React hook `useLocalStorage` that syncs state to local storage so that it persists through a page refresh.
          </p>
          <h3>Requirements:</h3>
          <ul>
            <li>Must handle initialization from existing local storage data.</li>
            <li>Must update local storage whenever the state changes.</li>
            <li>Should handle JSON parsing errors gracefully.</li>
          </ul>
        </section>

        <section className="submission-section">
          <h2>Submit Proof of Work</h2>
          <p className="submission-desc">Drop your links below to maintain your streak.</p>
          
          <form className="glass-panel submission-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="input-label" htmlFor="github">
                <GitCommit size={14} style={{ display: 'inline', marginRight: '4px' }} /> 
                GitHub Commit / Repo URL
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
                <Briefcase size={14} style={{ display: 'inline', marginRight: '4px' }} /> 
                LinkedIn Post URL
              </label>
              <input 
                type="url" 
                id="linkedin"
                className="input-field" 
                placeholder="https://linkedin.com/posts/..." 
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
                <>Submit Proof <Send size={16} style={{ marginLeft: '8px' }} /></>
              )}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
