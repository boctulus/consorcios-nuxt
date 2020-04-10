<template>
    <div class="main_wrapper">
        <div class="business_sp_title" style="background: url(/administracion-profesional-de-condominios-1.jpg);">
            <div class="bs_single_post_navigation">
				<!-- 
					Sería ideal usar <n-link> pero carga el "to" antes que se ejecute created()

					<n-link :to="this.next()" class="link bs_next_project"><span>Sig.</span></n-link>	
				-->	
                <a href="#" @click="next()" class="link bs_next_project"><span>Sig.</span></a>
            </div>
            
            <div class="wrapper">
                <h1 class="engravers">{{ post.title }}</h1>
                <!--span class="sp_b_date pontano">4 agosto, 2017</span-->
            </div>
        </div>


        <div class="container" id="blog_post">
            <article style="color: #fff !important; font-size:0.8em !important; margin-top:40px;">
                <h1 class="engravers">{{ post.title }}</h1>
				
				<div class="entry">
					<p style="font-size:1.5em !important;" v-html="post.content"></p>
				</div>      
            
            </article>
        </div>
    </div>        
</template>

<script>
//import getData from '@/api/posts.js';

export default {
    layout: 'home',

    data() {
        return {
			slug: null,
			post: {},
			posts: []
        }
    },

    computed: {
       
    },

    created () {
		this.slug =  this.$route.params.slug;
		
		this.$axios.get('/posts?slug=' + this.slug, 
		{ 
			headers: {
				
			}
		})
		.then(response => {
			//console.log(response.data.data[0]);
			this.post = response.data.data[0];
		}).catch((error) => {
			const response = error.response;
			console.log(response.data.error);
		});


		// All	
		this.$axios.get('/posts?enabled=1&fields=slug&pageSize=100', 
		{ 
			headers: {
				
			}
		})
		.then(response => {
			//console.log(response.data.data);
			this.posts = response.data.data;
		}).catch((error) => {
			const response = error.response;
			console.log(response.data.error);
		});
    },

    mounted() {
       
    },
    
    methods: {		
		next () {
			let next_post_slug;	
			let ix = 0;
			
			for (let i=0; i< this.posts.length; i++){
				if (this.posts[i].slug === this.slug){
					ix = i;
					break;
				}				
			}

			if (ix >= this.posts.length -2){
				next_post_slug = this.posts[0].slug;
			} else {
				next_post_slug = this.posts[ix+1].slug;
			} 
			
			this.$router.push(next_post_slug); 
      }
    },
    
    head:{
        link: [
           { rel: 'stylesheet', href: require('@/assets/style/ext/style_end.css') },
           { rel: 'stylesheet', href: require('@/assets/style/ext/custom.css') }
        ]
    }
}
</script>

<style scoped>
.main_wrapper {
    background-color: #3C4043;
    min-height: 100vh;
}


.wrapper {
	width: 100%;
	padding:0 0px;
	margin:0 auto;
	position:relative;
	overflow:hidden;
}

/*POST HEADER*/

.post-attachement{
    display:none !important;
}

.post_single_business{
    padding-top:20px !important;
}

.avatar{
    display: none;
}

.business_sp_title {
	background-size: cover !important;
    -moz-background-size: cover !important;
    -webkit-background-size:cover !important;
    box-sizing: content-box!important;
    -moz-box-sizing: content-box!important;
    -webkit-box-sizing: content-box!important;
	background-position: center top !important;
	text-align:center;
    position: relative;
}

.business_sp_title:after, .rp_business:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(27, 46, 63, 0.4);
    top: 0;
    left: 0;
    z-index: 0;
}

.bs_single_post_navigation {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}

div .business_sp_title .wrapper a{
    display: none !important; 
    
}

/** standard business **/

.masonry_ctn.standard_business {
	margin-bottom:0;
}
.business_author_post .top_info_ctn {
	overflow:auto;
	padding-bottom:40px;

}
.post_b_avatar {
	float:left;
}
.post_b_avatar img {
	display:block;
	border-radius:300px;
}
.post_b_ad {
	float:left;
	padding-left:22px;
}
.post_b_author {
	font-weight:600;
	font-size:16px;
	padding:7px 0 5px 0;
}
.post_b_category {
	float:right;
}
.post_b_category a {
	padding:10px 15px;
	margin:0 0 10px 10px;
    display: inline-block;
}


