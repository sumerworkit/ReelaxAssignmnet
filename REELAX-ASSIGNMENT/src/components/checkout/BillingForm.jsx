import Button from '../common/Button.jsx';
import FormField from '../common/FormField.jsx';

const fields = [
  { name: 'companyName', label: 'Company Name', placeholder: 'Company name' },
  { name: 'email', label: 'Email', placeholder: 'Email', type: 'email' },
  { name: 'gst', label: 'GST Number (Optional)', placeholder: 'GST Number' },
  { name: 'pan', label: 'PAN Number (Optional)', placeholder: 'PAN Number' },
  { name: 'house', label: 'Premise/House no.', placeholder: 'Premise/House no.' },
  { name: 'street', label: 'Street', placeholder: 'Street' },
  { name: 'state', label: 'State', placeholder: 'Select state', select: true },
  { name: 'city', label: 'City', placeholder: 'Select city', select: true },
  { name: 'country', label: 'Country', placeholder: 'Country' },
  { name: 'pinCode', label: 'Pin Code', placeholder: 'Pincode' },
];

export default function BillingForm({ values, onChange }) {
  return (
    <section className="billing-card" aria-labelledby="billing-title">
      <h1 id="billing-title">Review your details</h1>
      <h2>Billing Information</h2>

      <form className="billing-form">
        <div className="field-grid">
          {fields.map((field) => (
            <FormField
              key={field.name}
              {...field}
              value={values[field.name]}
              onChange={onChange}
            />
          ))}
        </div>

        <div className="form-actions">
          <Button variant="secondary">Cancel</Button>
          <Button type="submit">Save Details</Button>
        </div>
      </form>
    </section>
  );
}
