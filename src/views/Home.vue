<template>
  <div class="home">
    <!-- 领用列表 -->
    <section>
      <div class="section-top">
        <div class="jing-xiao">
          <span>经销商</span>
          <select id="select" @change="selectChange">
            <option :value ="item.uid" v-for="(item, index) in agencyList" :key="index">{{item.username}}</option>
          </select>
        </div>
        <div class="xiao-shou">
          <span>销售姓名</span>
          <input type="text" placeholder="销售姓名" v-model="giftReq.sale_name">
        </div>
        <div class="search-btn" @click="getGiftList">搜索</div>
        <div class="user-btn" @click="showUserList" v-if="agencyList.length>1">账户列表</div>
      </div>
      <div class="table-box">
        <div class="table-title">
          <div class="title-left">礼包列表</div>
          <div class="title-right">
            <div class="total-num">卡券总数：<span>{{total}}</span></div>
            <div class="used-num">已用数量：<span>{{usednum}}</span></div>
          </div>
        </div>
        <table border="0" cellpadding="0" cellspacing="0">
          <tr>
            <th>序号</th>
            <th>所属经销商</th>
            <th>激活码</th>
            <th>销售姓名</th>
            <th>销售电话</th>
            <th>用户姓名</th>
            <th>A圈见用户昵称</th>
            <th>用户电话</th>
            <th>操作</th>
          </tr>
          <tr v-for="(item,index) in giftList" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.username}}</td>
            <td>{{item.code}}</td>
            <td>{{item.sale_name}}</td>
            <td>{{item.sale_phone}}</td>
            <td>{{item.client_name}}</td>
            <td>{{item.client_nickname}}</td>
            <td>{{item.client_phone}}</td>
            <td @click="changeInfo(item)">领用备注</td>
          </tr>
        </table>
      </div>
    </section>
    <!-- 领用备注 -->
    <div class="modal-box" v-show="modalShow" @click="hideModal">
      <div class="modal" @click="stopProp">
        <div class="modal-title">领用备注</div>
        <div class="modal-item-box">
          <div class="input-item">
            <div>销售姓名</div>
            <input type="text" placeholder="销售姓名" v-model="editReq.sale_name"/>
          </div>
          <div class="input-item">
            <div>销售电话</div>
            <input type="text" placeholder="销售电话" v-model="editReq.sale_phone"/>
          </div><div class="input-item">
            <div>用户姓名</div>
            <input type="text" placeholder="用户姓名" v-model="editReq.client_name"/>
          </div><div class="input-item">
            <div>用户A圈见昵称</div>
            <input type="text" placeholder="用户A圈见昵称" v-model="editReq.client_nickname"/>
          </div><div class="input-item">
            <div>用户电话</div>
            <input type="text" placeholder="用户电话" v-model="editReq.client_phone"/>
          </div>
        </div>
        <div class="option">
          <div class="confirm-btn" @click="editInfo">确定</div>
          <div class="cancel-btn" @click="hideModal">取消</div>
        </div>
      </div> 
    </div>
    <!-- 账户列表 -->
    <div class="user-box" v-show="userShow" @click="hideUserList">
      <div class="user-modal" @click="stopProp">
        <div class="user-title">账户列表</div>
        <table cellpadding="0" cellspacing="0">
          <tr>
            <th>经销商名称</th>
            <th>账户名</th>
            <th>密码</th>
          </tr>
          <tr v-for="(item,index) in userList" :key="index">
            <td>{{item.username}}</td>
            <td>{{item.accounts}}</td>
            <td>{{item.password}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  
</template>
<script>
// @ is an alias to /src
import { IndexAPI } from '@/api/';
import HelloWorld from '@/components/HelloWorld';
import mixin from '@/mixins/index';

export default {
  name: 'Home',
  mixins: [mixin],
  data() {
    return {
      modalShow: false,
      userShow: false,
      agencyList: [],
      giftReq: {
        uid: '',
        sale_name: '',
      },
      giftList: [],
      editReq: {
        id: '',
        sale_name: '',
        sale_phone: '',
        client_name: '',
        client_nickname: '', 
        client_phone: '',
      },
      userList: [],
      total: 0,
      usednum: 0,
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    changeInfo(item) {
      const { id,sale_name,sale_phone,client_name,client_nickname, client_phone } = item;
      this.editReq = { id, sale_name, sale_phone, client_name, client_nickname, client_phone};
      this.modalShow = true;
    },
    hideModal() {
      this.modalShow = false;
    }, 
    showUserList() {
      this.userShow = true;
    },
    hideUserList() {
      this.userShow = false;
    },
    selectChange(e) {
      this.giftReq.uid = e.target.value;
      this.getGiftList();
    },
    async getAgencyList() {
      const res = await IndexAPI.agencyList();
      if (res.data.code == 200) {
        if (res.data.list.length>1) {
          const arr = [{ uid: '', username: '全部' }];
          this.agencyList = arr.concat(res.data.list);
        } else {
          this.agencyList = res.data.list;
          this.giftReq.uid = res.data.list[0].uid;
        }
        console.log(this.agencyList)
        this.getGiftList();
      }  
    },
    async getGiftList() {
      const res = await IndexAPI.giftList(this.giftReq);
      if (res.data.code == 200) {
        this.giftList = res.data.list;
        this.total = res.data.count;
        this.usednum = res.data.receive_count;
      }
    },
    async editInfo() {
      const { id, sale_name, sale_phone, client_name, client_nickname, client_phone} = this.editReq;
      if (sale_name.trim() == '' || sale_phone.trim() == '' || client_name.trim() == '' || client_nickname.trim() == '' || client_phone.trim() == '') {
        this.$toast({
          title: '请填写完整信息',
          duration: 1000
        });
        return;
      }
      const res = await IndexAPI.editInfo(this.editReq);
      if (res.data.code == 200) {
        this.modalShow = false;
        this.getGiftList();
        this.$toast({
          title: '修改成功',
          duration: 1000
        });
      }
    },
    async getUserList() {
      const res = await IndexAPI.userList();
      if (res.data.code == 200) {
        this.userList = res.data.list;
      }
    }
  },
  mounted() {
    this.getAgencyList();
    this.getUserList();
  },
};
</script>
<style lang="scss">
@import '../style/index.scss';

section{
  width: 1120px;
  background-color: #fff;
  margin: 14px auto 0;
  padding:47px 40px;
  .section-top{
    overflow: hidden;
    .jing-xiao{
      width: 320px;
      float:left;
      span{
        margin-right:17px;
      }
      select{
        width: 240px;
        height: 28px;
        outline: none;
        border:1px solid $border-color;
        border-radius:5px;
      }
    }
    .xiao-shou{
      width:250px;
      float:left;
      span{
        margin-right:17px;
      }
      input{
        width: 130px;
        height: 28px;
        outline: none;
        border:1px solid $border-color;
        border-radius:5px;
        padding-left:5px;
      }
    }
    .search-btn,.user-btn{
      float:left;
      width: 103px;
      height: 30px;
      border-radius:5px;
      background-color: $main-color;
      color:#fff;
      line-height: 30px;
      text-align: center;
      cursor: pointer;
    }
    .user-btn{
      float:right;
    }
  }
  .table-box{
    margin-top:39px;
    border:1px solid $border-color;
    border-bottom:none;
    .table-title{
      height: 50px;
      border-bottom:1px solid $border-color;
      .title-left{
        float:left;
        height: 50px;
        line-height: 50px;
        width: 100px;
        text-align: center;
      }
      .title-right{
        float:right;
        height: 50px;
        @extend .h-center;
        .total-num,.used-num{
          span{
            color:$main-color;
          }
        }
        .used-num{
          margin-left:51px;
          margin-right:33px;
        }
      }
    }
    table{
      width: 100%;
      tr{
        height: 40px;
        &:first-child{
          background-color: $bg-color;
        }
        &:last-child{
          border:none;
        }
        td{
          text-align: center;
           border-bottom:1px solid $border-color;
          &:last-child{
            color:$main-color;
            cursor: pointer;
          }
        }
      }
    }
  }
}
.modal-box,.user-box{
  position: fixed;
  top:0;
  left: 0;
  bottom:0;
  right:0;
  // background-color: rgba(0, 0, 0, 0.5);
}
.modal-box{
  .modal{
    position: absolute;
    left:50%;
    top:50%;
    background-color: #fff;
    margin-left:-306px;
    margin-top:-139px;
    width: 613px;
    height: 278px;
    box-shadow: 0 0 10px 1px #999;
    border-radius:6px;
    .modal-title{
      height: 50px;
      border-bottom:1px solid $border-color;
      line-height: 50px;
      text-indent: 20px;
    }
    .modal-item-box{
      overflow: hidden;
      box-sizing: border-box;
      .input-item{
        margin-top:20px;
        float:left;
        input{
          outline: none;
          width: 157px;
          padding-left:8px;
          height: 26px;
          border-radius:5px;
          border:1px solid $border-color;
          margin-top:5px;
        }
      }
      .input-item:nth-child(1),.input-item:nth-child(4){
        margin-left:20px;
      }
      .input-item:nth-child(2),.input-item:nth-child(5){
        margin-left:34px;
        margin-right:34px;
      }
    }
    .option{
      .cancel-btn,.confirm-btn{
        width: 72px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        background-color: #999999;
        color:#fff;
        float: right;
        margin-top:20px;
        margin-right:31px;
        border-radius:5px;
        cursor: pointer;
      }
      .confirm-btn{
        background-color: $main-color;
      }
    }
  }
}
.user-box{
  .user-modal{
    position: absolute;
    top:50%;
    left:50%;
    width: 700px;
    margin-left:-350px;
    transform: translateY(-50%);
    border-radius: 8px;
    box-shadow: 0 0 10px 1px #999;
    background-color: #fff;
    .user-title{
      height: 50px;
      border-bottom:1px solid $border-color;
      line-height: 50px;
      text-indent: 20px;
    }
    table{
      width: 100%;
      tr{
        height: 50px;
        &:first-child{
          background-color: $bg-color;
          height: 40px;
        }
        th{
          width: 33.33333%;
        }
        td{
          text-align: center;
          border-bottom:1px solid $border-color;
        }
      }
    }
  }
}

</style>

