import React from 'react';
import './hp_style.css'; // Your custom styles
import { ArrowRight2 } from '../icons/ArrowRight2/index'; // Ensure the path is correct
import repeat from '../static/img/repeat.png'; // Ensure the path is correct

// Sample Data for routes
const data = [
  {
    from: 'Tampere',
    to: 'Helsinki',
    date: 'Sept 26, 2024',
    time: '9:00 AM',
  },
  {
    from: 'Oulu',
    to: 'Vaasa',
    date: 'Sept 25, 2024',
    time: '1:00 PM',
  },
  {
    from: 'TAMK',
    to: 'Hakkari',
    date: 'Sept 25, 2024',
    time: '11:43 AM',
  },
  {
    from: 'Nokia',
    to: 'Prisma Kaleva',
    date: 'Sept 23, 2024',
    time: '5:00 PM',
  },
  {
    from: 'Vantaa',
    to: 'Kouvola',
    date: 'Sept 19, 2024',
    time: '2:00 PM',
  },
  {
    from: 'Hervanta',
    to: 'Tampere',
    date: 'Sept 19, 2024',
    time: '9:36 AM',
  },
];

// Search bar component
const SearchBar = () => {
  return (
    <div className="search-bar">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/71e00a6c7663350f98a5c48af60a3345537cd40740ffb7ae3cedf1bdf720f1f7?placeholderIfAbsent=true&apiKey=d36cc05a5b1a4bb7ba5cb2a47e3af8f3"
        className="search-icon"
        alt="Search Icon"
      />
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        aria-label="Search past routes"
      />
    </div>
  );
};

// Individual route card component
const RouteCard = ({ from, to, date, time }) => {
  return (
    <div className="route-card">
      <div className="route-info">
        <div className="route-details">
          <span className="route-from">{from}</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0254ddf482c48f80dca6513413d0fd20da46634778c604ead30814fc4f6c0883?placeholderIfAbsent=true&apiKey=d36cc05a5b1a4bb7ba5cb2a47e3af8f3"
            className="arrow-icon"
            alt="Arrow Icon"
          />
          <span className="route-to">{to}</span>
        </div>
        <div className="route-time">
          {date} - {time}
        </div>
      </div>
      <button className="replan-button">
        <img
          loading="lazy"
          src={repeat} // Assuming the path to your image is correct
          className="repeat-icon"
          alt="Replan Icon"
        />
        Replan
      </button>
    </div>
  );
};

// Main history panel component
export const HistoryPanel = () => {
  return (
    <div className="history-panel-container">
      <SearchBar />
      <div className="history-panel">
        <div className="previous-routes">
          {data.length === 0 ? (
            <p>
              No routes available. Please try searching or creating new routes.
            </p>
          ) : (
            data.map((route, index) => (
              <RouteCard
                key={index}
                from={route.from}
                to={route.to}
                date={route.date}
                time={route.time}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryPanel;
