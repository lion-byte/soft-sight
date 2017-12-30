import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import session from 'express-session'
import logger from 'morgan'
import connectMongo from 'connect-mongo'
import passport from 'passport'
import { Strategy as TumblrStrategy } from 'passport-tumblr'
import path from 'path'
import { api, auth, main } from './routes'

dotenv.config()

const { TUMBLR_CONSUMER_KEY, TUMBLR_SECRET_KEY, MONGO_DB_URL } = process.env

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((obj, done) => {
  done(null, obj)
})

passport.use(
  new TumblrStrategy(
    {
      consumerKey: TUMBLR_CONSUMER_KEY,
      consumerSecret: TUMBLR_SECRET_KEY,
      callbackURL: '/auth/tumblr/callback'
    },
    (token, tokenSecret, profile, done) => {
      console.log(token, tokenSecret)
      process.nextTick(() => {
        done(null, Object.assign({}, profile, { token, tokenSecret }))
      })
    }
  )
)

const MongoStore = connectMongo(session)
const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
  session({
    secret: 'larping-widow',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
      url: MONGO_DB_URL
    })
  })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.resolve(__dirname, '../public/')))

app.use('/', main)
app.use('/api', api)
app.use('/auth/tumblr', auth)

app.use((req, res, next) => {
  const err = new Error('Not found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.send('Error')
})

export { app }
