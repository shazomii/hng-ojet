define(["knockout","jquery","ojs/ojformlayout","ojs/ojselectcombobox","ojs/ojinputtext"],function(e,s){return new function(s){var o=this;o.isSmall=oj.ResponsiveKnockoutUtils.createMediaQueryObservable(oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY)),o.labelEdge=e.computed(function(){return o.isSmall()?"top":"start"},o);const t=oj.Router.rootInstance;o.firstName=e.observable(""),o.lastName=e.observable(""),o.email=e.observable(""),o.hngCode=e.observable(""),o.stack=e.observableArray([]),o.url=e.observable(""),o.taskDescription=e.observable(""),o.submit=(()=>{if(""===o.firstName()||""===o.lastName()||""===o.email()||""===o.hngCode()||""===o.url()||""===o.taskDescription())return void((e,s="error")=>{const o=document.querySelector(".message");o.classList.add(`${s}`),o.innerHTML=`${e}`,o.style.display="block",setTimeout(()=>{o.style.display="none"},3e3)})("Please fill all fields");const e={firstname:o.firstName(),lastname:o.lastName(),stack:o.stack(),email:o.email(),hng_code:o.hngCode(),url:o.url(),task_description:o.taskDescription()};console.log(e),t.go("dashboard")})}});