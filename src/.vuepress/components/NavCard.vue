<!-- 自定义的链接组件  -->
<template>
    <el-row :gutter="30">
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" 
            class="el-col-override"

            v-for="(cardObj,index) in cardArr" :key="index" >
            
            <el-card shadow="never" :body-style="{ padding:'15px'}">

                <el-row class="box-card-header">

                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="padding:0px;">
                        <img class="icon-size" :src="$withBase(cardObj.icon)" :alt="cardObj.title"/>
                    </el-col>
                
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="padding:0px;">
                        <div style="text-align:left;">
                            <el-tooltip effect="dark" :content="cardObj.desc" placement="top">

                                <el-button color="#626aef" plain 
                                    @click.native="gotoSite(cardObj.url)"
                                >
                                    {{cardObj.title}}
                                </el-button>    

                            </el-tooltip>
                        </div>
                    </el-col>

                </el-row>
                
                <el-row class="box-card-body">
                    <div class="box-font">{{cardObj.desc}}</div>
                </el-row>
             
            </el-card>

        </el-col>
    </el-row>
</template>


<script> 
    export default {
        name: "NavCard",
        components: {},
        props:{
            // 链接属性
            arr:{
                type:String,
                title: String,   // 链接标题
                icon:String,     // 链接图标
                desc: String,    // 链接描述
                default:''
            }
        },
        data() {
            return {
                cardArr:JSON.parse(this.arr),
            }
        },
        methods: {
            gotoSite(url) {
                // 在新标签页打开
                window.open(url, '_blank').location;
            },
        },
    }
</script>


<style>
.link-style{
    width:100%;
    height:100%;
    padding:0px;
}
.el-col-override {
    margin-top:20px;
    height:100px;
    width:100%;
    overflow:auto;
}
.box-card {
  width: 100%;
  height:100%;
}
.box-card-header{
    width:100%;
    height:50%;
    margin-bottom:1px;
    padding:0px;
}
.icon-size {
    width:30px;
    height:30px;
    text-align:left;
}
.box-card-body{
    width:100%;
    height:50%;
    margin-top:1px;
    padding:0px;
}
.box-font{
    font-size:10px;
    color:#999999
}
.el-card{
    border-radius: 10px;
    border:none;
    background-color: var(--playground-header-bg-color);
    /*box-shadow: 0px 1px 5px 4px #0000001a; */
}
.el-card:hover{
    transform: scale(1.03);
    border-top:none;
    background-color: var(--theme-color);
}
</style>