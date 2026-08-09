import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame, Clock, Trophy, Map, ArrowRight, Code2 } from 'lucide-react';
import mockData from '../data/mockUser.json';
import './Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, todayTask, journey } = mockData;

  const handleStartTask = () => {
    navigate(`/day/${todayTask.day}`);
  };

  return (
    <div className="dashboard-container">
      <nav className="glass-nav header">
        <div className="logo-container">
          <Code2 className="logo-icon" size={20} />
          <span className="logo-text">ABTalks</span>
        </div>
        <div className="user-profile">
          <img src={user.avatar} alt="Profile" className="avatar" />
        </div>
      </nav>

      <main className="dashboard-main animate-fade-in">
        <header className="dashboard-greeting">
          <h1>Welcome back, {user.name.split(' ')[0]}!</h1>
          <p className="subtitle">Let's keep the momentum going.</p>
        </header>

        {user.gracePeriodActive && (
          <div className="grace-period-banner">
            <Clock size={16} />
            <span>Late Night Grace Period: You have until 2 AM to maintain your streak.</span>
          </div>
        )}

        <section className="streak-overview">
          <div className="glass-panel streak-card">
            <div className="streak-info">
              <Flame size={32} color="#f97316" className="fire-icon" />
              <div className="streak-stats">
                <h2>{user.streak} Days</h2>
                <span>Current Streak</span>
              </div>
            </div>
            <div className="completion-ring">
              <svg viewBox="0 0 36 36" className="circular-chart orange">
                <path className="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                  strokeDasharray={`${(user.completedDays / user.totalDays) * 100}, 100`}
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">{Math.round((user.completedDays/user.totalDays)*100)}%</text>
              </svg>
            </div>
          </div>
        </section>

        <section className="today-task glass-panel">
          <div className="task-header">
            <span className="day-badge">Day {todayTask.day}</span>
            <span className="difficulty-badge">{todayTask.difficulty}</span>
          </div>
          <h3 className="task-title">{todayTask.title}</h3>
          <p className="task-meta">
            <Clock size={14} /> Due: {todayTask.dueDate} • <Trophy size={14} /> {todayTask.points} pts
          </p>
          <button className="btn btn-primary start-task-btn" onClick={handleStartTask}>
            Start Task <ArrowRight size={16} style={{ marginLeft: '8px' }} />
          </button>
        </section>

        <section className="journey-map glass-panel">
          <div className="section-title">
            <Map size={18} />
            <h3>Your 60-Day Journey</h3>
          </div>
          <div className="nodes-container">
            {journey.map((node) => (
              <div 
                key={node.day} 
                className={`journey-node ${node.status}`}
                title={`Day ${node.day}`}
              >
                {node.status === 'completed' ? '✓' : node.day}
              </div>
            ))}
            <div className="journey-node locked">...</div>
            <div className="journey-node locked end-goal">60</div>
          </div>
        </section>
      </main>
    </div>
  );
}
