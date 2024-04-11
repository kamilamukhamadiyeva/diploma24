"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[9886],{69886:(P,C,s)=>{s.d(C,{x:()=>y});var l=s(65412),e=s(94650),g=s(62510),p=s(88951),c=s(36895),u=s(24006),d=s(59549),f=s(84385),_=s(3238);function Z(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"label",4),e._uU(3,"Name:"),e.qZA(),e.TgZ(4,"input",5),e.NdJ("ngModelChange",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.user.name=o)}),e.qZA()(),e.TgZ(5,"div",3)(6,"label",6),e._uU(7,"Last Name:"),e.qZA(),e.TgZ(8,"input",7),e.NdJ("ngModelChange",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.user.lastName=o)}),e.qZA()(),e.TgZ(9,"div",3)(10,"label",8),e._uU(11,"Email:"),e.qZA(),e.TgZ(12,"input",9),e.NdJ("ngModelChange",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.user.email=o)}),e.qZA()(),e.TgZ(13,"div",3)(14,"mat-form-field",10)(15,"mat-label"),e._uU(16,"Gender"),e.qZA(),e.TgZ(17,"mat-select",11),e.NdJ("ngModelChange",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.user.gender=o)}),e.TgZ(18,"mat-option",12),e._uU(19,"Male"),e.qZA(),e.TgZ(20,"mat-option",13),e._uU(21,"Female"),e.qZA(),e.TgZ(22,"mat-option",14),e._uU(23,"Other"),e.qZA()()()(),e.TgZ(24,"div",3)(25,"mat-form-field",10)(26,"mat-label"),e._uU(27,"Role"),e.qZA(),e.TgZ(28,"mat-select",11),e.NdJ("ngModelChange",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.user.role.role_name=o)}),e.TgZ(29,"mat-option",15),e._uU(30,"Admin"),e.qZA(),e.TgZ(31,"mat-option",16),e._uU(32,"Candidate"),e.qZA(),e.TgZ(33,"mat-option",17),e._uU(34,"Student"),e.qZA()()()(),e.TgZ(35,"button",18),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.saveChanges())}),e._uU(36,"Save Changes"),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.user.name),e.xp6(4),e.Q6J("ngModel",t.user.lastName),e.xp6(4),e.Q6J("ngModel",t.user.email),e.xp6(5),e.Q6J("ngModel",t.user.gender),e.xp6(11),e.Q6J("ngModel",t.user.role.role_name)}}let x=(()=>{class n{constructor(t,r,o,i){this.route=t,this.authService=r,this.dialogRef=o,this.data=i}ngOnInit(){console.log("userId:",this.data.userId),this.authService.getUserById(this.data.userId).subscribe(t=>{this.user=t})}close(){this.dialogRef.close()}saveChanges(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.gz),e.Y36(p.e),e.Y36(l.so),e.Y36(l.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-edit-user"]],decls:4,vars:1,consts:[[1,"container"],["class","edit-form",4,"ngIf"],[1,"edit-form"],[1,"form-group"],["for","name"],["type","text","id","name","name","name",1,"form-control",3,"ngModel","ngModelChange"],["for","lastName"],["type","text","id","lastName","name","lastName",1,"form-control",3,"ngModel","ngModelChange"],["for","email"],["type","text","id","email","name","email",1,"form-control",3,"ngModel","ngModelChange"],[1,"w-full"],[3,"ngModel","ngModelChange"],["value","male"],["value","female"],["value","other"],["value","admin"],["value","candidate"],["value","student"],[1,"btn","btn-primary",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Edit User"),e.qZA(),e.YNc(3,Z,37,5,"div",1),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf",r.user))},dependencies:[c.O5,u.Fj,u.JJ,u.On,d.KE,d.hX,f.gD,_.ey],styles:[".container[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px;font-size:16px;font-weight:700}.edit-form[_ngcontent-%COMP%]{background-color:#f9f9f9;padding:20px;border-radius:5px;box-shadow:0 0 10px #0000001a}.form-group[_ngcontent-%COMP%]{margin-bottom:20px}label[_ngcontent-%COMP%]{display:block;font-weight:700}input[type=text][_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%]{width:100%;padding:10px;border:1px solid #ccc;border-radius:5px;box-sizing:border-box;font-size:16px}button[_ngcontent-%COMP%]{padding:10px 20px;background-color:#007bff;color:#fff;border:none;border-radius:5px;cursor:pointer;font-size:16px}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}"]}),n})();var h=s(17009),U=s(284),A=s(97392),v=s(4859),b=s(51572);function T(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1," Full name is required "),e.qZA())}function M(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1," Full lastname is required "),e.qZA())}function q(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1," Email address is required "),e.qZA())}function I(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a valid email address "),e.qZA())}function F(n,a){1&n&&e._UZ(0,"mat-icon",21),2&n&&e.Q6J("svgIcon","heroicons_solid:eye")}function N(n,a){1&n&&e._UZ(0,"mat-icon",21),2&n&&e.Q6J("svgIcon","heroicons_solid:eye-off")}function O(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1," Password is required "),e.qZA())}function E(n,a){1&n&&(e.TgZ(0,"span"),e._uU(1," \u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0443\u0447\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c "),e.qZA())}function w(n,a){1&n&&e._UZ(0,"mat-progress-spinner",22),2&n&&e.Q6J("diameter",24)("mode","indeterminate")}let J=(()=>{class n{constructor(t,r,o,i,m){this.router=t,this.authService=r,this._formBuilder=o,this._snackBar=i,this.dialogRef=m,this.showAlert=!1}ngOnInit(){this.signUpForm=this._formBuilder.group({name:["",u.kI.required],lastName:["",u.kI.required],email:["",[u.kI.required,u.kI.email]],password:["",u.kI.required],gender:[""],role:["",u.kI.required]})}close(){this.dialogRef.close()}saveChanges(){}onSignUp(){if(this.signUpForm.valid){const t=this.signUpForm.value;this.authService.signUp({name:t.name,lastName:t.lastName,email:t.email,password:t.password,gender:t.gender,role:{id:t.role}}).subscribe(o=>{this.registrationResponse$=o,console.log("res",o.status),o.token&&(this._snackBar.open("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e","OK",{duration:3e3}),this.router.navigate(["/main"]))})}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.F0),e.Y36(p.e),e.Y36(u.QS),e.Y36(h.ux),e.Y36(l.so))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-add-user"]],decls:52,vars:16,consts:[[1,"mt-8",3,"formGroup"],["signUpNgForm","ngForm"],[1,"w-full"],["id","name","matInput","",3,"formControlName"],[4,"ngIf"],["id","lastName","matInput","",3,"formControlName"],["id","email","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["formControlName","gender"],["value","male"],["value","female"],["value","other"],["formControlName","role"],["value","1"],["value","2"],["value","3"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"form",0,1)(2,"h2"),e._uU(3,"Add User"),e.qZA(),e.TgZ(4,"mat-form-field",2)(5,"mat-label"),e._uU(6,"Full name"),e.qZA(),e._UZ(7,"input",3),e.YNc(8,T,2,0,"mat-error",4),e.qZA(),e.TgZ(9,"mat-form-field",2)(10,"mat-label"),e._uU(11,"Full lastname"),e.qZA(),e._UZ(12,"input",5),e.YNc(13,M,2,0,"mat-error",4),e.qZA(),e.TgZ(14,"mat-form-field",2)(15,"mat-label"),e._uU(16,"Email address"),e.qZA(),e._UZ(17,"input",6),e.YNc(18,q,2,0,"mat-error",4),e.YNc(19,I,2,0,"mat-error",4),e.qZA(),e.TgZ(20,"mat-form-field",2)(21,"mat-label"),e._uU(22,"Password"),e.qZA(),e._UZ(23,"input",7,8),e.TgZ(25,"button",9),e.NdJ("click",function(){e.CHM(o);const m=e.MAs(24);return e.KtG(m.type="password"===m.type?"text":"password")}),e.YNc(26,F,1,1,"mat-icon",10),e.YNc(27,N,1,1,"mat-icon",10),e.qZA(),e.YNc(28,O,2,0,"mat-error",4),e.qZA(),e.TgZ(29,"mat-form-field",2)(30,"mat-label"),e._uU(31,"Gender"),e.qZA(),e.TgZ(32,"mat-select",11)(33,"mat-option",12),e._uU(34,"Male"),e.qZA(),e.TgZ(35,"mat-option",13),e._uU(36,"Female"),e.qZA(),e.TgZ(37,"mat-option",14),e._uU(38,"Other"),e.qZA()()(),e.TgZ(39,"mat-form-field",2)(40,"mat-label"),e._uU(41,"Role"),e.qZA(),e.TgZ(42,"mat-select",15)(43,"mat-option",16),e._uU(44,"\u0410\u0434\u043c\u0438\u043d"),e.qZA(),e.TgZ(45,"mat-option",17),e._uU(46,"\u041a\u0430\u043d\u0434\u0438\u0434\u0430\u0442"),e.qZA(),e.TgZ(47,"mat-option",18),e._uU(48,"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"),e.qZA()()(),e.TgZ(49,"button",19),e.NdJ("click",function(){return r.onSignUp()}),e.YNc(50,E,2,0,"span",4),e.YNc(51,w,1,2,"mat-progress-spinner",20),e.qZA()()}if(2&t){const o=e.MAs(24);e.Q6J("formGroup",r.signUpForm),e.xp6(7),e.Q6J("formControlName","name"),e.xp6(1),e.Q6J("ngIf",r.signUpForm.get("name").hasError("required")),e.xp6(4),e.Q6J("formControlName","lastName"),e.xp6(1),e.Q6J("ngIf",r.signUpForm.get("lastName").hasError("required")),e.xp6(4),e.Q6J("formControlName","email"),e.xp6(1),e.Q6J("ngIf",r.signUpForm.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.signUpForm.get("email").hasError("email")),e.xp6(4),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===o.type),e.xp6(1),e.Q6J("ngIf","text"===o.type),e.xp6(1),e.Q6J("ngIf",r.signUpForm.get("password").hasError("required")),e.xp6(21),e.Q6J("color","primary")("disabled",r.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",!r.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",r.signUpForm.disabled)}},dependencies:[c.O5,u._Y,u.Fj,u.JJ,u.JL,d.TO,d.KE,d.hX,d.R9,U.Nt,f.gD,_.ey,u.sg,u.u,A.Hw,v.lW,b.Ou],styles:[".container[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.edit-form[_ngcontent-%COMP%]{background-color:#f9f9f9;padding:20px;border-radius:5px;box-shadow:0 0 10px #0000001a}.form-group[_ngcontent-%COMP%]{margin-bottom:20px}label[_ngcontent-%COMP%]{display:block;font-weight:700}input[type=text][_ngcontent-%COMP%]{width:100%;padding:10px;border:1px solid #ccc;border-radius:5px;box-sizing:border-box;font-size:16px}button[_ngcontent-%COMP%]{padding:10px 20px;background-color:#007bff;color:#fff;border:none;border-radius:5px;cursor:pointer;font-size:16px}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px;font-size:16px;font-weight:700}"]}),n})(),D=(()=>{class n{constructor(t,r,o,i,m){this.router=t,this.authService=r,this._formBuilder=o,this._snackBar=i,this.dialogRef=m,this.showAlert=!1}ngOnInit(){this.signUpForm=this._formBuilder.group({name:["",u.kI.required],lastName:["",u.kI.required],email:["",[u.kI.required,u.kI.email]],password:["",u.kI.required],gender:[""],role:["",u.kI.required]})}close(){this.dialogRef.close()}saveChanges(){}onSignUp(){if(this.signUpForm.valid){const t=this.signUpForm.value;this.authService.signUp({name:t.name,lastName:t.lastName,email:t.email,password:t.password,gender:t.gender,role:{id:t.role}}).subscribe(o=>{this.registrationResponse$=o,console.log("res",o.status),o.token&&(this._snackBar.open("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e","OK",{duration:3e3}),this.router.navigate(["/main"]))})}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.F0),e.Y36(p.e),e.Y36(u.QS),e.Y36(h.ux),e.Y36(l.so))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-add-user"]],decls:35,vars:0,consts:[[1,"resume-card"],[1,"resume-header"],[1,"email"],[1,"resume-details"],[1,"resume-section"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"\u0418\u043c\u044f \u0424\u0430\u043c\u0438\u043b\u0438\u044f"),e.qZA(),e.TgZ(4,"p",2),e._uU(5,"example@example.com"),e.qZA()(),e.TgZ(6,"div",3)(7,"div",4)(8,"h3"),e._uU(9,"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),e.qZA(),e.TgZ(10,"ul")(11,"li"),e._uU(12,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430, \u0441\u0442\u0435\u043f\u0435\u043d\u044c, \u0433\u043e\u0434 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f"),e.qZA()()(),e.TgZ(13,"div",4)(14,"h3"),e._uU(15,"\u041e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b"),e.qZA(),e.TgZ(16,"ul")(17,"li"),e._uU(18,"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c, \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438, \u0414\u0430\u0442\u044b \u0440\u0430\u0431\u043e\u0442\u044b"),e.qZA()()(),e.TgZ(19,"div",4)(20,"h3"),e._uU(21,"\u041d\u0430\u0432\u044b\u043a\u0438"),e.qZA(),e.TgZ(22,"ul")(23,"li"),e._uU(24,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043d\u0430\u0432\u044b\u043a\u0430 1"),e.qZA(),e.TgZ(25,"li"),e._uU(26,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043d\u0430\u0432\u044b\u043a\u0430 2"),e.qZA(),e.TgZ(27,"li"),e._uU(28,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043d\u0430\u0432\u044b\u043a\u0430 3"),e.qZA()()(),e.TgZ(29,"div",4)(30,"h3"),e._uU(31,"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"),e.qZA(),e.TgZ(32,"ul")(33,"li"),e._uU(34,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430, \u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430"),e.qZA()()()()())},styles:[".resume-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;box-shadow:0 4px 8px #0000001a;padding:20px;margin-bottom:20px}.resume-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;margin-bottom:10px}.resume-header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]{color:#666}.resume-section[_ngcontent-%COMP%]{margin-bottom:20px}.resume-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;margin-bottom:10px}.resume-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none}.resume-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:5px}"]}),n})(),y=(()=>{class n{constructor(t){this.dialog=t}openEditUserModal(t){this.dialog.open(x,{width:"600px",data:{userId:t}})}openAddUserModal(){this.dialog.open(J,{width:"600px"})}openCandidateInfoModal(){this.dialog.open(D,{width:"600px"})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(l.uw))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);