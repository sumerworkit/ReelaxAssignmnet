import { Bell, Menu, Search, UserRound } from 'lucide-react';
import Button from '../common/Button.jsx';

export default function Header() {
  return (
    <header className="topbar">
      <label className="search-field" aria-label="Search influencers">
        <span className="sr-only">Search influencers</span>
        <input type="search" placeholder="Find influencers to collaborate with" />
        <Search size={15} strokeWidth={2} />
      </label>

      <div className="topbar-actions">
        <Button variant="warning" size="sm">
          Upgrade
        </Button>
        <Button size="sm">+ Create Campaign</Button>
        <button className="icon-button avatar-button" aria-label="Open profile">
          <UserRound size={16} />
        </button>
        <button className="icon-button menu-button" aria-label="Open menu">
          <Menu size={17} />
        </button>
        <button className="icon-button notification-button" aria-label="View notifications">
          <Bell size={15} />
        </button>
      </div>
    </header>
  );
}
