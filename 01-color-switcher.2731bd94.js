!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.querySelector("body");var r=function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));a.style.backgroundColor=t};t.addEventListener("click",(function(){t.disabled=!0;setInterval(r,1e3)})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(timerId)}))}();
//# sourceMappingURL=01-color-switcher.2731bd94.js.map
