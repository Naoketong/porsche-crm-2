// 各个依赖包
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 引入 nunjucks
var nunjucks = require('nunjucks');
var filters = require('./filters/index');//第六步


// 路由文件引用
var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

// Express 引用实例化
var app = express();

// // 视图模版设置
// // 设置视图模版目录，设置视图模版后缀为 jade 文件
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// 视图模版设置
// 1. 设置视图模版后缀修改为 tpl 文件
// 2. 添加 nunjucks 在 express 中的自动配置
// 3. 注释 设置 views 代码，在 nunjucks 自动配置中有设置
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('view engine', 'tpl');
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
});

// 使用 morgan 日志打印
app.use(logger('dev'));
// 使用对 Post 来的数据 json 格式化
app.use(express.json());
// 使用对 表单提交的数据 进行格式化
app.use(express.urlencoded({ extended: false }));
// 使用 cookie
app.use(cookieParser());
// 设置静态文件地址路径为 public
app.use(express.static(path.join(__dirname, 'public')));


filters(app);
app.use('/', indexRouter);
app.use('/api', apiRouter);


// // 使用配置好的路由
// app.use('/', indexRouter);
// app.use('/api', apiRouter);

// 捕捉404错误
app.use(function(req, res, next) {
  next(createError(404));
});

// 监听异常如果有，立刻返回异常
app.use(function(err, req, res, next) {
  // 设置错误信息
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 渲染到模版
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
