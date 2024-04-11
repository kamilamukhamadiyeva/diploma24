"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[9537],{55661:(F,v,o)=>{o.d(v,{x:()=>b});var e=o(4707),h=o(18505),g=o(94650),f=o(80529);let b=(()=>{class u{constructor(d){this._httpClient=d,this._faqs=new e.t(1),this._guides=new e.t(1),this._guide=new e.t(1)}get faqs$(){return this._faqs.asObservable()}get guides$(){return this._guides.asObservable()}get guide$(){return this._guide.asObservable()}getAllFaqs(){return this._httpClient.get("api/apps/help-center/faqs").pipe((0,h.b)(d=>{this._faqs.next(d)}))}getFaqsByCategory(d){return this._httpClient.get("api/apps/help-center/faqs",{params:{slug:d}}).pipe((0,h.b)(p=>{this._faqs.next(p)}))}getAllGuides(d="4"){return this._httpClient.get("api/apps/help-center/guides",{params:{limit:d}}).pipe((0,h.b)(p=>{this._guides.next(p)}))}getGuidesByCategory(d){return this._httpClient.get("api/apps/help-center/guides",{params:{slug:d}}).pipe((0,h.b)(p=>{this._guides.next(p)}))}getGuide(d,p){return this._httpClient.get("api/apps/help-center/guide",{params:{categorySlug:d,guideSlug:p}}).pipe((0,h.b)(E=>{this._guide.next(E)}))}}return u.\u0275fac=function(d){return new(d||u)(g.LFG(f.eN))},u.\u0275prov=g.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},37084:(F,v,o)=>{o.d(v,{pp:()=>te,To:()=>ie,ib:()=>R,yz:()=>N,yK:()=>ne});var e=o(94650),h=o(95017),g=o(21281),f=o(77579),b=o(50727);let u=0;const _=new e.OlP("CdkAccordion");let d=(()=>{class t{constructor(){this._stateChanges=new f.x,this._openCloseAllActions=new f.x,this.id="cdk-accordion-"+u++,this._multi=!1}get multi(){return this._multi}set multi(n){this._multi=(0,g.Ig)(n)}openAll(){this._multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(n){this._stateChanges.next(n)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=e.lG2({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[e._Bn([{provide:_,useExisting:t}]),e.TTD]}),t})(),p=0,E=(()=>{class t{constructor(n,i,s){this.accordion=n,this._changeDetectorRef=i,this._expansionDispatcher=s,this._openCloseAllSubscription=b.w0.EMPTY,this.closed=new e.vpe,this.opened=new e.vpe,this.destroyed=new e.vpe,this.expandedChange=new e.vpe,this.id="cdk-accordion-child-"+p++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=s.listen((r,x)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===x&&this.id!==r&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}get expanded(){return this._expanded}set expanded(n){n=(0,g.Ig)(n),this._expanded!==n&&(this._expanded=n,this.expandedChange.emit(n),n?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(n){this._disabled=(0,g.Ig)(n)}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(n=>{this.disabled||(this.expanded=n)})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(_,12),e.Y36(e.sBO),e.Y36(h.A8))},t.\u0275dir=e.lG2({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[e._Bn([{provide:_,useValue:void 0}])]}),t})(),Y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({}),t})();var A=o(84080),C=o(36895),T=o(3238),H=o(12687),L=o(71884),O=o(68675),y=o(39300),j=o(95698),P=o(29521),z=o(60515),G=o(56451),l=o(37340);const Q=["body"];function U(t,a){}const $=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],K=["mat-expansion-panel-header","*","mat-action-row"];function V(t,a){if(1&t&&e._UZ(0,"span",2),2&t){const n=e.oxw();e.Q6J("@indicatorRotate",n._getExpandedState())}}const X=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],J=["mat-panel-title","mat-panel-description","*"],w=new e.OlP("MAT_ACCORDION"),I="225ms cubic-bezier(0.4,0.0,0.2,1)",S={indicatorRotate:(0,l.X$)("indicatorRotate",[(0,l.SB)("collapsed, void",(0,l.oB)({transform:"rotate(0deg)"})),(0,l.SB)("expanded",(0,l.oB)({transform:"rotate(180deg)"})),(0,l.eR)("expanded <=> collapsed, void => collapsed",(0,l.jt)(I))]),bodyExpansion:(0,l.X$)("bodyExpansion",[(0,l.SB)("collapsed, void",(0,l.oB)({height:"0px",visibility:"hidden"})),(0,l.SB)("expanded",(0,l.oB)({height:"*",visibility:"visible"})),(0,l.eR)("expanded <=> collapsed, void => collapsed",(0,l.jt)(I))])},k=new e.OlP("MAT_EXPANSION_PANEL");let Z=(()=>{class t{constructor(n,i){this._template=n,this._expansionPanel=i}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.Rgc),e.Y36(k,8))},t.\u0275dir=e.lG2({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]}),t})(),W=0;const B=new e.OlP("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let R=(()=>{class t extends E{constructor(n,i,s,r,x,D,M){super(n,i,s),this._viewContainerRef=r,this._animationMode=D,this._hideToggle=!1,this.afterExpand=new e.vpe,this.afterCollapse=new e.vpe,this._inputChanges=new f.x,this._headerId="mat-expansion-panel-header-"+W++,this._bodyAnimationDone=new f.x,this.accordion=n,this._document=x,this._bodyAnimationDone.pipe((0,L.x)((m,c)=>m.fromState===c.fromState&&m.toState===c.toState)).subscribe(m=>{"void"!==m.fromState&&("expanded"===m.toState?this.afterExpand.emit():"collapsed"===m.toState&&this.afterCollapse.emit())}),M&&(this.hideToggle=M.hideToggle)}get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(n){this._hideToggle=(0,g.Ig)(n)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(n){this._togglePosition=n}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe((0,O.O)(null),(0,y.h)(()=>this.expanded&&!this._portal),(0,j.q)(1)).subscribe(()=>{this._portal=new A.UE(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(n){this._inputChanges.next(n)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const n=this._document.activeElement,i=this._body.nativeElement;return n===i||i.contains(n)}return!1}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(w,12),e.Y36(e.sBO),e.Y36(h.A8),e.Y36(e.s_b),e.Y36(C.K0),e.Y36(e.QbO,8),e.Y36(B,8))},t.\u0275cmp=e.Xpm({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(n,i,s){if(1&n&&e.Suo(s,Z,5),2&n){let r;e.iGM(r=e.CRH())&&(i._lazyContent=r.first)}},viewQuery:function(n,i){if(1&n&&e.Gf(Q,5),2&n){let s;e.iGM(s=e.CRH())&&(i._body=s.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(n,i){2&n&&e.ekj("mat-expanded",i.expanded)("_mat-animation-noopable","NoopAnimations"===i._animationMode)("mat-expansion-panel-spacing",i._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[e._Bn([{provide:w,useValue:void 0},{provide:k,useExisting:t}]),e.qOj,e.TTD],ngContentSelectors:K,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,i){1&n&&(e.F$t($),e.Hsn(0),e.TgZ(1,"div",0,1),e.NdJ("@bodyExpansion.done",function(r){return i._bodyAnimationDone.next(r)}),e.TgZ(3,"div",2),e.Hsn(4,1),e.YNc(5,U,0,0,"ng-template",3),e.qZA(),e.Hsn(6,2),e.qZA()),2&n&&(e.xp6(1),e.Q6J("@bodyExpansion",i._getExpandedState())("id",i.id),e.uIk("aria-labelledby",i._headerId),e.xp6(4),e.Q6J("cdkPortalOutlet",i._portal))},dependencies:[A.Pl],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[S.bodyExpansion]},changeDetection:0}),t})();class q{}const ee=(0,T.sb)(q);let N=(()=>{class t extends ee{constructor(n,i,s,r,x,D,M){super(),this.panel=n,this._element=i,this._focusMonitor=s,this._changeDetectorRef=r,this._animationMode=D,this._parentChangeSubscription=b.w0.EMPTY;const m=n.accordion?n.accordion._stateChanges.pipe((0,y.h)(c=>!(!c.hideToggle&&!c.togglePosition))):z.E;this.tabIndex=parseInt(M||"")||0,this._parentChangeSubscription=(0,G.T)(n.opened,n.closed,m,n._inputChanges.pipe((0,y.h)(c=>!!(c.hideToggle||c.disabled||c.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),n.closed.pipe((0,y.h)(()=>n._containsFocus())).subscribe(()=>s.focusVia(i,"program")),x&&(this.expandedHeight=x.expandedHeight,this.collapsedHeight=x.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const n=this._isExpanded();return n&&this.expandedHeight?this.expandedHeight:!n&&this.collapsedHeight?this.collapsedHeight:null}_keydown(n){switch(n.keyCode){case P.L_:case P.K5:(0,P.Vb)(n)||(n.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(n))}}focus(n,i){n?this._focusMonitor.focusVia(this._element,n,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(n=>{n&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(R,1),e.Y36(e.SBq),e.Y36(H.tE),e.Y36(e.sBO),e.Y36(B,8),e.Y36(e.QbO,8),e.$8M("tabindex"))},t.\u0275cmp=e.Xpm({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(n,i){1&n&&e.NdJ("click",function(){return i._toggle()})("keydown",function(r){return i._keydown(r)}),2&n&&(e.uIk("id",i.panel._headerId)("tabindex",i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),e.Udp("height",i._getHeaderHeight()),e.ekj("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after","after"===i._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===i._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===i._animationMode))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[e.qOj],ngContentSelectors:J,decls:5,vars:1,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(n,i){1&n&&(e.F$t(X),e.TgZ(0,"span",0),e.Hsn(1),e.Hsn(2,1),e.Hsn(3,2),e.qZA(),e.YNc(4,V,1,1,"span",1)),2&n&&(e.xp6(4),e.Q6J("ngIf",i._showToggle()))},dependencies:[C.O5],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:""}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[S.indicatorRotate]},changeDetection:0}),t})(),ne=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=e.lG2({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),t})(),te=(()=>{class t extends d{constructor(){super(...arguments),this._ownHeaders=new e.n_E,this._hideToggle=!1,this.displayMode="default",this.togglePosition="after"}get hideToggle(){return this._hideToggle}set hideToggle(n){this._hideToggle=(0,g.Ig)(n)}ngAfterContentInit(){this._headers.changes.pipe((0,O.O)(this._headers)).subscribe(n=>{this._ownHeaders.reset(n.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new H.Em(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(n){this._keyManager.onKeydown(n)}_handleHeaderFocus(n){this._keyManager.updateActiveItem(n)}ngOnDestroy(){super.ngOnDestroy(),this._ownHeaders.destroy()}}return t.\u0275fac=function(){let a;return function(i){return(a||(a=e.n5z(t)))(i||t)}}(),t.\u0275dir=e.lG2({type:t,selectors:[["mat-accordion"]],contentQueries:function(n,i,s){if(1&n&&e.Suo(s,N,5),2&n){let r;e.iGM(r=e.CRH())&&(i._headers=r)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,i){2&n&&e.ekj("mat-accordion-multi",i.multi)},inputs:{multi:"multi",hideToggle:"hideToggle",displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[e._Bn([{provide:w,useExisting:t}]),e.qOj]}),t})(),ie=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[C.ez,T.BQ,Y,A.eL]}),t})()}}]);