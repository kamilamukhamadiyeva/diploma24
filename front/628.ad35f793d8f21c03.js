"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[628],{50628:(Pt,y,i)=>{i.r(y),i.d(y,{ChatModule:()=>Ht});var u=i(62510),p=i(4859),Q=i(56709),_=i(59549),f=i(97392),C=i(284),m=i(28255),h=i(23267),I=i(44466),J=i(70262),T=i(62843),t=i(94650),x=i(61135),v=i(18505),A=i(54004),b=i(63900),U=i(39646),k=i(95698),q=i(39300),N=i(80529);let g=(()=>{class n{constructor(e){this._httpClient=e,this._chat=new x.X(null),this._chats=new x.X(null),this._contact=new x.X(null),this._contacts=new x.X(null),this._profile=new x.X(null)}get chat$(){return this._chat.asObservable()}get chats$(){return this._chats.asObservable()}get contact$(){return this._contact.asObservable()}get contacts$(){return this._contacts.asObservable()}get profile$(){return this._profile.asObservable()}getChats(){return this._httpClient.get("api/apps/chat/chats").pipe((0,v.b)(e=>{this._chats.next(e)}))}getContact(e){return this._httpClient.get("api/apps/chat/contacts",{params:{id:e}}).pipe((0,v.b)(o=>{this._contact.next(o)}))}getContacts(){return this._httpClient.get("api/apps/chat/contacts").pipe((0,v.b)(e=>{this._contacts.next(e)}))}getProfile(){return this._httpClient.get("api/apps/chat/profile").pipe((0,v.b)(e=>{this._profile.next(e)}))}getChatById(e){return this._httpClient.get("api/apps/chat/chat",{params:{id:e}}).pipe((0,A.U)(o=>(this._chat.next(o),o)),(0,b.w)(o=>o?(0,U.of)(o):(0,T._)("Could not found chat with id of "+e+"!")))}updateChat(e,o){return this.chats$.pipe((0,k.q)(1),(0,b.w)(c=>this._httpClient.patch("api/apps/chat/chat",{id:e,chat:o}).pipe((0,A.U)(r=>{const l=c.findIndex(Rt=>Rt.id===e);return c[l]=r,this._chats.next(c),r}),(0,b.w)(r=>this.chat$.pipe((0,k.q)(1),(0,q.h)(l=>l&&l.id===e),(0,v.b)(()=>(this._chat.next(r),r)))))))}resetChat(){this._chat.next(null)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(N.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),M=(()=>{class n{constructor(e,o){this._chatService=e,this._router=o}resolve(e,o){return this._chatService.getChats()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(g),t.LFG(u.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),B=(()=>{class n{constructor(e,o){this._chatService=e,this._router=o}resolve(e,o){return this._chatService.getChatById(e.paramMap.get("id")).pipe((0,J.K)(c=>{console.error(c);const r=o.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(r),(0,T._)(c)}))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(g),t.LFG(u.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),F=(()=>{class n{constructor(e,o){this._chatService=e,this._router=o}resolve(e,o){return this._chatService.getContacts()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(g),t.LFG(u.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),O=(()=>{class n{constructor(e,o){this._chatService=e,this._router=o}resolve(e,o){return this._chatService.getProfile()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(g),t.LFG(u.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),Y=(()=>{class n{constructor(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["chat"]],decls:3,vars:0,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex","flex-auto","overflow-hidden"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA()())},dependencies:[u.lC],encapsulation:2,changeDetection:0}),n})();var Z=i(77579),d=i(82722),s=i(36895);function S(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",15),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",e.name.charAt(0)," ")}}function j(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"img",16),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("src",e.avatar,t.LSH)}}function L(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",17),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",e.name.charAt(0)," ")}}function H(n,a){if(1&n&&(t.ynx(0),t.YNc(1,S,3,1,"ng-container",9),t.TgZ(2,"div",10)(3,"div",11),t.YNc(4,j,2,1,"ng-container",9),t.YNc(5,L,3,1,"ng-container",9),t.qZA(),t.TgZ(6,"div",12)(7,"div",13),t._uU(8),t.qZA(),t.TgZ(9,"div",14),t._uU(10),t.qZA()()(),t.BQk()),2&n){const e=a.$implicit,o=a.index,c=t.oxw(2);t.xp6(1),t.Q6J("ngIf",0===o||e.name.charAt(0)!==c.contacts[o-1].name.charAt(0)),t.xp6(3),t.Q6J("ngIf",e.avatar),t.xp6(1),t.Q6J("ngIf",!e.avatar),t.xp6(3),t.Oqu(e.name),t.xp6(2),t.Oqu(e.about)}}function R(n,a){if(1&n&&(t.ynx(0),t.YNc(1,H,11,5,"ng-container",8),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.contacts)("ngForTrackBy",e.trackByFn)}}function P(n,a){1&n&&(t.TgZ(0,"div",18),t._uU(1,"There are no contacts!"),t.qZA())}let D=(()=>{class n{constructor(e){this._chatService=e,this.contacts=[],this._unsubscribeAll=new Z.x}ngOnInit(){this._chatService.contacts$.pipe((0,d.R)(this._unsubscribeAll)).subscribe(e=>{this.contacts=e})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}trackByFn(e,o){return o.id||e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["chat-new-chat"]],inputs:{drawer:"drawer"},decls:10,vars:3,consts:[[1,"flex","flex-col","flex-auto","h-full","overflow-hidden","bg-card","dark:bg-default"],[1,"flex","flex-0","items-center","h-18","-mb-px","px-6","bg-gray-50","dark:bg-transparent"],["mat-icon-button","",3,"click"],[3,"svgIcon"],[1,"ml-2","text-2xl","font-semibold"],[1,"relative","overflow-y-auto"],[4,"ngIf","ngIfElse"],["noContacts",""],[4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],[1,"z-20","flex","items-center","px-6","py-4","md:px-8","cursor-pointer","border-b","hover:bg-gray-100","dark:hover:bg-hover"],[1,"flex","flex-0","items-center","justify-center","w-10","h-10","rounded-full","overflow-hidden"],[1,"min-w-0","ml-4"],[1,"font-medium","leading-5","truncate"],[1,"leading-5","truncate","text-secondary"],[1,"z-10","sticky","top-0","-mt-px","px-6","py-1","md:px-8","border-t","border-b","font-medium","uppercase","text-secondary","bg-gray-100","dark:bg-gray-900"],["alt","Contact avatar",1,"object-cover","w-full","h-full",3,"src"],[1,"flex","items-center","justify-center","w-full","h-full","rounded-full","text-lg","uppercase","bg-gray-200","text-gray-600","dark:bg-gray-700","dark:text-gray-200"],[1,"p-8","sm:p-16","border-t","text-4xl","font-semibold","tracking-tight","text-center"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return o.drawer.close()}),t._UZ(3,"mat-icon",3),t.qZA(),t.TgZ(4,"div",4),t._uU(5,"New chat"),t.qZA()(),t.TgZ(6,"div",5),t.YNc(7,R,2,2,"ng-container",6),t.qZA(),t.YNc(8,P,2,0,"ng-template",null,7,t.W1O),t.qZA()),2&e){const c=t.MAs(9);t.xp6(3),t.Q6J("svgIcon","heroicons_outline:arrow-narrow-left"),t.xp6(4),t.Q6J("ngIf",o.contacts.length)("ngIfElse",c)}},dependencies:[p.lW,f.Hw,s.sg,s.O5],encapsulation:2,changeDetection:0}),n})();var w=i(24006);function $(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"img",17),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("src",e.profile.avatar,t.LSH)("alt","Profile avatar")}}function E(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",18),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw();t.xp6(2),t.hij(" ",e.profile.name.charAt(0)," ")}}let z=(()=>{class n{constructor(e){this._chatService=e,this._unsubscribeAll=new Z.x}ngOnInit(){this._chatService.profile$.pipe((0,d.R)(this._unsubscribeAll)).subscribe(e=>{this.profile=e})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["chat-profile"]],inputs:{drawer:"drawer"},decls:35,vars:11,consts:[[1,"flex","flex-col","flex-auto","overflow-y-auto","bg-card","dark:bg-default"],[1,"flex","flex-0","items-center","h-18","px-6","border-b","bg-gray-50","dark:bg-transparent"],["mat-icon-button","",3,"click"],[3,"svgIcon"],[1,"ml-2","text-2xl","font-semibold"],[1,"px-6"],[1,"group","relative","flex","flex-0","mt-8","mx-auto","w-40","h-40","rounded-full"],[1,"hidden","group-hover:flex","absolute","inset-0","flex-col","items-center","justify-center","backdrop-filter","backdrop-blur","bg-opacity-80","rounded-full","cursor-pointer","bg-gray-800"],[1,"text-white",3,"svgIcon"],[1,"mt-2","mx-6","font-medium","text-center","text-white"],[4,"ngIf"],[1,"flex","flex-col","mt-8","mx-2"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"ngModel"],[1,"flex","items-center","justify-end","mt-4"],["mat-button","",3,"click"],["mat-flat-button","",1,"ml-2",3,"color"],[1,"w-full","h-full","rounded-full","object-cover",3,"src","alt"],[1,"flex","items-center","justify-center","w-full","h-full","rounded-full","text-8xl","font-semibold","uppercase","bg-gray-200","text-gray-600","dark:bg-gray-700","dark:text-gray-200"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return o.drawer.close()}),t._UZ(3,"mat-icon",3),t.qZA(),t.TgZ(4,"div",4),t._uU(5,"Profile"),t.qZA()(),t.TgZ(6,"div",5)(7,"div",6)(8,"div",7),t._UZ(9,"mat-icon",8),t.TgZ(10,"div",9),t._uU(11,"Change Profile Photo"),t.qZA()(),t.YNc(12,$,2,2,"ng-container",10),t.YNc(13,E,3,1,"ng-container",10),t.qZA(),t.TgZ(14,"div",11)(15,"mat-form-field")(16,"mat-label"),t._uU(17,"Name"),t.qZA(),t._UZ(18,"mat-icon",12)(19,"input",13),t.qZA(),t.TgZ(20,"mat-form-field")(21,"mat-label"),t._uU(22,"Email"),t.qZA(),t._UZ(23,"mat-icon",12)(24,"input",13),t.qZA(),t.TgZ(25,"mat-form-field")(26,"mat-label"),t._uU(27,"About"),t.qZA(),t._UZ(28,"mat-icon",12)(29,"input",13),t.qZA(),t.TgZ(30,"div",14)(31,"button",15),t.NdJ("click",function(){return o.drawer.close()}),t._uU(32,"Cancel "),t.qZA(),t.TgZ(33,"button",16),t._uU(34,"Save "),t.qZA()()()()()),2&e&&(t.xp6(3),t.Q6J("svgIcon","heroicons_outline:arrow-narrow-left"),t.xp6(6),t.Q6J("svgIcon","heroicons_outline:camera"),t.xp6(3),t.Q6J("ngIf",o.profile.avatar),t.xp6(1),t.Q6J("ngIf",!o.profile.avatar),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:user-circle"),t.xp6(1),t.Q6J("ngModel",o.profile.name),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:mail"),t.xp6(1),t.Q6J("ngModel",o.profile.email),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:identification"),t.xp6(1),t.Q6J("ngModel",o.profile.about),t.xp6(4),t.Q6J("color","primary"))},dependencies:[p.lW,_.KE,_.hX,_.qo,f.Hw,C.Nt,s.O5,w.Fj,w.JJ,w.On],encapsulation:2,changeDetection:0}),n})();function G(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"chat-new-chat",8),t.BQk()),2&n){t.oxw();const e=t.MAs(3);t.xp6(1),t.Q6J("drawer",e)}}function W(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"chat-profile",8),t.BQk()),2&n){t.oxw();const e=t.MAs(3);t.xp6(1),t.Q6J("drawer",e)}}function K(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"img",27),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("src",e.profile.avatar,t.LSH)}}function X(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",28),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(2),t.hij(" ",e.profile.name.charAt(0)," ")}}function V(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"div",37),t.BQk()),2&n){const e=t.oxw().$implicit,o=t.oxw(3);t.xp6(1),t.ekj("ring-primary-50",o.selectedChat&&o.selectedChat.id===e.id)}}function tt(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"img",38),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("src",e.contact.avatar,t.LSH)}}function et(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",28),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",e.contact.name.charAt(0)," ")}}function nt(n,a){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",39),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:volume-off"))}const ot=function(n,a){return{"hover:bg-gray-100 dark:hover:bg-hover":n,"bg-primary-50 dark:bg-hover":a}},at=function(n){return[n]};function ct(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"a",30)(2,"div",31),t.YNc(3,V,2,2,"ng-container",4),t.YNc(4,tt,2,1,"ng-container",4),t.YNc(5,et,3,1,"ng-container",4),t.qZA(),t.TgZ(6,"div",32)(7,"div",33),t._uU(8),t.qZA(),t.TgZ(9,"div",34),t._uU(10),t.qZA()(),t.TgZ(11,"div",35)(12,"div",36),t._uU(13),t.qZA(),t.YNc(14,nt,2,1,"ng-container",4),t.qZA()(),t.BQk()),2&n){const e=a.$implicit,o=t.oxw(3);t.xp6(1),t.Q6J("ngClass",t.WLB(13,ot,!o.selectedChat||o.selectedChat.id!==e.id,o.selectedChat&&o.selectedChat.id===e.id))("routerLink",t.VKq(16,at,e.id)),t.xp6(2),t.Q6J("ngIf",e.unreadCount>0),t.xp6(1),t.Q6J("ngIf",e.contact.avatar),t.xp6(1),t.Q6J("ngIf",!e.contact.avatar),t.xp6(3),t.Oqu(e.contact.name),t.xp6(1),t.ekj("text-primary",e.unreadCount>0)("dark:text-primary-500",e.unreadCount>0),t.xp6(1),t.hij(" ",e.lastMessage," "),t.xp6(3),t.Oqu(e.lastMessageAt),t.xp6(1),t.Q6J("ngIf",e.muted)}}function it(n,a){if(1&n&&(t.ynx(0),t.YNc(1,ct,15,18,"ng-container",29),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.filteredChats)("ngForTrackBy",e.trackByFn)}}function rt(n,a){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",9)(2,"div",10)(3,"div",11)(4,"div",12),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.openProfile())}),t.TgZ(5,"div",13),t.YNc(6,K,2,1,"ng-container",4),t.YNc(7,X,3,1,"ng-container",4),t.qZA(),t.TgZ(8,"div",14),t._uU(9),t.qZA()(),t.TgZ(10,"button",15),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.openNewChat())}),t._UZ(11,"mat-icon",16),t.qZA(),t.TgZ(12,"button",17),t._UZ(13,"mat-icon",16),t.TgZ(14,"mat-menu",null,18)(16,"button",19),t._UZ(17,"mat-icon",16),t._uU(18," New group "),t.qZA(),t.TgZ(19,"button",19),t._UZ(20,"mat-icon",16),t._uU(21," Create a room "),t.qZA(),t.TgZ(22,"button",20),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.openProfile())}),t._UZ(23,"mat-icon",16),t._uU(24," Profile "),t.qZA(),t.TgZ(25,"button",19),t._UZ(26,"mat-icon",16),t._uU(27," Archived "),t.qZA(),t.TgZ(28,"button",19),t._UZ(29,"mat-icon",16),t._uU(30," Starred "),t.qZA(),t.TgZ(31,"button",19),t._UZ(32,"mat-icon",16),t._uU(33," Settings "),t.qZA()()()(),t.TgZ(34,"div",21)(35,"mat-form-field",22),t._UZ(36,"mat-icon",23),t.TgZ(37,"input",24,25),t.NdJ("input",function(){t.CHM(e);const c=t.MAs(38),r=t.oxw();return t.KtG(r.filterChats(c.value))}),t.qZA()()()(),t.TgZ(39,"div",26),t.YNc(40,it,2,2,"ng-container",6),t.qZA()(),t.BQk()}if(2&n){const e=t.MAs(15),o=t.oxw(),c=t.MAs(9);t.xp6(6),t.Q6J("ngIf",o.profile.avatar),t.xp6(1),t.Q6J("ngIf",!o.profile.avatar),t.xp6(2),t.Oqu(o.profile.name),t.xp6(2),t.Q6J("svgIcon","heroicons_outline:plus-circle"),t.xp6(1),t.Q6J("matMenuTriggerFor",e),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:dots-vertical"),t.xp6(4),t.Q6J("svgIcon","heroicons_outline:user-group"),t.xp6(3),t.Q6J("svgIcon","heroicons_outline:chat-alt-2"),t.xp6(3),t.Q6J("svgIcon","heroicons_outline:user-circle"),t.xp6(3),t.Q6J("svgIcon","heroicons_outline:archive"),t.xp6(3),t.Q6J("svgIcon","heroicons_outline:star"),t.xp6(3),t.Q6J("svgIcon","heroicons_outline:cog"),t.xp6(3),t.Q6J("floatLabel","always"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:search"),t.xp6(1),t.Q6J("autocomplete","off")("placeholder","Search or start new chat"),t.xp6(3),t.Q6J("ngIf",o.filteredChats.length>0)("ngIfElse",c)}}function st(n,a){1&n&&(t.TgZ(0,"div",40),t._UZ(1,"mat-icon",41),t.TgZ(2,"div",42),t._uU(3,"No chats"),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_outline:chat"))}const lt=function(n,a){return{"z-20 absolute inset-0 lg:static lg:inset-auto flex":n,"hidden lg:flex":a}};function ut(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",43),t._UZ(2,"router-outlet"),t.qZA(),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.WLB(1,lt,e.selectedChat&&e.selectedChat.id,!e.selectedChat||!e.selectedChat.id))}}let gt=(()=>{class n{constructor(e,o){this._chatService=e,this._changeDetectorRef=o,this.drawerOpened=!1,this._unsubscribeAll=new Z.x}ngOnInit(){this._chatService.chats$.pipe((0,d.R)(this._unsubscribeAll)).subscribe(e=>{this.chats=this.filteredChats=e,this._changeDetectorRef.markForCheck()}),this._chatService.profile$.pipe((0,d.R)(this._unsubscribeAll)).subscribe(e=>{this.profile=e,this._changeDetectorRef.markForCheck()}),this._chatService.chat$.pipe((0,d.R)(this._unsubscribeAll)).subscribe(e=>{this.selectedChat=e,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}filterChats(e){this.filteredChats=e?this.chats.filter(o=>o.contact.name.toLowerCase().includes(e.toLowerCase())):this.chats}openNewChat(){this.drawerComponent="new-chat",this.drawerOpened=!0,this._changeDetectorRef.markForCheck()}openProfile(){this.drawerComponent="profile",this.drawerOpened=!0,this._changeDetectorRef.markForCheck()}trackByFn(e,o){return o.id||e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["chat-chats"]],decls:11,vars:8,consts:[[1,"relative","flex","flex-auto","w-full","bg-card","dark:bg-transparent"],[1,"flex-auto","h-full",3,"hasBackdrop"],[1,"w-full","sm:w-100","lg:border-r","lg:shadow-none","dark:bg-gray-900",3,"autoFocus","opened","openedChange"],["drawer",""],[4,"ngIf"],[1,"flex","overflow-hidden"],[4,"ngIf","ngIfElse"],["noChats",""],[3,"drawer"],[1,"relative","flex","flex-auto","flex-col","w-full","min-w-0","lg:min-w-100","lg:max-w-100","bg-card","dark:bg-transparent"],[1,"flex","flex-col","flex-0","py-4","px-8","border-b","bg-gray-50","dark:bg-transparent"],[1,"flex","items-center"],[1,"flex","items-center","mr-1","cursor-pointer",3,"click"],[1,"w-10","h-10"],[1,"ml-4","font-medium","truncate"],["mat-icon-button","",1,"ml-auto",3,"click"],[3,"svgIcon"],["mat-icon-button","",1,"ml-1","-mr-4",3,"matMenuTriggerFor"],["chatsHeaderMenu",""],["mat-menu-item",""],["mat-menu-item","",3,"click"],[1,"mt-4"],[1,"fuse-mat-no-subscript","fuse-mat-rounded","fuse-mat-dense","w-full",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder","input"],["searchField",""],[1,"flex-auto","overflow-y-auto"],["alt","Profile avatar",1,"object-cover","w-full","h-full","rounded-full","object-cover",3,"src"],[1,"flex","items-center","justify-center","w-full","h-full","rounded-full","text-lg","uppercase","bg-gray-200","text-gray-600","dark:bg-gray-700","dark:text-gray-200"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"z-20","flex","items-center","py-5","px-8","cursor-pointer","border-b",3,"ngClass","routerLink"],[1,"relative","flex","flex-0","items-center","justify-center","w-10","h-10"],[1,"min-w-0","ml-4"],[1,"font-medium","leading-5","truncate"],[1,"leading-5","truncate","text-secondary"],[1,"flex","flex-col","items-end","self-start","ml-auto","pl-2"],[1,"text-sm","leading-5","text-secondary"],[1,"absolute","bottom-0","right-0","flex-0","w-2","h-2","-ml-0.5","rounded-full","ring-2","ring-bg-card","dark:ring-gray-900","bg-primary","dark:bg-primary-500","text-on-primary"],["alt","Contact avatar",1,"w-full","h-full","rounded-full","object-cover",3,"src"],[1,"icon-size-5","text-hint",3,"svgIcon"],[1,"flex","flex-auto","flex-col","items-center","justify-center","h-full"],[1,"icon-size-24",3,"svgIcon"],[1,"mt-4","text-2xl","font-semibold","tracking-tight","text-secondary"],[1,"flex-auto","border-l",3,"ngClass"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"mat-drawer-container",1)(2,"mat-drawer",2,3),t.NdJ("openedChange",function(r){return o.drawerOpened=r}),t.YNc(4,G,2,1,"ng-container",4),t.YNc(5,W,2,1,"ng-container",4),t.qZA(),t.TgZ(6,"mat-drawer-content",5),t.YNc(7,rt,41,18,"ng-container",6),t.YNc(8,st,4,1,"ng-template",null,7,t.W1O),t.YNc(10,ut,3,4,"ng-container",4),t.qZA()()()),2&e){const c=t.MAs(9);t.xp6(1),t.Q6J("hasBackdrop",!1),t.xp6(1),t.Q6J("autoFocus",!1)("opened",o.drawerOpened),t.xp6(2),t.Q6J("ngIf","new-chat"===o.drawerComponent),t.xp6(1),t.Q6J("ngIf","profile"===o.drawerComponent),t.xp6(2),t.Q6J("ngIf",o.chats&&o.chats.length>0)("ngIfElse",c),t.xp6(3),t.Q6J("ngIf",o.chats&&o.chats.length>0)}},dependencies:[u.lC,u.yS,p.lW,_.KE,_.qo,f.Hw,C.Nt,m.VK,m.OP,m.p6,h.jA,h.kh,h.LW,s.mk,s.sg,s.O5,D,z],encapsulation:2,changeDetection:0}),n})();var pt=i(94880);function _t(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"img",17),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("src",e.chat.contact.avatar,t.LSH)("alt","Contact avatar")}}function ft(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",18),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw();t.xp6(2),t.hij(" ",e.chat.contact.name.charAt(0)," ")}}function mt(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"img",19),t.BQk()),2&n){const e=a.$implicit;t.xp6(1),t.Q6J("src",e,t.LSH)}}function ht(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div")(2,"div",20),t._uU(3,"Email"),t.qZA(),t.TgZ(4,"div",21),t._uU(5),t.qZA()(),t.BQk()),2&n){const e=t.oxw();t.xp6(5),t.Oqu(e.chat.contact.details.emails[0].email)}}function dt(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div")(2,"div",20),t._uU(3,"Phone number"),t.qZA(),t.TgZ(4,"div",21),t._uU(5),t.qZA()(),t.BQk()),2&n){const e=t.oxw();t.xp6(5),t.Oqu(e.chat.contact.details.phoneNumbers[0].phoneNumber)}}function xt(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div")(2,"div",20),t._uU(3,"Title"),t.qZA(),t.TgZ(4,"div",21),t._uU(5),t.qZA()(),t.BQk()),2&n){const e=t.oxw();t.xp6(5),t.Oqu(e.chat.contact.details.title)}}function vt(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div")(2,"div",20),t._uU(3,"Company"),t.qZA(),t.TgZ(4,"div",21),t._uU(5),t.qZA()(),t.BQk()),2&n){const e=t.oxw();t.xp6(5),t.Oqu(e.chat.contact.details.company)}}function Ct(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div")(2,"div",20),t._uU(3,"Birthday"),t.qZA(),t.TgZ(4,"div",21),t._uU(5),t.qZA()(),t.BQk()),2&n){const e=t.oxw();t.xp6(5),t.Oqu(e.chat.contact.details.birthday)}}function Zt(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div")(2,"div",20),t._uU(3,"Address"),t.qZA(),t.TgZ(4,"div",21),t._uU(5),t.qZA()(),t.BQk()),2&n){const e=t.oxw();t.xp6(5),t.Oqu(e.chat.contact.details.address)}}let bt=(()=>{class n{constructor(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["chat-contact-info"]],inputs:{chat:"chat",drawer:"drawer"},decls:29,vars:12,consts:[[1,"flex","flex-col","flex-auto","h-full","bg-card","dark:bg-default"],[1,"flex","flex-0","items-center","h-18","px-4","border-b","bg-gray-50","dark:bg-transparent"],["mat-icon-button","",3,"click"],[3,"svgIcon"],[1,"ml-2","text-lg","font-medium"],[1,"overflow-y-auto"],[1,"flex","flex-col","items-center","mt-8"],[1,"w-40","h-40","rounded-full"],[4,"ngIf"],[1,"mt-4","text-lg","font-medium"],[1,"mt-0.5","text-md","text-secondary"],[1,"py-10","px-7"],[1,"text-lg","font-medium"],[1,"grid","grid-cols-4","gap-1","mt-4"],[4,"ngFor","ngForOf"],[1,"mt-10","space-y-4"],[1,"text-lg","font-medium","mb-3"],[1,"w-full","h-full","rounded-full","object-cover",3,"src","alt"],[1,"flex","items-center","justify-center","w-full","h-full","rounded-full","text-8xl","font-semibold","uppercase","bg-gray-200","text-gray-600","dark:bg-gray-700","dark:text-gray-200"],[1,"h-20","rounded","object-cover",3,"src"],[1,"font-medium","text-secondary"],[1,""]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return o.drawer.close()}),t._UZ(3,"mat-icon",3),t.qZA(),t.TgZ(4,"div",4),t._uU(5,"Contact info"),t.qZA()(),t.TgZ(6,"div",5)(7,"div",6)(8,"div",7),t.YNc(9,_t,2,2,"ng-container",8),t.YNc(10,ft,3,1,"ng-container",8),t.qZA(),t.TgZ(11,"div",9),t._uU(12),t.qZA(),t.TgZ(13,"div",10),t._uU(14),t.qZA()(),t.TgZ(15,"div",11)(16,"div",12),t._uU(17,"Media"),t.qZA(),t.TgZ(18,"div",13),t.YNc(19,mt,2,1,"ng-container",14),t.qZA(),t.TgZ(20,"div",15)(21,"div",16),t._uU(22,"Details"),t.qZA(),t.YNc(23,ht,6,1,"ng-container",8),t.YNc(24,dt,6,1,"ng-container",8),t.YNc(25,xt,6,1,"ng-container",8),t.YNc(26,vt,6,1,"ng-container",8),t.YNc(27,Ct,6,1,"ng-container",8),t.YNc(28,Zt,6,1,"ng-container",8),t.qZA()()()()),2&e&&(t.xp6(3),t.Q6J("svgIcon","heroicons_outline:x"),t.xp6(6),t.Q6J("ngIf",o.chat.contact.avatar),t.xp6(1),t.Q6J("ngIf",!o.chat.contact.avatar),t.xp6(2),t.Oqu(o.chat.contact.name),t.xp6(2),t.Oqu(o.chat.contact.about),t.xp6(5),t.Q6J("ngForOf",o.chat.contact.attachments.media),t.xp6(4),t.Q6J("ngIf",o.chat.contact.details.emails.length),t.xp6(1),t.Q6J("ngIf",o.chat.contact.details.phoneNumbers.length),t.xp6(1),t.Q6J("ngIf",o.chat.contact.details.title),t.xp6(1),t.Q6J("ngIf",o.chat.contact.details.company),t.xp6(1),t.Q6J("ngIf",o.chat.contact.details.birthday),t.xp6(1),t.Q6J("ngIf",o.chat.contact.details.address))},dependencies:[p.lW,f.Hw,s.sg,s.O5],encapsulation:2,changeDetection:0}),n})();const wt=["messageInput"];function yt(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"img",32),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("src",e.chat.contact.avatar,t.LSH)}}function Tt(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",33),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(2),t.hij(" ",e.chat.contact.name.charAt(0)," ")}}function At(n,a){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",11),t._uU(2," Mute notifications "),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_outline:volume-off"))}function kt(n,a){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",11),t._uU(2," Unmute notifications "),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_outline:volume-up"))}function Qt(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",37),t._UZ(2,"div",38),t.TgZ(3,"div",39),t._uU(4),t.ALo(5,"date"),t.qZA(),t._UZ(6,"div",38),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(4),t.hij(" ",t.xi3(5,1,e.createdAt,"longDate")," ")}}function It(n,a){1&n&&t.GkF(0)}const Jt=function(n,a){return{"text-blue-500 -right-1 -mr-px mb-px":n,"text-gray-500 -left-1 -ml-px mb-px -scale-x-1":a}};function Ut(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",40),t.YNc(2,It,1,0,"ng-container",41),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit;t.oxw(2);const o=t.MAs(5);t.xp6(1),t.Q6J("ngClass",t.WLB(2,Jt,e.isMine,!e.isMine)),t.xp6(1),t.Q6J("ngTemplateOutlet",o)}}const qt=function(n,a){return{"mr-3":n,"ml-3":a}};function Nt(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",42),t._uU(2),t.ALo(3,"date"),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngClass",t.WLB(5,qt,e.isMine,!e.isMine)),t.xp6(1),t.hij(" ",t.xi3(3,2,e.createdAt,"HH:mm")," ")}}const Mt=function(n,a,e,o){return{"items-end":n,"items-start":a,"mt-0.5":e,"mt-3":o}},Bt=function(n,a){return{"bg-blue-500 text-blue-50":n,"bg-gray-500 text-gray-50":a}};function Ft(n,a){if(1&n&&(t.ynx(0),t.YNc(1,Qt,7,4,"ng-container",14),t.ALo(2,"date"),t.ALo(3,"date"),t.TgZ(4,"div",34)(5,"div",35),t.YNc(6,Ut,3,5,"ng-container",14),t._UZ(7,"div",36),t.qZA(),t.YNc(8,Nt,4,8,"ng-container",14),t.qZA(),t.BQk()),2&n){const e=a.$implicit,o=a.index,c=a.first,r=a.last,l=t.oxw(2);t.xp6(1),t.Q6J("ngIf",c||t.xi3(2,6,l.chat.messages[o-1].createdAt,"d")!==t.xi3(3,9,e.createdAt,"d")),t.xp6(3),t.Q6J("ngClass",t.l5B(12,Mt,e.isMine,!e.isMine,o>0&&l.chat.messages[o-1].isMine===e.isMine,o>0&&l.chat.messages[o-1].isMine!==e.isMine)),t.xp6(1),t.Q6J("ngClass",t.WLB(17,Bt,e.isMine,!e.isMine)),t.xp6(1),t.Q6J("ngIf",r||l.chat.messages[o+1].isMine!==e.isMine),t.xp6(1),t.Q6J("innerHTML",e.value,t.oJD),t.xp6(1),t.Q6J("ngIf",c||r||l.chat.messages[o+1].isMine!==e.isMine||l.chat.messages[o+1].createdAt!==e.createdAt)}}const Ot=function(){return["./"]};function Yt(n,a){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"mat-drawer-container",4)(2,"mat-drawer",5,6),t.NdJ("openedChange",function(c){t.CHM(e);const r=t.oxw();return t.KtG(r.drawerOpened=c)}),t._UZ(4,"chat-contact-info",7),t.qZA(),t.TgZ(5,"mat-drawer-content",8)(6,"div",9)(7,"a",10),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.resetChat())}),t._UZ(8,"mat-icon",11),t.qZA(),t.TgZ(9,"div",12),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.openContactInfo())}),t.TgZ(10,"div",13),t.YNc(11,yt,2,1,"ng-container",14),t.YNc(12,Tt,3,1,"ng-container",14),t.qZA(),t.TgZ(13,"div",15),t._uU(14),t.qZA()(),t.TgZ(15,"button",16),t._UZ(16,"mat-icon",11),t.TgZ(17,"mat-menu",null,17)(19,"button",18),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.openContactInfo())}),t._UZ(20,"mat-icon",11),t._uU(21," Contact info "),t.qZA(),t.TgZ(22,"button",19),t._UZ(23,"mat-icon",11),t._uU(24," Select messages "),t.qZA(),t.TgZ(25,"button",18),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.toggleMuteNotifications())}),t.YNc(26,At,3,1,"ng-container",14),t.YNc(27,kt,3,1,"ng-container",14),t.qZA(),t.TgZ(28,"button",19),t._UZ(29,"mat-icon",11),t._uU(30," Clear messages "),t.qZA(),t.TgZ(31,"button",19),t._UZ(32,"mat-icon",11),t._uU(33," Delete chat "),t.qZA()()()(),t.TgZ(34,"div",20)(35,"div",21),t.YNc(36,Ft,9,20,"ng-container",22),t.qZA()(),t.TgZ(37,"div",23)(38,"div",24)(39,"button",25),t._UZ(40,"mat-icon",11),t.qZA(),t.TgZ(41,"button",26),t._UZ(42,"mat-icon",11),t.qZA()(),t.TgZ(43,"mat-form-field",27),t._UZ(44,"textarea",28,29),t.qZA(),t.TgZ(46,"div",30)(47,"button",25),t._UZ(48,"mat-icon",31),t.qZA()()()()(),t.BQk()}if(2&n){const e=t.MAs(3),o=t.MAs(18),c=t.oxw();t.xp6(1),t.Q6J("hasBackdrop",!1),t.xp6(1),t.Q6J("autoFocus",!1)("mode",c.drawerMode)("position","end")("opened",c.drawerOpened),t.xp6(2),t.Q6J("drawer",e)("chat",c.chat),t.xp6(3),t.Q6J("routerLink",t.DdM(26,Ot)),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:arrow-narrow-left"),t.xp6(3),t.Q6J("ngIf",c.chat.contact.avatar),t.xp6(1),t.Q6J("ngIf",!c.chat.contact.avatar),t.xp6(2),t.Oqu(c.chat.contact.name),t.xp6(1),t.Q6J("matMenuTriggerFor",o),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:dots-vertical"),t.xp6(4),t.Q6J("svgIcon","heroicons_outline:user-circle"),t.xp6(3),t.Q6J("svgIcon","heroicons_outline:check-circle"),t.xp6(3),t.Q6J("ngIf",!c.chat.muted),t.xp6(1),t.Q6J("ngIf",c.chat.muted),t.xp6(2),t.Q6J("svgIcon","heroicons_outline:backspace"),t.xp6(3),t.Q6J("svgIcon","heroicons_outline:trash"),t.xp6(4),t.Q6J("ngForOf",c.chat.messages)("ngForTrackBy",c.trackByFn),t.xp6(4),t.Q6J("svgIcon","heroicons_outline:emoji-happy"),t.xp6(2),t.Q6J("svgIcon","heroicons_outline:paper-clip"),t.xp6(2),t.Q6J("rows",1),t.xp6(4),t.Q6J("svgIcon","heroicons_outline:paper-airplane")}}function St(n,a){1&n&&(t.TgZ(0,"div",43),t._UZ(1,"mat-icon",44),t.TgZ(2,"div",45),t._uU(3,"Select a conversation or start a new chat"),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_outline:chat"))}function jt(n,a){1&n&&(t.O4$(),t.TgZ(0,"svg",46)(1,"g",47),t._UZ(2,"path",48),t.qZA()())}const Lt=[{path:"",component:Y,resolve:{chats:M,contacts:F,profile:O},children:[{path:"",component:gt,children:[{path:"",pathMatch:"full",component:(()=>{class n{constructor(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["chat-empty-conversation"]],decls:5,vars:1,consts:[[1,"flex","flex-col","flex-auto","overflow-y-auto","lg:overflow-hidden","bg-card","dark:bg-default"],[1,"flex","flex-col","flex-auto","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"icon-size-24",3,"svgIcon"],[1,"mt-4","text-2xl","font-semibold","tracking-tight","text-secondary"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"mat-icon",2),t.TgZ(3,"div",3),t._uU(4,"Select a conversation or start a new chat"),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("svgIcon","heroicons_outline:chat"))},dependencies:[f.Hw],encapsulation:2,changeDetection:0}),n})()},{path:":id",component:(()=>{class n{constructor(e,o,c,r){this._changeDetectorRef=e,this._chatService=o,this._fuseMediaWatcherService=c,this._ngZone=r,this.drawerMode="side",this.drawerOpened=!1,this._unsubscribeAll=new Z.x}_resizeMessageInput(){this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this.messageInput.nativeElement.style.height="auto",this._changeDetectorRef.detectChanges(),this.messageInput.nativeElement.style.height=`${this.messageInput.nativeElement.scrollHeight}px`,this._changeDetectorRef.detectChanges()})})}ngOnInit(){this._chatService.chat$.pipe((0,d.R)(this._unsubscribeAll)).subscribe(e=>{this.chat=e,this._changeDetectorRef.markForCheck()}),this._fuseMediaWatcherService.onMediaChange$.pipe((0,d.R)(this._unsubscribeAll)).subscribe(({matchingAliases:e})=>{this.drawerMode=e.includes("lg")?"side":"over",this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}openContactInfo(){this.drawerOpened=!0,this._changeDetectorRef.markForCheck()}resetChat(){this._chatService.resetChat(),this.drawerOpened=!1,this._changeDetectorRef.markForCheck()}toggleMuteNotifications(){this.chat.muted=!this.chat.muted,this._chatService.updateChat(this.chat.id,this.chat).subscribe()}trackByFn(e,o){return o.id||e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(g),t.Y36(pt.T),t.Y36(t.R0b))},n.\u0275cmp=t.Xpm({type:n,selectors:[["chat-conversation"]],viewQuery:function(e,o){if(1&e&&t.Gf(wt,5),2&e){let c;t.iGM(c=t.CRH())&&(o.messageInput=c.first)}},hostBindings:function(e,o){1&e&&t.NdJ("input",function(){return o._resizeMessageInput()})("ngModelChange",function(){return o._resizeMessageInput()})},decls:6,vars:2,consts:[[1,"flex","flex-col","flex-auto","overflow-y-auto","lg:overflow-hidden","bg-card","dark:bg-default"],[4,"ngIf","ngIfElse"],["selectChatOrStartNew",""],["speechBubbleExtension",""],[1,"flex-auto","h-full",3,"hasBackdrop"],[1,"w-full","sm:w-100","lg:border-l","lg:shadow-none","dark:bg-gray-900",3,"autoFocus","mode","position","opened","openedChange"],["drawer",""],[3,"drawer","chat"],[1,"flex","flex-col","overflow-hidden"],[1,"flex","flex-0","items-center","h-18","px-4","md:px-6","border-b","bg-gray-50","dark:bg-transparent"],["mat-icon-button","",1,"lg:hidden","md:-ml-2",3,"routerLink","click"],[3,"svgIcon"],[1,"flex","items-center","ml-2","lg:ml-0","mr-2","cursor-pointer",3,"click"],[1,"relative","flex","flex-0","items-center","justify-center","w-10","h-10"],[4,"ngIf"],[1,"ml-4","text-lg","font-medium","leading-5","truncate"],["mat-icon-button","",1,"ml-auto",3,"matMenuTriggerFor"],["conversationHeaderMenu",""],["mat-menu-item","",3,"click"],["mat-menu-item",""],[1,"flex","overflow-y-auto","flex-col-reverse"],[1,"flex","flex-col","flex-auto","shrink","p-6","bg-card","dark:bg-transparent"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","items-end","p-4","border-t","bg-gray-50","dark:bg-transparent"],[1,"flex","items-center","h-11","my-px"],["mat-icon-button",""],["mat-icon-button","",1,"ml-0.5"],[1,"fuse-mat-dense","fuse-mat-no-subscript","fuse-mat-rounded","fuse-mat-bold","w-full","ml-4"],["matInput","",1,"min-h-5","my-0","resize-none",2,"margin","11px 0 !important","padding","0 !important",3,"rows"],["messageInput",""],[1,"flex","items-center","h-11","my-px","ml-4"],[1,"rotate-90",3,"svgIcon"],["alt","Contact avatar",1,"w-full","h-full","rounded-full","object-cover",3,"src"],[1,"flex","items-center","justify-center","w-full","h-full","rounded-full","text-lg","uppercase","bg-gray-200","text-gray-600","dark:bg-gray-700","dark:text-gray-200"],[1,"flex","flex-col",3,"ngClass"],[1,"relative","max-w-3/4","px-3","py-2","rounded-lg",3,"ngClass"],[1,"min-w-4","leading-5",3,"innerHTML"],[1,"flex","items-center","justify-center","my-3","-mx-6"],[1,"flex-auto","border-b"],[1,"flex-0","mx-4","text-sm","font-medium","leading-5","text-secondary"],[1,"absolute","bottom-0","w-3",3,"ngClass"],[4,"ngTemplateOutlet"],[1,"my-0.5","text-sm","font-medium","text-secondary",3,"ngClass"],[1,"flex","flex-col","flex-auto","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"icon-size-24",3,"svgIcon"],[1,"mt-4","text-2xl","font-semibold","tracking-tight","text-secondary"],["width","100%","height","100%","viewBox","0 0 66 66","xmlns","http://www.w3.org/2000/svg"],["id","Page-1","stroke","none","stroke-width","1","fill","none","fill-rule","evenodd"],["d","M1.01522827,0.516204834 C-8.83532715,54.3062744 61.7609863,70.5215302 64.8009949,64.3061218 C68.8074951,54.8859711 30.1663208,52.9997559 37.5036011,0.516204834 L1.01522827,0.516204834 Z","fill","currentColor","fill-rule","nonzero"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,Yt,49,27,"ng-container",1),t.YNc(2,St,4,1,"ng-template",null,2,t.W1O),t.YNc(4,jt,3,0,"ng-template",null,3,t.W1O),t.qZA()),2&e){const c=t.MAs(3);t.xp6(1),t.Q6J("ngIf",o.chat)("ngIfElse",c)}},dependencies:[u.yS,p.lW,p.zs,_.KE,f.Hw,C.Nt,m.VK,m.OP,m.p6,h.jA,h.kh,h.LW,s.mk,s.sg,s.O5,s.tP,bt,s.uU],encapsulation:2,changeDetection:0}),n})(),resolve:{conversation:B}}]}]}];let Ht=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(Lt),p.ot,Q.p9,_.lN,f.Ps,C.c,m.Tx,h.SJ,I.m]}),n})()}}]);