import { connect } from "react-redux";
import { Action } from "../reducer";
import { Dispatch } from "redux";
import { QRCode } from "jsqr";
import axios from "axios";
import { AikatsuCard } from "../aikatsu-card";
import QrCodeReaderMock from "../components/QrCodeReaderMock";

const QrCodeReaderContainer = connect(
  null,
  (dispatch: Dispatch<Action>) => ({
    onScan: async (code: QRCode) => {
      // アイカツカードの情報を得るぞ
      const url =
        "https://aikatsu-scraper-api.herokuapp.com/card?url=" +
        encodeURIComponent(code.data);
      // TODO: ナウローディングする
      try {
        const { data } = await axios.get<AikatsuCard>(url);
        dispatch({
          type: "form/update",
          payload: { ...data, qrUrl: code.data }
        });
      } catch (e) {
        console.error("だめでした", e);
      }
    }
  })
)(QrCodeReaderMock);

export default QrCodeReaderContainer;