.business_author_post .post-title h2 {
	font-size:30px;
	line-height:50px;
	font-weight:300;
}
.business_author_post .entry {
	margin-top:8px;
	line-height:30px;
}
.post_single_business .entry{
	margin-top:0px;
	line-height:30px;
}
.business_author_post .entry p,.post_single_business .entry p{
	line-height:30px;
}

.business_author_post .post-info {

    font-size: 14px;
    margin: 16px 0px 0px 0px;
    padding-bottom: 58px;
}
.business_author_post .post-info a:first-child{
	font-weight:600;
}


.standard_business .blog_load_more_cont {
	margin-left:0;
	right:0;
	left:inherit;
	width:auto;
}
.standard_business .blog_load_more_cont a {
    position: relative;
    z-index: 2;
    padding: 10px 15px;
    text-decoration: none;
    display: inline-block;
    position: relative;
    text-align: center;
    max-width: 100%;
    font-weight: 400;
    font-size: 14px;
    text-transform:none;
    vertical-align: middle;
    border-radius: 3px;
    letter-spacing:normal;
}
.navigation.b_nav {
    padding: 0px 0px 20px 0px;
    margin-top: 0px;
    border: none!important;
}
.b_nav .pagination {
    clear: both;
    padding: 0px 0;
    position: relative;
    font-size: 11px;
    line-height: 13px;
    overflow: auto;
    float: right;
}
.b_nav .pagination span,.b_nav .pagination a {
	margin: 2px 0px 2px 4px;
    font-size: 14px;
    border-radius: 3px;
}
.business_sp_title {
	background-size: cover !important;
    -moz-background-size: cover !important;
    -webkit-background-size:cover !important;
    box-sizing: content-box!important;
    -moz-box-sizing: content-box!important;
    -webkit-box-sizing: content-box!important;
	background-position: center top !important;
	text-align:center;
    position: relative;
}
.business_sp_title:after, .rp_business:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(27, 46, 63, 0.4);
    top: 0;
    left: 0;
    z-index: 0;
}
.bs_single_post_navigation {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
a.bs_previous_project,a.bs_next_project {
    position: absolute;
    left: 50px;
    top: 50%;
    margin-top: -22.5px;
    max-width: 55px;
    height: 55px;
    background-color: rgba(0,0,0,0.3);
    line-height: 55px;
	padding:0 24px;
    border-radius: 3px;
	color:#fff;
	overflow:hidden;
	font-size:12px;
	font-weight:bold;
	letter-spacing:1px;
	text-transform:uppercase;
	text-align:left;
	z-index: 2;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
}
a.bs_previous_project span,a.bs_next_project span {
    -webkit-transition:all 0.35s ease;
    -moz-transition:all 0.35s ease;
    -o-transition:all 0.35s ease;
    -ms-transition:all 0.35s ease;
    transition: all 0.35s ease;
	opacity:0;

}
a.bs_previous_project:before,.b_related_left:after {
    font-family: 'FontAwesome';
    content: '\f104';
    padding-right: 16px;
	font-weight:normal;
	letter-spacing:normal;
}
a.bs_previous_project:hover,a.bs_next_project:hover {
	max-width:500px;
	color:#fff;
	padding:0 30px;
}
a.bs_previous_project:hover span,a.bs_next_project:hover span{
	opacity:1;
}
a.bs_next_project {
	left: auto;
    right: 50px!important;
	direction: rtl;
}

a.bs_next_project:after,.b_related_right:after {
    font-family: 'FontAwesome';
    content: '\f105';
    padding-left: 16px;
	font-weight:normal;
	letter-spacing:normal;
}
.business_sp_title .wrapper,.business_related_post .wrapper{
	z-index:1;
	color:#fff;
    padding: 114px 0;
    max-width: 1000px;
}
.business_sp_title h1{
	text-align:center;
    font-size: 48px;
    line-height: 70px;
	color:#fff;
	font-weight:300;
}

.business_sp_title img{
	border-radius:200px;
	-moz-border-radius: 200px;
	-webkit-border-radius: 200px;
	margin:60px 0 29px;
}
.business_sp_title .wrapper a{
	display:inline-block;
	color:#fff;
	width:100%;
	font-size:20px;
	font-weight:600;
	margin-bottom:8px;
}
.business_related_carousel {
	width:100%;
	position:relative;
}
.b_related_nav {
	position:absolute;
	left:0;
	top:0;
	width:100%;
	height:100%;
}
.b_related_left,.b_related_right {
    position: absolute;
    left: 50px;
    top: 50%;
    margin-top: -22.5px;
    width: 55px;
    height: 55px;
    background-color: rgba(0,0,0,0.3);
    line-height: 55px;
	padding:0 24px;
    border-radius: 3px;
	color:#fff;
	overflow:hidden;
	font-size:12px;
	font-weight:bold;
	letter-spacing:1px;
	text-transform:uppercase;
	text-align:left;
	z-index: 2;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
	cursor:pointer;
}
.b_related_right{
	left: auto;
    right: 50px!important;
	direction: rtl;
}
.b_related_left:hover,.b_related_right:hover {
	background-color: rgba(0,0,0,0.7);
}
.business_related_post {
	float:left;
	text-align:center;
	background-size: cover !important;
    -moz-background-size: cover !important;
    -webkit-background-size:cover !important;
    box-sizing: content-box!important;
    -moz-box-sizing: content-box!important;
    -webkit-box-sizing: content-box!important;
}
.business_related_post .wrapper {
	max-width:760px;
}
h2.b-post-title{
	text-align:center;
    font-size: 36px;
    line-height: 62px;
	color:#fff;
	font-weight:300;
}
.business_related_post h4 {
	text-align:center;
	font-size:18px;
	line-height:22px;
	letter-spacing:2px;
	font-weight:400;
	margin-bottom:60px;
	color:#fff;
	position:relative;
}
.business_related_post h4:after {
	content:"";
	position:absolute;
    bottom: -43px;
	border-bottom:1px solid;
	width:70px;
	left:50%;
	margin-left:-35px;
}
.b-read-now {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 55px;
    border-radius: 3px;
    color: #fff;
    text-align: center;
    min-width: 200px;
    background: rgba(0,0,0,0.5);
    display: inline-block;
    margin-top:44px;


}
.b-read-now:hover {
	color:#fff;
}
.share_icons_business .share-box ul {
	width:100%;
}
.share_icons_business .share-box ul li {
    width: 13.716%!important;
    margin: 0.28%!important;
	height:40px!important;
    border-radius: 3px;
}
.share_icons_business .share-box li a {
    line-height: 40px;
    display: block !important;
    font-size: 17px;
    border-radius: 3px;
    color: #fff;
}
#author-bio-business {

    width: 100%;
    float: left;
    margin-top: 50px;
}
#author-bio-business img {
    float: left;
    border-radius: 200px;
	width:70px;
}
#author-bio-business #author-info{
	padding-left:100px;
}
#author-bio-business #author-info p{
    margin-bottom: 10px;
	font-size:13px;
}
#business_comments .comment_count h3{
	margin-bottom: 77px;
}
#business_comments #comments > ul > li ul{
	border:none!important;
}
#business_comments #comments ul li li .comment_ctn:before{
	display:none;
}
#business_comments #add-comment h4,#business_comments .comment_count h3{
	font-size:13px;
	text-transform:uppercase;
	letter-spacing:1px;
	font-weight:bold;
	position:relative;
	line-height:normal;
}
#business_comments #comments > ul > li {
	padding-bottom:40px;
}
#business_comments #comments > ul > li:last-child{
	padding-bottom:0px;
}
#business_comments #comments > ul > li:last-child .comment_ctn,#business_comments #comments{
	margin-bottom:0;
}
#business_comments #comments > ul > li ul {
	margin-top:19px;
}
#business_comments #comments ul li .comment_ctn {
    background: none;
    box-shadow: none;
    border: none;
    padding: 0 0 33px 0;
}
#business_comments #comments ul li .avatar img {
	width:50px;
    border-radius: 100px;
    background: none;
    box-shadow: none;
    border: none;
}
#business_comments #comments ul li .details span.author{
    font-size: 16px;
    font-weight: 600;
}
#business_comments #comments ul li .details {
    padding: 7px 0 0 20px;
}
#business_comments #comments ul li .details span.date {
	margin-top:1px;
}
#business_comments #comments ul li .comment {
	padding-top:20px;
}
#business_comments #comments ul li .comment p {
	line-height:30px;
}
#comments ul li em{
    padding-left: 30px;
}
#business_comments #add-comment{
	padding-top:22px;
}
#business_comments #add-comment h4{
	padding-bottom:55px;
}
#business_comments #comments ul li .details span.Reply a {
    font-size: 14px;
    text-transform: none;
    font-weight: normal;
	background:none!important;
    padding: 6px 13px;
    border-radius: 0;
}
#business_comments #add-comment input#submit,#respond input#submit {
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0;
    float: right;
}

