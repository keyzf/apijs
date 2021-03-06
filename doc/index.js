'use strict';

var Mdjs = require('mdjs');
var child_process = require('child_process');

var app = new Mdjs({
    "port": 8002,
    "root": "../",
    "cache_path": "../__cache/",
    "name": "apijs",
    "dir_alias": {
        "doc": "文档"
    }
});

// 更新勾子
app.express.post('/api/update', function (req, res, next) {
    child_process.exec('git pull', function (a, b) {
        console.log('更新成功', b);

        // 清空缓存
        app.clear_cache();
    });

    res.end('ok');
});

// 运行
app.run();