"use strict";(self.webpackChunkscales_doc_site=self.webpackChunkscales_doc_site||[]).push([[8592],{4296:(E,z,i)=>{i.d(z,{L:()=>t});var t=(()=>{return(g=t||(t={})).Primary="primary",g.Default="default",g.Danger="danger",g.Text="text",g.Link="link",g.Tertiary="tertiary",g.Ghost="ghost",t;var g})()},6396:(E,z,i)=>{i.d(z,{r:()=>a});var t=i(9765),g=i(2759),c=i(4296),M=i(6782),o=i(9724),P=i(1048),u=i(4344),m=i(8238),f=i(8918),O=i(5760);const d=function(l,e){return["sc-button",l,e]};function x(l,e){if(1&l&&(o.ynx(0),o.TgZ(1,"button",4),o.GkF(2,5),o.qZA(),o.BQk()),2&l){const n=o.oxw(),r=o.MAs(4);o.xp6(1),o.Q6J("type",n.scType)("nzType","secondary"===n.scButtonType?"default":n.scButtonType)("ngClass",o.WLB(12,d,n.scButtonTypeKeyValue.get(n.scButtonType)||"",n.scNoSpacing?"sc-no-spacing":""))("nzShape",n.scButtonShape)("nzSize",n.scButtonSize)("nzLoading",n.scButtonLoading)("disabled",n.scDisabled)("nzDanger",n.scDanger)("nzBlock",n.scBlock),o.uIk("role",n.scRole)("aria-label",n.scAriaLabel),o.xp6(1),o.Q6J("ngTemplateOutlet",r)}}function h(l,e){if(1&l&&(o.TgZ(0,"a",6),o.GkF(1,5),o.qZA()),2&l){const n=o.oxw(),r=o.MAs(4);o.Q6J("nzType",n.scButtonType)("ngClass",o.WLB(11,d,n.scButtonTypeKeyValue.get(n.scButtonType)||"",n.scNoSpacing?"sc-no-spacing":""))("nzShape",n.scButtonShape)("nzSize",n.scButtonSize)("nzLoading",n.scButtonLoading)("disabled",n.scDisabled)("nzDanger",n.scDanger)("nzBlock",n.scBlock)("target",n.scTarget),o.uIk("href",""===n.scHref?null:n.scHref,o.LSH),o.xp6(1),o.Q6J("ngTemplateOutlet",r)}}function p(l,e){if(1&l&&o._UZ(0,"i",8),2&l){const n=o.oxw(2);o.Q6J("nzType",n.scIconType)("nzTheme",n.scIconTheme)}}function T(l,e){if(1&l&&o._UZ(0,"i",8),2&l){const n=o.oxw(2);o.Q6J("nzType",n.scIconType)("nzTheme",n.scIconTheme)}}function C(l,e){if(1&l&&(o.YNc(0,p,1,2,"i",7),o.GkF(1,5),o.YNc(2,T,1,2,"i",7)),2&l){const n=o.oxw(),r=o.MAs(6);o.Q6J("ngIf",n.scIconType&&"left"===n.scIconDirection),o.xp6(1),o.Q6J("ngTemplateOutlet",r),o.xp6(1),o.Q6J("ngIf",n.scIconType&&"right"===n.scIconDirection)}}function b(l,e){1&l&&o.Hsn(0)}const w=["*"];let a=(()=>{class l{constructor(n,r){this.ngZone=n,this.elementRef=r,this.scButtonShape=null,this.scButtonSize="default",this.scNoSpacing=!1,this.scButtonType="",this.scIconType="",this.scIconTheme="outline",this.scIconDirection="right",this.scButtonLoading=!1,this.scDisabled=!1,this.scDanger=!1,this.scBlock=!1,this.scType="button",this.scHref="",this.scTarget="_self",this.scRole="button",this.scAriaLabel="button",this.enumButtonType=c.L,this.destroy$=new t.xQ,this.scButtonTypeKeyValue=new Map([["tertiary","sc-tertiary-button"],["ghost","sc-ghost-button"],["primary","sc-primary-button"],["default","sc-default-button"],["text","sc-text-button"],["link","sc-link-button"]])}ngOnInit(){this.ngZone.runOutsideAngular(()=>{(0,g.R)(this.elementRef.nativeElement,"click",{capture:!0}).pipe((0,M.R)(this.destroy$)).subscribe(n=>{var r;this.scDisabled&&"SC-BUTTON"===(null===(r=n.target)||void 0===r?void 0:r.tagName)&&(n.preventDefault(),n.stopImmediatePropagation())})})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(n){return new(n||l)(o.Y36(o.R0b),o.Y36(o.SBq))},l.\u0275cmp=o.Xpm({type:l,selectors:[["sc-button"]],inputs:{scButtonShape:"scButtonShape",scButtonSize:"scButtonSize",scNoSpacing:"scNoSpacing",scButtonType:"scButtonType",scIconType:"scIconType",scIconTheme:"scIconTheme",scIconDirection:"scIconDirection",scButtonLoading:"scButtonLoading",scDisabled:"scDisabled",scDanger:"scDanger",scBlock:"scBlock",scType:"scType",scHref:"scHref",scTarget:"scTarget",scRole:"scRole",scAriaLabel:"scAriaLabel"},ngContentSelectors:w,decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["linkTpl",""],["content",""],["buttonContent",""],["nz-button","",3,"type","nzType","ngClass","nzShape","nzSize","nzLoading","disabled","nzDanger","nzBlock"],[3,"ngTemplateOutlet"],["nz-button","",3,"nzType","ngClass","nzShape","nzSize","nzLoading","disabled","nzDanger","nzBlock","target"],["nz-icon","",3,"nzType","nzTheme",4,"ngIf"],["nz-icon","",3,"nzType","nzTheme"]],template:function(n,r){if(1&n&&(o.F$t(),o.YNc(0,x,3,15,"ng-container",0),o.YNc(1,h,2,14,"ng-template",null,1,o.W1O),o.YNc(3,C,3,3,"ng-template",null,2,o.W1O),o.YNc(5,b,1,0,"ng-template",null,3,o.W1O)),2&n){const s=o.MAs(2);o.Q6J("ngIf",r.scButtonType!=r.enumButtonType.Link)("ngIfElse",s)}},directives:[P.O5,u.ix,m.dQ,f.w,P.mk,P.tP,O.Ls],styles:[".sc-button.sc-tertiary-button[_ngcontent-%COMP%]{color:#1971c2}.sc-button.sc-tertiary-button[_ngcontent-%COMP%]:hover{color:#06379a;background-color:transparent;border:1px solid #06379a}.sc-button.sc-tertiary-button[_ngcontent-%COMP%]:active{border:1px solid #06379a}[_nghost-%COMP%]{display:inline-block}.sc-button.sc-ghost-button[_ngcontent-%COMP%]{color:#222b3d}.sc-button.sc-ghost-button[_ngcontent-%COMP%]:hover{color:#06379a}.sc-button.sc-ghost-button[_ngcontent-%COMP%]:active{border:1px solid #1971c2;box-shadow:0 0 4px #1971c299;background:#ffffff;color:#1971c2}.sc-button.sc-text-button.sc-no-spacing[_ngcontent-%COMP%]{padding:2px;line-height:1em}.sc-button.sc-ghost-button[_ngcontent-%COMP%], .sc-button.sc-tertiary-button[_ngcontent-%COMP%]{border-color:transparent;background-color:transparent;box-shadow:none}.sc-button.sc-ghost-button[_ngcontent-%COMP%]:disabled, .sc-button.sc-ghost-button[_ngcontent-%COMP%]:disabled:hover, .sc-button.sc-ghost-button[_ngcontent-%COMP%]:disabled:focus, .sc-button.sc-ghost-button[_ngcontent-%COMP%]:disabled:active, .sc-button.sc-tertiary-button[_ngcontent-%COMP%]:disabled, .sc-button.sc-tertiary-button[_ngcontent-%COMP%]:disabled:hover, .sc-button.sc-tertiary-button[_ngcontent-%COMP%]:disabled:focus, .sc-button.sc-tertiary-button[_ngcontent-%COMP%]:disabled:active{background:#f0f1f5;color:#8893a7;border-color:transparent;text-shadow:none;box-shadow:none}.sc-button.sc-ghost-button.sc-no-spacing[_ngcontent-%COMP%], .sc-button.sc-tertiary-button.sc-no-spacing[_ngcontent-%COMP%]{padding:0}"],changeDetection:0}),l})()},7661:(E,z,i)=>{i.d(z,{I:()=>e});var t=i(9724),g=i(2720),c=i(1048),M=i(5671),o=i(4299),P=i(8918),u=i(5760),m=i(9735),f=i(4344),O=i(4543);function d(n,r){if(1&n&&t._UZ(0,"nz-avatar",10),2&n){const s=t.oxw(2);t.Tol(s.eyeViewStyleClass)}}function x(n,r){if(1&n){const s=t.EpF();t.TgZ(0,"div",7)(1,"nz-avatar",8),t.NdJ("nzError",function(){return t.CHM(s),t.oxw().onImageLoadError()}),t.qZA(),t.YNc(2,d,1,3,"nz-avatar",9),t.qZA()}if(2&n){const s=t.oxw();t.xp6(1),t.Q6J("nzSize",s.scSize)("nzSrc",s.scImageThumbnailUrl)("nzAlt","Normal size of Headshot image"),t.xp6(1),t.Q6J("ngIf",s.scEditEnabled||s.scQuickViewEnabled&&s.scImageThumbnailUrl&&!s.imageNotFound)}}function h(n,r){if(1&n&&(t.TgZ(0,"div",16),t._uU(1),t.qZA()),2&n){const s=t.oxw(3);t.xp6(1),t.Oqu(s.scIconText)}}function p(n,r){if(1&n){const s=t.EpF();t.TgZ(0,"div",7)(1,"nz-upload",11),t.NdJ("nzChange",function(S){return t.CHM(s),t.oxw(2).fileChanged(S)}),t._UZ(2,"nz-avatar",12),t.TgZ(3,"div",13),t._UZ(4,"i",14),t.YNc(5,h,2,1,"div",15),t.qZA()()()}if(2&n){const s=t.oxw(2);t.xp6(1),t.Q6J("nzAction",s.scActionUrl)("nzShowUploadList",!1)("nzFilter",s.filters),t.xp6(1),t.s9C("nzText",s.scInitials),t.xp6(2),t.Tol(s.uploadIconStyleClass),t.xp6(1),t.Q6J("ngIf",s.scIconText&&s.scSize>=64)}}function T(n,r){if(1&n&&t.YNc(0,p,6,8,"div",1),2&n){const s=t.oxw(),_=t.MAs(6);t.Q6J("ngIf",s.scEditEnabled)("ngIfElse",_)}}function C(n,r){if(1&n&&t._UZ(0,"nz-avatar",12),2&n){const s=t.oxw();t.s9C("nzText",s.scInitials)}}function b(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"div"),t._UZ(2,"img",17),t.qZA(),t.BQk()),2&n){const s=t.oxw();t.xp6(2),t.s9C("src",s.scImageUrl,t.LSH)}}function w(n,r){if(1&n){const s=t.EpF();t.TgZ(0,"button",20),t.NdJ("nzOnConfirm",function(){return t.CHM(s),t.oxw(2).deleteImage()}),t._UZ(1,"i",21),t._uU(2,"Delete Picture "),t.qZA()}}function a(n,r){if(1&n&&(t.TgZ(0,"div",18),t.YNc(1,w,3,0,"button",19),t.qZA()),2&n){const s=t.oxw();t.xp6(1),t.Q6J("ngIf",s.scEditEnabled)}}const l=function(n,r,s){return{"quick-view":n,edit:r,"edit-image":s}};let e=(()=>{class n{constructor(s){this.messageService=s,this.scImageThumbnailUrl="",this.scImageUrl="",this.scInitials="",this.scQuickViewEnabled=!1,this.scEditEnabled=!1,this.scActionUrl="",this.scSize=88,this.scValidExtensions=[".png",".jpeg",".jpg",".gif",".svg"],this.scFullViewWidth=500,this.scIconText="Upload",this.scOnDelete=new t.vpe,this.scOnImageUploaded=new t.vpe,this.scStyleClass="",this.uploadIconStyleClass="",this.eyeViewStyleClass="",this.imageNotFound=!1,this.isFullViewVisible=!1,this.filters=[{name:"type",fn:_=>this.fileTypeFilter(_)}]}ngOnInit(){this.initializeValues()}ngOnChanges(s){s.scSize&&this.initializeValues()}initializeValues(){this.scStyleClass="headshot-"+this.scSize,this.uploadIconStyleClass="upload-icon-"+this.scSize,this.eyeViewStyleClass="full-view eye-view",(24===this.scSize||32===this.scSize||40===this.scSize||48===this.scSize)&&(this.eyeViewStyleClass+="-secondary")}onImageLoadError(){this.imageNotFound=!0}deleteImage(){this.isFullViewVisible=!1,this.scOnDelete.emit()}fileChanged(s){"done"===s.file.status&&this.scOnImageUploaded.emit(s.file.response)}fileTypeFilter(s){const _=new RegExp(`(${this.scValidExtensions.join("|").replace(/\./g,"\\.")})$`),S=s.find(v=>!_.test(v.name.toLowerCase()));return S?(this.messageService.error(`Invalid File type (${S.name.split(".").pop()})`),[]):s}headshotClick(){(this.scEditEnabled||this.scQuickViewEnabled)&&this.scImageThumbnailUrl&&!this.imageNotFound&&(this.isFullViewVisible=!0)}}return n.\u0275fac=function(s){return new(s||n)(t.Y36(g.dD))},n.\u0275cmp=t.Xpm({type:n,selectors:[["sc-headshot"]],inputs:{scImageThumbnailUrl:"scImageThumbnailUrl",scImageUrl:"scImageUrl",scInitials:"scInitials",scQuickViewEnabled:"scQuickViewEnabled",scEditEnabled:"scEditEnabled",scActionUrl:"scActionUrl",scSize:"scSize",scValidExtensions:"scValidExtensions",scFullViewWidth:"scFullViewWidth",scIconText:"scIconText"},outputs:{scOnDelete:"scOnDelete",scOnImageUploaded:"scOnImageUploaded"},features:[t.TTD],decls:10,vars:13,consts:[[1,"headshot-area",3,"ngClass","click"],["class","headshot",4,"ngIf","ngIfElse"],["defaultHeadshotTemplate",""],["readOnlyDefaultTpl",""],["nzWrapClassName","full-view",3,"nzMask","nzWidth","nzVisible","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["class","delete-picture",4,"nzModalFooter"],[1,"headshot"],[3,"nzSize","nzSrc","nzAlt","nzError"],["nzIcon","eye",3,"class",4,"ngIf"],["nzIcon","eye"],["nzType","drag","nzName","avatar",1,"avatar-uploader",3,"nzAction","nzShowUploadList","nzFilter","nzChange"],[1,"headshot","initials",3,"nzText"],[1,"upload"],["nz-icon","","nzType","plus"],["class","upload-text",4,"ngIf"],[1,"upload-text"],["width","100%","alt","Full size of Headshot image",3,"src"],[1,"delete-picture"],["nz-popconfirm","","nzPopconfirmTitle","Are you sure you want to delete this profile picture?","nzPopconfirmPlacement","left","nz-button","","nzType","link",3,"nzOnConfirm",4,"ngIf"],["nz-popconfirm","","nzPopconfirmTitle","Are you sure you want to delete this profile picture?","nzPopconfirmPlacement","left","nz-button","","nzType","link",3,"nzOnConfirm"],["nz-icon","","nzType","outline:delete",1,"clickable"]],template:function(s,_){if(1&s&&(t.TgZ(0,"div")(1,"div",0),t.NdJ("click",function(){return _.headshotClick()}),t.YNc(2,x,3,4,"div",1),t.YNc(3,T,1,2,"ng-template",null,2,t.W1O),t.YNc(5,C,1,1,"ng-template",null,3,t.W1O),t.qZA(),t.TgZ(7,"nz-modal",4),t.NdJ("nzVisibleChange",function(v){return _.isFullViewVisible=v})("nzOnCancel",function(){return _.isFullViewVisible=!1}),t.YNc(8,b,3,1,"ng-container",5),t.YNc(9,a,2,1,"div",6),t.qZA()()),2&s){const S=t.MAs(4);t.Tol(_.scStyleClass),t.xp6(1),t.Q6J("ngClass",t.kEZ(9,l,_.scQuickViewEnabled&&_.scImageThumbnailUrl&&!_.imageNotFound&&!_.scEditEnabled,_.scEditEnabled,_.scEditEnabled&&_.scImageThumbnailUrl&&!_.imageNotFound)),t.xp6(1),t.Q6J("ngIf",_.scImageThumbnailUrl&&!_.imageNotFound)("ngIfElse",S),t.xp6(5),t.Q6J("nzMask",!1)("nzWidth",_.scFullViewWidth)("nzVisible",_.isFullViewVisible)}},directives:[c.mk,c.O5,M.Dz,o.FY,P.w,u.Ls,m.du,m.Hf,m.Uh,f.ix,O.JW],styles:["[_nghost-%COMP%]{display:block}.headshot-24[_ngcontent-%COMP%], .headshot-24[_ngcontent-%COMP%]   .headshot.initials[_ngcontent-%COMP%]{height:24px;width:24px;min-width:24px;font-size:12px}.headshot-32[_ngcontent-%COMP%], .headshot-32[_ngcontent-%COMP%]   .headshot.initials[_ngcontent-%COMP%]{height:32px;width:32px;min-width:32px;font-size:16px}.headshot-40[_ngcontent-%COMP%], .headshot-40[_ngcontent-%COMP%]   .headshot.initials[_ngcontent-%COMP%]{height:40px;width:40px;min-width:40px;font-size:18px}.headshot-48[_ngcontent-%COMP%], .headshot-48[_ngcontent-%COMP%]   .headshot.initials[_ngcontent-%COMP%]{height:48px;width:48px;min-width:48px;font-size:20px}.headshot-64[_ngcontent-%COMP%], .headshot-64[_ngcontent-%COMP%]   .headshot.initials[_ngcontent-%COMP%]{height:64px;width:64px;min-width:64px;font-size:30px}.headshot-72[_ngcontent-%COMP%], .headshot-72[_ngcontent-%COMP%]   .headshot.initials[_ngcontent-%COMP%]{height:72px;width:72px;min-width:72px;font-size:35px}.headshot-80[_ngcontent-%COMP%], .headshot-80[_ngcontent-%COMP%]   .headshot.initials[_ngcontent-%COMP%]{height:80px;width:80px;min-width:80px;font-size:36px}.headshot-88[_ngcontent-%COMP%], .headshot-88[_ngcontent-%COMP%]   .headshot.initials[_ngcontent-%COMP%]{height:88px;width:88px;min-width:88px;font-size:40px}[_nghost-%COMP%]     .ant-upload.ant-upload-drag .anticon-plus.upload-icon-88{font-size:26px}[_nghost-%COMP%]     .ant-upload.ant-upload-drag .anticon-plus.upload-icon-80{font-size:25px}[_nghost-%COMP%]     .ant-upload.ant-upload-drag .anticon-plus.upload-icon-72{font-size:23px}[_nghost-%COMP%]     .ant-upload.ant-upload-drag .anticon-plus.upload-icon-64{font-size:21px}[_nghost-%COMP%]     .ant-upload.ant-upload-drag .anticon-plus.upload-icon-48{font-size:15px}[_nghost-%COMP%]     .ant-upload.ant-upload-drag .anticon-plus.upload-icon-40{font-size:13px}[_nghost-%COMP%]     .ant-upload.ant-upload-drag .anticon-plus.upload-icon-32{font-size:11px}[_nghost-%COMP%]     .ant-upload.ant-upload-drag .anticon-plus.upload-icon-24{font-size:10px}.headshot-area[_ngcontent-%COMP%]{width:100%;height:100%}.headshot-area[_ngcontent-%COMP%]   .headshot[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;background-size:cover;background-position:center center;border-radius:50%;width:100%;height:100%;font-size:inherit;font-weight:600;overflow:hidden}.headshot-area[_ngcontent-%COMP%]   .headshot[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:inherit;width:100%;object-fit:cover}.headshot-area[_ngcontent-%COMP%]   .headshot[_ngcontent-%COMP%]   .full-view[_ngcontent-%COMP%]{color:#fff;background-color:#dce0e8;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:none}.headshot-area[_ngcontent-%COMP%]   .headshot[_ngcontent-%COMP%]   .eye-view[_ngcontent-%COMP%]{font-size:23px}.headshot-area[_ngcontent-%COMP%]   .headshot[_ngcontent-%COMP%]     .ant-upload, .headshot-area[_ngcontent-%COMP%]   .headshot[_ngcontent-%COMP%]     .ant-upload-drag{padding:0}.headshot-area[_ngcontent-%COMP%]   .headshot.initials[_ngcontent-%COMP%]{color:#fff;background-color:#dce0e8}.headshot-area[_ngcontent-%COMP%]   .headshot.initials[_ngcontent-%COMP%]     .ant-avatar-string{position:absolute;left:50%;transform:scale(1) translate(-50%)}.headshot-area[_ngcontent-%COMP%]   .quick-view-icon[_ngcontent-%COMP%]{display:none;background-color:#8893a7;color:#fff}.headshot-area.quick-view[_ngcontent-%COMP%]{cursor:pointer}.headshot-area.quick-view   [_nghost-%COMP%]     .quick-view-icon svg{width:50%;height:50%}.headshot-area.quick-view[_ngcontent-%COMP%]:hover   .full-view[_ngcontent-%COMP%]{height:100%;width:100%;line-height:22px;font-size:15px;background:#00000069;display:flex;align-items:center;justify-content:center}.headshot-area.quick-view[_ngcontent-%COMP%]:hover   .quick-view-icon[_ngcontent-%COMP%]{display:flex}.headshot-area.edit[_ngcontent-%COMP%]   nz-upload[_ngcontent-%COMP%]{width:100%;height:100%}.headshot-area.edit[_ngcontent-%COMP%]   nz-upload[_ngcontent-%COMP%]     .ant-upload.ant-upload-drag{border:none}.headshot-area.edit[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%]{display:none;flex-direction:column;align-items:center;color:#dce0e8}.headshot-area.edit[_ngcontent-%COMP%]   .upload-text[_ngcontent-%COMP%]{color:#666e7d}.headshot-area.edit[_ngcontent-%COMP%]:hover{cursor:pointer;border:1px dashed #1971c2;border-radius:50%}.headshot-area.edit[_ngcontent-%COMP%]:hover   .full-view[_ngcontent-%COMP%]{height:100%;width:100%;line-height:22px;font-size:15px;background:#00000069;display:flex;align-items:center;justify-content:center}.headshot-area.edit[_ngcontent-%COMP%]:hover   .headshot.initials[_ngcontent-%COMP%]{display:none}.headshot-area.edit[_ngcontent-%COMP%]:hover   .upload[_ngcontent-%COMP%]{display:flex}.headshot-area.edit-image[_ngcontent-%COMP%]:hover{border:none}[_nghost-%COMP%]     .ant-modal-wrap.full-view .ant-modal-body{padding:0}.delete-picture[_ngcontent-%COMP%]{font-size:16px;display:flex;align-items:center;justify-content:flex-end}.delete-picture[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none}"],changeDetection:0}),n})()},8697:(E,z,i)=>{i.d(z,{_:()=>M});var t=i(9724);const g='<span class="search-text-highlight">',c="</span>";let M=(()=>{class o{transform(u,m,f=!1){if(!u||!m)return u;const O=u?u.toString():"",d=m?m.toString():"";return f?this.highglightContainedSearchText(O,d):this.highlightOnWordBoundary(O,d)}highglightContainedSearchText(u,m){const f=u.toLocaleLowerCase().indexOf(m.toLocaleLowerCase());if(f<0)return u;const O=u.substring(0,f),d=u.substring(f,f+m.length),x=u.substring(f+m.length);return`${O}${g}${d}${c}${x}`}highlightOnWordBoundary(u,m){const f=m.split(" ").filter(d=>d&&d.trim()).sort((d,x)=>x.length-d.length);let O=u.split(/(\s+)/).filter(d=>d);return f.forEach(d=>{O=O.map(x=>x.replace(new RegExp(`^${d}`,"i"),function(h){return h.startsWith(g)?h:`${g}${h}${c}`}))}),O.join("")}}return o.\u0275fac=function(u){return new(u||o)},o.\u0275pipe=t.Yjl({name:"prefixHighlight",type:o,pure:!0}),o})()},6368:(E,z,i)=>{i.d(z,{f:()=>w});var t=i(9724),g=i(8646),c=i(1062),M=i(1996),o=i(1048),P=i(8918),u=i(5535);function m(a,l){if(1&a&&t._UZ(0,"span"),2&a){const e=t.oxw().$implicit,n=t.oxw(3);t.Gre("badge-circle ",n.getStatusClass(e),"")}}function f(a,l){if(1&a&&t._UZ(0,"span"),2&a){const e=t.oxw().$implicit,n=t.oxw(3);t.Gre("doughnut ",n.getStatusClass(e),"")}}function O(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"li",7),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(3).selectStatus(s)}),t.TgZ(1,"div",8)(2,"div",9),t.YNc(3,m,1,3,"span",10),t.YNc(4,f,1,3,"span",10),t.qZA(),t.TgZ(5,"div",11)(6,"span",12),t._uU(7),t.qZA()()()()}if(2&a){const e=l.$implicit,n=t.oxw(3);t.xp6(3),t.Q6J("ngIf",!n.showDoughnut),t.xp6(1),t.Q6J("ngIf",n.showDoughnut),t.xp6(3),t.Oqu(e.name)}}function d(a,l){if(1&a&&(t.TgZ(0,"div")(1,"span",5),t._uU(2),t.qZA(),t.YNc(3,O,8,3,"li",6),t.qZA()),2&a){const e=l.$implicit;t.xp6(2),t.Oqu(e.value.name),t.xp6(1),t.Q6J("ngForOf",e.value.statuses)}}function x(a,l){if(1&a&&(t.ynx(0),t.YNc(1,d,4,2,"div",4),t.ALo(2,"keyvalue"),t.BQk()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,e.stageStatusesMap,e.keepOrder))}}function h(a,l){if(1&a&&t._UZ(0,"span"),2&a){const e=t.oxw(2).$implicit,n=t.oxw(2);t.Gre("badge-circle ",n.getStatusClass(e),"")}}function p(a,l){if(1&a&&t._UZ(0,"span"),2&a){const e=t.oxw(2).$implicit,n=t.oxw(2);t.Gre("doughnut badge-circle ",n.getStatusClass(e),"")}}function T(a,l){if(1&a&&(t.TgZ(0,"div",9),t.YNc(1,h,1,3,"span",10),t.YNc(2,p,1,3,"span",10),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",!e.showDoughnut),t.xp6(1),t.Q6J("ngIf",e.showDoughnut)}}function C(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"li",7),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(2).selectStatus(s)}),t.TgZ(1,"div",8),t.YNc(2,T,3,2,"div",13),t.TgZ(3,"div",14)(4,"span",12),t._uU(5),t.qZA()()()()}if(2&a){const e=l.$implicit,n=t.oxw(2);t.xp6(2),t.Q6J("ngIf",n.showDots),t.xp6(1),t.Q6J("nzSpan",n.showDots?21:24),t.xp6(2),t.Oqu(e.name)}}function b(a,l){if(1&a&&t.YNc(0,C,6,3,"li",6),2&a){const e=t.oxw();t.Q6J("ngForOf",e.statuses)}}let w=(()=>{class a{constructor(){this.statuses=[],this.showStage=!1,this.showDots=!0,this.showDoughnut=!1,this.select=new t.vpe,this.getStatusClass=g.m,this.keepOrder=()=>1}ngOnInit(){if(this.showStage){let e={};this.stageStatusesMap=this.statuses.reduce((n,r)=>(null!=r.stage&&(e[r.stage.displayIndex]=e[r.stage.displayIndex]||{name:r.stage.name,statuses:[]},e[r.stage.displayIndex].statuses.push(r)),e),{})}}ngOnChanges(e){const{statuses:n}=e;this.showStage&&n&&n.currentValue&&(this.stageStatusesMap=this.statuses.reduce((r,s)=>{let _={};return null!=s.stage&&(_[s.stage.displayIndex]=_[s.stage.displayIndex]||{name:s.stage.name,statuses:[]},_[s.stage.displayIndex].statuses.push(s)),_},{}))}selectStatus(e){this.select.emit(e)}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["sc-status-select-menu"]],inputs:{statuses:"statuses",showStage:"showStage",showDots:"showDots",showDoughnut:"showDoughnut"},outputs:{select:"select"},features:[t.TTD],decls:5,vars:3,consts:[["nz-menu","",1,"status-dropdown"],[3,"nzSpinning"],[4,"ngIf","ngIfElse"],["statusOnlyMenu",""],[4,"ngFor","ngForOf"],[1,"stage-label"],["nz-menu-item","",3,"click",4,"ngFor","ngForOf"],["nz-menu-item","",3,"click"],["nz-row","",1,"status-item"],["nz-col","","nzSpan","3"],[3,"class",4,"ngIf"],["nz-col","","nzSpan","21",1,"status-label-wrap"],[1,"status-label"],["nz-col","","nzSpan","3",4,"ngIf"],["nz-col","",1,"status-label-wrap",3,"nzSpan"]],template:function(e,n){if(1&e&&(t.TgZ(0,"ul",0)(1,"nz-spin",1),t.YNc(2,x,3,4,"ng-container",2),t.qZA(),t.YNc(3,b,1,1,"ng-template",null,3,t.W1O),t.qZA()),2&e){const r=t.MAs(4);t.xp6(1),t.Q6J("nzSpinning",!(null!=n.statuses&&n.statuses.length)),t.xp6(1),t.Q6J("ngIf",n.showStage)("ngIfElse",r)}},directives:[c.wO,M.W,o.O5,o.sg,P.w,c.r9,u.SK,u.t3],pipes:[o.Nd],styles:[".status-dropdown[_ngcontent-%COMP%]{max-height:300px;overflow:auto}.status-dropdown[_ngcontent-%COMP%]   .stage-label[_ngcontent-%COMP%]{padding:0 12px;font-size:12px;color:#666e7d}.status-dropdown[_ngcontent-%COMP%]   .badge-circle[_ngcontent-%COMP%]{border:4px solid;border-radius:4px;display:inline-block;margin:0 8px}.status-dropdown[_ngcontent-%COMP%]   .doughnut[_ngcontent-%COMP%]{border:2px solid;border-radius:8px;height:8px;width:8px;min-width:8px;display:inline-block;margin:0 8px}.status-dropdown[_ngcontent-%COMP%]   .status-label[_ngcontent-%COMP%]{font-size:14px;color:#222b3d}.status-dropdown[_ngcontent-%COMP%]   .status-item[_ngcontent-%COMP%]{width:100%}.status-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px}.status-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{height:4px;width:10px;border-radius:3px;background-color:#cacfdb}.status-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#8893a7}.status-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f0f1f5}nz-spin[_ngcontent-%COMP%]{width:240px}.started-stage[_ngcontent-%COMP%]{color:#cc2e63}.started-stage.with-background[_ngcontent-%COMP%]{background:rgba(204,46,99,.1)}.inprogress-stage[_ngcontent-%COMP%]{color:#f4ed61}.inprogress-stage.with-background[_ngcontent-%COMP%]{background:rgba(244,237,97,.1)}.complete-stage[_ngcontent-%COMP%]{color:#37ad67}.complete-stage.with-background[_ngcontent-%COMP%]{background:rgba(55,173,103,.1)}.inactive-stage[_ngcontent-%COMP%]{color:#222b3d;text-shadow:none}.inactive-stage.with-background[_ngcontent-%COMP%]{background:rgba(34,43,61,.1)}.no-stage[_ngcontent-%COMP%]{color:#222b3d;text-shadow:none}.no-stage.with-background[_ngcontent-%COMP%]{background:#f0f1f5}.rejected-stage[_ngcontent-%COMP%]{color:#222b3d;text-shadow:none}.rejected-stage.with-background[_ngcontent-%COMP%]{background:#ffffff}.no-applications-stage[_ngcontent-%COMP%]{color:#666e7d;text-shadow:none}"],changeDetection:0}),a})()},7835:(E,z,i)=>{i.d(z,{k:()=>O});var t=i(9724),g=i(8646),c=i(2464),M=i(1048),o=i(8918),P=i(5760),u=i(6368),m=i(8697);function f(d,x){if(1&d&&(t.ynx(0),t._UZ(1,"span",5),t.ALo(2,"prefixHighlight"),t.BQk()),2&d){const h=t.oxw();t.xp6(1),t.Q6J("innerHTML",t.xi3(2,1,h.selectedStatus.name,h.highlightKeyword),t.oJD)}}let O=(()=>{class d{constructor(){this.statuses=[],this.showStage=!1,this.highlightKeyword="",this.showClosed=!1,this.showDots=!0,this.scTrigger="click",this.select=new t.vpe,this.getStatusClass=g.m,this.dropDownVisible=!1}ngOnInit(){}ngOnChanges(h){const{statuses:p}=h;this.showStage&&p&&p.currentValue&&(this.stageStatusesMap=this.statuses.reduce((T,C)=>{let b={};return null!=C.stage&&(b[C.stage.displayIndex]=b[C.stage.displayIndex]||{name:C.stage.name,statuses:[]},b[C.stage.displayIndex].statuses.push(C)),b},{}))}selectStatus(h){this.selectedStatus=h,this.select.emit(h)}}return d.\u0275fac=function(h){return new(h||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["sc-status-select"]],inputs:{selectedStatus:"selectedStatus",statuses:"statuses",showStage:"showStage",highlightKeyword:"highlightKeyword",showClosed:"showClosed",showDots:"showDots",scTrigger:"scTrigger"},outputs:{select:"select"},features:[t.TTD],decls:6,vars:12,consts:[["nz-dropdown","",3,"nzTrigger","nzDropdownMenu","nzVisible","nzVisibleChange"],[4,"ngIf"],["nz-icon","",1,"down",3,"nzType"],["statusMenu","nzDropdownMenu"],[3,"statuses","showStage","showDots","select"],[3,"innerHTML"]],template:function(h,p){if(1&h&&(t.TgZ(0,"div",0),t.NdJ("nzVisibleChange",function(C){return p.dropDownVisible=C}),t.YNc(1,f,3,4,"ng-container",1),t._UZ(2,"i",2),t.qZA(),t.TgZ(3,"nz-dropdown-menu",null,3)(5,"sc-status-select-menu",4),t.NdJ("select",function(C){return p.selectStatus(C)}),t.qZA()()),2&h){const T=t.MAs(4);t.MT6("clickable selected-status\n  ",p.showStage?p.getStatusClass(p.selectedStatus):"","\n  ",p.showClosed&&p.selectedStatus?p.selectedStatus.closed?"closed-status":"open-status":"inactive-status","\n  with-background"),t.Q6J("nzTrigger",p.scTrigger)("nzDropdownMenu",T)("nzVisible",p.dropDownVisible),t.xp6(1),t.Q6J("ngIf",p.selectedStatus),t.xp6(1),t.Q6J("nzType",p.dropDownVisible?"up":"down"),t.xp6(3),t.Q6J("statuses",p.statuses)("showStage",p.showStage)("showDots",p.showDots)}},directives:[c.cm,M.O5,o.w,P.Ls,c.RR,u.f],pipes:[m._],styles:[".selected-status[_ngcontent-%COMP%]{text-transform:uppercase;display:inline-block;padding:2.5px 8px;border-radius:4px;font-size:12px;font-weight:600;letter-spacing:-.1px}.selected-status[_ngcontent-%COMP%]   .down[_ngcontent-%COMP%]{margin-left:8px;font-size:10px;vertical-align:baseline}.with-background[_ngcontent-%COMP%]{background:#f0f1f5}.inactive-stage[_ngcontent-%COMP%]{color:#8893a7;text-shadow:none}.closed-status[_ngcontent-%COMP%]{color:#222b3d;text-shadow:none}.open-status[_ngcontent-%COMP%]{color:#046005;text-shadow:none}.open-status.with-background[_ngcontent-%COMP%]{background:#def5d3}"],changeDetection:0}),d})()},8646:(E,z,i)=>{i.d(z,{m:()=>g});const g=c=>{if(c&&c.stage){if(c.closed&&null===c.stage)return"no-stage";if(c.closed)return"rejected-stage";if(c.stage.progress)return`${c.stage.progress}-stage`}return"no-stage"}},4054:(E,z,i)=>{i.d(z,{F:()=>P});var t=i(4344),g=i(2464),c=i(5665),M=i(5760),o=i(8915);const P=[t.sL,g.b1,c.aF,M.PV,o.t]},8222:(E,z,i)=>{i.d(z,{$1:()=>p,NU:()=>b,zf:()=>w});var t=i(497),g=i(1048),c=i(9724),M=i(4762),o=i(9765),P=i(6782),u=i(7854),m=i(7730);function f(a,l){}const O=function(a){return{$implicit:a}};function d(a,l){if(1&a&&(c.TgZ(0,"span",4),c.YNc(1,f,0,0,"ng-template",5),c.qZA()),2&a){const e=c.oxw(),n=e.last,r=e.index,s=c.oxw();c.Udp("margin-bottom","vertical"===s.nzDirection?n?null:s.spaceSize:null,"px")("margin-right","horizontal"===s.nzDirection?n?null:s.spaceSize:null,"px"),c.xp6(1),c.Q6J("ngTemplateOutlet",s.nzSplit)("ngTemplateOutletContext",c.VKq(6,O,r))}}function x(a,l){if(1&a&&(c.TgZ(0,"div",1),c.GkF(1,2),c.qZA(),c.YNc(2,d,2,8,"span",3)),2&a){const e=l.$implicit,n=l.last,r=c.oxw();c.Udp("margin-bottom","vertical"===r.nzDirection?n?null:r.spaceSize:null,"px")("margin-right","horizontal"===r.nzDirection?n?null:r.spaceSize:null,"px"),c.xp6(1),c.Q6J("ngTemplateOutlet",e),c.xp6(1),c.Q6J("ngIf",r.nzSplit&&!n)}}const h=["*"];let p=(()=>{class a{constructor(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275dir=c.lG2({type:a,selectors:[["","nzSpaceItem",""]]}),a})();const C={small:8,middle:16,large:24};let b=(()=>{class a{constructor(e,n){this.nzConfigService=e,this.cdr=n,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=C.small,this.destroy$=new o.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?C[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,P.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return a.\u0275fac=function(e){return new(e||a)(c.Y36(u.jY),c.Y36(c.sBO))},a.\u0275cmp=c.Xpm({type:a,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(e,n,r){if(1&e&&c.Suo(r,p,4,c.Rgc),2&e){let s;c.iGM(s=c.CRH())&&(n.items=s)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(e,n){2&e&&(c.Udp("flex-wrap",n.nzWrap?"wrap":null),c.ekj("ant-space-horizontal","horizontal"===n.nzDirection)("ant-space-vertical","vertical"===n.nzDirection)("ant-space-align-start","start"===n.mergedAlign)("ant-space-align-end","end"===n.mergedAlign)("ant-space-align-center","center"===n.mergedAlign)("ant-space-align-baseline","baseline"===n.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[c.TTD],ngContentSelectors:h,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,n){1&e&&(c.F$t(),c.Hsn(0),c.YNc(1,x,3,6,"ng-template",0)),2&e&&(c.xp6(1),c.Q6J("ngForOf",n.items))},directives:[g.sg,g.tP,g.O5],encapsulation:2,changeDetection:0}),(0,M.gn)([(0,m.yF)()],a.prototype,"nzWrap",void 0),(0,M.gn)([(0,u.oS)()],a.prototype,"nzSize",void 0),a})(),w=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({imports:[[t.vT,g.ez]]}),a})()}}]);