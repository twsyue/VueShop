<template>
    <div>
        <!--顶部滚动导航条-->
        <div class="my-tab">
            <div class="my-tabbar">
                <div class="my-tab-list">
                    <a :class="['my-tab-item', item.id === selectedId ? 'tab-active' : '']"
                       v-for="item in tabitems"
                       :key="item.id"
                       @click="getPhotolistByCateId(item.id)"
                    >{{ item.title }}</a>
                </div>
            </div>
        </div>
        <ul class="photolist">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+ item.id" tag="li">
                <img :src="item.img_url" alt="">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "PhotoList",
        data() {
            return {
                selectedId: 0,
                tabitems: [
                    {title: "全部", id: 0}
                ],
                list: [],
            }
        },
        mounted() {
        },
        created() {
            this.getAllCategory();
            this.getPhotolistByCateId(0)
        },
        methods: {
            getAllCategory() {
                this.axios.get("/api/getimgcategory/").then(result => {
                    if (result.data.status === 0) {
                        this.tabitems = this.tabitems.concat(result.data.message)
                    }

                })
            },
            getPhotolistByCateId(cateId) {
                this.axios.get("/api/getimages/" + cateId)
                    .then(result => {
                        if (result.data.status === 0) {
                            this.list = result.data.message;
                            this.selectedId = cateId
                        }

                    })
            },
        }, components: {}
    }

</script>

<style lang="scss" scoped>
    /* 定义滚动条样式 */
    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: rgba(240, 240, 240, 1);

    }
    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 0px rgba(240, 240, 240, .5);
        border-radius: 10px;
        background-color: rgba(240, 240, 240, .5);
    }
    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 0px rgba(240, 240, 240, .5);
        background-color: rgba(240, 240, 240, .5);
    }
    .my-tab {
        position: relative;
        background-color: rgba(255, 255, 255, .8);
        width: 100%;
        display: flex;
        border-bottom: 1px solid #eee;
        box-shadow: 0 0px 6px 1px #eee;
        overflow-x: scroll;

        .my-tabbar {
            .my-tab-list {
                position: relative;
                box-sizing: border-box;
                display: flex;
                flex-flow: row nowrap;
                flex-shrink: 0;
                padding: 14px 10px;
                min-width: 100%;

                .my-tab-item {
                    display: block !important;
                    width: 70px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    flex-grow: 1;
                    font-size: 14px;
                    padding: 0 5px;
                    color: #2c3e50;
                }

                .tab-active {
                    color: #007aff;
                    font-weight: bold
                }
            }
        }
    }

    .photolist {
        list-style: none;
        margin: 0;
        padding: 10px 10px 0;

        li {
            position: relative;
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999;

            img {
                width: 100%;
            }

            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }

            .info {
                position: absolute;
                bottom: 0;
                max-height: 84px;
                background-color: rgba(0, 0, 0, .4);
                color: #fff;
                text-align: left;

                .info-title {
                    font-size: 14px;
                }

                .info-body {
                    font-size: 13px;
                }
            }
        }
    }


</style>