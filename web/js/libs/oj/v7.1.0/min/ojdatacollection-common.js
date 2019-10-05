/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(["ojs/ojcore","jquery"],function(e,t){"use strict";var n=function(){};return n._TAB_INDEX="tabIndex",n._DATA_OJ_TABMOD="data-oj-tabmod",n.getFocusableElementsInNode=function(e,t){for(var n=[],r=e.querySelectorAll("input, select, button, a, textarea, object, [tabIndex]:not([tabIndex='-1'])"),a=r.length,l=0;l<a;l++){var o=r[l];if(!o.disabled&&(t||"none"!==o.style.display)){var u=parseInt(o.getAttribute("tabIndex"),10);(isNaN(u)||u>=0)&&n.push(o)}}return n},n.disableAllFocusableElements=function(e,t,r){for(var a=[],l=n.getFocusableElementsInNode(e,t),o=0;o<l.length;o++)if(!r||l[o]!==document.activeElement){var u=parseInt(l[o].getAttribute(n._TAB_INDEX),10);l[o].setAttribute(n._DATA_OJ_TABMOD,u),l[o].setAttribute(n._TAB_INDEX,-1),a.push(l[o])}return a},n.enableAllFocusableElements=function(e){for(var t=e.querySelectorAll("["+n._DATA_OJ_TABMOD+"]"),r=0;r<t.length;r++){var a=parseInt(t[r].getAttribute(n._DATA_OJ_TABMOD),10);t[r].removeAttribute(n._DATA_OJ_TABMOD),isNaN(a)?t[r].removeAttribute(n._TAB_INDEX):t[r].setAttribute(n._TAB_INDEX,a)}return t},n.handleActionableTab=function(e,t){var r=n.getFocusableElementsInNode(t);return r.length>0&&e.target===r[r.length-1]&&(r[0].focus(),!0)},n.handleActionablePrevTab=function(e,t){var r=n.getFocusableElementsInNode(t);return r.length>0&&e.target===r[0]&&(r[r.length-1].focus(),!0)},n});