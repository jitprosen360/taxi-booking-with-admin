"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[178],{1178:(z,l,c)=>{c.r(l),c.d(l,{RunningrequestModule:()=>Q});var d=c(6814),u=c(7700),_=c(4506),t=c(5879),a=c(6223),f=c(9862),b=c(2296);let m=(()=>{var n;class s{constructor(e,o,r,g,Y){this.dialog=e,this.dialogRef=o,this.data=r,this.formBuilder=g,this.http=Y,this.serverUrl=_.N.apiUrl,this.feedbackForm=this.formBuilder.group({name:"",email:"",phone:"",message:""})}ngOnInit(){}submitForm(){const r={formData:this.feedbackForm.value,feedbackdata:this.data};console.log(r),this.http.post(`${this.serverUrl}/feedback`,r).subscribe(g=>{console.log("Backend Response:",g)})}resetForm(){this.feedbackForm.reset()}closeDialog(){this.dialogRef.close()}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(u.uw),t.Y36(u.so),t.Y36(u.WI),t.Y36(a.qu),t.Y36(f.eN))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-feedback"]],decls:37,vars:1,consts:[[1,"background"],[1,"container"],[1,"screen"],[1,"screen-header"],[1,"screen-header-left"],[1,"screen-header-button","close"],[1,"screen-header-button","maximize"],[1,"screen-header-button","minimize"],[1,"screen-header-right"],[1,"screen-header-ellipsis"],[1,"screen-body"],[1,"screen-body-item","left"],[1,"app-title"],[1,"app-contact"],[1,"screen-body-item"],[1,"app-form"],[3,"formGroup","ngSubmit"],[1,"app-form-group"],["placeholder","NAME","formControlName","name",1,"app-form-control"],["placeholder","EMAIL","formControlName","email",1,"app-form-control"],["maxlength","10","placeholder","CONTACT NO","formControlName","phone",1,"app-form-control"],[1,"app-form-group","message"],["placeholder","MESSAGE","formControlName","message",1,"app-form-control"],[1,"app-form-group","buttons"],["type","button",1,"app-form-button",3,"click"],["type","submit","mat-button","","mat-dialog-close","","cdkFocusInitial","",1,"app-form-button","info-button"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"div",5)(6,"div",6)(7,"div",7),t.qZA(),t.TgZ(8,"div",8),t._UZ(9,"div",9)(10,"div",9)(11,"div",9),t.qZA()(),t.TgZ(12,"div",10)(13,"div",11)(14,"div",12)(15,"span"),t._uU(16,"CONTACT"),t.qZA(),t.TgZ(17,"span"),t._uU(18,"US"),t.qZA()(),t.TgZ(19,"div",13),t._uU(20,"CONTACT INFO : +62 81 314 928 595"),t.qZA()(),t.TgZ(21,"div",14)(22,"div",15)(23,"form",16),t.NdJ("ngSubmit",function(){return o.submitForm()}),t.TgZ(24,"div",17),t._UZ(25,"input",18),t.qZA(),t.TgZ(26,"div",17),t._UZ(27,"input",19),t.qZA(),t.TgZ(28,"div",17),t._UZ(29,"input",20),t.qZA(),t.TgZ(30,"div",21),t._UZ(31,"input",22),t.qZA(),t.TgZ(32,"div",23)(33,"button",24),t.NdJ("click",function(){return o.resetForm()}),t._uU(34,"CANCEL"),t.qZA(),t.TgZ(35,"button",25),t._uU(36,"SEND"),t.qZA()()()()()()()()()),2&e&&(t.xp6(23),t.Q6J("formGroup",o.feedbackForm))},dependencies:[a._Y,a.Fj,a.JJ,a.JL,a.nD,a.sg,a.u,b.lW,u.ZT],styles:['*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body[_ngcontent-%COMP%]{background:linear-gradient(to right,#ea1d6f 0%,#eb466b 100%);font-size:12px}body[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-weight:700;letter-spacing:1.4px}.background[_ngcontent-%COMP%]{display:flex;min-height:100vh;background:linear-gradient(to right,#ea1d6f 0%,#eb466b 100%)}.container[_ngcontent-%COMP%]{flex:0 1 700px;margin:auto;padding:10px}.screen[_ngcontent-%COMP%]{position:relative;background:#3e3e3e;border-radius:15px}.screen[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;inset:0 20px;border-radius:15px;box-shadow:0 20px 40px #0006;z-index:-1}.screen-header[_ngcontent-%COMP%]{display:flex;align-items:center;padding:10px 20px;background:#4d4d4f;border-top-left-radius:15px;border-top-right-radius:15px}.screen-header-left[_ngcontent-%COMP%]{margin-right:auto}.screen-header-button[_ngcontent-%COMP%]{display:inline-block;width:8px;height:8px;margin-right:3px;border-radius:8px;background:white}.screen-header-button.close[_ngcontent-%COMP%]{background:#ed1c6f}.screen-header-button.maximize[_ngcontent-%COMP%]{background:#e8e925}.screen-header-button.minimize[_ngcontent-%COMP%]{background:#74c54f}.screen-header-right[_ngcontent-%COMP%]{display:flex}.screen-header-ellipsis[_ngcontent-%COMP%]{width:3px;height:3px;margin-left:2px;border-radius:8px;background:#999}.screen-body[_ngcontent-%COMP%]{display:flex}.screen-body-item[_ngcontent-%COMP%]{flex:1;padding:50px}.screen-body-item.left[_ngcontent-%COMP%]{display:flex;flex-direction:column}.app-title[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative;color:#ea1d6f;font-size:26px}.app-title[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;left:0;bottom:-10px;width:25px;height:4px;background:#ea1d6f}.app-contact[_ngcontent-%COMP%]{margin-top:auto;font-size:8px;color:#888}.app-form-group[_ngcontent-%COMP%]{margin-bottom:15px}.app-form-group.message[_ngcontent-%COMP%]{margin-top:40px}.app-form-group.buttons[_ngcontent-%COMP%]{margin-bottom:0;text-align:right}.app-form-control[_ngcontent-%COMP%]{width:100%;padding:10px 0;background:none;border:none;border-bottom:1px solid #666;color:#ddd;font-size:14px;text-transform:uppercase;outline:none;transition:border-color .2s}.app-form-control[_ngcontent-%COMP%]::placeholder{color:#666}.app-form-control[_ngcontent-%COMP%]:focus{border-bottom-color:#ddd}.app-form-button[_ngcontent-%COMP%]{background:none;border:none;color:#ea1d6f;font-size:14px;cursor:pointer;outline:none}.app-form-button[_ngcontent-%COMP%]:hover{color:#b9134f}.credits[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:20px;color:#ffa4bd;font-family:Roboto Condensed,sans-serif;font-size:16px;font-weight:400}.credits-link[_ngcontent-%COMP%]{display:flex;align-items:center;color:#fff;font-weight:700;text-decoration:none}.dribbble[_ngcontent-%COMP%]{width:20px;height:20px;margin:0 5px}@media screen and (max-width: 520px){.screen-body[_ngcontent-%COMP%]{flex-direction:column}.screen-body-item.left[_ngcontent-%COMP%]{margin-bottom:30px}.app-title[_ngcontent-%COMP%]{flex-direction:row}.app-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:12px}.app-title[_ngcontent-%COMP%]:after{display:none}}@media screen and (max-width: 600px){.screen-body[_ngcontent-%COMP%]{padding:40px}.screen-body-item[_ngcontent-%COMP%]{padding:0}}']}),s})();var h=c(5596),x=c(9229);function v(n,s){1&n&&(t.TgZ(0,"div",3),t._uU(1," No records found "),t.qZA())}const p=function(n){return{"badge-success":n}};function C(n,s){if(1&n&&(t.TgZ(0,"span",19),t._uU(1,"Accepted"),t.qZA()),2&n){const i=t.oxw().$implicit;t.Q6J("ngClass",t.VKq(1,p,4===i.ridestatus))}}function Z(n,s){if(1&n&&(t.TgZ(0,"span",19),t._uU(1,"Arrived"),t.qZA()),2&n){const i=t.oxw().$implicit;t.Q6J("ngClass",t.VKq(1,p,5===i.ridestatus))}}function q(n,s){if(1&n&&(t.TgZ(0,"span",19),t._uU(1,"Picked"),t.qZA()),2&n){const i=t.oxw().$implicit;t.Q6J("ngClass",t.VKq(1,p,9===i.ridestatus))}}function T(n,s){if(1&n&&(t.TgZ(0,"span",19),t._uU(1,"Started"),t.qZA()),2&n){const i=t.oxw().$implicit;t.Q6J("ngClass",t.VKq(1,p,6===i.ridestatus))}}function k(n,s){if(1&n&&(t.TgZ(0,"span",19),t._uU(1,"Completed"),t.qZA()),2&n){const i=t.oxw().$implicit;t.Q6J("ngClass",t.VKq(1,p,7===i.ridestatus))}}const R=function(n){return{"badge-warning":n}};function A(n,s){if(1&n&&(t.TgZ(0,"span",19),t._uU(1,"Assigning"),t.qZA()),2&n){const i=t.oxw().$implicit;t.Q6J("ngClass",t.VKq(1,R,1===i.ridestatus))}}function O(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(i);const o=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.acceptRide(o))}),t._uU(1,"Accept Ride"),t.qZA()}}function w(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(i);const o=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.arriveRide(o))}),t._uU(1,"Arrive"),t.qZA()}}function M(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(i);const o=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.pickRide(o))}),t._uU(1,"Pick Up"),t.qZA()}}function P(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(i);const o=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.startRide(o))}),t._uU(1,"Start"),t.qZA()}}function U(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(i);const o=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.completeRide(o))}),t._uU(1,"Complete"),t.qZA()}}function I(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(i);const o=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.freerideanddriver(o))}),t._uU(1,"Feedback"),t.qZA()}}function y(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(i);const o=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.rejectRide(o))}),t._uU(1,"Reject Ride"),t.qZA()}}function N(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._UZ(2,"img",10),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td",11),t._uU(14),t.qZA(),t.TgZ(15,"td",11),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._UZ(20,"img",12),t.qZA(),t.TgZ(21,"td",13),t.YNc(22,C,2,3,"span",14),t.YNc(23,Z,2,3,"span",14),t.YNc(24,q,2,3,"span",14),t.YNc(25,T,2,3,"span",14),t.YNc(26,k,2,3,"span",14),t.YNc(27,A,2,3,"span",15),t.qZA(),t.TgZ(28,"td",16),t.YNc(29,O,2,0,"button",17),t.YNc(30,w,2,0,"button",17),t.YNc(31,M,2,0,"button",17),t.YNc(32,P,2,0,"button",17),t.YNc(33,U,2,0,"button",17),t.YNc(34,I,2,0,"button",17),t.YNc(35,y,2,0,"button",18),t.qZA()()),2&n){const i=s.$implicit,e=t.oxw(2);t.xp6(2),t.Q6J("src",e.apiUrl+"/"+i.userDetails.profile,t.LSH),t.xp6(2),t.Oqu(i.userDetails.username),t.xp6(2),t.Oqu(i.userDetails.userphone),t.xp6(2),t.Oqu(i.driverDetails.drivername),t.xp6(2),t.Oqu(i.driverDetails.driverphone),t.xp6(2),t.Oqu(i.rideDate+" "+i.time),t.xp6(2),t.Oqu(i.startLocation),t.xp6(2),t.Oqu(i.endLocation),t.xp6(2),t.Oqu(i.serviceType),t.xp6(2),t.Q6J("src",e.apiUrl+"/"+i.vehicleDetails.vehicleImage,t.LSH),t.xp6(1),t.Q6J("ngSwitch",i.ridestatus),t.xp6(1),t.Q6J("ngSwitchCase",4),t.xp6(1),t.Q6J("ngSwitchCase",5),t.xp6(1),t.Q6J("ngSwitchCase",9),t.xp6(1),t.Q6J("ngSwitchCase",6),t.xp6(1),t.Q6J("ngSwitchCase",7),t.xp6(2),t.Q6J("ngSwitch",i.ridestatus),t.xp6(1),t.Q6J("ngSwitchCase",1),t.xp6(1),t.Q6J("ngSwitchCase",4),t.xp6(1),t.Q6J("ngSwitchCase",5),t.xp6(1),t.Q6J("ngSwitchCase",9),t.xp6(1),t.Q6J("ngSwitchCase",6),t.xp6(1),t.Q6J("ngSwitchCase",7),t.xp6(1),t.Q6J("ngIf",1===i.ridestatus||4===i.ridestatus||5===i.ridestatus||9===i.ridestatus)}}function D(n,s){if(1&n&&(t.TgZ(0,"div")(1,"div",4)(2,"div",5)(3,"div",6)(4,"table",7)(5,"thead",8)(6,"tr")(7,"th"),t._uU(8,"User Profile"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"User Name"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"User Phone"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Driver Name"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Driver Phone"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Pick up Time"),t.qZA(),t.TgZ(19,"th"),t._uU(20,"Pick up Address"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"Drop off Address"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Service Type"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"Vehicle Image"),t.qZA(),t.TgZ(27,"th"),t._uU(28,"Status"),t.qZA(),t.TgZ(29,"th"),t._uU(30,"Action"),t.qZA()()(),t.TgZ(31,"tbody"),t.YNc(32,N,36,24,"tr",9),t.qZA()()()()()()),2&n){const i=t.oxw();t.xp6(32),t.Q6J("ngForOf",i.assignedArray)}}let J=(()=>{var n;class s{constructor(e,o,r,g){this._socketservice=e,this.toastr=o,this._socket=r,this.dialog=g,this.apiUrl=_.N.apiUrl}ngOnInit(){this.getRunningData(),this.assigneddriverfromAssignDialogBox(),this.afterrejectrunningrequest(),this.listenassignrejected(),this.ridestatusupates(),this.timeoutrunningreq(),this.listeningwhendriverisnearest(),this.listeningmytaskfunc(),this.listennearestassignbuttonclick()}getRunningData(){this._socketservice.emitRunningData(),this._socketservice.listenGetRunning().subscribe(e=>{console.log(e),this.assignedArray=e.alldata,console.log(this.assignedArray)})}rejectRide(e){this.rideId=e._id,this.driverId=e.driverId,this.rejectRunningRequest(this.driverId,this.rideId)}rejectRunningRequest(e,o){console.log(o,e),this._socketservice.emitrejectRunningRequest({rideId:o,driverId:e}),this.getRunningData()}acceptRide(e){this.rideId=e._id,this.driverId=e.driverId,this.acceptrunningrequest(this.driverId,this.rideId)}arriveRide(e){this.rideId=e._id,this.arrivedrunningrequest(this.driverId,this.rideId)}pickRide(e){this.rideId=e._id,this.pickedrunningrequest(this.driverId,this.rideId)}startRide(e){this.rideId=e._id,this.startedrunningrequest(this.driverId,this.rideId)}completeRide(e){this.rideId=e._id,this.driverId=e.driverId,this.completedrunningrequest(this.driverId,this.rideId)}freerideanddriver(e){this.rideId=e._id,this.driverId=e.driverId,this.freerideanddriverrunningrequest(this.driverId,this.rideId);const o=new u.vA;o.disableClose=!1,o.autoFocus=!0,o.width="650px",o.height="700px",o.data=e,this.dialog.open(m,o).afterClosed().subscribe(g=>{console.log("Dialog closed with result:",g)})}acceptrunningrequest(e,o){this._socketservice.emitaccept({rideId:o,driverId:e}),this.getRunningData()}arrivedrunningrequest(e,o){this._socketservice.emitarrived({rideId:o,driverId:e}),this.getRunningData()}pickedrunningrequest(e,o){this._socketservice.emitpicked({rideId:o,driverId:e}),this.getRunningData()}startedrunningrequest(e,o){this._socketservice.emitstarted({rideId:o,driverId:e}),this.getRunningData()}completedrunningrequest(e,o){this._socketservice.emitcompleted({rideId:o,driverId:e}),this.getRunningData()}freerideanddriverrunningrequest(e,o){this._socketservice.emitfree({rideId:o,driverId:e}),this.getRunningData()}ridestatusupates(){this._socketservice.listeningrideupdates().subscribe(e=>{this.getRunningData()})}listenassignrejected(){this._socketservice.listenassignrejected().subscribe(e=>{this.getRunningData()})}afterrejectrunningrequest(){this._socketservice.listenrejectRunningRequest().subscribe(e=>{this.getRunningData()})}assigneddriverfromAssignDialogBox(){this._socketservice.onFinalassignedDriverData("data").subscribe(e=>{this.getRunningData()})}listennearestassignbuttonclick(){this._socketservice.listeningnearestdriver().subscribe(e=>{console.log(e),this.getRunningData()})}timeoutrunningreq(){this._socketservice.listeningrunningtimeoutinRR().subscribe(e=>{this.getRunningData()})}listeningmytaskfunc(){this._socket.listeningmytaskfunc().subscribe(e=>{this.getRunningData()})}listeningwhendriverisnearest(){this._socket.listeningwhendriverisnearest().subscribe(e=>{this.getRunningData()})}openDialog(){const e=new u.vA;e.disableClose=!1,e.autoFocus=!0,e.width="1000px",this.dialog.open(m,e).afterClosed().subscribe(r=>{console.log("Dialog closed with result:",r)})}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(h.$),t.Y36(x._W),t.Y36(h.$),t.Y36(u.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-runningrequest"]],decls:3,vars:2,consts:[[1,"container"],["class","no-records-label",4,"ngIf"],[4,"ngIf"],[1,"no-records-label"],[1,"parentFormContainer","p-4","border","rounded"],["id","tableContainer"],[1,"table-responsive"],[1,"table"],[1,"bg-light","text-dark"],[4,"ngFor","ngForOf"],["alt","driver-profile",3,"src"],[1,"fixed-width"],["alt","vehicle-image",3,"src"],[3,"ngSwitch"],["class","statusbadge",3,"ngClass",4,"ngSwitchCase"],["class","statusbadge",3,"ngClass",4,"ngSwitchDefault"],[1,"d-flex","gap-3",3,"ngSwitch"],["class","btn btn-light border",3,"click",4,"ngSwitchCase"],["class","btn btn-danger",3,"click",4,"ngIf"],[1,"statusbadge",3,"ngClass"],[1,"btn","btn-light","border",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,v,2,0,"div",1),t.YNc(2,D,33,1,"div",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",0===o.assignedArray.length),t.xp6(1),t.Q6J("ngIf",o.assignedArray.length>0))},dependencies:[d.mk,d.sg,d.O5,d.RF,d.n9,d.ED],styles:["img[_ngcontent-%COMP%]{width:40px}.fixed-width[_ngcontent-%COMP%]{width:100px}.container[_ngcontent-%COMP%]{width:100%}.statusbadge[_ngcontent-%COMP%]{font-size:14px;padding:5px;border-radius:3px;font-weight:900}.badge-success[_ngcontent-%COMP%]{background-color:#49b600;color:#fff}.badge-info[_ngcontent-%COMP%]{background-color:#c200b8;color:#fff}.badge-warning[_ngcontent-%COMP%]{background-color:#e46600;color:#fff}.infobadge[_ngcontent-%COMP%]{box-shadow:inset 2px 2px 4px 2px #6d62fa;border:none;font-size:16px;color:#000;font-weight:700}.no-records-label[_ngcontent-%COMP%]{text-align:center;font-size:24px;font-weight:700;color:red;margin-top:20%}"]}),s})();var F=c(1896);const S=[{path:"",component:J,pathMatch:"full"}];let Q=(()=>{var n;class s{}return(n=s).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,F.Bz.forChild(S)]}),s})()}}]);