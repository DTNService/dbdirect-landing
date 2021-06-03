"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
//MARK: BodyParser 더이상 사용되지않음
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// view engine setup
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, '..', '..', 'public/')));
// catch 404 and forward to error handler
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log('ERROR!');
    // render the error page
    res.status(err.status || 500);
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
exports.default = app;
