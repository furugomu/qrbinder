import { connect } from "react-redux";
import { State } from "../reducer";
import Routing from "../components/Routing";

const RoutingContainer = connect(({ route }: State) => ({ route }))(Routing);

export default RoutingContainer;
