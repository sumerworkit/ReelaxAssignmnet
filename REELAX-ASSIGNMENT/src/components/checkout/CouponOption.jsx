export default function CouponOption({ id, label, description, checked, onChange }) {
  return (
    <label className={`coupon-option ${checked ? 'coupon-option-active' : ''}`}>
      <span>
        <strong>{label}</strong>
        <small>{description}</small>
      </span>
      <input
        type="radio"
        name="coupon"
        value={id}
        checked={checked}
        onChange={() => onChange(id)}
      />
    </label>
  );
}
