// カメラやマイクの一覧を出す
import React from "react";

type OnClick = (device: MediaDeviceInfo) => void;
interface Props {
  kinds?: MediaDeviceInfo["kind"][];
  onClick?: OnClick;
}
interface State {
  devices: MediaDeviceInfo[];
}

export default class MediaDevices extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { devices: [] };
    this.enumerateDevices();
  }

  async enumerateDevices() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    this.setState({ devices });
  }

  render() {
    const kinds = this.props.kinds;
    const devices = this.state.devices.filter(
      device => kinds == null || kinds.includes(device.kind)
    );
    return <MediaDeviceList devices={devices} onClick={this.props.onClick} />;
  }
}

const MediaDeviceList = ({
  devices,
  onClick
}: {
  devices: MediaDeviceInfo[];
  onClick?: OnClick;
}) => (
  <ul>
    {devices.map(device => (
      <li key="device.deviceId">
        <button type="button" onClick={() => onClick && onClick(device)}>
          id: {device.deviceId}, label: {device.label}
        </button>
      </li>
    ))}
  </ul>
);
