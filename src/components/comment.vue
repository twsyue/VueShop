<template>
    <div class="comment-box">
        <h3>发表评论</h3>
        <hr>
        <textarea name="comments" id="" placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
                <div class="cmt-title">第 {{i+1}} 楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}</div>
                <div class="cmt-body">{{item.content === 'undefined' ? '此用户很懒什么都没说' : item.content}}</div>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore()">加载评论</mt-button>
    </div>
</template>

<script>
    import { Toast  } from 'mint-ui';
    export default {
        name: "comment",
        data(){
            return{
                pageIndex:1,
                comments:[]
            }
        },
        created(){
            this.getComments()
        },
        methods:{
            getComments(){
                this.axios.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
                    .then(result => {
                        if (result.data.status === 0) {
                            this.comments = result.data.message;
                            this.comments = this.comments.concat(result.data.message);
                        } else {
                            Toast("获取评论失败")
                        }
                    })
            },
            getMore(){
                this.pageIndex++;
                this.getComments();

            }
        },
        props:['id']
    }
</script>

<style lang="scss">
    .comment-box{
        h3{font-size: 18px;}
        textarea{font-size: 14px;height: 85px; margin: 0;}
        .cmt-list{
            margin: 5px 0;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    background-color: #ccc;
                }
                .cmt-body{
                    line-height: 35px;
                    text-indent: 20px;

                }
            }
        }
    }
</style>