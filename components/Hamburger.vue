<template>
    <a id="hamburger-icon" title="Menu">
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
    </a>
</template>

/* 
	Animated Hamburger by Steven Fabre 
	https://www.hongkiat.com/blog/hamburger-menu-animations/
*/

<script>
export default {
     name: 'Hamburger',
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

 #hamburger-icon {
	 width: 28px;
	 height: 12px;
	 position: relative;
	 display: block;
	 margin: 24px auto 12px auto;
}
 #hamburger-icon .line {
	 display: block;
	 background: #D0A28C;
	 width: 28px;
	 height: 2px;
	 position: absolute;
	 left: 0;
	 border-radius: 1px;
	 transition: all 0.4s;
	 -webkit-transition: all 0.4s;
	 -moz-transition: all 0.4s;
}
 #hamburger-icon .line.line-1 {
	 top: 0;
}
 #hamburger-icon .line.line-2 {
	 top: 50%;
}
 #hamburger-icon .line.line-3 {
	 top: 100%;
}
 #hamburger-icon:hover .line-1, #hamburger-icon:focus .line-1 {
	 transform: translateY(-1px);
	 -webkit-transform: translateY(-1px);
	 -moz-transform: translateY(-1px);
}
 #hamburger-icon:hover .line-3, #hamburger-icon:focus .line-3 {
	 transform: translateY(1px);
	 -webkit-transform: translateY(1px);
	 -moz-transform: translateY(1px);
}
 #hamburger-icon.active .line-1 {
	 transform: translateY(6px) translateX(0) rotate(45deg);
	 -webkit-transform: translateY(6px) translateX(0) rotate(45deg);
	 -moz-transform: translateY(6px) translateX(0) rotate(45deg);
}
 #hamburger-icon.active .line-2 {
	 opacity: 0;
}
 #hamburger-icon.active .line-3 {
	 transform: translateY(-6px) translateX(0) rotate(-45deg);
	 -webkit-transform: translateY(-6px) translateX(0) rotate(-45deg);
	 -moz-transform: translateY(-6px) translateX(0) rotate(-45deg);
}
 h1 {
	 text-transform: uppercase;
}

a {
	 text-decoration: none;
	 color: #95a5a6;
	 margin: 0.5em 1.5em;
	 display: inline-block;
}
 a:hover, a:focus {
	 color: #ecf0f1;
} 
</style>