define(["ojs/ojcore","knockout","jquery","ojs/ojbootstrap","ojs/ojresponsiveutils","ojs/ojresponsiveknockoututils","ojs/ojknockout","ojs/ojavatar","ojs/ojfilepicker","ojs/ojlabel","ojs/ojinputtext","ojs/ojformlayout","ojs/ojbutton"],function(e,o,t,n,i,r){return new function(){var e=this;e.fileNames=o.observableArray([]),e.selectListener=function(o){for(var t=o.detail.files,n=0;n<t.length;n++)e.fileNames.push(t[n].name)},e.isSmall=r.createMediaQueryObservable(i.getFrameworkQuery(i.FRAMEWORK_QUERY_KEY.SM_ONLY)),e.labelEdge=o.computed(function(){return e.isSmall()?"top":"start"},e),e.clickedButton=o.observable("(None clicked yet)"),e.buttonClick=function(o){return e.clickedButton(o.currentTarget.id),!0}.bind(e),e.value=o.observable("What"),e.connected=function(){},e.disconnected=function(){},e.transitionCompleted=function(){}}});