import{a as g}from"./chunk-IARQNTQE.js";import{a as m,c as l,d as f,g as v,i as u}from"./chunk-FPZDSFJQ.js";import{v as c,w as s}from"./chunk-V5LGPLRQ.js";import{Fa as n,_a as p,vb as a,wa as i}from"./chunk-DBOOX4Q2.js";var d={providers:[a({eventCoalescing:!0}),v(g),c(s())]};var o=class t{constructor(r,e){this.localStorageService=r;this.router=e}title="dashboard_frontend";ngOnInit(){if(this.localStorageService.getToken()){let e=this.localStorageService.getUser();e&&e.status==="Activo"?this.router.navigate(["/dashboard/home"]):(this.localStorageService.removeToken(),this.localStorageService.removeUser(),this.router.navigate(["/auth"]))}else this.router.navigate(["/auth"])}static \u0275fac=function(e){return new(e||t)(i(u),i(f))};static \u0275cmp=n({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,h){e&1&&p(0,"router-outlet")},dependencies:[l],encapsulation:2})};m(o,d).catch(t=>console.error(t));
