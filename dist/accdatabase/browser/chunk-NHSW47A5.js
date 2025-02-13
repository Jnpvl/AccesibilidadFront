import{d as E,i as V}from"./chunk-FPZDSFJQ.js";import{a as R}from"./chunk-IGBKW6AJ.js";import{b as A,c as N,d as T,e as U,f as D,g as F,k as L,l as W}from"./chunk-D4WMZNJR.js";import"./chunk-RV4HWPOC.js";import{m as M,o as I}from"./chunk-V5LGPLRQ.js";import{$ as m,$a as S,Fa as h,La as w,Sa as x,Ya as t,Za as i,_ as l,_a as v,c as b,cb as k,db as C,ib as a,jb as _,mb as g,nb as p,ob as f,va as d,wa as u}from"./chunk-DBOOX4Q2.js";function P(n,s){if(n&1&&(t(0,"div",15),a(1),i()),n&2){let r=C();d(),_(r.error)}}var j=class n{constructor(s,r,e){this.usersService=s;this.localStorageService=r;this.router=e}usuario="";password="";error="";onSubmit(s){return b(this,null,function*(){s.preventDefault(),this.error="";try{let r={username:this.usuario,password:this.password},e=yield this.usersService.loginUser(r);if(e&&e.token){if(console.log("status",e.user.status),e.user.status!=="Activo"){this.error="Usuario inactivo. Contacta al administrador.";return}this.localStorageService.setToken(e.token),this.localStorageService.setUser(e.user),this.router.navigate(["/dashboard/home"])}else this.error="Inicio de sesi\xF3n fallido. Verifica tus credenciales."}catch(r){console.error("Error en login",r);let e=r;this.error=e.error?.message||e.statusText||"Credenciales inv\xE1lidas"}})}static \u0275fac=function(r){return new(r||n)(u(R),u(V),u(E))};static \u0275cmp=h({type:n,selectors:[["app-auth"]],decls:22,vars:3,consts:[["loginForm","ngForm"],[1,"bg-gray-50","dark:bg-gray-900"],[1,"flex","flex-col","items-center","justify-center","px-6","py-8","mx-auto","md:h-screen","lg:py-0"],[1,"flex","items-center","mb-6","text-2xl","font-semibold","text-gray-900","dark:text-white"],["src","https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg","alt","logo",1,"w-8","h-8","mr-2"],[1,"w-full","bg-white","rounded-lg","shadow","dark:border","md:mt-0","sm:max-w-md","xl:p-0","dark:bg-gray-800","dark:border-gray-700"],[1,"p-6","space-y-4","md:space-y-6","sm:p-8"],[1,"text-xl","font-bold","leading-tight","tracking-tight","text-gray-900","md:text-2xl","dark:text-white"],[1,"space-y-4","md:space-y-6",3,"ngSubmit"],["for","usuario",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","text","name","usuario","id","usuario","placeholder","Usuario","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"ngModelChange","ngModel"],["for","password",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","password","name","password","id","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"ngModelChange","ngModel"],["type","submit",1,"w-full","text-white","bg-red-500","hover:bg-primary-700","focus:ring-4","focus:outline-none","focus:ring-primary-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:bg-primary-600","dark:hover:bg-primary-700","dark:focus:ring-primary-800"],["class","mt-2 text-red-600",4,"ngIf"],[1,"mt-2","text-red-600"]],template:function(r,e){if(r&1){let c=S();t(0,"section",1)(1,"div",2)(2,"label",3),v(3,"img",4),a(4," INSTITUTO DE MOVILIDAD "),i(),t(5,"div",5)(6,"div",6)(7,"h1",7),a(8," Inicia sesi\xF3n "),i(),t(9,"form",8,0),k("ngSubmit",function(o){return l(c),m(e.onSubmit(o))}),t(11,"div")(12,"label",9),a(13,"Usuario"),i(),t(14,"input",10),f("ngModelChange",function(o){return l(c),p(e.usuario,o)||(e.usuario=o),m(o)}),i()(),t(15,"div")(16,"label",11),a(17,"Contrase\xF1a"),i(),t(18,"input",12),f("ngModelChange",function(o){return l(c),p(e.password,o)||(e.password=o),m(o)}),i()(),t(19,"button",13),a(20," Iniciar Sesion "),i(),w(21,P,2,1,"div",14),i()()()()()}r&2&&(d(14),g("ngModel",e.usuario),d(4),g("ngModel",e.password),d(3),x("ngIf",e.error))},dependencies:[I,M,W,F,A,N,T,L,D,U],encapsulation:2})};export{j as AuthComponent};
