<template>
    <div class="login" >
        <div class="login-box">
            <div class="login-title">登录</div>
            <div class="user-name" :style="{borderColor:nameColor}">
                <img src="../assets/3@2x.png" alt="">
                <input type="text" v-model="loginData.username" placeholder="请输入账户" @focus="nameFocus" @blur="nameBlur"  autofocus @keydown="keydown" ref="account"/>
            </div>
            <div class="user-password" :style="{borderColor:passwordColor}">
                <img src="../assets/3@2x.png" alt="" >
                <input type="password" v-model="loginData.password" placeholder="请输入密码" @focus="passwordFocus" @blur="passwordBlur" @keydown="keydown" ref="password"/>
            </div>
            <div class="login-btn" @click="login">登录</div>
        </div>
        <div class="login-bottom"></div>  
    </div>
</template>
<script>
import { LoginAPI } from '@/api/index';

export default {
    name: 'login',
    data() {
        return {
            nameColor: '#DBDBDB',
            passwordColor: '#DBDBDB',
            loginData: {
                username: '',
                password: ''
            }
        };
    },
    methods: {
        nameFocus() {
            this.nameColor = '#BA0A30';
        },
        passwordFocus() {
            this.passwordColor = '#BA0A30';
        },
        nameBlur() {
            this.nameColor = '#DBDBDB';
        },
        passwordBlur() {
            this.passwordColor = '#DBDBDB';
        },
        async login() {
            // this.$router.replace({ name: 'home' });
            if (this.loginData.username.trim() === '') {
                this.$refs.account.focus();
                this.$toast({
                    title: '请输入用户名',
                    duration: 1000,
                });
                return;
            } 
            if (this.loginData.password.trim() === '') {
                this.$refs.password.focus();
                this.$toast({
                    title: '请输入密码',
                    duration: 1000,
                });
                return;
            }
            this.showLoading('正在登录，请稍后');
            try {
                const res = await LoginAPI.login({ ...this.loginData });
                console.log(res);
                this.hideLoading();             
                if (res.data.code == 200) {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('key', res.data.key);
                    this.$store.commit('saveUser',res.data);
                    this.$toast({
                        title: '登录成功',
                        duration: 1000,
                    });
                    this.$router.replace({ name: 'home' });
                } else {
                    this.$toast({
                        title: res.data.msg,
                        duration: 1000,
                    });
                }
            } catch (err) {
                this.hideLoading();
                console.log(err);
                this.$toast({
                    title: err,
                    duration: 1000,
                });
            }          
        },
        keydown(e) {
            if (e.keyCode == 13) {
                this.login();
            }
        },
    },
    mounted() {
        window.addEventListener('keydown', this.keydown);
    },
    destroyed() {
        window.removeEventListener('keydown', this.keydown);
    }
};
</script>
<style lang="scss">
@import '../style/index.scss';
.login{
    position: fixed;
    top:102px;
    left:0;
    right:0;
    bottom:0;
    .login-box{
        position: absolute;
        left:50%;
        top:40%;
        width: 374px;
        height: 316px;
        margin-left:-187px;
        margin-top:-158px;
        background-color: #fff;
        box-shadow: 0 0 10px 1px #999;
        border-radius: 8px;
        .login-title{
            height: 60px;
            text-align: center;
            line-height: 60px;
            color:$main-color;
            font-size: 22px;
        }
        .user-name,.user-password{
            margin:30px auto 0;
            width: 90%;
            height: 40px;
            border-radius: 6px;
            border:1px solid $border-color;
            border-radius:6px;
            @extend .h-center;
            img{
                width: 22px;
                margin:0 10px;
            }
            input{
                outline: none;
                border:none;
            }
        }
        .login-btn{
            margin:30px auto 0;
            width: 90%;
            height: 40px;
            border-radius:6px;
            text-align: center;
            color:#fff;
            line-height: 40px;
            background-color: $main-color;
            cursor: pointer;
        }
    }
    .login-bottom{
        position: absolute;
        left:0;
        bottom:0;
        width: 100%;
        height: 99px;
        background-color: #151922;
    }
}
</style>
