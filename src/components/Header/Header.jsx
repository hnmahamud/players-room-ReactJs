import React from 'react';

const Header = () => {
  return (
    <div className="navbar bg-gray-500 text-white">
      <div className="w-[90%] mx-auto">
        <div className="flex-1">
          <h3 className="normal-case text-xl">PH Premier League</h3>
        </div>
        <div className="flex-none">
          <ul className="flex justify-between gap-4">
            <li><button type="button">Point Table</button></li>
            <li><button type="button">Statistics</button></li>
            <li><button type="button">Schedule</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
