// src/components/vendor/VendorBookingForm.tsx

import React, { useState, useEffect } from 'react';
import { TopBar } from '../Navigation/TopBar';
import { MainNav } from '../Navigation/MainNav';
import { motion } from 'framer-motion';
import { Header } from '../Navigation/HeaderComponent';

const steps = ['Exhibitor Info', 'Booth Selection', 'Extras', 'Payment & Terms', 'Review & Submit'];

const isAfterApril18 = new Date() > new Date('2025-04-18');

export const VendorBookingForm = () => {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [totalCost, setTotalCost] = useState(0);
  const [submitted, setSubmitted] = useState(false);


  const [formData, setFormData] = useState({
    businessName: '',
    contactPhone: '',
    email: '',
    address: '',
    exhibitDescription: '',
    boothLocation: '',
    boothSize: '',
    boothQty: 1,
    needElectric: false,
    tables: 0,
    camping30: 0,
    camping50: 0,
    paymentMethod: '',
    agree: false,
    file: null as File | null,
  });

  const boothPrices: Record<string, number> = isAfterApril18
    ? { '10x10': 50, '10x20': 55, '10x30': 60, 'Enclosed Trailer': 75 }
    : { '10x10': 45, '10x20': 50, '10x30': 55, 'Enclosed Trailer': 70 };

  const calculateCost = () => {
    const boothPrice = boothPrices[formData.boothSize] || 0;
    const boothTotal = boothPrice * formData.boothQty;
    const tableTotal = 5 * formData.tables;
    const camping30Total = 30 * formData.camping30;
    const camping50Total = 30 * formData.camping50;
    return boothTotal + tableTotal + camping30Total + camping50Total;
  };

  useEffect(() => {
    setTotalCost(calculateCost());
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseInt(value) || 0 : value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, file });
  };

  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};

    if (step === 0) {
      if (!formData.businessName.trim()) newErrors.businessName = 'Required';
      if (!formData.contactPhone.trim() || !/^\d{10}$/.test(formData.contactPhone)) newErrors.contactPhone = 'Valid 10-digit number required';
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email required';
      if (!formData.address.trim()) newErrors.address = 'Address required';
    }

    if (step === 1) {
      if (!formData.boothLocation) newErrors.boothLocation = 'Select location';
      if (!formData.boothSize) newErrors.boothSize = 'Select size';
      if (formData.boothQty <= 0) newErrors.boothQty = 'At least 1 booth required';
    }

    if (step === 3) {
      if (!formData.paymentMethod) newErrors.paymentMethod = 'Select payment method';
      if (!formData.agree) newErrors.agree = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      console.log('Submitted:', formData);
      setSubmitted(true); 
    }
  };
  

