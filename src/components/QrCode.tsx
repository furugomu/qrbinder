import React from "react";
import qrcode from "qrcode";

interface Props {
  text: string;
}
export default class QrCode extends React.Component<Props> {
  canvas: React.RefObject<HTMLCanvasElement>;

  constructor(props: Props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    this.updateQrCode();
  }

  componentDidUpdate() {
    this.updateQrCode();
  }

  updateQrCode() {
    if (!this.canvas.current) return;
    qrcode.toCanvas(this.canvas.current, this.props.text);
  }

  render() {
    return <canvas ref={this.canvas} />;
  }
}
