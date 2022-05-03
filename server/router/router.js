const Router = require("@koa/router");
const Game = require("../game/game");
const Player = require("../game/player");

const router = new Router();

let game = new Game([new Player(), new Player(), new Player()])

const games = {}

const getGameController= (ctx,)=> {
    // const token = ctx.header['Authorization']
    // ctx.body = ctx.state.game

}

const checkTokenMiddleware = (ctx,next)=>{
    // const token = ctx.header['Authorization']
    //if(!token){
    //ctx.status = 401
    //return}

   // check token exist
   //  check is token valid
    //const session = getSessionFromBD()
   //  if (!session){
   //      ctx.status = 401
   //      return
   //  }
   //  ctx.state.session = getSessionFromBD()
    return next()
}

const checkGame = (ctx,next)=>{
// check game is true(prover est li game)
    // const token = ctx.header['Authorization']


    // if(!game[session.id]){
    //     ctx.status = 401
   // return
    // }
    // ctx.state.game = games[session.id]
    return next()
}

router.post('/api/login',checkTokenMiddleware,(ctx)=> {
    console.log({player:ctx.request.data})
    const token = '1token'
    ctx.body = {game,token}
})

router.get('/api/game',checkTokenMiddleware,(ctx)=> {
    ctx.body = game
})

router.post('/api/stand',checkTokenMiddleware, checkGame, (ctx) => {
    // const game = ctx.state.game
    game.stand();
    ctx.body = game
})

router.post('/api/hit',checkTokenMiddleware, (ctx) => {
    game.hit();
    ctx.body = game
})

router.post('/api/reset', (ctx) => {
    game = new Game([new Player(), new Player(), new Player()]);
    ctx.body = game;
})

module.exports = router

// router.post ("/login", ()=>{
//     const players = ctx.request.body.players
//     const players = ["lena","vova"]
// check arr, if !arr ret 422

// const session = crateSessionInBD()
// const token = craeteTokenFromsession(session)
// const game =  new Game(players.map((name)=>{new Player(name)}))
// games[session.id] = game
//ctx.body = {
//token: token,
//game: game}
// })