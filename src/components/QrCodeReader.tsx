import React from "react";
import jsQR, { QRCode } from "jsqr";

interface Props {
  deviceId?: string;
  onScan(code: QRCode): void;
}
interface State {
  error?: Error;
}
class QrCodeReader extends React.Component<Props, State> {
  video: React.RefObject<HTMLVideoElement>;
  timer?: any;
  stream?: MediaStream;

  constructor(props: Props) {
    super(props);
    this.state = {};
    this.video = React.createRef();
  }

  async componentDidMount() {
    // カメラを video へ
    const videoConstraints: MediaTrackConstraints = this.props.deviceId
      ? { deviceId: this.props.deviceId }
      : { facingMode: "environment" };
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: videoConstraints
      });
    } catch (error) {
      this.setState({ error });
      return;
    }
    const video = this.video.current!;
    video.srcObject = this.stream;
    video.play();

    // 定期的にQRコードを読み取ろうとする
    this.timer = setInterval(() => {
      const code = this.scan();
      if (code) {
        this.props.onScan(code);
      }
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    if (this.stream) {
      this.stream.stop();
    }
  }

  // カメラの映像から canvas を作り、jsQR で読み取る
  scan() {
    const video = this.video.current!;
    const canvas = new HTMLCanvasElement();
    const height = (canvas.height = video.videoHeight);
    const width = (canvas.width = video.videoWidth);
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(video, 0, 0);
    const imageData = ctx.getImageData(0, 0, width, height);
    return jsQR(imageData.data, width, height);
  }

  render() {
    return (
      <div>
        {this.state.error && (
          <p>カメラへのアクセスに失敗しました: {this.state.error.message}</p>
        )}
        <video ref={this.video} width="320" playsInline={true} />
      </div>
    );
  }
}

export default QrCodeReader;
