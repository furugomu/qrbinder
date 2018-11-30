import React from "react";
import { QRCode } from "jsqr";

const url =
  "http://dcd.sc/j2?i=XRxxNOOUUIG1bbm0XHAPylzF3ZrT2Me12HlpUW8p7NuDjimG_qAfjWlFUZrVERe5.";
const point = { x: 0, y: 0 };
const code: QRCode = {
  binaryData: [],
  data: url,
  chunks: [],
  location: {
    topRightCorner: point,
    topLeftCorner: point,
    bottomRightCorner: point,
    bottomLeftCorner: point,
    topRightFinderPattern: point,
    topLeftFinderPattern: point,
    bottomLeftFinderPattern: point
  }
};

interface Props {
  onScan(code: QRCode): void;
}
const QrCodeReaderMock = ({ onScan }: Props) => (
  <div>
    <button type="button" onClick={() => onScan(code)}>
      scan!
    </button>
  </div>
);
export default QrCodeReaderMock;
