import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as u,c as d,e as p,d as i,w as l,a,f as h,b as s,r as m}from"./app.0b120d3f.js";const g="/aurora-blog/assets/image-20221227222729075.d0cb3478.png",_="/aurora-blog/assets/image-20221227224209336.27d44d6c.png",x="/aurora-blog/assets/image-20221227224245927.84b08366.png",v="/aurora-blog/assets/image-20221227224312600.fa03f11a.png",b="/aurora-blog/assets/image-20221227224343427.375a578e.png",y="/aurora-blog/assets/image-20221227225855008.c63fc071.png",w="/aurora-blog/assets/image-20221227230225366.e3248dc2.png",k="/aurora-blog/assets/image-20221227230333570.7ca18543.png",f="/aurora-blog/assets/image-20221227232312859.b48cafe6.png",M="/aurora-blog/assets/image-20221227232349026.46ec736c.png",z="/aurora-blog/assets/image-20221227232428289.e91e8c01.png",A="/aurora-blog/assets/image-20221227232458486.d3faeecb.png",L={},T=a("p",null,"「二叉搜索树 Binary Search Tree」",-1),O=h('<p>「二叉搜索树 Binary Search Tree」满足以下条件：</p><ol><li>对于根结点，左子树中所有结点的值 &lt; 根结点的值 &lt; 右子树中所有结点的值；</li><li>任意结点的左子树和右子树也是二叉搜索树，即也满足条件 <code>1.</code> ；</li></ol><p><img src="'+g+'" alt="image-20221227222729075" loading="lazy"></p><h2 id="二叉搜索树的操作" tabindex="-1"><a class="header-anchor" href="#二叉搜索树的操作" aria-hidden="true">#</a> 二叉搜索树的操作</h2><h3 id="查找结点" tabindex="-1"><a class="header-anchor" href="#查找结点" aria-hidden="true">#</a> 查找结点</h3><p>给定目标结点值 <code>num</code> ，可以根据二叉搜索树的性质来查找。声明一个结点 <code>cur</code> ，从二叉树的根结点 <code>root</code> 出发，循环比较结点值 <code>cur.val</code> 和 <code>num</code> 之间的大小关系</p><ul><li>若 <code>cur.val &lt; val</code> ，说明目标结点在 <code>cur</code> 的右子树中，因此执行 <code>cur = cur.right</code> ；</li><li>若 <code>cur.val &gt; val</code> ，说明目标结点在 <code>cur</code> 的左子树中，因此执行 <code>cur = cur.left</code> ；</li><li>若 <code>cur.val = val</code> ，说明找到目标结点，跳出循环并返回该结点即可；</li></ul>',7),B=a("p",null,[a("img",{src:_,alt:"image-20221227224209336",loading:"lazy"})],-1),C=a("p",null,[a("img",{src:x,alt:"image-20221227224245927",loading:"lazy"})],-1),N=a("p",null,[a("img",{src:v,alt:"image-20221227224312600",loading:"lazy"})],-1),V=a("p",null,[a("img",{src:b,alt:"image-20221227224343427",loading:"lazy"})],-1),j=a("p",null,[s("二叉搜索树的查找操作就像二分查找一样，每次折半。循环次数最多为二叉树的高度，当二叉树平衡时，时间复杂度为 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"O"),a("mo",{stretchy:"false"},"("),a("mi",null,"l"),a("mi",null,"o"),a("msub",null,[a("mi",null,"g"),a("mi",null,"n")]),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"O(log_n)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),a("span",{class:"mord mathnormal"},"o"),a("span",{class:"mord"},[a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.1514em"}},[a("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mathnormal mtight"},"n")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.15em"}},[a("span")])])])])]),a("span",{class:"mclose"},")")])])]),s(" .")],-1),S=a("div",{class:"language-text line-numbers-mode","data-ext":"text"},[a("pre",{class:"language-text"},[a("code",null,`
`)]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),E=a("div",{class:"language-text line-numbers-mode","data-ext":"text"},[a("pre",{class:"language-text"},[a("code",null,`
`)]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),q=a("div",{class:"language-text line-numbers-mode","data-ext":"text"},[a("pre",{class:"language-text"},[a("code",null,`
`)]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),D=a("h3",{id:"插入结点",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#插入结点","aria-hidden":"true"},"#"),s(" 插入结点")],-1),F=a("p",null,[s("给定一个待插入元素 "),a("code",null,"num"),s(" ，为了保持二叉搜索树 “左子树 < 根结点 < 右子树” 的性质，插入操作分为两步：")],-1),G=a("ol",null,[a("li",null,[a("strong",null,"查找插入位置："),s(" 与查找操作类似，我们从根结点出发，根据当前结点值和 "),a("code",null,"num"),s(" 的大小关系循环向下搜索，直到越过叶结点（遍历到 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"n"),a("mi",null,"u"),a("mi",null,"l"),a("mi",null,"l")]),a("annotation",{encoding:"application/x-tex"},"null")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"n"),a("span",{class:"mord mathnormal"},"u"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"ll")])])]),s("）时跳出循环；")]),a("li",null,[a("strong",null,"在该位置插入结点："),s(" 初始化结点 "),a("code",null,"num"),s(" ，将该结点放到 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"n"),a("mi",null,"u"),a("mi",null,"l"),a("mi",null,"l")]),a("annotation",{encoding:"application/x-tex"},"null")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"n"),a("span",{class:"mord mathnormal"},"u"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"ll")])])]),s(" 的位置 ；")])],-1),H=a("p",null,"二叉搜索树不允许存在重复结点，否则将会违背其定义。因此若待插入结点在树中已经存在，则不执行插入，直接返回即可.",-1),I=a("p",null,[a("img",{src:y,alt:"image-20221227225855008",loading:"lazy"})],-1),J=a("p",null,[s("为了插入结点，需要借助 "),a("strong",null,[s("辅助结点 "),a("code",null,"prev")]),s(" 保存上一轮循环的结点，这样在遍历到 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"n"),a("mi",null,"u"),a("mi",null,"l"),a("mi",null,"l")]),a("annotation",{encoding:"application/x-tex"},"null")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal"},"n"),a("span",{class:"mord mathnormal"},"u"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"ll")])])]),s(" 时，我们也可以获取到其父结点，从而完成结点插入操作。")],-1),K=a("p",null,[s("与查找结点相同，插入结点的时间复杂度为: "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"O"),a("mo",{stretchy:"false"},"("),a("mi",null,"l"),a("mi",null,"o"),a("mi",null,"g"),a("msub",null,[a("mtext",null,"⁡"),a("mi",null,"n")]),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"O(log⁡_n)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),a("span",{class:"mord mathnormal"},"o"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),a("span",{class:"mord"},[a("span",{class:"mord"},"⁡"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.1514em"}},[a("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mathnormal mtight"},"n")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.15em"}},[a("span")])])])])]),a("span",{class:"mclose"},")")])])]),s(".")],-1),P=a("div",{class:"language-text line-numbers-mode","data-ext":"text"},[a("pre",{class:"language-text"},[a("code",null,`
`)]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),Q=a("div",{class:"language-text line-numbers-mode","data-ext":"text"},[a("pre",{class:"language-text"},[a("code",null,`
`)]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),R=a("div",{class:"language-text line-numbers-mode","data-ext":"text"},[a("pre",{class:"language-text"},[a("code",null,`
`)]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),U=a("h3",{id:"删除结点",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#删除结点","aria-hidden":"true"},"#"),s(" 删除结点")],-1),W=a("p",null,"与插入结点一样，我们需要在删除操作后维持二叉搜索树的 “左子树 < 根结点 < 右子树” 的性质。首先，我们需要在二叉树中执行查找操作，获取待删除结点。接下来，根据待删除结点的子结点数量，删除操作需要分为三种情况：",-1),X=a("ol",null,[a("li",null,[a("strong",null,[s("待删除结点的子结点数量 = "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mn",null,"0")]),a("annotation",{encoding:"application/x-tex"},"0")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6444em"}}),a("span",{class:"mord"},"0")])])]),s(" .")]),s(" 表明待删除结点是叶结点，直接删除即可。")])],-1),Y=a("p",null,[a("img",{src:w,alt:"image-20221227230225366",loading:"lazy"})],-1),Z=a("ol",{start:"2"},[a("li",null,[a("strong",null,[s("待删除结点的子结点数量 = "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mn",null,"1")]),a("annotation",{encoding:"application/x-tex"},"1")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6444em"}}),a("span",{class:"mord"},"1")])])]),s(" .")]),s(" 将待删除结点替换为其子结点。")])],-1),$=a("p",null,[a("img",{src:k,alt:"image-20221227230333570",loading:"lazy"})],-1),aa=a("ol",{start:"3"},[a("li",null,[a("strong",null,[s("待删除结点的子结点数量 = "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mn",null,"2")]),a("annotation",{encoding:"application/x-tex"},"2")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6444em"}}),a("span",{class:"mord"},"2")])])]),s(" .")]),s(" 删除操作分为三步： "),a("ol",null,[a("li",null,[s("找到待删除结点在 "),a("strong",null,"中序遍历序列"),s(" 中的下一个结点，记为 "),a("code",null,"nex"),s(" ；")]),a("li",null,[s("在树中递归删除结点 "),a("code",null,"nex"),s(" ；")]),a("li",null,[s("使用 "),a("code",null,"nex"),s(" 替换待删除结点；")])])])],-1),sa=a("p",null,[a("img",{src:f,alt:"image-20221227232312859",loading:"lazy"})],-1),la=a("p",null,[a("img",{src:M,alt:"image-20221227232349026",loading:"lazy"})],-1),ta=a("p",null,[a("img",{src:z,alt:"image-20221227232428289",loading:"lazy"})],-1),ea=a("p",null,[a("img",{src:A,alt:"image-20221227232458486",loading:"lazy"})],-1);function na(ia,oa){const o=m("Tabs"),c=m("CodeTabs");return u(),d("div",null,[T,p("more"),O,i(o,{id:"48",data:[{title:"step1"},{title:"step2"},{title:"step3"},{title:"step4"}]},{tab0:l(({title:t,value:e,isActive:n})=>[B]),tab1:l(({title:t,value:e,isActive:n})=>[C]),tab2:l(({title:t,value:e,isActive:n})=>[N]),tab3:l(({title:t,value:e,isActive:n})=>[V]),_:1}),j,i(c,{id:"73",data:[{title:"rust",value:"rust"},{title:"java",value:"java"},{title:"c++",value:"c++"}],"tab-id":"language"},{tab0:l(({title:t,value:e,isActive:n})=>[S]),tab1:l(({title:t,value:e,isActive:n})=>[E]),tab2:l(({title:t,value:e,isActive:n})=>[q]),_:1}),D,F,G,H,I,J,K,i(c,{id:"114",data:[{title:"rust",value:"rust"},{title:"java",value:"java"},{title:"c++",value:"c++"}],"tab-id":"language"},{tab0:l(({title:t,value:e,isActive:n})=>[P]),tab1:l(({title:t,value:e,isActive:n})=>[Q]),tab2:l(({title:t,value:e,isActive:n})=>[R]),_:1}),U,W,X,Y,Z,$,aa,i(o,{id:"175",data:[{title:"setp1"},{title:"setp2"},{title:"setp3"},{title:"setp4"}]},{tab0:l(({title:t,value:e,isActive:n})=>[sa]),tab1:l(({title:t,value:e,isActive:n})=>[la]),tab2:l(({title:t,value:e,isActive:n})=>[ta]),tab3:l(({title:t,value:e,isActive:n})=>[ea]),_:1})])}const ra=r(L,[["render",na],["__file","3.html.vue"]]);export{ra as default};
