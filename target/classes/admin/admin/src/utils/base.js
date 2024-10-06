const base = {
    get() {
        return {
            url : "http://localhost:8080/wuzizongheguanlixitong/",
            name: "wuzizongheguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wuzizongheguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "物资综合管理系统"
        } 
    }
}
export default base
