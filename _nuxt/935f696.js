(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{363:function(e,t,o){"use strict";o(364)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},364:function(e,t,o){var n=o(10),r=o(17),c=o(45),l=/"/g,d=function(e,t,o,n){var r=String(c(e)),d="<"+t;return""!==o&&(d+=" "+o+'="'+String(n).replace(l,"&quot;")+'"'),d+">"+r+"</"+t+">"};e.exports=function(e,t){var o={};o[e]=t(d),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",o)}},375:function(e,t,o){var content=o(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(21).default)("1f19a013",content,!0,{sourceMap:!1})},376:function(e,t,o){var content=o(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(21).default)("33c76e46",content,!0,{sourceMap:!1})},458:function(e,t,o){"use strict";o(375)},459:function(e,t,o){var n=o(20)((function(i){return i[1]}));n.push([e.i,'.fl2[data-v-8e47eaec]{display:flex;flex-wrap:wrap;gap:1%;width:50%}.imgdiv[data-v-8e47eaec]{aspect-ratio:1/1;border:1px solid gray;flex:0 0 24%;margin-bottom:10px;max-width:24%;overflow:hidden}.img[data-v-8e47eaec]{-o-object-fit:contain;object-fit:contain;width:100%}.ptxt[data-v-8e47eaec]{color:#fff;font-size:30px}.ptxt[data-v-8e47eaec],.ptxt1[data-v-8e47eaec]{font-weight:600}.ptxt1[data-v-8e47eaec]{color:#212122;font-size:16px}.dui[data-v-8e47eaec]{align-items:center;background-color:rgba(106,129,151,.6);border-radius:3px;display:flex;flex-direction:column;justify-content:center;margin-top:1rem;min-height:200px;padding:10px 15px;width:100%;z-index:2}.tpr[data-v-8e47eaec]{height:350px}.ma[data-v-8e47eaec]{margin:0 auto;width:90%}.divs[data-v-8e47eaec]{min-height:100vh;width:100%}.btn3[data-v-8e47eaec]{color:#002fa7;font-size:30px;font-weight:700;text-align:center}input[data-v-8e47eaec]{margin-bottom:10px}input[type="Confirm Password"][data-v-8e47eaec],input[type=Email][data-v-8e47eaec],input[type=Password][data-v-8e47eaec],input[type=name][data-v-8e47eaec]{background-color:#212122;border:2px solid #212122;border-radius:3px;color:#fff;font-weight:600;height:40px;padding-left:15px;width:212px}input[data-v-8e47eaec]:focus{border:2px solid #212122;outline:0;transition:.8s}[data-v-8e47eaec]::-moz-placeholder{color:#7f7e7e;left:20px;position:absolute;top:8px}[data-v-8e47eaec]::placeholder{color:#7f7e7e;left:20px;position:absolute;top:8px}input:focus~input[type=email][data-v-8e47eaec]::-moz-placeholder{background-color:#002fa7;color:#fff;left:10px;position:absolute;top:7px}input:focus~input[type=email][data-v-8e47eaec]::placeholder{background-color:#002fa7;color:#fff;left:10px;position:absolute;top:7px}[data-v-8e47eaec]::-ms-reveal{filter:invert(100%)}button[data-v-8e47eaec]{background:#212122;border:2px solid #212122;border-radius:3px;box-shadow:0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3);color:#fff;cursor:pointer;font-weight:600;height:38px;width:200px}button[data-v-8e47eaec]:active{box-shadow:3px 2px 22px 1px rgba(0,0,0,.24);transform:scale(1.05)}.pops[data-v-8e47eaec]{display:flex;flex-wrap:wrap;justify-content:space-between}.bt[data-v-8e47eaec]{background:#002fa7;border:2px solid #002fa7;border-radius:20px;box-shadow:0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3);color:#fff;cursor:pointer;flex:0 0 40%;font-weight:600;height:38px;max-width:40%}.bt[data-v-8e47eaec]:active{box-shadow:3px 2px 22px 1px rgba(0,0,0,.24);transform:scale(1.05)}@media only screen and (max-width:650px){.tpr[data-v-8e47eaec]{height:50px}}@media only screen and (max-width:500px){.pops[data-v-8e47eaec]{display:block}.bt[data-v-8e47eaec]{flex:0 0 100%;margin-top:5px;max-width:100%}}',""]),n.locals={},e.exports=n},460:function(e,t,o){"use strict";o(376)},461:function(e,t,o){var n=o(20)((function(i){return i[1]}));n.push([e.i,".description{opacity:1!important}",""]),n.locals={},e.exports=n},599:function(e,t,o){"use strict";o.r(t);o(42),o(363);var n=o(7),r=(o(43),o(225),o(28),o(159),o(160),o(44)),c=(o(101),{layout:"default2",data:function(){return{password:"",email:"",name:"",confirmpassword:"",appVerifier:"",otp:"",seen:!1,s1:!0,link:"",obj:null,at:[],username:""}},methods:{sendOtp:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,a,n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((o=e).s1=!1,""!=o.email){t.next=6;break}Message({showClose:!0,message:"Email is Invalid!",type:"warning"}),t.next=13;break;case 6:return a=o.name.split(" "),n=Math.floor(9e3*Math.random())+1e3,o.username=a[0]+n.toString(),data={username:o.username,email:o.email,emailVisibility:!0,password:o.password,passwordConfirm:o.confirmpassword,name:o.name,subscription:{},phone:o.$store.state.phone,block:!0,active:!0,avatar:o.obj},t.next=12,r.a.collection("user_Phone_Google_Fb_Login").create(data).then((function(e){o.$router.push("/Profile")})).catch((function(e){Message({showClose:!0,message:"Insert Correct Data!",type:"warning"})}));case 12:t.sent;case 13:case"end":return t.stop()}}),t)})))()},filesChange1:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n,r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:try{0!==(n=e.target.files).length&&(t.link="",(r=n[0])instanceof File?(t.link=URL.createObjectURL(r),t.obj=r):console.error("The selected file is not valid."))}catch(e){console.error("Error creating object URL:",e)}case 1:case"end":return o.stop()}}),o)})))()},dlt:function(){this.link="",this.obj=null}},mounted:function(){}}),l=(o(458),o(460),o(16)),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"divs",staticStyle:{"background-image":"url('https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/31/full/1704044517-9976.jpg?im=FeatureCrop,size=(826,465)')","background-size":"cover","background-repeat":"no-repeat","background-position":"center"}},[t("div",{staticClass:"features-5",staticStyle:{position:"relative"}},[t("div",{staticClass:"ma"},[t("div",{staticClass:"row",staticStyle:{display:"flex","justify-content":"center"}},[t("div",{staticClass:"col-lg-4 col-12"},[t("div",{staticClass:"tpr"}),e._v(" "),t("div",{staticClass:"dui"},[t("p",{staticClass:"ptxt"},[e._v("LOGIN DETAILS")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticStyle:{"margin-top":"2rem"},attrs:{type:"name",placeholder:"Enter name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticStyle:{"margin-top":"2rem"},attrs:{type:"Email",placeholder:"Enter Email "},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),t("div",{staticClass:"fl2"},[t("input",{attrs:{type:"file",accept:".jpg,.png,.jpeg,.webp"},on:{change:e.filesChange1}}),e._v(" "),""!=e.link?t("div",{staticClass:"imgdiv"},[t("img",{staticClass:"img",attrs:{src:e.link}})]):e._e()]),e._v(" "),t("button",{attrs:{type:"submit",value:"Send OTP"},on:{click:function(t){return e.sendOtp()}}},[e._v("\n              Save")]),t("br")])])])])])])}),[],!1,null,"8e47eaec",null);t.default=component.exports}}]);