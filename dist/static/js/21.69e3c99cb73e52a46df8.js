(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{JqeJ:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-f7f7f7"},[a("v-content-head",{attrs:{headTitle:"交易信息",icon:!0},on:{changGroup:e.changGroup}}),e._v(" "),a("div",{staticClass:"module-wrapper"},[a("div",{staticClass:"search-part"},[a("div",{staticClass:"search-part-left-bg"},[a("span",[e._v("共")]),e._v(" "),a("span",[e._v(e._s(e.numberFormat(e.total,0,".",",")))]),e._v(" "),a("span",[e._v("条")])]),e._v(" "),a("div",{staticClass:"search-part-right"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入交易哈希或块高"},on:{clear:e.clearText},model:{value:e.searchKey.value,callback:function(t){e.$set(e.searchKey,"value",t)},expression:"searchKey.value"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.search},slot:"append"})],1)],1)]),e._v(" "),a("div",{staticClass:"search-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"refTable",staticClass:"block-table-content",attrs:{data:e.transactionList,"row-key":e.getRowKeys,"expand-row-keys":e.expands},on:{"row-click":e.clickTable}},[a("el-table-column",{attrs:{type:"expand",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("v-transaction-detail",{attrs:{transHash:e.row.transHash}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"transHash",label:"交易哈希",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[a("i",{staticClass:"wbs-icon-copy font-12 copy-key",attrs:{title:"复制哈希"},on:{click:function(a){return e.copyPubilcKey(t.row.transHash)}}}),e._v("\n                            "+e._s(t.row.transHash)+"\n                        ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"blockNumber",label:"块高",width:"260",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.blockNumber))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"blockTimestamp",label:"创建时间",width:"280","show-overflow-tooltip":!0,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.blockTimestamp))])]}}])})],1),e._v(" "),a("el-pagination",{staticClass:"page",attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,50],"page-size":e.pageSize,layout:" sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])],1)};n._withStripped=!0;var r=a("qse9"),o=a("bxjF"),s=a("mHBk"),i=(a("oYx3"),a("p5Bo")),c=a("DgvE"),l={name:"transaction",components:{"v-content-head":r.a,"v-transaction-detail":o.a},data:function(){return{transactionList:[],expands:[],searchKey:{key:"",value:""},currentPage:1,pageSize:10,total:0,loading:!1,numberFormat:c.h,getRowKeys:function(e){return e.transHash}}},mounted:function(){this.$route.query.blockNumber&&(this.searchKey.key="blockNumber",this.searchKey.value=this.$route.query.blockNumber),this.getTransaction()},methods:{changGroup:function(){this.getTransaction()},search:function(){"transactionHash"==this.searchKey.key&&66!=this.searchKey.value.length&&this.searchKey.value?this.$message({message:"搜索交易哈希不支持模糊查询",type:"error",duration:2e3}):(this.currentPage=1,this.getTransaction())},getTransaction:function(){var e=this;this.expands=[],this.loading=!0;var t={groupId:localStorage.getItem("groupId"),pageNumber:this.currentPage,pageSize:this.pageSize},a={};this.searchKey.value&&(66===this.searchKey.value.length?a.transactionHash=this.searchKey.value:a.blockNumber=this.searchKey.value),Object(s.x)(t,a).then(function(t){e.loading=!1,0===t.data.code?(e.transactionList=t.data.data,e.total=t.data.totalCount):e.$message({message:i.a.errCode[t.data.code].cn,type:"error",duration:2e3})}).catch(function(t){e.loading=!1,e.$message.error("系统错误")})},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getTransaction()},handleCurrentChange:function(e){this.currentPage=e,this.getTransaction()},clickTable:function(e,t,a){"I"!==a.target.nodeName&&this.$refs.refTable.toggleRowExpansion(e)},clearText:function(){this.getTransaction()},copyPubilcKey:function(e){var t=this;e?this.$copyText(e).then(function(e){t.$message({type:"success",showClose:!0,message:"复制成功",duration:2e3})}):this.$message({type:"fail",showClose:!0,message:"key为空，不复制。",duration:2e3})}}},d=(a("S9Ms"),a("KHd+")),p=Object(d.a)(l,n,[],!1,null,"fd5cf4c2",null);p.options.__file="src/views/transactionInfo/transactionInfo.vue";t.default=p.exports},S9Ms:function(e,t,a){"use strict";var n=a("U0yB");a.n(n).a},Suk2:function(e,t,a){(e.exports=a("JPst")(!1)).push([e.i,'\n.block-table-content[data-v-fd5cf4c2] {\r\n    width: 100%;\r\n    padding-bottom: 16px;\r\n    font-size: 12px;\n}\n.block-table-content[data-v-fd5cf4c2] .el-table__expanded-cell {\r\n    padding: 12px 6px;\n}\n.block-table-content[data-v-fd5cf4c2] .el-table__expand-icon > .el-icon {\r\n    font-size: 14px;\n}\n.block-table-content[data-v-fd5cf4c2] .el-table__row {\r\n    cursor: pointer;\n}\n.search-part[data-v-fd5cf4c2] {\r\n    padding: 30px 0px;\r\n    overflow: hidden;\r\n    margin: 0;\n}\n.search-part[data-v-fd5cf4c2]::after {\r\n    display: block;\r\n    content: "";\r\n    clear: both;\n}\n.input-with-select[data-v-fd5cf4c2] {\r\n    width: 610px;\n}\n.input-with-select[data-v-fd5cf4c2] .el-input__inner {\r\n    border-top-left-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n    border: 1px solid #eaedf3;\r\n    -webkit-box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\r\n            box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\n}\n.input-with-select[data-v-fd5cf4c2] .el-input-group__append {\r\n    border-top-right-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    -webkit-box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\r\n            box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\n}\n.input-with-select[data-v-fd5cf4c2] .el-button {\r\n    border: 1px solid #20d4d9;\r\n    border-radius: inherit;\r\n    background: #20d4d9;\r\n    color: #fff;\n}\n.input-with-select[data-v-fd5cf4c2] .el-input__inner {\r\n    border-top-left-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n    border: 1px solid #eaedf3;\r\n    -webkit-box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\r\n            box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\n}\n.input-with-select[data-v-fd5cf4c2] .el-input--suffix > .el-input__inner {\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\n}\n.input-with-select[data-v-fd5cf4c2] .el-input-group__prepend {\r\n    border-left-color: #fff;\n}\n.input-with-select[data-v-fd5cf4c2] .el-input-group__append {\r\n    border-top-right-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    -webkit-box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\r\n            box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\n}\r\n',""])},U0yB:function(e,t,a){var n=a("Suk2");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("SZ7m").default)("554be3c6",n,!1,{})}}]);