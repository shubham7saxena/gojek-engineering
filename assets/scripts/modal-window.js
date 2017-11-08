var ModalWindow=function(){var n=function(n,t){this.targetElement=n,this.id=t,this.initialize()};return n.prototype={initialize:function(){this.closeButtonElement=this.targetElement.getElementsByClassName("modal__close")[0],this.wireUpEvents()},open:function(){this.targetElement.classList.add("show"),document.body.classList.add("overflow--hide")},close:function(){this.targetElement.classList.remove("show"),document.body.classList.remove("overflow--hide")},wireUpEvents:function(){var n=this;n.closeButtonElement.onclick=function(){n.close()}}},n}(),NullModalWindow=function(){var n=function(){};return n.prototype={open:function(){},close:function(){}},n}(),ModalWindows=function(){var n=function(n){this.targetClassName=n,this.modalWindows={},this.nowShowingModal=new NullModalWindow,this.initialize()};return n.prototype={initialize:function(){this.modalWindowElements=document.getElementsByClassName(this.targetClassName),this.setupModals(),this.ensureOpenModalClosesOnEsc(),this.openWindowIfSetInUrlHash()},setupModals:function(){for(var n=this,t=0;t<this.modalWindowElements.length;t++){var o=this.modalWindowElements[t],e=o.getAttribute("id"),i=document.querySelector("a."+e),s=new ModalWindow(o,e);n.modalWindows[e]=s,i.onclick=function(t){var o=this;t.stopPropagation(),t.preventDefault(),n.openWindow(o.getAttribute("name"))}}},openWindow:function(n){var t=this,o=t.modalWindows[n];o!==undefined&&(window.location.hash="#"+n,o.open(),t.nowShowingModal=o)},openWindowIfSetInUrlHash:function(){this.openWindow(window.location.hash.substr(1))},closeCurrentlyOpenWindow:function(){this.nowShowingModal.close(),this.nowShowingModal=new NullModalWindow},ensureOpenModalClosesOnEsc:function(){var n=this;document.addEventListener("keyup",function(t){27===t.keyCode&&n.closeCurrentlyOpenWindow()})}},n}();