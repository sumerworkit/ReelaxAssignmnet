import { WalletCards } from 'lucide-react';
import Button from '../common/Button.jsx';

export default function WalletCard() {
  return (
    <div className="wallet-card">
      <div className="wallet-copy">
        <WalletCards size={17} />
        <div>
          <strong>Wallet Balance</strong>
          <span>₹500.00 available</span>
        </div>
      </div>
      <Button variant="ghost" size="sm">
        Apply
      </Button>
    </div>
  );
}
