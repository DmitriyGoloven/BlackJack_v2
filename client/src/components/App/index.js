import {connect} from "react-redux";
import App from "./App";
import {gameState,token} from "../../store/reducer/selectors"
import {getNewGame, hit, stand, reset, getNewToken} from "../../store/reducer/actions";
import {createStructuredSelector} from "reselect";

const mapStateToProp = createStructuredSelector({
    gameState,
    token
})




export default connect(mapStateToProp)(App);