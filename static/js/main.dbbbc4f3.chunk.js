(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{118:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(28),c=a.n(i),s=a(4),o=a(5),l=a(7),u=a(6),h=a(9),d={trending:"/react_project_cinema",pageString:"/react_project_cinema/page",page:"/page/:page",movieString:"/react_project_cinema/movie",movie:"/react_project_cinema/movie/:id",queue:"/queue",watched:"/watched"},j=a(11),p=a(29),g=a.n(p),v=a(0),m=function(){return Object(v.jsx)(n.Fragment,{children:Object(v.jsxs)(j.c,{className:g.a.logoIMG,to:{pathname:"".concat(d.pageString,"/",1)},children:["React ",Object(v.jsx)("span",{className:g.a.TV,children:" .TV"})]})})},b=a(32),O=a(46),f=a.n(O);a(82),a(83);function x(e){var t=e.backdrop_path;return Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:t,alt:""})})}var _=a(8),M=a.n(_),S=a(15),y=function(e){var t=e.location,a=e.id,n=e.poster_path,r=e.title,i=e.vote_average,c=e.release_date,s=e.configuration;e.search;n=n?s.secure_base_url+"w500"+n:S.noImage;return Object(v.jsx)("li",{className:M.a.container,children:Object(v.jsxs)("div",{className:M.a.containerSVG,children:[Object(v.jsx)("div",{className:M.a.title,children:Object(v.jsx)(j.c,{className:M.a.imgSVGPlayBtn,onClick:function(){var e=JSON.parse(localStorage.getItem("watched"))||[];e.map((function(e){return e.id})).includes(a)||e.push({id:a,poster_path:n,title:r,vote_average:i,release_date:c}),localStorage.setItem("watched",JSON.stringify(e))},to:{pathname:"".concat(d.movieString,"/").concat(a),search:""},children:Object(v.jsx)("svg",{width:"50pt",height:"50pt",viewBox:"0 0 50 50",version:"1.1",children:Object(v.jsxs)("g",{id:"surface1",children:[Object(v.jsx)("path",{d:"M 34.589844 24.160156 L 21.398438 15.136719 C 20.984375 14.835938 19.890625 14.835938 19.804688 15.976562 L 19.804688 34.023438 C 19.902344 35.164062 21.015625 35.183594 21.398438 34.863281 L 34.589844 25.839844 C 34.929688 25.632812 35.398438 24.796875 34.589844 24.160156 Z M 21.84375 32.101562 L 21.84375 17.898438 L 32.207031 25 Z M 21.84375 32.101562 "}),Object(v.jsx)("path",{d:"M 25 1.074219 C 11.804688 1.074219 1.074219 11.804688 1.074219 25 C 1.074219 38.195312 11.804688 48.925781 25 48.925781 C 38.195312 48.925781 48.925781 38.195312 48.925781 25 C 48.925781 11.804688 38.195312 1.074219 25 1.074219 Z M 25 46.882812 C 12.929688 46.882812 3.117188 37.070312 3.117188 25 C 3.117188 12.929688 12.929688 3.117188 25 3.117188 C 37.070312 3.117188 46.882812 12.929688 46.882812 25 C 46.882812 37.070312 37.070312 46.882812 25 46.882812 Z M 25 46.882812 "})]})})})}),Object(v.jsx)("button",{className:t!==d.watched?M.a.btnForSvg:M.a.dNone,onClick:function(){if(t!==d.queue){var e=JSON.parse(localStorage.getItem("queue"))||[];e.map((function(e){return e.id})).includes(a)||e.push({id:a,poster_path:n,title:r,vote_average:i,release_date:c}),localStorage.setItem("queue",JSON.stringify(e))}else if(a){var s=JSON.parse(localStorage.getItem("queue"))||[];s.push({id:a,poster_path:n,title:r,vote_average:i,release_date:c}),localStorage.setItem("queue",JSON.stringify(s.filter((function(e){return e.id!==a})))),window.location.reload()}},children:Object(v.jsx)("svg",{className:M.a.imgSVG,children:Object(v.jsx)("path",{d:"M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12z"})})}),Object(v.jsxs)("div",{className:M.a.contForSvgStar,children:[Object(v.jsx)("svg",{className:M.a.imgSVGStar,id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(v.jsx)("path",{d:"M405.33,512a21.32,21.32,0,0,1-12.4-4L256,410.21,119.07,508A21.34,21.34,0,0,1,86,485.48l39.74-158.95L6.25,207.08a21.33,21.33,0,0,1,15.08-36.42H177.21L236,13.84a21.33,21.33,0,0,1,39.95,0l58.81,156.82H490.67a21.33,21.33,0,0,1,15.08,36.42L386.29,326.54,426,485.48A21.33,21.33,0,0,1,405.33,512ZM256,362.66a21.33,21.33,0,0,1,12.4,4l102.18,73L342,325.17a21.33,21.33,0,0,1,5.61-20.26l91.58-91.58H320a21.34,21.34,0,0,1-20-13.84L256,82.09,212,199.49a21.34,21.34,0,0,1-20,13.84H72.84l91.58,91.58A21.33,21.33,0,0,1,170,325.17L141.42,439.62l102.18-73A21.33,21.33,0,0,1,256,362.66Z"})}),Object(v.jsx)("div",{className:M.a.voteAverage,children:i})]}),Object(v.jsx)("img",{className:M.a.mainIMG,src:n,alt:r})]})})},w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).settings={dots:!1,infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,speed:2e3,autoplaySpeed:1,focusOnSelect:!0,pauseOnHover:!0,accessibility:!0},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.arrMovies,a=e.configuration,n=e.location,r=e.search;return Object(v.jsxs)("div",{children:[this.props.onWidth>1200&&Object(v.jsx)("div",{className:M.a.containerSlider,children:Object(v.jsx)(f.a,Object(b.a)(Object(b.a)({className:M.a.sliderBody},this.settings),{},{children:t.length>0&&t.map((function(e){var t=e.id,n=e.backdrop_path;return n&&Object(v.jsx)(x,{backdrop_path:a.secure_base_url+"/w500/"+n},t)}))}))}),Object(v.jsx)("div",{className:M.a.mainTrending,children:Object(v.jsx)("div",{className:M.a.items,children:Object(v.jsx)("ul",{className:M.a.itemsWrap,children:t.length>0&&t.map((function(e){var t=e.id,i=e.poster_path,c=e.title,s=e.vote_average,o=e.release_date;return Object(v.jsx)(y,{id:t,poster_path:i,title:c,vote_average:s,release_date:o,configuration:a,search:r,location:n},t)}))})})})]})}}]),a}(n.Component);y.defaultProps={title:"???",vote_average:"???",release_date:"???"};var N=a(2),G=a.n(N),C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={localStorageQueueArr:[],arrMov:[],configuration:{}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("queue");e&&this.setState({arrMov:JSON.parse(e)});var t=this.props.location.state.configuration;this.setState({configuration:t})}},{key:"render",value:function(){var e=this.state,t=e.arrMov,a=e.configuration;return Object(v.jsxs)(n.Fragment,{children:[Object(v.jsx)("header",{children:Object(v.jsx)("div",{className:G.a.wrapHeader,children:Object(v.jsx)(m,{})})}),Object(v.jsx)("main",{children:Object(v.jsx)("div",{className:M.a.wrapQueueWathcedMain,children:0!==t.length&&Object(v.jsx)(w,{location:this.props.location.pathname,arrMovies:t,configuration:a})})})]})}}]),a}(n.Component),A=a.p+"static/media/pusheen.6ea98444.jpg",k={container:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},status:{fontSize:46}};function L(){return Object(v.jsxs)("div",{style:k.container,children:[Object(v.jsx)("h1",{style:k.status,children:"404"}),Object(v.jsx)("img",{src:A,alt:"404 page",width:"400"}),Object(v.jsx)("p",{children:Object(v.jsx)(j.b,{to:{pathname:"".concat(d.pageString,"/",1)},children:"HOME"})})]})}var I=a(20),q=a.n(I),H=function(e){return S.trendingURL+S.API_KEY+"&page="+e},R=function(e,t){return S.searchRequestURL+S.API_KEY+"&query=".concat(t,"&page=").concat(e)},T={axiosSearchRequest:function(e,t){var a=R(t,e);return console.log(a),q.a.get(a)},axiosGetConfiguration:function(){return q.a.get(S.configurationURL+S.API_KEY)},axiosLoadTrend:function(e){var t=H(e);return q.a.get(t,{})},axiosMovieDetails:function(e){var t=S.movieURL+e+S.API_KEY;return q.a.get(t,{})},axiosGenreRequest:function(e){var t=S.genre+S.API_KEY;return q.a.get(t)}},F=a(25),D=a.n(F),P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.genre;return Object(v.jsx)("div",{className:D.a.wrapGenre,children:Object(v.jsx)("ul",{className:D.a.containerGenre,children:e.length>0&&e.map((function(e){return Object(v.jsx)("li",{className:D.a.itemGenre,children:e.name},e.id)}))})})}}]),a}(n.Component),V=a(47),W=(a(118),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={configuration:{},genre:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;T.axiosGetConfiguration().then((function(t){return e.setState({configuration:t.data.images})})),T.axiosGenreRequest().then((function(t){e.setState({genre:t.data.genres})}))}},{key:"render",value:function(){var e=d.queue,t=d.watched,a=this.state,r=a.configuration,i=a.genre;return this.props.onWidth<768?Object(v.jsx)(V.elastic,{right:!0,children:Object(v.jsxs)("ul",{className:G.a.wrapNav,children:[Object(v.jsx)("li",{className:G.a.HeaderMenuHome,children:Object(v.jsx)(j.c,{activeClassName:G.a.menuIsActiv,to:{pathname:"".concat(d.pageString,"/",1)},children:"HOME"})}),Object(v.jsx)("li",{className:G.a.HeaderMenu,children:"My Libbary"}),Object(v.jsxs)("div",{className:G.a.hiddenHeaderMenu,children:[Object(v.jsx)(j.c,{activeClassName:G.a.menuIsActiv,to:{pathname:t,state:{configuration:r}},children:"Watched"}),Object(v.jsx)(j.c,{activeClassName:G.a.menuIsActiv,to:{pathname:e,state:{configuration:r}},children:"Queue"})]}),Object(v.jsx)("li",{className:G.a.GengeMenu,children:"Genre"}),Object(v.jsx)("div",{className:G.a.hiddenGengeMenu,children:Object(v.jsx)(P,{genre:i})})]})}):Object(v.jsx)(n.Fragment,{children:Object(v.jsxs)("ul",{className:G.a.wrapNav,children:[Object(v.jsx)("li",{className:G.a.HeaderMenuHome,children:Object(v.jsx)(j.c,{exact:!0,activeClassName:G.a.menuIsActiv,to:{pathname:"".concat(d.pageString,"/",1)},children:"HOME"})}),Object(v.jsx)("li",{className:G.a.HeaderMenu,children:"My Libbary"}),Object(v.jsxs)("div",{className:G.a.hiddenHeaderMenu,children:[Object(v.jsx)(j.c,{activeClassName:G.a.menuIsActiv,to:{pathname:t,state:{configuration:r}},children:"Watched"}),Object(v.jsx)(j.c,{activeClassName:G.a.menuIsActiv,to:{pathname:e,state:{configuration:r}},children:"Queue"})]}),Object(v.jsx)("li",{className:G.a.GengeMenu,children:"Genre"}),Object(v.jsx)("div",{className:G.a.hiddenGengeMenu,children:Object(v.jsx)(P,{genre:i})})]})})}}]),a}(r.a.Component)),B=a(48),U=a.n(B),z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleSubmit=function(t){t.preventDefault(),e.props.onRenderSearchRequest(e.state.inputValue),e.setState({inputValue:""})},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.inputValue;return Object(v.jsx)(n.Fragment,{children:Object(v.jsx)("form",{className:U.a.searchForm,onSubmit:this.handleSubmit,children:Object(v.jsx)("input",{type:"text",name:"query",value:e,onChange:this.handleChange,placeholder:"Quick search..."})})})}}]),a}(n.Component),E=a(49),J=a.n(E),Q=(a(137),a(50)),Y=a.n(Q);function K(){return Object(v.jsx)("div",{className:Y.a.spinner,children:Object(v.jsx)(J.a,{type:"ThreeDots",color:"#FFD700",height:180,width:180,timeout:3e3})})}var Z=a(51),X=a.n(Z),$=(a(44),a(52)),ee=a.n($);function te(e){return ee.a.parse(e)}var ae=a(53),ne=a.n(ae),re=a(24),ie=a.n(re),ce=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={galleryMovies:[],configuration:{},loading:!1,error:!1,width:window.innerWidth,page:1},e.pagesData={total_pages:0},e.updSize=function(){e.setState({width:window.innerWidth})},e.scroll=function(){window.scrollTo({top:0,behavior:"smooth"})},e.handleChangeQuery=function(t){e.props.history.push({pathname:d.pageString+"/1",search:"&query=".concat(t)})},e.loadSearchMovies=function(t){e.setState({loading:!0,error:!1,page:e.props.match.params.page});var a=e.props.match.params.page;a=a||e.state.page,T.axiosSearchRequest(t,a).then((function(t){e.pagesData.total_pages=t.data.total_pages,e.setState((function(){return{galleryMovies:t.data.results}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({loading:!1})})),e.scroll()},e.changeCurrentPage=function(t){var a=e.props.location.search;e.props.history.push({pathname:d.pageString+"/"+t,search:a})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getConfiguration();var e=te(this.props.location.search).query;e?this.loadSearchMovies(e):this.loadGalleryMovies(),window.addEventListener("resize",this.updSize)}},{key:"componentDidUpdate",value:function(e,t){if(!this.state.loading){var a=te(e.location.search).query,n=te(this.props.location.search).query,r=e.match.params.page,i=this.props.match.params.page;n||r===i?a===n&&r===i||(n?this.loadSearchMovies(n):this.loadGalleryMovies()):this.loadGalleryMovies()}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updSize)}},{key:"getConfiguration",value:function(){var e=this;return T.axiosGetConfiguration().then((function(t){return e.setState({configuration:t.data.images})}))}},{key:"loadGalleryMovies",value:function(){var e=this;this.setState({loading:!0,error:!1,page:this.props.match.params.page});var t=this.props.match.params.page;t=t||this.state.page,T.axiosLoadTrend(t).then((function(t){e.pagesData.total_pages=t.data.total_pages,e.setState({galleryMovies:t.data.results})})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({loading:!1})})),this.scroll()}},{key:"render",value:function(){var e=this.state,t=e.galleryMovies,a=e.width,r=e.loading,i=e.error,c=e.page,s=e.configuration,o=this.props.location.search;return Object(v.jsxs)(n.Fragment,{children:[Object(v.jsx)("header",{children:Object(v.jsxs)("div",{className:G.a.wrapHeader,children:[Object(v.jsx)(m,{}),Object(v.jsx)(W,{onWidth:a}),Object(v.jsx)(z,{onRenderSearchRequest:this.handleChangeQuery})]})}),Object(v.jsx)("main",{children:Object(v.jsxs)("div",{className:ie.a.wrapMain,children:[i&&Object(v.jsx)(L,{}),r&&Object(v.jsx)(K,{}),!r&&0===t.length&&Object(v.jsx)(L,{}),!r&&t.length>0&&Object(v.jsx)(w,{location:this.props.location.pathname,arrMovies:t,configuration:s,onWidth:a,search:o}),!i&&t.length>0&&Object(v.jsx)("div",{className:ne.a.pagination_box,children:Object(v.jsx)(X.a,{currentPage:Number(c),totalSize:10*this.pagesData.total_pages,sizePerPage:10,changeCurrentPage:this.changeCurrentPage,theme:"border-bottom"})})]})}),Object(v.jsx)("footer",{})]})}}]),a}(n.Component),se=a(18),oe=a.n(se),le=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).posterPathURL=function(t){var a=e.props.configuration.secure_base_url;return t?a+"w500"+t:d.noImage},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.title,a=e.poster_path,n=e.popularity,r=e.release_date,i=e.runtime,c=e.production_countries,s=e.genres,o=e.budget,l=e.revenue,u=e.overview,h=e.homepage;return Object(v.jsxs)("div",{className:oe.a.mainMovie,children:[Object(v.jsxs)("div",{className:oe.a.wrapSection,children:[Object(v.jsxs)("section",{className:oe.a.leftBar,children:[Object(v.jsx)("h2",{children:t}),Object(v.jsx)("img",{className:oe.a.poster,src:this.posterPathURL(a),alt:t})]}),Object(v.jsxs)("aside",{className:oe.a.righteBar,children:[Object(v.jsx)("h2",{children:"Overview:"}),Object(v.jsx)("p",{children:u}),Object(v.jsx)("p",{children:Object(v.jsx)("a",{className:oe.a.homepageBtn,href:h,target:"_blank",rel:"noreferrer",children:"to watch go to the homepage of the movie"})})]})]}),Object(v.jsx)("table",{className:oe.a.table,children:Object(v.jsxs)("tbody",{children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Popularity:"}),Object(v.jsx)("td",{children:n})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Release:"}),Object(v.jsx)("td",{children:r})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Runtime:"}),Object(v.jsx)("td",{children:i})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Countries:"}),Object(v.jsx)("td",{children:c.map((function(e){return e.name})).join(", ")})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Genres:"}),Object(v.jsx)("td",{children:s.map((function(e){return e.name})).join(", ")})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Budget:"}),Object(v.jsx)("td",{children:Intl.NumberFormat("ru-RU").format(o)})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Revenue:"}),Object(v.jsx)("td",{children:Intl.NumberFormat("ru-RU").format(l)})]})]})})]})}}]),a}(n.Component);le.defaultProps={title:"???",popularity:"???",release_date:"???",runtime:"???",production_countries:[{name:"???"}],genres:[{name:"???"}],budget:"???",revenue:"???",overview:"???"};var ue=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={film:"",error:!1,loading:!0,configuration:{}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),T.axiosMovieDetails(this.props.match.params.id).then((function(t){e.setState({film:t.data})})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({loading:!1})})),T.axiosGetConfiguration().then((function(t){return e.setState({configuration:t.data.images})})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.film,a=e.error,r=e.loading,i=e.configuration;return Object(v.jsxs)(n.Fragment,{children:[Object(v.jsx)("header",{children:Object(v.jsx)("div",{className:G.a.wrapHeader,children:Object(v.jsx)(m,{})})}),Object(v.jsxs)("main",{children:[a&&Object(v.jsx)(L,{}),!r&&Object(v.jsx)("div",{className:ie.a.wrapMain,children:t&&Object(v.jsx)(le,{data:t,configuration:i})}),r&&Object(v.jsx)(K,{})]}),Object(v.jsx)("footer",{})]})}}]),a}(n.Component),he=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={localStorageQueueArr:[],arrMov:[],configuration:{}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("watched");e&&this.setState({arrMov:JSON.parse(e)});var t=this.props.location.state.configuration;this.setState({configuration:t})}},{key:"render",value:function(){var e=this.state,t=e.arrMov,a=e.configuration;return Object(v.jsxs)(n.Fragment,{children:[Object(v.jsx)("header",{children:Object(v.jsx)("div",{className:G.a.wrapHeader,children:Object(v.jsx)(m,{})})}),Object(v.jsx)("main",{children:Object(v.jsx)("div",{className:M.a.wrapQueueWathcedMain,children:0!==t.length&&Object(v.jsx)(w,{location:this.props.location.pathname,arrMovies:t,configuration:a})})})]})}}]),a}(n.Component),de=(a(139),a(54)),je=a.n(de),pe=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(v.jsx)("footer",{children:Object(v.jsx)("div",{className:je.a.footerWrapper,children:Object(v.jsxs)("h2",{children:["\u0420\u0435\u0441\u0443\u0440\u0441 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d:",Object(v.jsx)("a",{href:"https://www.themoviedb.org/",target:"_blank",rel:"noreferrer",children:Object(v.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro5ZTchO0L58ROOAAGu5oYo4qKo5wRkhfcUmHFC7nKBgYjuAIsjsMFzB_igucEiCB8ic&usqp=CAU",alt:"The Movie Database (TMDB)",width:"130",height:"94"})})]})})})}}]),a}(n.Component),ge=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(v.jsxs)(n.Fragment,{children:[Object(v.jsxs)(h.c,{children:[Object(v.jsx)(h.a,{path:d.trending+d.page,component:ce}),Object(v.jsx)(h.a,{path:d.movie,component:ue}),Object(v.jsx)(h.a,{path:d.queue,component:C}),Object(v.jsx)(h.a,{path:d.watched,component:he}),Object(v.jsx)(h.a,{component:L})]}),Object(v.jsx)(pe,{})]})}}]),a}(n.Component);c.a.render(Object(v.jsx)(j.a,{children:Object(v.jsx)(ge,{})}),document.querySelector("#root"))},15:function(e){e.exports=JSON.parse('{"API_KEY":"?api_key=1cd465b7a64b6b5614a6c0670e5663f3","trendingURL":"https://api.themoviedb.org/3/trending/all/week","configurationURL":"https://api.themoviedb.org/3/configuration","searchRequestURL":"https://api.themoviedb.org/3/search/movie","movieURL":"https://api.themoviedb.org/3/movie/","noImage":"https://image.freepik.com/free-vector/man-sitting-on-big-question-mark-symbol_24381-1192.jpg","genre":"https://api.themoviedb.org/3/genre/movie/list"}')},18:function(e,t,a){e.exports={mainMovie:"Movie_mainMovie__3L5k5",poster:"Movie_poster__3Omjp",table:"Movie_table__ibXfU",wrapSection:"Movie_wrapSection__3LCxM",righteBar:"Movie_righteBar__DebQh",homepageBtn:"Movie_homepageBtn__1loLg"}},2:function(e,t,a){e.exports={wrapHeader:"Navigation_wrapHeader__XjwrI",wrapNav:"Navigation_wrapNav__3dR5H",HeaderMenu:"Navigation_HeaderMenu__2zyer",HeaderMenuHome:"Navigation_HeaderMenuHome__1gAnP",hiddenHeaderMenu:"Navigation_hiddenHeaderMenu__3Lpaw",menuIsActiv:"Navigation_menuIsActiv__p3tiJ",GengeMenu:"Navigation_GengeMenu__1Mbu-",hiddenGengeMenu:"Navigation_hiddenGengeMenu__1u3w1"}},24:function(e,t,a){e.exports={wrapMain:"Main_wrapMain__3gYk8"}},25:function(e,t,a){e.exports={wrapGenre:"Genre_wrapGenre__2Fown",containerGenre:"Genre_containerGenre__3iGbm",itemGenre:"Genre_itemGenre__2SGr_"}},29:function(e,t,a){e.exports={logoIMG:"Logo_logoIMG__37ND5",TV:"Logo_TV__1rwla"}},48:function(e,t,a){e.exports={searchForm:"Search_searchForm__3KM1C"}},50:function(e,t,a){e.exports={spinner:"Spinner_spinner__2O3pz"}},53:function(e,t,a){e.exports={pagination_box:"Pagination_pagination_box__3DDvq"}},54:function(e,t,a){e.exports={footerWrapper:"Footer_footerWrapper__2mEC9"}},8:function(e,t,a){e.exports={containerSlider:"TrendingMovies_containerSlider__2g7ra",mainTrending:"TrendingMovies_mainTrending__3zYxW",itemsWrap:"TrendingMovies_itemsWrap__2sPDa",container:"TrendingMovies_container__3GQXv",containerSVG:"TrendingMovies_containerSVG__1SAMv",mainIMG:"TrendingMovies_mainIMG__3zeui",title:"TrendingMovies_title__62lOi",imgSVGPlayBtn:"TrendingMovies_imgSVGPlayBtn__2EtXG",btnForSvg:"TrendingMovies_btnForSvg__21q4R",contForSvgStar:"TrendingMovies_contForSvgStar__vyw62",imgSVG:"TrendingMovies_imgSVG__1SOqA",imgSVGStar:"TrendingMovies_imgSVGStar__3qfJZ",voteAverage:"TrendingMovies_voteAverage__1XI5S",dNone:"TrendingMovies_dNone__15Ju_",wrapQueueWathcedMain:"TrendingMovies_wrapQueueWathcedMain__eUqqr"}}},[[140,1,2]]]);
//# sourceMappingURL=main.dbbbc4f3.chunk.js.map