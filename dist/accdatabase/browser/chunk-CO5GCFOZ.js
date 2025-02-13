import{a as K}from"./chunk-IGBKW6AJ.js";import{a as z,b as B,c as D,d as F,e as L,f as O,g as R,h as j,i as q,j as G,k as H,l as J}from"./chunk-D4WMZNJR.js";import"./chunk-RV4HWPOC.js";import{k as W,l as k,m as I,o as N}from"./chunk-V5LGPLRQ.js";import{a as A}from"./chunk-O5QE2TLP.js";import{$ as c,$a as f,Fa as b,La as C,Sa as h,Ya as n,Za as r,_ as d,_a as v,c as y,cb as x,db as u,hb as U,ib as s,jb as M,kb as S,lb as P,mb as m,nb as g,ob as _,qb as V,tb as T,va as l,wa as E}from"./chunk-DBOOX4Q2.js";var X=(p,a)=>({"bg-green-500 text-white":p,"bg-red-500 text-white":a});function Y(p,a){if(p&1){let e=f();n(0,"div",13)(1,"div",14),x("click",function(){d(e);let t=u();return c(t.toastMessage="")}),s(2),r()()}if(p&2){let e=u();l(),h("ngClass",V(2,X,e.toastType==="success",e.toastType==="error")),l(),S(" ",e.toastMessage," ")}}function Z(p,a){if(p&1){let e=f();n(0,"div",15)(1,"div",16),x("click",function(){d(e);let t=u();return c(t.closeCreateModal())}),r(),n(2,"div",17)(3,"h2",18),s(4,"Crear Nuevo Usuario"),r(),n(5,"form",19),x("ngSubmit",function(){d(e);let t=u();return c(t.createNewUser())}),n(6,"div",20)(7,"label",21),s(8,"Nombre"),r(),n(9,"input",22),_("ngModelChange",function(t){d(e);let i=u();return g(i.newUser.Name,t)||(i.newUser.Name=t),c(t)}),r()(),n(10,"div",20)(11,"label",21),s(12,"Apellido Paterno"),r(),n(13,"input",23),_("ngModelChange",function(t){d(e);let i=u();return g(i.newUser.ApellidoP,t)||(i.newUser.ApellidoP=t),c(t)}),r()(),n(14,"div",20)(15,"label",21),s(16,"Apellido Materno"),r(),n(17,"input",24),_("ngModelChange",function(t){d(e);let i=u();return g(i.newUser.ApellidoM,t)||(i.newUser.ApellidoM=t),c(t)}),r()(),n(18,"div",20)(19,"label",21),s(20,"Rol"),r(),n(21,"select",25),_("ngModelChange",function(t){d(e);let i=u();return g(i.newUser.role,t)||(i.newUser.role=t),c(t)}),n(22,"option",26),s(23,"Seleccione un rol"),r(),n(24,"option",27),s(25,"Administrador"),r(),n(26,"option",28),s(27,"Usuario"),r()()(),n(28,"div",20)(29,"label",21),s(30,"Contrase\xF1a"),r(),n(31,"input",29),_("ngModelChange",function(t){d(e);let i=u();return g(i.newUser.password,t)||(i.newUser.password=t),c(t)}),r()(),n(32,"div",20)(33,"label",30)(34,"input",31),_("ngModelChange",function(t){d(e);let i=u();return g(i.newUser.canExportExcel,t)||(i.newUser.canExportExcel=t),c(t)}),r(),n(35,"span",32),s(36,"Permitir exportar Excel"),r()()(),n(37,"div",20)(38,"label",30)(39,"input",33),_("ngModelChange",function(t){d(e);let i=u();return g(i.newUser.canExportPdf,t)||(i.newUser.canExportPdf=t),c(t)}),r(),n(40,"span",32),s(41,"Permitir exportar PDF"),r()()(),n(42,"div",20)(43,"label",30)(44,"input",34),_("ngModelChange",function(t){d(e);let i=u();return g(i.newUser.canCreateUser,t)||(i.newUser.canCreateUser=t),c(t)}),r(),n(45,"span",32),s(46,"Permitir crear/modificar usuarios"),r()()(),n(47,"div",35)(48,"button",36),x("click",function(){d(e);let t=u();return c(t.closeCreateModal())}),s(49," Cancelar "),r(),n(50,"button",37),s(51," Crear "),r()()()()()}if(p&2){let e=u();l(9),m("ngModel",e.newUser.Name),l(4),m("ngModel",e.newUser.ApellidoP),l(4),m("ngModel",e.newUser.ApellidoM),l(4),m("ngModel",e.newUser.role),l(10),m("ngModel",e.newUser.password),l(3),m("ngModel",e.newUser.canExportExcel),l(5),m("ngModel",e.newUser.canExportPdf),l(5),m("ngModel",e.newUser.canCreateUser)}}function $(p,a){if(p&1&&(n(0,"option",48),s(1),r()),p&2){let e=a.$implicit;h("ngValue",e),l(),S(" ",e," ")}}function ee(p,a){if(p&1){let e=f();n(0,"tr")(1,"td",44),s(2),r(),n(3,"td",44),s(4),r(),n(5,"td",44),s(6),r(),n(7,"td",44),s(8),r(),n(9,"td",44)(10,"input",45),_("ngModelChange",function(t){let i=d(e).$implicit;return g(i.canExportExcel,t)||(i.canExportExcel=t),c(t)}),x("ngModelChange",function(t){let i=d(e).$implicit,w=u(2);return c(w.onPermissionChange(i,"canExportExcel",t))}),r()(),n(11,"td",44)(12,"input",45),_("ngModelChange",function(t){let i=d(e).$implicit;return g(i.canExportPdf,t)||(i.canExportPdf=t),c(t)}),x("ngModelChange",function(t){let i=d(e).$implicit,w=u(2);return c(w.onPermissionChange(i,"canExportPdf",t))}),r()(),n(13,"td",44)(14,"input",45),_("ngModelChange",function(t){let i=d(e).$implicit;return g(i.canCreateUser,t)||(i.canCreateUser=t),c(t)}),x("ngModelChange",function(t){let i=d(e).$implicit,w=u(2);return c(w.onPermissionChange(i,"canCreateUser",t))}),r()(),n(15,"td",44)(16,"select",46),_("ngModelChange",function(t){let i=d(e).$implicit;return g(i.newStatus,t)||(i.newStatus=t),c(t)}),x("change",function(){let t=d(e).$implicit,i=u(2);return c(i.updateStatus(t))}),C(17,$,2,2,"option",47),r()()()}if(p&2){let e=a.$implicit,o=u(2);l(2),M(e.id||"-------"),l(2),S(" ",e.Name+" "+e.ApellidoP+" "+e.ApellidoM||"-------"," "),l(2),M(e.username||"-------"),l(2),M(e.role||"-------"),l(2),m("ngModel",e.canExportExcel),l(2),m("ngModel",e.canExportPdf),l(2),m("ngModel",e.canCreateUser),l(2),m("ngModel",e.newStatus),l(),h("ngForOf",o.statusOptions)}}function te(p,a){if(p&1&&(n(0,"div")(1,"table",38)(2,"thead",39)(3,"tr")(4,"th",40),s(5,"ID"),r(),n(6,"th",41),s(7,"Nombre Completo"),r(),n(8,"th",41),s(9,"Usuario"),r(),n(10,"th",41),s(11,"Role"),r(),n(12,"th",42),s(13,"Exporta Excel"),r(),n(14,"th",41),s(15,"Exporta PDF"),r(),n(16,"th",41),s(17,"Crea/modifica usuarios"),r(),n(18,"th",41),s(19,"Estatus"),r()()(),n(20,"tbody"),C(21,ee,18,9,"tr",43),r()()()),p&2){let e=u();l(21),h("ngForOf",e.data)}}function ie(p,a){p&1&&(n(0,"div",49),s(1," Sin registros "),r())}var Q=class p{constructor(a){this.usuariosService=a;this.initializeData()}data=[];currentPage=1;totalPages=0;totalItems=0;pageSize=10;searchText="";isLoading=!1;excelOptions=!1;searchTimeout;statusOptions=["Activo","Inactivo"];toastMessage="";toastType="success";showCreateModal=!1;newUser={role:"",Name:"",ApellidoP:"",ApellidoM:"",password:"",canExportExcel:!1,canExportPdf:!1,canCreateUser:!1};initializeData(){return y(this,null,function*(){try{let a=yield this.usuariosService.getUsers(this.currentPage,this.pageSize,this.searchText);this.currentPage=a.pagination.page,this.pageSize=a.pagination.pageSize,this.data=a.data,this.data.forEach(e=>{e.newStatus=e.status?e.status:"Activo"}),this.totalItems=a.pagination.totalRecords,this.totalPages=Math.ceil(this.totalItems/this.pageSize)}catch(a){console.error("Error al inicializar los datos:",a)}})}onSearchInputChange(){clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.currentPage=1,this.initializeData()},500)}nextPage(){this.currentPage<this.totalPages&&(this.currentPage++,this.loadPage())}previousPage(){this.currentPage>1&&(this.currentPage--,this.loadPage())}loadPage(){return y(this,null,function*(){yield this.initializeData()})}onPermissionChange(a,e,o){let t={[e]:o};a[e]=o,this.usuariosService.updateUser(a.id,t).then(i=>{this.showToast("Permiso actualizado correctamente.","success")}).catch(i=>{console.error(`Error actualizando ${e} del usuario ${a.id}:`,i),a[e]=!o;let w=i?.error?.message||i?.message||"Error al actualizar el permiso.";this.showToast(`Error: ${w}`,"error")})}updateStatus(a){let e={status:a.newStatus};console.log("update",e),this.usuariosService.updateUser(a.id,e).then(o=>{a.status=a.newStatus,this.showToast("Estatus actualizado correctamente.","success")}).catch(o=>{console.error(`Error actualizando el estatus del usuario ${a.id}:`,o),a.newStatus=a.status,this.showToast("Error al actualizar el estatus.","error")})}showToast(a,e="success"){this.toastMessage=a,this.toastType=e,setTimeout(()=>{this.toastMessage=""},3e3)}openCreateModal(){this.showCreateModal=!0}closeCreateModal(){this.showCreateModal=!1,this.newUser={role:"",Name:"",ApellidoP:"",ApellidoM:"",password:"",canExportExcel:!1,canExportPdf:!1,canCreateUser:!0}}createNewUser(){return y(this,null,function*(){try{let a=localStorage.getItem("token")||"",e=yield this.usuariosService.createUser(this.newUser,a);this.showToast(e.message||"Usuario creado exitosamente.","success"),this.closeCreateModal(),this.initializeData()}catch{this.showToast("Error: Error al crear el usuario.","error")}})}static \u0275fac=function(e){return new(e||p)(E(K))};static \u0275cmp=b({type:p,selectors:[["app-usuarios"]],decls:20,vars:9,consts:[["noRecords",""],["class","fixed top-4 right-4 z-50",4,"ngIf"],["title","Usuarios"],["class","fixed inset-0 flex items-center justify-center z-50",4,"ngIf"],[1,"relative","overflow-x-auto","shadow-md","sm:rounded-lg"],[1,"bg-white","dark:bg-gray-900","p-5","flex","justify-between"],["type","text","placeholder","Buscar...",1,"w-full","border-2","border-gray-300","p-2","rounded-lg",3,"ngModelChange","input","ngModel"],[1,"p-4"],[1,"bg-blue-500","hover:bg-blue-600","text-white","font-bold","py-2","px-4","rounded",3,"click"],[4,"ngIf","ngIfElse"],[1,"flex","justify-between","p-5"],[1,"cursor-pointer","bg-gray-300","hover:bg-gray-400","text-gray-800","font-bold","py-2","px-4","rounded-l",3,"click","disabled"],[1,"cursor-pointer","bg-gray-300","hover:bg-gray-400","text-gray-800","font-bold","py-2","px-4","rounded-r",3,"click","disabled"],[1,"fixed","top-4","right-4","z-50"],[1,"px-4","py-2","rounded","shadow","cursor-pointer",3,"click","ngClass"],[1,"fixed","inset-0","flex","items-center","justify-center","z-50"],[1,"fixed","inset-0","bg-black","opacity-50",3,"click"],[1,"bg-white","rounded-lg","shadow-lg","z-10","w-11/12","md:w-1/2","lg:w-1/3","p-6"],[1,"text-xl","font-bold","mb-4"],[3,"ngSubmit"],[1,"mb-4"],[1,"block","text-gray-700"],["type","text","name","Name","required","",1,"w-full","border","border-gray-300","p-2","rounded",3,"ngModelChange","ngModel"],["type","text","name","ApellidoP","required","",1,"w-full","border","border-gray-300","p-2","rounded",3,"ngModelChange","ngModel"],["type","text","name","ApellidoM",1,"w-full","border","border-gray-300","p-2","rounded",3,"ngModelChange","ngModel"],["name","role","required","",1,"w-full","border","border-gray-300","p-2","rounded",3,"ngModelChange","ngModel"],["value","","disabled","","selected",""],["value","Administrador"],["value","Usuario"],["type","password","name","password","required","",1,"w-full","border","border-gray-300","p-2","rounded",3,"ngModelChange","ngModel"],[1,"inline-flex","items-center"],["type","checkbox","name","canExportExcel",1,"form-checkbox",3,"ngModelChange","ngModel"],[1,"ml-2"],["type","checkbox","name","canExportPdf",1,"form-checkbox",3,"ngModelChange","ngModel"],["type","checkbox","name","canCreateUser",1,"form-checkbox",3,"ngModelChange","ngModel"],[1,"flex","justify-end"],["type","button",1,"bg-gray-500","hover:bg-gray-600","text-white","font-bold","py-2","px-4","rounded","mr-2",3,"click"],["type","submit",1,"bg-green-500","hover:bg-green-600","text-white","font-bold","py-2","px-4","rounded"],[1,"table-fixed","w-full","text-sm","text-left","rtl:text-right","text-gray-500","dark:text-gray-400"],[1,"text-xs","text-gray-700","uppercase","bg-gray-50","dark:bg-gray-700","dark:text-gray-400"],["scope","col",1,"px-6","py-3","w-1/12"],["scope","col",1,"px-6","py-3","w-3/12"],["scope","col",1,"px-6","py-3","w-2/12"],[4,"ngFor","ngForOf"],[1,"px-3","py-1"],["type","checkbox",3,"ngModelChange","ngModel"],[3,"ngModelChange","change","ngModel"],[3,"ngValue",4,"ngFor","ngForOf"],[3,"ngValue"],[1,"text-center","py-4","text-gray-500"]],template:function(e,o){if(e&1){let t=f();C(0,Y,3,5,"div",1),v(1,"app-title",2),C(2,Z,52,8,"div",3),n(3,"div",4)(4,"div",5)(5,"div")(6,"input",6),_("ngModelChange",function(w){return d(t),g(o.searchText,w)||(o.searchText=w),c(w)}),x("input",function(){return d(t),c(o.onSearchInputChange())}),r()(),n(7,"div",7)(8,"button",8),x("click",function(){return d(t),c(o.openCreateModal())}),s(9," Crear Usuario "),r()()(),C(10,te,22,1,"div",9)(11,ie,2,0,"ng-template",null,0,T),r(),n(13,"div",10)(14,"button",11),x("click",function(){return d(t),c(o.previousPage())}),s(15," Anterior "),r(),n(16,"span"),s(17),r(),n(18,"button",12),x("click",function(){return d(t),c(o.nextPage())}),s(19," Siguiente "),r()()}if(e&2){let t=U(12);h("ngIf",o.toastMessage),l(2),h("ngIf",o.showCreateModal),l(4),m("ngModel",o.searchText),l(4),h("ngIf",o.data&&o.data.length>0)("ngIfElse",t),l(4),h("disabled",o.currentPage<=1),l(3),P("P\xE1gina ",o.currentPage," de ",o.totalPages,""),l(),h("disabled",o.currentPage>=o.totalPages)}},dependencies:[A,N,W,k,I,J,R,q,G,B,z,j,D,F,H,O,L],encapsulation:2})};export{Q as UsuariosComponent};
