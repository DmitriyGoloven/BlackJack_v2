import {connect} from "react-redux";
import Game from "./Game";
import {gameState} from "../../store/reducer/selectors"
import {getNewGame, hit, stand, reset} from "../../store/reducer/actions";
import {createStructuredSelector} from "reselect";

const mapStateToProp = createStructuredSelector({
    gameState,
})

const mapDispatchToProps = {
    getNewGame,
    hit,
    stand,
    reset
}

export default connect(mapStateToProp, mapDispatchToProps)(Game);