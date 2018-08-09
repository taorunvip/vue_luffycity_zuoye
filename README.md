## 说明
路飞学城

webpack + Vue + VueRouter + VueX，使用vue-cli构建项目

## 运行环境

| Project | Status | Description |
|---------|--------|-------------|
| node                | 10.7.0 | 暂无 |
| npm                | 6.1.0 | 暂无 |
| webpack                | 4.16.2 | 暂无 |

## 功能

| 路径 | 功能 |
|---------|--------|
| /          | 首页 |
| /course          | 课程 |
| /course/课程id          | 课程详细 |
| /news/          | 深科技 |
| /login/          | 登录 |
| /shopping_cart/         | 购物车,支持增删改查 |

## 功能说明
访问首页时,会从后端拉取数据,并自动渲染！

访问课程详细,可以加入到购车车

访问购物车,会自动从后端redis中拉取

## BUG说明
购物车选择周期时,页面价格不会变动。但是后端redis更改了！

## 运行方式
请确保已经安装了node和webpack

前端：
进入目录 前端Vue\my-project

运行命令:`
```dos
npm install
```
根据package.json会自动安装依赖包

使用命令运行Vue项目
```dos
npm run dev
```

Copyright (c) 2018-present, xiao You