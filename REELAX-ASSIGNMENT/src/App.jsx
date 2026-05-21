import { useMemo, useState } from 'react';
import Header from './components/layout/Header.jsx';
import BillingForm from './components/checkout/BillingForm.jsx';
import OrderSummary from './components/checkout/OrderSummary.jsx';

export default function App() {
  const [selectedCoupon, setSelectedCoupon] = useState('WELCOME20');
  const [formValues, setFormValues] = useState({
    companyName: 'abhigyan',
    email: 'abhigyan.pandey@getreelax.com',
    gst: '',
    pan: '',
    house: '',
    street: '',
    state: '',
    city: '',
    country: 'India',
    pinCode: '',
  });

  const pricing = useMemo(() => {
    const subtotal = 14999;
    const tax = 1079.64;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  }, []);

  function updateField(name, value) {
    setFormValues((current) => ({ ...current, [name]: value }));
  }

  return (
    <main className="app-shell">
      <Header />
      <section className="checkout-frame" aria-label="Checkout details">
        <a className="back-link" href="#plans">
          &lt; Back to plans
        </a>

        <div className="checkout-grid">
          <BillingForm values={formValues} onChange={updateField} />
          <OrderSummary
            pricing={pricing}
            selectedCoupon={selectedCoupon}
            onCouponChange={setSelectedCoupon}
          />
        </div>
      </section>
    </main>
  );
}
