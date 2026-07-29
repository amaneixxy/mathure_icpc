import { useState } from 'react';

// Boolean flags for Day 1 and Day 2 schedule declaration status
const isDay1Declared = false;
const isDay2Declared = false;

const isDay1YetToBeDeclared = !isDay1Declared;
const isDay2YetToBeDeclared = !isDay2Declared;

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

  const isCurrentDayYetToBeDeclared = activeDay === 1 ? isDay1YetToBeDeclared : isDay2YetToBeDeclared;

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
              Day 1 Schedule {isDay1YetToBeDeclared && <span style={{ fontSize: '0.75rem', opacity: 0.85, marginLeft: '0.35rem', fontStyle: 'italic' }}></span>}
            </button>
            <button
              className={`tab-btn ${activeDay === 2 ? 'active' : ''}`}
              onClick={() => setActiveDay(2)}
            >
              Day 2 Schedule {isDay2YetToBeDeclared && <span style={{ fontSize: '0.75rem', opacity: 0.85, marginLeft: '0.35rem', fontStyle: 'italic' }}></span>}
            </button>
          </div>

          {/* 3 & 4. Schedule Tables or Yet To Be Declared Card */}
          {isCurrentDayYetToBeDeclared ? (
            <div className="card-plain text-center" style={{ padding: '3.5rem 2.5rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>⏳</span>
              <h3 style={{ color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                Day {activeDay} Schedule Yet to be Declared
              </h3>
              <p className="text-muted" style={{ maxWidth: '600px', marginInline: 'auto' }}>
                The official schedule for Day {activeDay} is yet to be declared. Please check back later for detailed event timings.
              </p>
            </div>
          ) : (
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
                  {(activeDay === 1 ? day1Schedule : day2Schedule).map((row, index) => (
                    <tr key={`day${activeDay}-${index}`}>
                      <td className="schedule-time">{row.time}</td>
                      <td className="schedule-event">{row.event}</td>
                      <td className="schedule-venue">{row.venue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

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
