!function(){let t;let e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");e.addEventListener("click",function(){e.disabled=!0,d.disabled=!1,t=setInterval(()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`},1e3)}),d.addEventListener("click",function(){e.disabled=!1,d.disabled=!0,clearInterval(t)})}();//# sourceMappingURL=01-color-switcher.820c72a5.js.map

//# sourceMappingURL=01-color-switcher.820c72a5.js.map
