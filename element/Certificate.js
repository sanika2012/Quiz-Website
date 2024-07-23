import React, { useRef }from 'react';
import './Certificate.css';
// import { PDFDownloadLink, Document, Page, Text, StyleSheet } from '@react-pdf/renderer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const Certificate = () => {
  const fullName = JSON.parse(localStorage.getItem('signUpData')).fullName;
  const certificateRef = useRef(null);


  const handleDownload = async () => {
    const input = certificateRef.current;
    const canvas = await html2canvas(input, {
      scale: 2,  // Increase scale for better quality
      useCORS: true,
      allowTaint: true,
      scrollY: -window.scrollY,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm');
    
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('certificate.pdf');
  };



  return (
    <div className="border-pattern" ref={certificateRef} id="certificate">
      <div className="content">
        <div className='inner-content'>
        <h1>Certificate of Achievement</h1>
        <p>This certificate is proudly presented to</p>
        <h2><u>{fullName}</u></h2>
        <p>For outstanding performance in the Quizs</p>
        <p>organized by Enable IT solution pvt.ltd for Mock Preparation</p>
        <p>We acknowledge your efforts, keep participating!</p>
      </div>
       <button className="download-btn" onClick={handleDownload}>Download Certificate</button>
    </div>
    </div>
    
  );
};

export default Certificate;

