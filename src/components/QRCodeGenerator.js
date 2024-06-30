import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ onGenerateQRCode }) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleGenerateQRCode = () => {
    onGenerateQRCode(inputText);
  };

  return (
    <div>
      <h2>Generate QR Code</h2>
      <div>
        <label>Enter text:</label>
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={handleGenerateQRCode}>Generate QR Code</button>
      </div>
      {/* Conditionally render QRCode component if inputText is not empty */}
      {inputText && (
        <div style={{ marginTop: '20px' }}>
          <QRCode value={inputText} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
