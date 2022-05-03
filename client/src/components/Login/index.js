import {connect} from "react-redux";
import Login from "./Login";
import {gameState} from "../../store/reducer/selectors"
import {getNewGame, getNewToken} from "../../store/reducer/actions";
import {createStructuredSelector} from "reselect";

const mapStateToProp = createStructuredSelector({
    gameState,
})

const mapDispatchToProps = {
    getNewToken,
    getNewGame,

}

export default connect(mapStateToProp, mapDispatchToProps)(Login);