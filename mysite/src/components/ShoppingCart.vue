<template>
  <div class="container">
    <div class="row clearfix">
      <div class="col-md-12 column">
        <h1>我的购物车</h1>
        <table class="table">
          <thead>
          <tr>
            <th>
              课程
            </th>
            <th>
              有效期
            </th>
            <th>
              单价
            </th>
            <th>
              操作
            </th>
          </tr>
          </thead>
          <tbody v-for="item in message">
          <tr>
            <td>
              {{item.name}}
            </td>
            <td>
              <!--<select class="form-control" style="width: 100px" v-model="selected">-->
                <select class="form-control" style="width: 100px">
                <option v-for="(option,index) in item.price_policy_dict"
                        v-bind:value="option.id"
                >
                  {{option.valid_period}}天
                </option>
                <!--<template v-for = "(value,index) in item.price_policy_dict">-->
                  <!--<option v-if = "index == item.default_price_id" v-bind:value="value.id"  selected = "selected">{{value.valid_period}}</option>-->
                  <!--<option v-else v-bind:value="value.id">{{value.valid_period}}</option>-->
                <!--</template>-->

              </select>
            </td>
            <td>
              <template v-for = "(value,index) in item.price_policy_dict">
                <span v-if = "value.id == item.default_price_id">¥{{value.price}}</span>
              </template>
              <!--{{selected}}-->
            </td>
            <td>
              <a href="javascript:void(0)" v-on:click="delete_car(item.id)">删除</a>
            </td>
          </tr>

          </tbody>
        </table>
        <div>
          <button data-v-2ebdf748="" type="button" class="btn btn-lg btn-success pull-right" style="margin-left: 100px;">
            去结算
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swal from 'sweetalert2'
  export default {
    name: "ShoppingCart",
    data: function () {  //data必须是函数
      return {
        message: '',  //声明data变量
        strategy_id: '', //策略id
        picked: '',
        selected: '',
      }
    },
    watch: {  //监听selected的变化
      selected: function (val) {
        let that = this;
        this.$axios.request({
          url: 'http://127.0.0.1:8000/api/shoppingcart/',
          method: 'PUT',
          data: {
            courseid: 1,
            policyid: this.selected,
          },
        })
          .then(function (res) {
            console.log('修改成功');
            // console.log(res);
          })
          .catch(function (err) {
            console.log('连接失败' + err);
          })
      },
    },
    mounted: function () {
      this.getAlldata();
    },
    methods: {   //定义方法对象
      getAlldata: function () {  //获取购物车列表
        console.log(111);
        let that = this;
        this.$axios.request({
          url: 'http://127.0.0.1:8000/api/shoppingcart/',
          method: 'GET',
        })
          .then(function (res) {
            console.log('连接成功');
            console.log(res);
            that.message = res.data.data;
          })
          .catch(function (err) {
            console.log('连接失败' + err);
          })
      },
      delete_car: function (index) {  //删除购物车
        let that = this;
        this.$axios.request({
          url: 'http://127.0.0.1:8000/api/shoppingcart/',
          method: 'DELETE',
          data: {
            courseid: index,
            // policyid: this.selected,
          },
          // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        })
          .then(function (res) {
            console.log(res);
            Swal("删除课程成功！", "success！","success");
            window.location.reload();
          })
          .catch(function (err) {
            Swal("删除课程失败！", "error！","error");
          })
      },
    },
  }
</script>

<style scoped>

</style>