if (submitted) {
    return (
      <div className="min-h-screen bg-purple-50">
        {/* <TopBar />
        <MainNav /> */}
        <Header />
        <div className="max-w-xl mx-auto py-20 px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-purple-800 mb-4">✅ Application Submitted!</h2>
            <p className="text-gray-700 text-lg mb-6">
              Thank you for applying as a vendor. We’ve received your application and will be in touch soon.
            </p>
            <a href="/" className="text-purple-600 font-semibold underline">Return to Homepage</a>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-50 overflow-x-hidden">
      <TopBar />
      <MainNav />

      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-2 text-center">Vendor Application</h2>
        <p className="text-center text-sm text-gray-500 mb-8">Step {step + 1} of {steps.length}: {steps[step]}</p>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg space-y-6">
          {step === 0 && (
            <>
              <Input label="Business / Individual Name" name="businessName" value={formData.businessName} onChange={handleChange} error={errors.businessName} />
              <Input label="Contact Phone" name="contactPhone" value={formData.contactPhone} onChange={handleChange} error={errors.contactPhone} />
              <Input label="Email Address" name="email" value={formData.email} onChange={handleChange} type="email" error={errors.email} />
              <Input label="Mailing Address" name="address" value={formData.address} onChange={handleChange} error={errors.address} />
              <TextArea label="Nature of Exhibit" name="exhibitDescription" value={formData.exhibitDescription} onChange={handleChange} />
            </>
          )}

          {step === 1 && (
            <>
              <Select label="Booth Location" name="boothLocation" value={formData.boothLocation} onChange={handleChange} options={["Outdoor", "Indoor"]} error={errors.boothLocation} />
              <Select label={`Booth Size (Price: $${boothPrices[formData.boothSize] || 0})`} name="boothSize" value={formData.boothSize} onChange={handleChange} options={["10x10", "10x20", "10x30", "Enclosed Trailer"]} error={errors.boothSize} />
              <Input label="Number of Booths" name="boothQty" value={formData.boothQty} onChange={handleChange} type="number" error={errors.boothQty} />
              <Checkbox label="Need Electricity?" name="needElectric" checked={formData.needElectric} onChange={handleChange} />
            </>
          )}

          {step === 2 && (
            <>
              <Input label="Number of Tables ($5 each)" name="tables" value={formData.tables} onChange={handleChange} type="number" />
              <Input label="Camping (30 Amp, $30/night)" name="camping30" value={formData.camping30} onChange={handleChange} type="number" />
              <Input label="Camping (50 Amp, $30/night)" name="camping50" value={formData.camping50} onChange={handleChange} type="number" />
            </>
          )}

          {step === 3 && (
            <>
              <Select label="Payment Method" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} options={["Check", "Online Invoice"]} error={errors.paymentMethod} />
              <Checkbox label="I acknowledge the terms and conditions" name="agree" checked={formData.agree} onChange={handleChange} error={errors.agree} />
              <div>
                <label className="block font-medium text-gray-700 mb-1">Upload License / Documents (Optional)</label>
                <input type="file" onChange={handleFileChange} className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              </div>
            </>
          )}

          {step === 4 && (
            <div className="bg-purple-50 rounded-lg p-6 shadow-inner space-y-4">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Review Your Details</h3>
              <div className="text-sm text-gray-800 space-y-1">
                <p><strong>Contact:</strong> {formData.businessName} | {formData.contactPhone} | {formData.email}</p>
                <p><strong>Address:</strong> {formData.address}</p>
                <p><strong>Exhibit:</strong> {formData.exhibitDescription}</p>
                <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
              </div>
              <div className="border-t border-purple-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Booth ({formData.boothSize} × {formData.boothQty})</span>
                  <span>${(boothPrices[formData.boothSize] || 0) * formData.boothQty}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tables ({formData.tables} × $5)</span>
                  <span>${formData.tables * 5}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Camping 30A ({formData.camping30} × $30)</span>
                  <span>${formData.camping30 * 30}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Camping 50A ({formData.camping50} × $30)</span>
                  <span>${formData.camping50 * 30}</span>
                </div>
              </div>
              <div className="flex justify-between border-t pt-4 mt-4 font-bold text-purple-900">
                <span>Total Cost</span>
                <span>${totalCost}</span>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-4">
            {step > 0 && (
              <button type="button" onClick={prevStep} className="text-sm text-purple-600 hover:underline">
                ← Back
              </button>
            )}
            {step < steps.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-yellow-400 text-purple-900 font-bold py-2 px-6 rounded-full text-sm hover:bg-yellow-300 transition"
              >
                Next →
              </button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-yellow-400 text-purple-900 font-bold py-2 px-6 rounded-full text-sm hover:bg-yellow-300 transition"
              >
                Submit Application
              </motion.button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

const Input = ({ label, name, value, onChange, type = 'text', error }: any) => (
  <div>
    <label className="block font-medium text-gray-700 mb-1">{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} className="w-full border border-gray-300 rounded-lg px-4 py-2" />
    {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
  </div>
);

const TextArea = ({ label, name, value, onChange }: any) => (
  <div>
    <label className="block font-medium text-gray-700 mb-1">{label}</label>
    <textarea name={name} value={value} onChange={onChange} rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2" />
  </div>
);

const Select = ({ label, name, value, onChange, options, error }: any) => (
  <div>
    <label className="block font-medium text-gray-700 mb-1">{label}</label>
    <select name={name} value={value} onChange={onChange} className="w-full border border-gray-300 rounded-lg px-4 py-2">
      <option value="">Select</option>
      {options.map((opt: string, i: number) => (
        <option key={i} value={opt}>{opt}</option>
      ))}
    </select>
    {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
  </div>
);

const Checkbox = ({ label, name, checked, onChange, error }: any) => (
  <div className="flex items-center space-x-2">
    <input type="checkbox" name={name} checked={checked} onChange={onChange} />
    <label className="text-gray-700 text-sm">{label}</label>
    {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
  </div>
);