/*agregar fondo a footer*/

#footer_bg{
    background-image: url(/profesionales-certificados-prosoc.png);
}

/**************** Lists ****************/

.rd_list_1 .list_item_ctn {
	float: left;
	width: 100%;
	margin-bottom: 8px;
	border-bottom:1px solid;
}
.rd_list_1 .list_item_ctn:last-child {
	border-bottom:none!important;
}
.rd_list_1 .list_desc {
	margin-left: 35px;
}
.rd_list_1 .list_desc p {
	margin-bottom: 8px;
}
.rd_list_1 .list_desc h3 {
	font-size: 16px;
	font-weight: 700;
	margin-bottom:5px;
}
.rd_list_1 .list_icn {
	float:left;
	margin-right: 20px;
	font-size: 14px;
	margin-top: 5px;
	-webkit-transition: all 0.2s linear;
	-moz-transition: all 0.2s linear;
	-o-transition: all 0.2s linear;
	-ms-transition: all 0.2s linear;
	transition: all 0.2s linear;
}

.rd_list_1_alt .list_item_ctn {
	float: left;
	width: 100%;
}
.rd_list_1_alt .list_item_ctn:last-child {
	border-bottom:none!important;
}
.rd_list_1_alt .list_desc {
	margin-left: 35px;
}
.rd_list_1_alt .list_desc p {
	margin-bottom: 8px;
}
.rd_list_1_alt .list_desc h3 {
	font-size: 16px;
	font-weight: 700;
	margin-bottom:5px;
}
.rd_list_1_alt .list_icn {
	float:left;
	margin-right: 20px;
	font-size: 14px;
	margin-top: 5px;
	-webkit-transition: all 0.2s linear;
	-moz-transition: all 0.2s linear;
	-o-transition: all 0.2s linear;
	-ms-transition: all 0.2s linear;
	transition: all 0.2s linear;
}
.rd_list_2 .list_item_ctn {
	float: left;
	width: 100%;
	margin-bottom: 10px;
	position:relative;
	overflow: hidden;
}
.rd_list_2 .list_item_ctn:after {
	content: "";
	height: 100%;
	position: absolute;
	top: 56px;
	width: 1px;
	background: black;
	left: 23px;
}
.rd_list_2 .list_item_ctn:last-child:after {
	content:none;
}
.rd_list_2 .list_desc {
	margin-left: 70px;
}
.rd_list_2 .list_desc p {
	margin-bottom: 35px;
}
.rd_list_2 .list_desc h3 {
	font-size: 18px;
	font-weight: 700;
	margin-bottom:14px;
}
.rd_list_2 .list_icn {
	float:left;
	margin-right:0px;
	font-size: 45px;
	height: 55px;
	line-height: 40px;
	margin-top: 4px;
	-webkit-transition: all 0.2s linear;
	-moz-transition: all 0.2s linear;
	-o-transition: all 0.2s linear;
	-ms-transition: all 0.2s linear;
	transition: all 0.2s linear;
}

