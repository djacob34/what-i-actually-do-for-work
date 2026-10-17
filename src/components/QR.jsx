import { useMemo } from 'react';
import qrcode from 'qrcode-generator';

export function QR({ value, size = 220, className = '' }) {
  const svg = useMemo(() => {
    const qr = qrcode(0, 'M');
    qr.addData(value);
    qr.make();
    return qr.createSvgTag({ cellSize: 4, margin: 2, scalable: true });
  }, [value]);
  return (
    <div
      className={`qr ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label={`QR code for ${value}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
