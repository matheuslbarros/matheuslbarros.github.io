(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{115:function(e,t,a){"use strict";a.r(t),t.default=function(e,t){return t=t||{},new Promise(function(a,n){var r=new XMLHttpRequest;for(var l in r.open(t.method||"get",e,!0),t.headers)r.setRequestHeader(l,t.headers[l]);function i(){var e,t=[],a=[],n={};return r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(r,l,i){t.push(l=l.toLowerCase()),a.push([l,i]),n[l]=(e=n[l])?e+","+i:i}),{ok:2==(r.status/100|0),status:r.status,statusText:r.statusText,url:r.responseURL,clone:i,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(r.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([r.response]))},headers:{keys:function(){return t},entries:function(){return a},get:function(e){return n[e.toLowerCase()]},has:function(e){return e.toLowerCase()in n}}}}r.withCredentials="include"==t.credentials,r.onload=function(){a(i())},r.onerror=n,r.send(t.body||null)})}},116:function(e,t,a){e.exports=window.fetch||(window.fetch=a(115).default||a(115))},230:function(e,t,a){__NEXT_REGISTER_PAGE("/resume",function(){return e.exports=a(243),{page:e.exports.default}})},243:function(e,t,a){"use strict";a.r(t);var n=a(43),r=a.n(n),l=a(0),i=a.n(l),s=a(31),c=a.n(s),o=function(e){return i.a.createElement("div",{className:"profile-user"},i.a.createElement("div",{className:"profile-user__picture"},i.a.createElement("img",{className:"profile-user__avatar animated jackInTheBox delay-1s",src:e.user.avatar})),i.a.createElement("h1",{className:"profile-user__fullname animated swing delay-1s slow"},e.user.first_name," ",e.user.last_name),i.a.createElement("div",{className:"profile-user__headline"},e.user.headline),i.a.createElement("div",{className:"profile-user__from"},e.user.location.standardized))},u=function(){return i.a.createElement("nav",{className:"profile-navigation animated slideInLeft bounce delay-1s"},i.a.createElement("div",{className:"profile-navigation__list"},i.a.createElement("a",{className:"profile-navigation__item",href:"#about"},"About"),i.a.createElement("a",{className:"profile-navigation__item",href:"#experience"},"Experience"),i.a.createElement("a",{className:"profile-navigation__item",href:"#education"},"Education"),i.a.createElement("a",{className:"profile-navigation__item",href:"#skills"},"Skills")))},m=function(e){return i.a.createElement("section",{id:"about",className:"profile-about animated slideInUp delay-1s"},i.a.createElement("h2",null,"About"),i.a.createElement("p",{className:"profile-about__bio"},e.profile.bio))},p=["","Jan","Fev","Mar","Abr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],f=function(e,t){return t.start_year+t.start_month-(e.start_year+e.start_month)},d=function(e){var t=e.start_month,a=e.start_year,n=e.end_month,r=e.end_year,l=new Date,i=r||l.getFullYear(),s=n||l.getMonth()+1,c=i-a,o=s-t;return t>s&&(c-=1,o=12-t+s),"".concat(c?c+" years ":"").concat(o?o+" months":"")},_=function(e){return i.a.createElement("section",{id:"experience",className:"profile-experience"},i.a.createElement("h2",null,"Experience"),e.experience.sort(f).map(function(e,t){return i.a.createElement("div",{key:t,className:"profile-experience__item"},i.a.createElement("div",{className:"profile-experience__row"},i.a.createElement("div",{className:"profile-experience__image"},i.a.createElement("img",{className:"profile-experience__company-logo",src:e.company.logo})),i.a.createElement("div",{className:"profile-experience__description"},i.a.createElement("div",{className:"profile-experience__occupation-name"},e.occupation.name),i.a.createElement("div",{className:"profile-experience__company-name"},e.company.name)),i.a.createElement("div",{className:"profile-experience__time"},i.a.createElement("span",null,p[e.start_month]," ",e.start_year),i.a.createElement("span",null," - "),e.is_current?i.a.createElement("span",null,"Present"):i.a.createElement("span",null,p[e.end_month]," ",e.end_year),i.a.createElement("div",null,"(",d(e),")"))),i.a.createElement("div",{className:"profile-experience__row"},i.a.createElement("p",{className:"profile-experience__bio"},e.description)))}))},E=["","Jan","Fev","Mar","Abr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],v=function(e,t){return t.start_year+t.start_month-(e.start_year+e.start_month)},h=function(e){return i.a.createElement("section",{id:"education",className:"profile-education"},i.a.createElement("h2",null,"Education"),i.a.createElement("div",{className:"profile-education__list"},e.education.sort(v).map(function(e,t){return i.a.createElement("div",{key:t,className:"profile-education__item"},i.a.createElement("div",{className:"profile-education__image"},i.a.createElement("img",{className:"profile-education__school-img",src:e.school.logo})),i.a.createElement("div",{className:"profile-education__description"},i.a.createElement("div",{className:"profile-education__school-name"},e.school.name),i.a.createElement("div",{className:"profile-education__field-of-study"},e.field_of_study.name)),i.a.createElement("div",{className:"profile-education__time"},i.a.createElement("span",null,E[e.start_month]," ",e.start_year),i.a.createElement("span",null," - "),e.is_current?i.a.createElement("span",null,"Present"):i.a.createElement("span",null,E[e.end_month]," ",e.end_year)))})))},N=["Beginner","Intermediate","Experienced","Expert"],x=function(e){return i.a.createElement("section",{id:"skills",className:"profile-skill"},i.a.createElement("h2",null,"Skills"),i.a.createElement("div",{className:"profile-skill__row"},e.skills.map(function(e,t){return i.a.createElement("div",{key:t,className:"profile-skill__item"},i.a.createElement("div",{className:"profile-skill__level"},i.a.createElement("div",{className:"profile-skill__percent",style:{width:100*e.level/3+"%"}})),i.a.createElement("div",{className:"profile-skill__description"},i.a.createElement("div",null,e.name),i.a.createElement("div",null,N[e.level])))})))},w=function(e){return i.a.createElement("div",{className:"profile animated fadeInUp"},i.a.createElement("header",{id:"header",className:"profile__header"},i.a.createElement(o,{user:e.user}),i.a.createElement(u,null)),i.a.createElement("main",{className:"profile__container"},i.a.createElement("div",{className:"profile__content"},i.a.createElement(m,{profile:e.profile}),i.a.createElement(_,{experience:e.profile.experience}),i.a.createElement(h,{education:e.profile.education}),i.a.createElement(x,{skills:e.profile.skills}))),i.a.createElement("footer",{className:"profile__footer"},i.a.createElement("a",{href:"#header"},"^")))},y=a(116),g=a.n(y);a(231);function b(e,t,a,n,r,l,i){try{var s=e[l](i),c=s.value}catch(e){return void a(e)}s.done?t(c):Promise.resolve(c).then(n,r)}function k(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var l=e.apply(t,a);function i(e){b(l,n,r,i,s,"next",e)}function s(e){b(l,n,r,i,s,"throw",e)}i(void 0)})}}var P=function(e){return i.a.createElement("div",null,i.a.createElement(c.a,null,i.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),i.a.createElement("title",null,"Resume - ",e.user.first_name," ",e.user.last_name," - ",e.user.headline)),i.a.createElement(w,{user:e.user,profile:e.profile}))},J=function(){var e=k(r.a.mark(function e(t){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g()(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();P.getInitialProps=function(){var e=k(r.a.mark(function e(t){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.req,a={},e.prev=2,e.next=5,J("https://matheuslbarros.github.io/assets/json/user.json");case 5:return a.user=e.sent,e.next=8,J("https://matheuslbarros.github.io/assets/json/profile.json");case 8:a.profile=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:return e.abrupt("return",a);case 15:case"end":return e.stop()}},e,this,[[2,11]])}));return function(t){return e.apply(this,arguments)}}();t.default=P},43:function(e,t,a){e.exports=a(91)}},[[230,1,0,9]]]);