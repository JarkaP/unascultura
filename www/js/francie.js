var francieClass=document.getElementsByClassName("francieClass");window.onload=function(){drawFr()};function fadeIn(b){TweenMax.to(b,2,{autoAlpha:1,display:"block"})}function fadeOut(b){TweenMax.to(b,0.5,{display:"none"})}function hide(b){TweenMax.set(b,{css:{visibility:"hidden"}})}function show(b){TweenMax.set(b,{css:{visibility:"visible"}})}function hideOn(d,c){TweenMax.set(d,{css:{visibility:"hidden"},onComplete:c})}drawFr=function(){TweenMax.set(francieB,{xPercent:"-15",yPercent:"-30%"});show(francieB);TweenMax.set(francieClass,{xPercent:"20",yPercent:"10%"});if(window.innerWidth<705){TweenMax.set(francieB,{xPercent:"-15",yPercent:"-10%"});TweenMax.set(francieClass,{xPercent:"10",yPercent:"15%"})}show(francie);TweenMax.from(francieB,3,{opacity:0});TweenMax.from(francie,3,{opacity:0,onComplete:rotFr1})};rotFr1=function(){TweenMax.to(frPath,3,{rotation:-180,transformOrigin:"center center",onComplete:drawFr1})};drawFr1=function(){show(frP1);TweenMax.from(frP1,1,{opacity:0});if(window.innerWidth<640||window.innerHeight<500){fadeIn("#dialog1")}frP1text.addEventListener("click",function(a){fadeOut("#dialog1");hide("#frP1text");hideOn(frP1,rotFr2)},false);c1.addEventListener("click",function(a){fadeOut("#dialog1");hide("#frP1text");hideOn(frP1,rotFr2)},false)};rotFr2=function(){TweenMax.to(frPath,3,{rotation:45,transformOrigin:"center center",onComplete:drawFr2})};drawFr2=function(){if(window.innerWidth<640||window.innerHeight<500){fadeIn("#dialog2")}show(frP1);show(frP2);TweenMax.from(frP2,1,{opacity:0});frP2img.addEventListener("click",function(a){fadeOut("#dialog2");hide(frP1);hide(frP2img);hideOn(frP2,rotFr3)},false);c2.addEventListener("click",function(a){fadeOut("#dialog2");hide(frP1);hide(frP2img);hideOn(frP2,rotFr3)},false)};rotFr3=function(){TweenMax.to(frPath,3,{rotation:-180,transformOrigin:"center center",onComplete:drawFr3})};drawFr3=function(){if(window.innerWidth<640||window.innerHeight<500){fadeIn("#dialog3")}show(frP3);TweenMax.from(frP3,1,{opacity:0});frP3text.addEventListener("click",function(a){fadeOut("#dialog3");hideOn(frP3,rotFr4)},false);c3.addEventListener("click",function(a){fadeOut("#dialog3");hideOn(frP3,rotFr4)},false)};rotFr4=function(){TweenMax.to(frPath,3,{rotation:120,transformOrigin:"center center",onComplete:drawFr4})};drawFr4=function(){fadeIn("#dialog4");show(frP4);frP4.addEventListener("click",function(a){fadeOut("#dialog4");setTimeout(function(){fadeOut("#citat")},500);hideOn(frP4,flyThroughFr)},false)};flyThroughFr=function(){TweenMax.to(frPath,4,{transformOrigin:"center center",scaleX:10,scaleY:10,force3D:false});TweenMax.to(francie,4,{transformOrigin:"center center",scaleX:10,scaleY:10,force3D:false,onComplete:removeFr});TweenMax.to(francieB,1,{opacity:0})};removeFr=function(){fadeOut(francie);fadeOut(francieB);window.location.href="../6/"};
