// src/components/vendor/VendorBookingForm.tsx

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '../Navigation/HeaderComponent';

const bookingSteps = ['Exhibitor Info', 'Extras', 'Review & Submit', 'Payment Confirmation'];
const isAfterApril18 = new Date() > new Date('2025-04-18');

export const VendorBookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedBooths = location.state?.selectedBooths || [];
  const eventId = location.state?.eventId || '';

  // Booking form steps: overall steps will be 2/5 to 5/5 (Vendor Map was step 1)
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [totalCost, setTotalCost] = useState(0);

  const [formData, setFormData] = useState({
    businessName: '',
    contactPhone: '',
    email: '',
    address: '',
    exhibitDescription: '',
    tables: 0,
    camping30: 0,
    camping50: 0,
    needElectricity: false,
    paymentMethod: '',
    agree: false,
    file: null,
  });

  // Pricing for booths – note: these should match the booth data in VendorMap.
  // You might further refine this if booth selections include sizes.
  const boothPrices = {
    Indoor: { '10x10': { before: 50, after: 55 }, '10x20': { before: 65, after: 70 }, '10x30': { before: 80, after: 85 } },
    Outdoor: { '10x10': { before: 40, after: 45 }, '10x20': { before: 55, after: 60 }, '10x30': { before: 70, after: 75 } },
  };

  // Calculate cost for selected booths based on their type and size.
  const calculateBoothCost = () => {
    return selectedBooths.reduce((sum, b) => {
      const prices = boothPrices[b.type][b.size];
      const price = isAfterApril18 ? prices.after : prices.before;
      return sum + price;
    }, 0);
  };

  const calculateTotal = () => {
    const boothCost = calculateBoothCost();
    return boothCost + 5 * Number(formData.tables) + 30 * Number(formData.camping30) + 30 * Number(formData.camping50) + (formData.needElectricity ? 20 * selectedBooths.length : 0);
  };

  useEffect(() => {
    setTotalCost(calculateTotal());
  }, [formData, selectedBooths]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseInt(value) || 0 : value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files?.[0] || null });
  };

  const validateStep = () => {
    const errs = {};
    if (step === 0) {
      if (!formData.businessName) errs.businessName = 'Required';
      if (!/^\d{10}$/.test(formData.contactPhone)) errs.contactPhone = 'Enter a valid 10-digit number';
      if (!formData.email.includes('@')) errs.email = 'Invalid email';
      if (!formData.address) errs.address = 'Required';
    }
    if (step === 2) {
      if (!formData.paymentMethod) errs.paymentMethod = 'Required';
      if (!formData.agree) errs.agree = 'You must agree to the terms';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((s) => s + 1);
    }
  };

  const prevStep = () => setStep((s) => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log('Submitted:', { formData, selectedBooths, eventId });
      setSubmitted(true);
    }
  };

  // Back button for step 0: return to Vendor Map
  const handleBackToMap = () => {
    navigate(`/vendor/event/${eventId}/map`); // Adjust route as needed.
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-purple-50">
        <Header />
        <div className="max-w-xl mx-auto text-center py-20 px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-purple-800 mb-3">🎉 Application Received!</h2>
            <p className="text-gray-700 mb-2">Thank you for your reservation.</p>
            <p className="text-gray-600 mb-4">A confirmation email has been sent to {formData.email}.</p>
            <a href="/" className="mt-6 inline-block text-purple-600 font-semibold underline text-sm">
              Return to Homepage
            </a>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-50">
      <Header />
      <div className="max-w-3xl mx-auto py-10 px-4">
        {/* Top Center Step Label */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-purple-800">
            Step {step + 2}/5: {bookingSteps[step]}
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-6">
          {step === 0 && (
            <>
              <Input
                label="Business Name"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                error={errors.businessName}
              />
              <Input
                label="Phone Number"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                error={errors.contactPhone}
              />
              <Input
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <Input
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                error={errors.address}
              />
              <TextArea
                label="Exhibit Description"
                name="exhibitDescription"
                value={formData.exhibitDescription}
                onChange={handleChange}
              />
            </>
          )}

          {step === 1 && (
            <>
              <Input
                label="Tables ($5 each)"
                name="tables"
                value={formData.tables}
                onChange={handleChange}
                type="number"
              />
              <Input
                label="Camping 30A ($30/night)"
                name="camping30"
                value={formData.camping30}
                onChange={handleChange}
                type="number"
              />
              <Input
                label="Camping 50A ($30/night)"
                name="camping50"
                value={formData.camping50}
                onChange={handleChange}
                type="number"
              />
              {/* New Electricity Option */}
              <Checkbox
                label="Need Electricity ($20 per booth)"
                name="needElectricity"
                checked={formData.needElectricity}
                onChange={handleChange}
                error={errors.needElectricity}
              />
            </>
          )}

          {step === 2 && (
            <>
              <Select
                label="Payment Method"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                options={['Check', 'Online Invoice']}
                error={errors.paymentMethod}
              />
              <Checkbox
                label="I agree to the terms and conditions"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                error={errors.agree}
              />
              <div className="mt-2">
                <label className="block font-medium text-sm mb-1">
                  Upload Payment Proof (if applicable)
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full border px-3 py-2 rounded-md text-sm"
                />
              </div>
            </>
          )}

          {step === 3 && (
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Review Your Application</h3>
              <div className="space-y-4 text-sm">
                <p>
                  <strong>Business Name:</strong> {formData.businessName}
                </p>
                <p>
                  <strong>Email:</strong> {formData.email}
                </p>
                <p>
                  <strong>Contact Phone:</strong> {formData.contactPhone}
                </p>
                <p>
                  <strong>Address:</strong> {formData.address}
                </p>
                <p>
                  <strong>Exhibit Description:</strong> {formData.exhibitDescription}
                </p>
                <p>
                  <strong>Selected Booths:</strong>
                </p>
                <ul className="list-disc pl-5">
                  {selectedBooths.map((b) => {
                    const prices = boothPrices[b.type][b.size];
                    const price = isAfterApril18 ? prices.after : prices.before;
                    return (
                      <li key={b.id}>
                        Booth {b.id} ({b.type}, {b.size}) — ${price}
                      </li>
                    );
                  })}
                </ul>
                <p>
                  <strong>Tables ($5 each):</strong> {formData.tables}
                </p>
                <p>
                  <strong>Camping 30A ($30/night):</strong> {formData.camping30}
                </p>
                <p>
                  <strong>Camping 50A ($30/night):</strong> {formData.camping50}
                </p>
                <p>
                  <strong>Electricity Needed ($20 per booth):</strong> {formData.needElectricity ? 'Yes' : 'No'}
                </p>
                <p className="mt-4 font-semibold text-purple-800 text-lg">
                  💰 Total: ${totalCost}
                </p>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-4">
            {step === 0 ? (
              <button
                type="button"
                onClick={handleBackToMap}
                className="text-purple-600 hover:underline text-sm"
              >
                ← Back to Vendor Map
              </button>
            ) : (
              <button
                type="button"
                onClick={prevStep}
                className="text-purple-600 hover:underline text-sm"
              >
                ← Back
              </button>
            )}
            {step < bookingSteps.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-yellow-400 text-purple-900 font-bold px-6 py-2 rounded-full hover:bg-yellow-300 text-sm"
              >
                Next →
              </button>
            ) : (
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                className="bg-yellow-400 text-purple-900 font-bold px-6 py-2 rounded-full hover:bg-yellow-300 text-sm"
              >
                Submit
              </motion.button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

// Reusable Input Components with adjusted text sizes
const Input = ({ label, name, value, onChange, type = 'text', error }) => (
  <div>
    <label className="block font-medium text-sm mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border px-3 py-2 rounded-md text-base"
    />
    {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
  </div>
);

const TextArea = ({ label, name, value, onChange }) => (
  <div>
    <label className="block font-medium text-sm mb-1">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={3}
      className="w-full border px-3 py-2 rounded-md text-base"
    />
  </div>
);

const Select = ({ label, name, value, onChange, options, error }) => (
  <div>
    <label className="block font-medium text-sm mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border px-3 py-2 rounded-md text-base"
    >
      <option value="">Select</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
  </div>
);

const Checkbox = ({ label, name, checked, onChange, error }) => (
  <div className="flex items-center space-x-2">
    <input type="checkbox" name={name} checked={checked} onChange={onChange} />
    <label className="text-sm">{label}</label>
    {error && <p className="text-xs text-red-600">{error}</p>}
  </div>
);

export default VendorBookingForm;
