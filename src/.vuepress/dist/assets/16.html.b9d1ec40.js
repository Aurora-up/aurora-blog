import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as o,d as m,w as t,a as s,b as a,r as h}from"./app.45abfc11.js";const g="/aurora-blog/assets/image-20230110143246091-1673752540637-6.2f55de65.png",u="/aurora-blog/assets/image-20230110143310700-1673752540637-7.099240e7.png",d="/aurora-blog/assets/image-20230110144848073-1673752540637-8.c8652ac2.png",_="/aurora-blog/assets/image-20230110145037949-1673752540637-9.f369558e.png",y="/aurora-blog/assets/image-20230110145116709-1673752540637-10.b08214d1.png",b="/aurora-blog/assets/image-20230110150232176-1673752540637-11.92e2d7c6.png",v="/aurora-blog/assets/image-20230110151315292-1673752540637-12.36414509.png",x="/aurora-blog/assets/image-20230110152117558-1673752540637-13.d9d6f01b.png",w="/aurora-blog/assets/image-20230110151856632-1673752540637-14.a451f2e6.png",c="/aurora-blog/assets/image-20230110142129488-1673752540637-15.c9acfacb.png",f="/aurora-blog/assets/image-20230110141237446-1673752540637-16.01a68061.png",z="/aurora-blog/assets/image-20230110141603275-1673752540637-17.692c53d4.png",k="/aurora-blog/assets/image-20230110141804938-1673752540637-18.083068d7.png",M="/aurora-blog/assets/image-20230110141909614-1673752540637-19.6da3b0fc.png",T={},A=s("h2",{id:"b树的删除操作",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#b树的删除操作","aria-hidden":"true"},"#"),a(" b树的删除操作")],-1),L=s("p",null,"在 b Tree 中进行删除操作需要在删除结点后仍然符合 b Tree 的性质，b Tree 特性的关键为：",-1),B=s("ol",null,[s("li",null,[a("对于 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"m")]),s("annotation",{encoding:"application/x-tex"},"m")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"m")])])]),a(" 阶 b Tree ——除根结点外，结点中关键字个数为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"⌈"),s("mfrac",null,[s("mi",null,"m"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"⌉"),s("mo",null,"−"),s("mn",null,"1"),s("mo",null,"≤"),s("mi",null,"n"),s("mo",null,"≤"),s("mi",null,"m"),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"⌈\\frac{m}{2}⌉-1≤n≤m-1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.095em","vertical-align":"-0.345em"}}),s("span",{class:"mopen"},"⌈"),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6954em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose"},"⌉"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7804em","vertical-align":"-0.136em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7719em","vertical-align":"-0.136em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"m"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" ；")]),s("li",null,"b Tree 也是一个 “排序树” ，子树 0 < 关键字 1 < 子树 1 < 关键字 2 …")],-1),N=s("h3",{id:"_1-删除终端关键字",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-删除终端关键字","aria-hidden":"true"},"#"),a(" 1.删除终端关键字")],-1),V=s("h4",{id:"_1-1-含有的关键字的个数在-区间内",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-1-含有的关键字的个数在-区间内","aria-hidden":"true"},"#"),a(" 1.1. 含有的关键字的个数在 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mo",{stretchy:"false"},"⌈"),s("mfrac",null,[s("mi",null,"m"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"⌉"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{separator:"true"},","),s("mi",null,"m"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"(⌈\\frac{m}{2}⌉-1,m-1]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.095em","vertical-align":"-0.345em"}}),s("span",{class:"mopen"},"(⌈"),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6954em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose"},"⌉"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8389em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"m"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},"]")])])]),a(" 区间内")],-1),C=s("p",null,[a("此时直接删除该终端关键字即可，例如下面 b Tree 中删除 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"77")]),s("annotation",{encoding:"application/x-tex"},"77")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"77")])])]),a(" 号关键字.")],-1),E=s("p",null,[s("img",{src:g,alt:"image-20230110143246091",loading:"lazy"})],-1),j=s("p",null,[s("img",{src:u,alt:"image-20230110143310700",loading:"lazy"})],-1),q=s("h4",{id:"_1-2-含有的关键字的个数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-2-含有的关键字的个数","aria-hidden":"true"},"#"),a(" 1.2.含有的关键字的个数 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"="),s("mo",{stretchy:"false"},"⌈"),s("mfrac",null,[s("mi",null,"m"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"⌉"),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"=⌈\\frac{m}{2}⌉-1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.3669em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.095em","vertical-align":"-0.345em"}}),s("span",{class:"mopen"},"⌈"),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6954em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose"},"⌉"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])],-1),D=s("p",null,[a("此时如果删除其中某个关键字，将会导致该结点不符合 b Tree 的性质，此时需要该关键字所在结点的"),s("strong",null,"父结点"),a("和"),s("strong",null,"兄弟结点"),a("来修复，此时的"),s("strong",null,"兄弟结点中的关键字要够借"),a("才行，左兄弟或者右兄弟中关键字个数需要 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,">"),s("mo",{stretchy:"false"},"⌈"),s("mfrac",null,[s("mi",null,"m"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"⌉"),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},">⌈\\frac{m}{2}⌉-1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.5782em","vertical-align":"-0.0391em"}}),s("span",{class:"mrel"},">"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.095em","vertical-align":"-0.345em"}}),s("span",{class:"mopen"},"⌈"),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6954em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose"},"⌉"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" 才行")],-1),F=s("p",null,[a("例如：删除下面 b Tree 中的 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"70")]),s("annotation",{encoding:"application/x-tex"},"70")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"70")])])]),a(" 号关键字:")],-1),G=s("p",null,[s("img",{src:d,alt:"image-20230110144848073",loading:"lazy"})],-1),H=s("p",null,[s("img",{src:_,alt:"image-20230110145037949",loading:"lazy"})],-1),I=s("p",null,[s("img",{src:y,alt:"image-20230110145116709",loading:"lazy"})],-1),J=s("h4",{id:"_1-3-兄弟结点中关键字不够借",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-3-兄弟结点中关键字不够借","aria-hidden":"true"},"#"),a(" 1.3.兄弟结点中关键字不够借")],-1),K=s("p",null,[a("左右兄弟结点含有的关键字的个数 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"="),s("mo",{stretchy:"false"},"⌈"),s("mfrac",null,[s("mi",null,"m"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"⌉"),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"=⌈\\frac{m}{2}⌉-1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.3669em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.095em","vertical-align":"-0.345em"}}),s("span",{class:"mopen"},"⌈"),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6954em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose"},"⌉"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a(" ，此时他们不够借，因为他们借出自己的结点的话会导致自己不满足 b Tree 的性质，此时需要另一种解决方案；")],-1),O=s("p",null,"删除待删除关键字后，将其所在结点与 左 (或右) 兄弟结点及双亲结点中的关键字进行合并，合并后需要对下放关键字的双亲结点进行判断，若不满足 b Tree 性质，递归地进行合并操作即可。",-1),P=s("p",null,[a("例如：删除下面 b Tree 中的 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"73")]),s("annotation",{encoding:"application/x-tex"},"73")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"73")])])]),a(" 号关键字:")],-1),Q=s("p",null,[s("img",{src:b,alt:"image-20230110150232176",loading:"lazy"})],-1),R=s("p",null,[s("img",{src:v,alt:"image-20230110151315292",loading:"lazy"})],-1),S=s("p",null,[s("img",{src:x,alt:"image-20230110152117558",loading:"lazy"})],-1),U=s("p",null,[s("img",{src:w,alt:"image-20230110151856632",loading:"lazy"})],-1),W=s("h3",{id:"_2-删除非终端关键字",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-删除非终端关键字","aria-hidden":"true"},"#"),a(" 2.删除非终端关键字")],-1),X=s("p",null,"首先通过寻找其中序遍历的直接前驱关键字或者直接后继关键字来进行替代，因为直接前驱或者直接后继关键字都在 “终端结点层” ，所以也就转换为 “终端结点” 中关键字的删除，再按照对应操作进行即可。",-1),Y=s("p",null,[a("【"),s("strong",null,"转换过程"),a("】")],-1),Z=s("p",null,[a("在下列 b Tree 中删除 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"80")]),s("annotation",{encoding:"application/x-tex"},"80")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"80")])])]),a(" 号关键字：")],-1),$=s("ul",null,[s("li",null,"使用直接前驱结点代替被删除的结点")],-1),ss=s("p",null,[s("img",{src:c,alt:"image-20230110142129488",loading:"lazy"})],-1),as=s("p",null,[s("img",{src:f,alt:"image-20230110141237446",loading:"lazy"})],-1),ts=s("p",null,[s("img",{src:z,alt:"image-20230110141603275",loading:"lazy"})],-1),ls=s("p",null,[a("在下列 b Tree 中删除 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"80")]),s("annotation",{encoding:"application/x-tex"},"80")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"80")])])]),a(" 号关键字：")],-1),es=s("ul",null,[s("li",null,"使用直接后继结点代替被删除的结点")],-1),ns=s("p",null,[s("img",{src:c,alt:"image-20230110142129488",loading:"lazy"})],-1),is=s("p",null,[s("img",{src:k,alt:"image-20230110141804938",loading:"lazy"})],-1),ms=s("p",null,[s("img",{src:M,alt:"image-20230110141909614",loading:"lazy"})],-1);function cs(ps,rs){const i=h("Tabs");return r(),o("div",null,[A,L,B,N,V,C,m(i,{id:"27",data:[{title:"step1"},{title:"step2"}]},{tab0:t(({title:l,value:e,isActive:n})=>[E]),tab1:t(({title:l,value:e,isActive:n})=>[j]),_:1}),q,D,F,m(i,{id:"48",data:[{title:"step1"},{title:"step2"},{title:"step3"}]},{tab0:t(({title:l,value:e,isActive:n})=>[G]),tab1:t(({title:l,value:e,isActive:n})=>[H]),tab2:t(({title:l,value:e,isActive:n})=>[I]),_:1}),J,K,O,P,m(i,{id:"77",data:[{title:"step1"},{title:"step2"},{title:"step3"},{title:"step4"}]},{tab0:t(({title:l,value:e,isActive:n})=>[Q]),tab1:t(({title:l,value:e,isActive:n})=>[R]),tab2:t(({title:l,value:e,isActive:n})=>[S]),tab3:t(({title:l,value:e,isActive:n})=>[U]),_:1}),W,X,Y,Z,$,m(i,{id:"118",data:[{title:"step1"},{title:"step2"},{title:"step3"}]},{tab0:t(({title:l,value:e,isActive:n})=>[ss]),tab1:t(({title:l,value:e,isActive:n})=>[as]),tab2:t(({title:l,value:e,isActive:n})=>[ts]),_:1}),ls,es,m(i,{id:"145",data:[{title:"step1"},{title:"step2"},{title:"step3"}]},{tab0:t(({title:l,value:e,isActive:n})=>[ns]),tab1:t(({title:l,value:e,isActive:n})=>[is]),tab2:t(({title:l,value:e,isActive:n})=>[ms]),_:1})])}const gs=p(T,[["render",cs],["__file","16.html.vue"]]);export{gs as default};
