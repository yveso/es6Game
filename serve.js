/// <reference path="typings/node/node.d.ts"/>
'use strict';

var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use('/', express.static(__dirname + '/dist'));

app.listen(app.get('port'), function () {
    console.log('server started on port ' + app.get('port'));
});