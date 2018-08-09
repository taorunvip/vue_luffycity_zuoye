<template>
  <!--<div>-->
    <!--<h1>课程列表</h1>-->
    <!--<ul v-for="item in courseList">-->
      <!--<li>{{item.name}}</li>-->
    <!--</ul>-->
  <!--</div>-->
  <div class="container">
    <div class="row clearfix">
      <div class="col-md-4" v-for="item in courseList">
        <div class="thumbnail">
          <img alt="300x200" src="http://ibootstrap-file.b0.upaiyun.com/lorempixel.com/600/200/people/default.jpg" />
          <div class="caption">
            <h3>
              {{item.name}}
            </h3>
            <p>
              <!--<a :href="/course/item.id">{{item.brief}}</a>-->
              <!--拼接url，item.id表示课程id-->
              <router-link :to="{ path: '/course/'+item.id}">{{item.brief}}</router-link>
            </p>
            <p>
              <span>{{item.level_name}}</span> <span class="pull-right">{{item.period}}天</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Course",
    data() {
      return {
        courseList: [11, 22, 33]
      }
    },
    mounted(){
      this.initCourse();
    },
    methods:{
      initCourse:function () {
        //向后台发送ajax请求
        let that = this
        this.$axios.request({
          url:'http://127.0.0.1:8000/api/v1/courses/thematic/',
          method:'GET',
          responseType:'json'
        }).then(function (arg) {
          console.log(arg);
          if (arg.data.code === 1000){
            console.log(arg.data.data)
            that.courseList = arg.data.data
          }else {
            alert(arg.data.error)
          }
        }).catch(function (err) {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>

</style>
