// src/utils/generateTicketPDF.ts
import jsPDF from 'jspdf';
import QRCode from 'qrcode';

export const generateTicketPDF = async ({
  name,
  email,
  phone,
  tickets,
  total,
  eventTitle,
}: {
  name: string;
  email: string;
  phone: string;
  tickets: Record<string, number>;
  total: number;
  eventTitle: string;
}) => {
  const doc = new jsPDF();
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(16);

  doc.text(eventTitle, 105, 20, { align: 'center' });
  doc.setFontSize(12);
  doc.text(`Name: ${name}`, 20, 40);
  doc.text(`Email: ${email}`, 20, 50);
  doc.text(`Phone: ${phone}`, 20, 60);

  doc.text('Tickets:', 20, 75);
  let y = 85;
  Object.entries(tickets).forEach(([label, qty]) => {
    if (qty > 0) {
      doc.text(`${label}: ${qty}`, 30, y);
      y += 10;
    }
  });

  doc.setFontSize(14);
  doc.text(`Total Paid: $${total}`, 20, y + 10);

  // QR Code with name + email
  const qrContent = `Name: ${name}, Email: ${email}`;
  const qrUrl = await QRCode.toDataURL(qrContent);
  doc.addImage(qrUrl, 'PNG', 140, 40, 50, 50);

  doc.save('monroe_ticket.pdf');
};
