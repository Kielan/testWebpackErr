const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser');
const cors = require('cors');
import React from 'react';
import { appConfig } from './config';

var isProduction = process.env.NODE_ENV === 'production';
var static_path = 'https://' + appConfig.host + ':' + appConfig.httpsPort;

const credentials = {
  key: fs.readFileSync('./key.pem', 'utf8'),
  cert: fs.readFileSync('./cert.pem', 'utf8')
}
let app = express();
const jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());

app.use('/', express.static(path.join(process.cwd(), 'public')));

app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'pug');

app.get('*', function(req, res) {
//  res.locals.app_stylesheets = '<script src="/js/main.js"></script>';
  res.locals.app_scripts = '\n <script src="/js/app.js"></script>\n';
  console.log('url hit')
  res.render('index', { title: 'Hey', message: 'Hello there!' })
});
var secureApp = https.createServer(credentials, app).listen(appConfig.httpsPort, () => {
  console.log(`Node.js app is running at https://localhost:${appConfig.httpsPort}/`);
})
