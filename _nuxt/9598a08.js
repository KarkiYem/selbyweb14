(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{365:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(121);var r=n(161),c=n(87);function l(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||Object(r.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},415:function(t,e,n){var content=n(539);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("3ba23bfa",content,!0,{sourceMap:!1})},538:function(t,e,n){"use strict";n(415)},539:function(t,e,n){var o=n(20)((function(i){return i[1]}));o.push([t.i,".flex[data-v-3383ac16]{display:flex;flex-wrap:wrap;gap:2%;justify-content:flex-start}.box2[data-v-3383ac16]{border:1px solid silver;flex:0 0 30%;height:-moz-fit-content;height:fit-content;max-width:30%}.box2[data-v-3383ac16],.boxi[data-v-3383ac16]{margin:5px auto}.boxi[data-v-3383ac16]{height:90%;width:90%}.box[data-v-3383ac16]{align-items:center;display:flex;height:-moz-fit-content;height:fit-content;justify-content:center;margin:0 auto;padding-bottom:10px;padding-top:10px;width:80%}p[data-v-3383ac16]{color:#353535}@media only screen and(max-width:750px){.flex[data-v-3383ac16]{display:flex;flex-wrap:wrap;gap:2%;justify-content:flex-start}.box2[data-v-3383ac16]{border:1px solid silver;flex:0 0 48%;height:-moz-fit-content;height:fit-content;max-width:48%}.box2[data-v-3383ac16],.boxi[data-v-3383ac16]{margin:5px auto}.boxi[data-v-3383ac16]{height:90%;width:90%}.box[data-v-3383ac16]{align-items:center;display:flex;height:-moz-fit-content;height:fit-content;justify-content:center;margin:0 auto;padding-bottom:10px;padding-top:10px;width:98%}}",""]),o.locals={},t.exports=o},607:function(t,e,n){"use strict";n.r(e);n(42);var o=n(365),r=n(7),c=(n(43),n(44)),l=n(158),d={middleware:["CheckUser"],data:function(){return{packages:[],data:{id:"",name:"",noofads:"",num:1,price:"",validity:""},dialogTableVisible:!1,storing:{active:Boolean,avatar:"",block:Boolean,collectionId:"",collectionName:"",created:"",email:"",emailVisibility:Boolean,id:"",name:"",phone:"",subscription:[],updated:"",username:"",verified:Boolean},subcat:[],payment_id:"",frequency:"",price:0}},mounted:function(){this.getData1(),this.getData11()},methods:{buy22:function(t){this.data=t,console.log(t),this.price=t.price,this.dialogTableVisible=!0},plus:function(t){this.data.noofads++,this.price=this.data.price*this.data.noofads},minus:function(t){t>1&&(this.data.noofads--,this.price=this.data.price*this.data.noofads)},getData11:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.collection("user_Phone_Google_Fb_Login").getFirstListItem('userId = "'.concat(t.$store.state.phone,'"'),{});case 2:t.storing=e.sent;case 3:case"end":return e.stop()}}),e)})))()},getData1:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.collection("subscription").getFullList({sort:"-created",filter:'subcat = "'.concat(t.$route.params.id,'" ')});case 2:t.packages=e.sent,t.packages.forEach((function(t){t.num=1}));case 4:case"end":return e.stop()}}),e)})))()},go1:function(t){this.active=t},buy2:function(t){var e,n=this;e=Object(o.a)(n.storing.subscription);for(var i=0;i<e.length;i++)n.subcat.push({amount:e[i].amount,totalamount:e[i].totalamount,category:e[i].category,catid:e[i].catid,noofpost:e[i].noofpost,noofpostremain:e[i].noofpostremain,validity:e[i].validity});n.subcat.push({amount:t.price,totalamount:n.price,category:t.name,noofpost:t.noofads,noofpostremain:t.noofads,validity:t.validity}),n.boost(t.price)},boost:function(t){var e=this;new Razorpay({key:"rzp_test_FKoWwhlrAUl0Ls",amount:100*t,handler:function(n){Object(l.Message)({showClose:!0,message:"Payment Successful!",type:"success"}),e.payment_id=n.razorpay_payment_id,e.postorder(t)},modal:{ondismiss:function(){Object(l.Message)({showClose:!0,message:"Payment Failed!",type:"warning"})}},prefill:{email:"test@email.com",contact:917002242387},notes:{name:"rahul",phone:"799723233"},theme:{color:"#667eea"}}).open()},postorder:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,o,r,d,dd,f,h,m,v,y,_,x,w,k;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e,o=new Date,r=o.getFullYear(),d=o.getMonth()+1,(dd=o.getDate())<10&&(dd="0"+dd),d<10&&(d="0"+d),dd+"/"+d+"/"+r,(f=new Date(o)).setDate(o.getDate()+28),h=f.getFullYear(),m=f.getMonth()+1,v=f.getDate(),y=f.getHours(),_=f.getMinutes(),x=f.getSeconds(),v<10&&(dd="0"+dd),m<10&&(d="0"+d),v+"/"+m+"/"+h,y+":"+_+":"+x,w=n.subcat,null===n.payment_id){t.next=25;break}return k={username:n.storing.username,email:n.storing.email,emailVisibility:n.storing.emailVisibility,name:n.storing.name,phone:n.storing.phone,block:n.storing.block,subscription:JSON.stringify(w),active:n.storing.active},t.next=25,c.a.collection("user_Phone_Google_Fb_Login").update(n.storing.id,k).then((function(){Object(l.Message)({showClose:!0,message:"Saved Successfuly!",type:"success"}),n.dialogTableVisible=!1,history.back()})).catch((function(){Object(l.Message)({showClose:!0,message:"Something went wrong!",type:"warning"})}));case 25:case"end":return t.stop()}}),t)})))()}}},f=(n(538),n(16)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex"},t._l(t.packages,(function(i,n){return e("div",{key:n,staticClass:"box2"},[e("div",{staticClass:"boxi"},[e("p",[e("strong",[t._v(t._s(i.name))]),t._v(" "),e("br"),t._v(" "),e("strong",[t._v(t._s(i.noofads)+" Ads")]),t._v(" "),e("br"),t._v(" "),e("strong",[t._v("₹"+t._s(i.price))]),t._v(" "),e("br"),t._v(" "),e("strong",[t._v(t._s(i.validity)+" days")])]),t._v(" "),e("p",{staticStyle:{width:"50%",border:"1px solid #000",display:"flex","justify-content":"center","align-items":"center"},on:{click:function(e){return t.buy22(i)}}},[e("strong",[t._v("BUY NOW")])])])])})),0),t._v(" "),e("el-dialog",{attrs:{title:"Slect Plans",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[e("div",{staticClass:"box"},[e("div",{staticClass:"boxin",staticStyle:{width:"100%"}},[e("div",{staticStyle:{width:"60%"}},[e("p",[e("strong",[t._v(t._s(t.data.name))])]),t._v(" "),e("p",[t._v("\n            Number of Ads - "),e("button",{on:{click:function(e){return t.minus(t.data.noofads)}}},[t._v("-")]),t._v("\n            "+t._s(t.data.noofads)+"\n            "),e("button",{on:{click:function(e){return t.plus(t.data.noofads)}}},[t._v("+")])]),t._v(" "),e("p",[t._v(t._s(t.data.validity))]),t._v(" "),e("p",[e("strong",[t._v("₹"+t._s(t.data.price))])]),t._v(" "),e("p",[e("strong",[t._v("₹"+t._s(t.price))])]),t._v(" "),e("p",{staticStyle:{width:"40%",border:"1px solid #000",display:"flex","justify-content":"center","align-items":"center"},on:{click:function(e){return t.buy2(t.data)}}},[t._v("\n            BUY\n          ")])])])])])],1)}),[],!1,null,"3383ac16",null);e.default=component.exports}}]);