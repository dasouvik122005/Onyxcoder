import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Map, ArrowRight, Code2 } from 'lucide-react';
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
      <nav className="minimal-nav">
        <div className="logo-container">
          <div className="logo-box"><Code2 size={16} /></div>
          <span className="logo-text">ABTalks</span>
        </div>
        <div className="user-profile">
          <img src={user.avatar} alt="Profile" className="avatar" />
        </div>
      </nav>

      <main className="dashboard-main animate-fade-in">
        <header className="dashboard-header">
          <h1>{user.name.split(' ')[0]}'s Workspace</h1>
        </header>

        {user.gracePeriodActive && (
          <div className="alert-banner card">
            <Clock size={16} className="alert-icon" />
            <span>Late Night Grace Period: You have until 2 AM to submit today's work.</span>
          </div>
        )}

        <div className="dashboard-bento">
          {/* Streak Card - Top Left */}
          <section className="card bento-streak">
            <div className="streak-text-content">
              <div className="streak-value">{user.streak}</div>
              <div className="streak-label">Day Streak</div>
            </div>
            <div className="streak-ring-container">
              <svg viewBox="0 0 36 36" className="streak-ring">
                <path className="ring-bg"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="ring-progress"
                  strokeDasharray={`${(user.completedDays / user.totalDays) * 100}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
          </section>

          {/* Today's Task - Top Right */}
          <section className="card bento-task">
            <div className="task-header">
              <span className="badge">Day {todayTask.day}</span>
              <span className="badge outline">{todayTask.difficulty}</span>
            </div>
            <h3 className="task-title">{todayTask.title}</h3>
            <button className="btn btn-primary start-btn" onClick={handleStartTask}>
              Start Assignment <ArrowRight size={14} style={{ marginLeft: '6px' }} />
            </button>
          </section>

          {/* Journey Map - Bottom Full Width */}
          <section className="card bento-journey">
            <div className="section-title">
              <Map size={16} />
              <h3>Progress Map</h3>
            </div>
            <div className="nodes-container">
              {journey.map((node) => (
                <div 
                  key={node.day} 
                  className={`journey-node ${node.status}`}
                >
                  {node.status === 'completed' ? '' : node.day}
                </div>
              ))}
              <div className="journey-node locked">...</div>
              <div className="journey-node locked end-goal">60</div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
