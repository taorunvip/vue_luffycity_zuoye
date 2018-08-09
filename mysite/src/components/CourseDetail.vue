<template>
  <div class="container-fluid">
    <div class="row clearfix">
      <div class="col-md-12 column">
        <div class="carousel slide" id="carousel-70359">
          <ol class="carousel-indicators">
            <li class="active" data-slide-to="0" data-target="#carousel-70359">
            </li>
            <li data-slide-to="1" data-target="#carousel-70359">
            </li>
            <li data-slide-to="2" data-target="#carousel-70359">
            </li>
          </ol>
          <div class="carousel-inner">
            <div class="item active">
              <img alt="" src="http://ibootstrap-file.b0.upaiyun.com/lorempixel.com/1600/500/sports/1/default.jpg"/>
              <div class="carousel-caption">
                <h4>
                  First Thumbnail label
                </h4>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at
                  eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
              </div>
            </div>
            <div class="item">
              <img alt="" src="http://ibootstrap-file.b0.upaiyun.com/lorempixel.com/1600/500/sports/2/default.jpg"/>
              <div class="carousel-caption">
                <h4>
                  Second Thumbnail label
                </h4>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at
                  eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
              </div>
            </div>
            <div class="item">
              <img alt="" src="http://ibootstrap-file.b0.upaiyun.com/lorempixel.com/1600/500/sports/3/default.jpg"/>
              <div class="carousel-caption">
                <h4>
                  Third Thumbnail label
                </h4>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at
                  eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
              </div>
            </div>
          </div>
          <a class="left carousel-control" href="#carousel-70359" data-slide="prev"><span
            class="glyphicon glyphicon-chevron-left"></span></a> <a class="right carousel-control"
                                                                    href="#carousel-70359" data-slide="next"><span
          class="glyphicon glyphicon-chevron-right"></span></a>
        </div>
        <div class="container">
          <div v-for="(item,index) in message" :key="index">
            <h2>课程概述</h2>
            <h3>
              {{item.why_study}}
            </h3>
            <h3 class="text-center">
              可以根据不同的学习情况购买不一样的学习套餐哦！
            </h3>
            <div id="course" style="margin-top: 66px" _v-3e2ebd6a="">

              <div v-for="(pricing,index) in item.price_strategy" :key="index" style="text-align:center;"
              >
                <input type="radio" v-bind:value="pricing.id" v-on:click="choice_price" v-model="picked" ref="input1">
                <span>¥{{pricing.price}}</span>
                <span>有效期{{pricing.valid_period}}</span>
                <br>
              </div>
              <div class="clearfix"></div>
              <div style="justify-content: center; margin-top: 66px; display: none;" _v-3e2ebd6a="">
                <button class="charge-btn-fir charge-btn-active" style="margin-right: 48px" _v-3e2ebd6a="">开课时通知我
                </button>
              </div>
              <div style="height: 50px"></div>
              <div class="text-center">
                <span>您选择的课程id为: {{ picked }}</span>
                <br>
              </div>
              <br>
              <div class="text-center">
                <button type="button" class="btn btn-lg btn-success" v-on:click="add_car">购买</button>
                <button type="button" class="btn btn-lg btn-warning" style="margin-left: 100px" v-on:click="add_car">
                  加入购物车
                </button>
              </div>
            </div>
            <div style="height: 200px"></div>
          </div>
        </div>

      </div>

    </div>
  </div>
  <!--</div>-->
</template>

<script>
  import Swal from 'sweetalert2'
  export default {
    name: "CourseDetail",
    data: function () {  //data必须是函数
      return {
        message: [],  //声明data变量
        strategy_id: '', //策略id
        picked: '',
        // list: [],
      }
    },
    mounted: function () {
      this.getAlldata();
      // console.log(this.$route.params);
      // console.log(this.$route.params.id)
      // console.log( 'http://127.0.0.1:8000/api/v1/courses/'+this.$route.params.id+'/')
    },
    methods: {   //定义方法对象
      getAlldata: function () {
        // console.log(111);
        let that = this;
        this.$axios.request({
          //this.$route.params.id 表示获取当前url中的id参数
          url: 'http://127.0.0.1:8000/api/v1/courses/'+this.$route.params.id+'/',
          method: 'GET',
        })
          .then(function (res) {
            console.log('连接成功');
            // console.log(res);
            that.message = res.data.data;
          })
          .catch(function (err) {
            console.log('连接失败' + err);
          })
      },
      choice_price: function () {
        this.picked = this.$refs.input1.value;
      },
      add_car: function () {
        let that = this;
        this.$axios.request({
          url: 'http://127.0.0.1:8000/api/v1/shoppingcart/',
          method: 'POST',
          data: {
            courseid: this.$route.params.id, //当前课程id
            policyid: this.picked,
          },
          // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        })
          .then(function (res) {
            console.log('加入购物车成功');
            that.message = res.data.data;
            Swal("加入购物车成功！", "success！","success")
            window.location.reload();
          })
          .catch(function (err) {
            // console.log('连接失败' + err);error
            Swal("加入购物车失败！", "error！","error");
            window.location.reload();
          })
      }
    },
  }
</script>

<style scoped>
  #course ul {
    text-align: center;
    list-style-type: none;
    display: inline-block;
    margin-left: 250px;
  }

  #course li {
    display: inline;
    float: left;
    border: solid 1px red;
    height: 149px;
    width: 150px;
    line-height: 150px;
    text-align: center;
    border-color: #C1C1C1;
    margin-left: 100px;
  }

</style>
