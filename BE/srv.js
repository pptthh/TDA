"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var LOG_FILE_NAME = '../Access.log';
var writeToFile = function (logData, cb) { return (fs_1.default.appendFile(LOG_FILE_NAME, logData, 'utf8', function (err) { cb(); if (err)
    throw err; }),
    logData); };
var safeDbQuote = function (s) { return s && s.replace(/\\/g, '\\x5C').replace(/"/, '\\x22'); };
var getXIP = function (r) { return safeDbQuote((r.headers['x-real-ip'] || r.headers['x-forwarded-for'])) || ''; };
var getIP = function (r) { return getXIP(r) ? r.connection.remoteAddress + '\txpi:' + getXIP(r) : r.connection.remoteAddress; };
var PORT = process.env.PORT || 3000;
var DELAY = 500;
var N = '\n';
var T = '\t';
var NT = N + T;
var logData = function (r) {
    return Date.now() + T + 'ip:' + getIP(r) +
        NT + 'url:' + r.url +
        NT + 'query:' + JSON.stringify(r.query) +
        N;
};
var logger = function (r, rs, next) { return (writeToFile(logData(r), function () { return setTimeout(next, DELAY); }),
    console.log(Date.now() + T + 'ip:' + getIP(r), T + 'url:' + r.url)); };
var app = express_1.default();
app.use(logger);
app.use(function (rq, rs, nx) { return (rs.locals.errors = null, nx()); });
var mainPageRoutes = [];
var createUrl = function (url) { return "GET: <a href='" + url + "' target='_self'>" + url + "</a>"; };
app.get('/', function (req, res) {
    res.send('Hello<br\><br\>\n'
        + req.url +
        '<br\><pre>' + mainPageRoutes.map(createUrl).join('\n') + '<pre>' +
        '<hr/><form action="/" method="get" enctype="multipart/form-data">' +
        '<input id="textId" type="text" name="name">' +
        '<input type="submit" value="Submit">' +
        '</form>' +
        '');
});
mainPageRoutes.push('/test');
app.get('/test', function (req, res) {
    return res.json({ noteArray: [
            { note: 'test data text 1', date: new Date() },
            { note: 'test data text 2', date: new Date() },
            { note: 'test data text 3', date: new Date() },
            { note: 'test data text 4', date: new Date() },
        ] });
});
var noteArray = [];
mainPageRoutes.push('/notes');
app.get('/notes', function (req, res) { return res.json({ noteArray: noteArray }); });
mainPageRoutes.push('/notes/add');
app.get('/notes/add', function (req, res) {
    return res.json(noteArray.unshift(req.query));
});
mainPageRoutes.push('/notes/delete');
app.get('/notes/delete', function (req, res) {
    return res.json(noteArray.splice(req.query.key, 1));
});
try {
    app.listen(PORT, function () { return console.log('Server started on port: ' + PORT); });
}
catch (error) {
    console.log('error:', error);
}
console.log('Server initialized');
