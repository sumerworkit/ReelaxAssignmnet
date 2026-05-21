import { BadgeIndianRupee, CircleHelp, Ticket } from 'lucide-react';
import Button from '../common/Button.jsx';
import CouponOption from './CouponOption.jsx';
import WalletCard from './WalletCard.jsx';

const coupons = [
  { id: 'WELCOME20', label: 'WELCOME20', description: '20% off on your first month' },
  { id: 'ANNUAL50', label: 'ANNUAL50', description: '50% off on annual plans' },
];

const money = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 2,
});

export default function OrderSummary({ pricing, selectedCoupon, onCouponChange }) {
  return (
    <aside className="summary-panel" aria-labelledby="summary-title">
      <h2 id="summary-title">Order Summary</h2>

      <div className="plan-card">
        <div>
          <strong>₹4,999</strong>
          <span>/month</span>
          <small>Includes 5,000 credits/mo.</small>
        </div>
        <div className="selected-plan">
          <span>Selected Plan</span>
          <strong>Startup</strong>
        </div>
      </div>

      <button className="upgrade-plan" type="button">
        <CircleHelp size={13} />
        Upgrade to Growth Plan
      </button>

      <div className="summary-box">
        <WalletCard />

        <div className="coupon-header">
          <Ticket size={15} />
          <strong>Apply Coupon</strong>
        </div>

        <label className="coupon-input">
          <input placeholder="Enter coupon code" />
          <Button size="sm">Apply</Button>
        </label>

        <div className="coupon-list">
          {coupons.map((coupon) => (
            <CouponOption
              key={coupon.id}
              {...coupon}
              checked={selectedCoupon === coupon.id}
              onChange={onCouponChange}
            />
          ))}
        </div>
      </div>

      <dl className="price-list">
        <div>
          <dt>Subtotal</dt>
          <dd>{money.format(pricing.subtotal)}</dd>
        </div>
        <div>
          <dt>Tax (18% GST)</dt>
          <dd>{money.format(pricing.tax)}</dd>
        </div>
        <div className="total-row">
          <dt>Total due today</dt>
          <dd>{money.format(pricing.total)}</dd>
        </div>
      </dl>

      <Button className="payment-button">
        <BadgeIndianRupee size={15} />
        Proceed to Payment
      </Button>
    </aside>
  );
}
