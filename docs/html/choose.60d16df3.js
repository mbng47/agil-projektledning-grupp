const e=document.getElementById("question1"),t=document.getElementById("question2"),n=document.getElementById("question3"),o=document.getElementById("question4"),s=document.getElementById("question5"),l=document.getElementById("question6");let c={};e.addEventListener("submit",(function(n){n.preventDefault();let o=Array.from(e.elements.occupation).filter((e=>e.checked)).map((e=>e.value));c.occupation=o,e.classList.add("hide"),t.classList.remove("hide"),console.log(c)})),t.addEventListener("submit",(function(e){e.preventDefault();let o=Array.from(t.elements.industry).filter((e=>e.checked)).map((e=>e.value));c.industry=o,t.classList.add("hide"),n.classList.remove("hide"),console.log(c)})),n.addEventListener("submit",(function(e){let t;e.preventDefault();document.getElementsByName("workplace").forEach((e=>{e.checked&&(t=e.value)})),c.workplace=t,n.classList.add("hide"),o.classList.remove("hide"),console.log(c)})),o.addEventListener("submit",(function(e){let t;e.preventDefault();document.getElementsByName("size").forEach((e=>{e.checked&&(t=e.value)})),c.size=t,o.classList.add("hide"),s.classList.remove("hide"),console.log(c)})),s.addEventListener("submit",(function(e){let t;e.preventDefault();document.getElementsByName("culture").forEach((e=>{e.checked&&(t=e.value)})),c.culture=t,s.classList.add("hide"),l.classList.remove("hide"),console.log(c)})),l.addEventListener("submit",(function(e){let t;e.preventDefault();document.getElementsByName("location").forEach((e=>{e.checked&&(t=e.value)})),c.location=t,console.log(c),window.location.href="forForetag.html"}));
//# sourceMappingURL=choose.60d16df3.js.map