.rd_list_3 .list_item_ctn {
	float: left;
	width: 100%;
	margin-bottom: 26px;
}
.rd_list_3 .list_item_ctn:hover i {
	background:rgba(0,0,0,0.3);
	border:1px solid #fff;
}
.rd_list_3 .list_desc {
	margin-left: 140px;
}
.rd_list_3.rd_list_right .list_desc {
	margin-right: 140px;
	margin-left:0;
	text-align:right;
}
.rd_list_3.rd_list_right h3 {
	text-align:right;
}
.rd_list_3 .list_desc h3 {
	font-size: 14px;
	font-weight: 900;
	text-transform:uppercase;
	margin-bottom:20px;
}
.rd_list_3 .list_item_ctn:hover .list_icn span {
	color:#fff!important;
}
.rd_list_3 .list_icn {
	height: 120px;
	width: 120px;
	line-height: 108px;
	font-size: 40px;
	text-align: center;
	border-radius: 0px;
	position: relative;
	float: left;
	color:#fff;
	margin-top:4px;
	margin-right: 20px;
	-webkit-transition: all 0.2s linear;
	-moz-transition: all 0.2s linear;
	-o-transition: all 0.2s linear;
	-ms-transition: all 0.2s linear;
	transition: all 0.2s linear;
}
.rd_list_3.rd_list_right .list_icn {
	float:right;
	margin-right:0;
	margin-left:20px;
}
.rd_list_3 i {
	width: 110px;
	height: 110px;
	display: block;
	text-align: center;
	left: 5px;
	position: absolute;
	top: 5px;
	border: 1px solid rgba(0,0,0,0);
	-webkit-transition: all 0.2s linear;
	-moz-transition: all 0.2s linear;
	-o-transition: all 0.2s linear;
	-ms-transition: all 0.2s linear;
	transition: all 0.2s linear;
}
.rd_list_4 .list_item_ctn {
	float: left;
	position:relative;
	text-align:center;
	padding:0 20px 50px 20px;
	-webkit-transition: all 0.2s linear;
	-moz-transition: all 0.2s linear;
	-o-transition: all 0.2s linear;
	-ms-transition: all 0.2s linear;
	transition: all 0.2s linear;
}
.rd_list_4 .list_item_ctn:hover {
	transform: scale(1.07);
	-moz-transform:    scale(1.07); /* Firefox */
	-webkit-transform: scale(1.07); /* Webkit */
	-o-transform:      scale(1.07); /* Opera */
	-ms-transform:     scale(1.07); /* IE 9 */
	background:#a1b1bc !important;
	z-index:2;
}
.rd_list_4 .list_icn {
	text-align: center;
	margin-top: 70px;
	font-size: 45px;
	height:45px;
	line-height: 45px;
	color: #fff;
}
.rd_list_4 .list_desc h3 {
	font-size: 14px;
	font-weight: 900;
	margin-top:26px;
	letter-spacing:0px;
	margin-bottom:23px;
	text-align:center;
}
.rd_list_5 .list_item_ctn {
	float: left;
	width: 100%;
	margin-bottom: 23px;
}
.rd_list_5.rd_list_right .list_desc {
	text-align:right;
}
.rd_list_5.rd_list_right h3 {
	text-align:right;
}
.rd_list_5 .list_desc h3 {
	font-size: 18px;
	font-weight: 700;
	margin-top:18px;
	margin-bottom:24px;
}
.rd_list_5 .list_item_ctn:hover .list_icn span {
	color:#fff!important;
}
.rd_list_5 .list_icn {
	height: 50px;
	width: 50px;
	line-height: 50px;
	font-size: 20px;
	text-align: center;
	border-radius:200px;
	position: relative;
	float: left;
	color:#fff;
	margin-top:4px;
	margin-right: 15px;
	text-align:center;
	-webkit-transition: all 0.2s linear;
	-moz-transition: all 0.2s linear;
	-o-transition: all 0.2s linear;
	-ms-transition: all 0.2s linear;
	transition: all 0.2s linear;
}
.rd_list_5.rd_list_right .list_icn {
	float:right;
	margin-right:0;
	margin-left:15px;
}
.rd_list_6 .list_item_ctn {
	float: left;
	width: 100%;
	margin-bottom: 23px;
}
.rd_list_6.rd_list_right .list_desc {
	text-align:right;
}
.rd_list_6.rd_list_right h3 {
	text-align:right;
}
.rd_list_6 .list_desc h3 {
	font-size: 18px;
	font-weight: 700;
	margin-top:10px;
	margin-bottom:14px;
}
.rd_list_6 .list_item_ctn:hover .list_icn span {
	color:#fff!important;
}
.rd_list_6 .list_icn {
	height: 30px;
	width: 30px;
	line-height: 30px;
	font-size: 17px;
	text-align: center;
	border-radius:200px;
	position: relative;
	float: left;
	color:#fff;
	margin-top:4px;
	margin-right: 15px;
	text-align:center;
	-webkit-transition: all 0.2s linear;
	-moz-transition: all 0.2s linear;
	-o-transition: all 0.2s linear;
	-ms-transition: all 0.2s linear;
	transition: all 0.2s linear;
}
.rd_list_6.rd_list_right .list_icn {
	float:right;
	margin-right:0;
	margin-left:15px;
}
.rd_list_7 .list_item_ctn {
	float: left;
	width: 100%;
	margin-bottom: 29px;
}
.rd_list_7.rd_list_right .list_desc {
	text-align:right;
}
.rd_list_7.rd_list_right h3 {
	text-align:right;
}
.rd_list_7 .list_desc h3 {
	font-size: 16px;
	font-weight: 700;
	margin-top:10px;
	margin-bottom:23px;
}
.rd_list_7 .list_item_ctn .list_icn span {
	background:none;
}
.rd_list_7 .list_icn {
	height: 36px;
	width: 36px;
	line-height: 34px;
	font-size: 17px;
	text-align: center;
	border-radius:200px;
	position: relative;
	float: left;
	background:none;
	border:1px solid;
	margin-top:4px;
	margin-right: 19px;
	text-align:center;
	-webkit-transition: all 0.2s linear;
	-moz-transition: all 0.2s linear;
	-o-transition: all 0.2s linear;
	-ms-transition: all 0.2s linear;
	transition: all 0.2s linear;
}
.rd_list_7.rd_list_right .list_icn {
	float:right;
	margin-right:0;
	margin-left:19px;
}
.small_list .list_item_ctn {
	float: left;
	width: 100%;
	margin-bottom: 30px;
}
.small_list .list_desc {
	margin-left: 65px;
}
.small_list .list_icn {
	text-align: center;
	position: relative;
	float: left;
	margin-right: 10px;
	font-size:35px;
}
.wpb_text_column ol{
	counter-reset: item;
	margin-left: 0;
	padding-left: 0;
}
.entry ol,.comment ol,#fw_c.tf_single_page ol{
  counter-reset: item;
  margin: 0 0 15px 20px;
	
}
.wpb_text_column ol li{
	display: block;
	margin-bottom: 10px;
	margin-left: 10px;
	cursor:pointer;
}
.entry ol li,.comment ol li,#fw_c.tf_single_page > ol li,.rd_woo_short_description ol li{
	display: block;
	cursor:pointer;
}
.wpb_text_column ol > li:before{
	display: inline-block;
	content: counter(item);
	counter-increment: item;
	margin-left: -10px;
	width: 24px;
	height: 24px;
	background: #a1b1bc;
	text-align: center;
	line-height: 24px;
	border: 3px solid rgba(255, 255, 255, 0.56);
	border-radius: 20px;
	margin-right: 10px;
	color: #fff;
	font-size: 13px;
	-webkit-transition: all 0.2s linear;
	-moz-transition: all 0.2s linear;
	-o-transition: all 0.2s linear;
	-ms-transition: all 0.2s linear;
	transition: all 0.2s linear;
}
.entry ol > li:before,.comment ol > li:before,#fw_c.tf_single_page ol > li:before {
	
  display: inline-block;
  content: counter(item);
  counter-increment: item;
  margin-right: 10px;
  margin-left: -15px;
}
.wpb_text_column ul,.entry ul,#fw_c.tf_single_page > ul,#fw_c.tf_single_page ul li > ul,.rd_woo_short_description ul,.rd_woo_short_description ul li{
  margin: 0 0 15px 20px;
}
.wpb_text_column ul li,.entry ul li,#fw_c.tf_single_page > ul li,.rd_woo_short_description ul li{
list-style: disc;
display:list-item;
}
.wpb_text_column ul ol li,.entry ul ol li,.comment ul ol li,#fw_c.tf_single_page > ul ol li,.rd_woo_short_description ul ol li{
	display:block!important;
}
.entry table,.comment table,#fw_c > table{
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid;
}
.entry table th,.entry table td,.comment table th,.comment table td,#fw_c.tf_single_page > table td,#fw_c.tf_single_page > table th{
  border-right: 1px solid;
  border-bottom: 1px solid;
  padding: 2px;
}
dd {
  margin: 0 0 0 15px;
}

.wpb_text_column ol li:before{
	background:#808b97
}

.wpb_text_column ol li:hover:before{
	background:#062c2d
}

</style>