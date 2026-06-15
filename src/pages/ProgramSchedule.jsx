import { useState } from 'react';

export default function ProgramSchedule() {
  const [activeDay, setActiveDay] = useState(1);

  const day1Schedule = [
    { time: "08:00 AM", event: "Registration & Check-in", venue: "GLA University Main Gate" },
    { time: "09:00 AM", event: "Opening Ceremony", venue: "Auditorium, GLA University" },
    { time: "10:00 AM", event: "Practice Contest (1 hour)", venue: "Computer Labs" },
    { time: "11:30 AM", event: "Team Briefing & Rules", venue: "Auditorium" },
    { time: "12:00 PM", event: "Lunch", venue: "University Cafeteria" },
    { time: "01:00 PM", event: "Main Contest Begins (5 hours)", venue: "Computer Labs" },
    { time: "06:00 PM", event: "Contest Ends", venue: "Computer Labs" },
    { time: "07:00 PM", event: "Cultural Evening / Networking", venue: "Campus Lawns" },
  ];

  const day2Schedule = [
    { time: "09:00 AM", event: "Solution Discussion", venue: "Auditorium" },
    { time: "10:30 AM", event: "Prize Distribution & Awards Ceremony", venue: "Auditorium" },
    { time: "12:00 PM", event: "Closing Ceremony", venue: "Auditorium" },
    { time: "01:00 PM", event: "Lunch & Departure", venue: "University Cafeteria" },
  ];

  return (
    <div>
      {/* 1. Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Onsite Program Schedule</h1>
          <p>GLA University, Mathura — [Dates TBD]</p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {/* 2. Day Selection Tabs */}
          <div className="tabs-container">
            <button 
              className={`tab-btn ${activeDay === 1 ? 'active' : ''}`}
              onClick={() => setActiveDay(1)}
            >
              Day 1 Schedule
            </button>
            <button 
              className={`tab-btn ${activeDay === 2 ? 'active' : ''}`}
              onClick={() => setActiveDay(2)}
            >
              Day 2 Schedule
            </button>
          </div>

          {/* 3 & 4. Schedule Tables */}
          <div className="table-responsive">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>Time</th>
                  <th style={{ width: '45%' }}>Event</th>
                  <th style={{ width: '30%' }}>Venue</th>
                </tr>
              </thead>
              <tbody>
                {activeDay === 1 ? (
                  day1Schedule.map((row, index) => (
                    <tr key={`day1-${index}`}>
                      <td className="schedule-time">{row.time}</td>
                      <td className="schedule-event">{row.event}</td>
                      <td className="schedule-venue">{row.venue}</td>
                    </tr>
                  ))
                ) : (
                  day2Schedule.map((row, index) => (
                    <tr key={`day2-${index}`}>
                      <td className="schedule-time">{row.time}</td>
                      <td className="schedule-event">{row.event}</td>
                      <td className="schedule-venue">{row.venue}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* 5. Important Note Footer */}
          <div className="notes-box">
            <span style={{ fontSize: '1.5rem' }}>ℹ️</span>
            <div>
              <strong>Tentative Schedule:</strong> All program timings and venues are tentative and subject to change. The final itinerary will be confirmed and shared with registered teams via email prior to the contest dates.
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
