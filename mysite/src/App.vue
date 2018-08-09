<template>
  <!--<link href="http://cdn.bootcss.com/highlight.js/8.0/styles/monokai_sublime.min.css" rel="stylesheet">-->
  <!--<script src="http://cdn.bootcss.com/highlight.js/8.0/highlight.min.js"></script>-->
  <!--<script >hljs.initHighlightingOnLoad();</script>-->
  <div id="app">
    <!--导航条-->
    <nav class="navbar navbar-default">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img src="./assets/login.png" width="30px" height="30px" style="margin-top: -5px;">
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <router-link to="/" tag='li' activeClass='active' exact>
              <a>首页</a>
            </router-link>
            <router-link to="/course" tag='li' activeClass='active' exact>
              <a>课程</a>
            </router-link>
            <router-link to="/news" tag='li' activeClass='active' exact>
              <a>深科技</a>
            </router-link>

          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/login">登录</router-link></li>
            <li class="dropdown">
            <li><a href="#">注册</a></li>
            <li><router-link to="/shopping_cart">购物车</router-link></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <!--路由出口-->
    <router-view></router-view>
  </div>
</template>

<script>
  //导入bootstrap
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.min.js'
  // import jQuery from 'jquery'
  export default {
    name: 'App',
    data:function(){
      return {}
    },
    //计算属性
    computed:{
      allRoutes:function(){
        // 从Vue实例里面取出所有的路由
        // console.log(this.$router.options.routes)
        return this.$router.options.routes
      }
    }
  }

</script>

<style>
  a{ text-decoration:none}
  a:hover{
    text-decoration:none;
  }
</style>
