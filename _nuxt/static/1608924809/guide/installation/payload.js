__NUXT_JSONP__("/guide/installation", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak){return {data:[{document:{slug:"installation",title:"Installation",description:"",position:s,category:"Guide",toc:[{id:H,depth:s,text:I},{id:J,depth:s,text:K}],body:{type:"root",children:[{type:b,tag:l,props:{},children:[{type:a,value:"You can install using "},{type:b,tag:n,props:{href:"https:\u002F\u002Fgetcomposer.org\u002F",rel:[L,M,N],target:O},children:[{type:a,value:P}]},{type:a,value:" from "},{type:b,tag:n,props:{href:"https:\u002F\u002Fpackagist.org\u002Fpackages\u002Fpepperlabs\u002Fpepper",rel:[L,M,N],target:O},children:[{type:a,value:"Packagist"}]},{type:a,value:"."}]},{type:a,value:f},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,Q]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:P}]},{type:a,value:" require pepperlabs\u002Fpepper\n"}]}]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Initial the base GraphQL classes:"}]},{type:a,value:f},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,Q]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"php artisan pepper:grind --all\n"}]}]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Add "},{type:b,tag:j,props:{},children:[{type:a,value:"pepper"}]},{type:a,value:" middleware to the GraphQL config file."}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Out of the box, any models selected would be available at the GraphQL endpoint.\nHowever, you should make sure that you have defined the return type of your relations in your models in order to make the relations work on the fly.\nAn example model would look like this:"}]},{type:a,value:f},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,R]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,"php",R]},children:[{type:b,tag:c,props:{className:[d,"delimiter","important"]},children:[{type:a,value:"\u003C?php"}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"namespace"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"Your"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"App"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"Models"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"Namaspace"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"BelongsTo"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"MorphMany"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:"Comment"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"extends"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"post"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:" BelongsTo\n    "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Y}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"belongsTo"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:"Post"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:"\n\n    "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"likes"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:" MorphMany\n    "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Y}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"morphMany"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:"Like"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:","}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"single-quoted-string","string"]},children:[{type:a,value:"'likable'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:f}]}]}]}]},{type:a,value:f},{type:b,tag:ad,props:{id:H},children:[{type:b,tag:n,props:{href:"#optimization",ariaHidden:G,tabIndex:ae},children:[{type:b,tag:c,props:{className:[af,ag]},children:[]}]},{type:a,value:I}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"By enabling caching you can improve execution time:"}]},{type:a,value:f},{type:b,tag:"ol",props:{},children:[{type:a,value:f},{type:b,tag:ah,props:{},children:[{type:a,value:ai},{type:b,tag:j,props:{},children:[{type:a,value:"pepper.cache.disabled"}]},{type:a,value:aj},{type:b,tag:j,props:{},children:[{type:a,value:"false"}]}]},{type:a,value:f},{type:b,tag:ah,props:{},children:[{type:a,value:ai},{type:b,tag:j,props:{},children:[{type:a,value:"graphql.lazyload_types"}]},{type:a,value:aj},{type:b,tag:j,props:{},children:[{type:a,value:G}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:ad,props:{id:J},children:[{type:b,tag:n,props:{href:"#supported-databases",ariaHidden:G,tabIndex:ae},children:[{type:b,tag:c,props:{className:[af,ag]},children:[]}]},{type:a,value:K}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"As it uses Laravel Eloquent only, it would support SQLite, MySQL, PostgreSQL, and SQLServer."}]}]},dir:"\u002Fen\u002Fguide",path:"\u002Fen\u002Fguide\u002Finstallation",extension:".md",createdAt:ak,updatedAt:ak,to:"\u002Fguide\u002Finstallation"},prev:{slug:"index",title:"Introduction",to:"\u002F"},next:{slug:"commands",title:"Commands",to:"\u002Fguide\u002Fcommands"}}],fetch:[],mutations:[]}}("text","element","span","token","punctuation","\n","keyword"," ","\\","code","function","p",";","a","package","(",")","operator",2,"div","nuxt-content-highlight","pre","line-numbers","\n\n","use","Illuminate","Database","Eloquent","class","{","\n    ","}","true","optimization","Optimization","supported-databases","Supported databases","nofollow","noopener","noreferrer","_blank","composer","language-bash","language-php","Model","Relations","class-name","public",":","\n        ","return","this","$this","-","\u003E","scope","::","h2",-1,"icon","icon-link","li","set "," to ","2020-12-25T19:32:24.187Z")));