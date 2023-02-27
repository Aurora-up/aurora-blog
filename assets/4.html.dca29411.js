import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as o,e as t,a,b as l,f as e}from"./app.1c26b036.js";const r="/aurora-blog/assets/image-20230102212014604.f58a259c.png",n="/aurora-blog/assets/image-20230103105024451.797739ec.png",p="/aurora-blog/assets/image-20230102212718013.6454bb75.png",g="/aurora-blog/assets/image-20230102230548949.eca2e6b8.png",c="/aurora-blog/assets/image-20230102230622831.e6ff1b94.png",m="/aurora-blog/assets/image-20230102213729006.cf431d08.png",d="/aurora-blog/assets/image-20230102214213394.c7997f39.png",h="/aurora-blog/assets/image-20230102214738521.ddcb58cb.png",_="/aurora-blog/assets/image-20230103143707584.4ac22196.png",u="/aurora-blog/assets/image-20230103144012377.c13b9d60.png",b="/aurora-blog/assets/image-20230103144549167.8df47527.png",f="/aurora-blog/assets/image-20230103144709225.60f6afc1.png",y="/aurora-blog/assets/image-20230103144823496.da684803.png",x="/aurora-blog/assets/image-20230103145537076.d3e9b707.png",z="/aurora-blog/assets/image-20230103145606506.35c4b519.png",v="/aurora-blog/assets/image-20230103145630905.cf0b5522.png",k="/aurora-blog/assets/image-20230103145716017.faf62d1b.png",w="/aurora-blog/assets/image-20230103145755914.58298daf.png",B={},q=a("p",null,"「红黑树 Red Black Tree」",-1),N=a("p",null,[l("「红黑树 Red Black Tree」是在 「二叉搜索树 」的基础上对二叉树进行平衡操作的一种数据结构，这些平衡操作可以使得红黑树在动态维护当中仍然保持 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"O"),a("mo",{stretchy:"false"},"("),a("mi",null,"l"),a("mi",null,"o"),a("mi",null,"g"),a("mi",null,"n"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"O(logn)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),a("span",{class:"mord mathnormal"},"o"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),a("span",{class:"mord mathnormal"},"n"),a("span",{class:"mclose"},")")])])]),l(" 的时间复杂度。")],-1),V=e('<h2 id="红黑树的定义" tabindex="-1"><a class="header-anchor" href="#红黑树的定义" aria-hidden="true">#</a> 红黑树的定义</h2><p>「定义」</p><ol><li>结点是红色或者黑色</li><li>根结点是黑色</li><li>所有叶结点是黑色 (即值为 <code>null</code> 的结点 )</li><li>每个红色结点的两个子结点必须是黑色。(从每个叶子结点到根的所有路径上不能有连续的红色结点)</li><li>从任一结点到其子树的每个叶子结点的所有路径都包含相同数目的黑色结点</li></ol><p>「性质」</p><ul><li>从根结点到叶子结点的最长的可能的路径不能多于最短的可能路径的两倍长</li></ul><p><img src="'+r+'" alt="image-20230102212014604" loading="lazy"></p><div class="custom-container info"><p class="custom-container-title">相关信息</p><p>从该性质中也可以看出红黑树避免的原始二叉搜索数据退化为链表，保证了时间复杂度.</p></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>红黑树同样是一颗二叉搜索树，所以其操作都在是二叉搜索树的操作基础之上，在下面插入和删除操作中的各种情况图均是红黑树的某个子树，而非整个红黑树.</p></div><h2 id="插入操作" tabindex="-1"><a class="header-anchor" href="#插入操作" aria-hidden="true">#</a> 插入操作</h2><h3 id="_1-树为空" tabindex="-1"><a class="header-anchor" href="#_1-树为空" aria-hidden="true">#</a> 1. 树为空</h3><p>直接将结点插入作为根结点并染成黑色即可</p><h3 id="_2-待插入结点的父结点为黑色" tabindex="-1"><a class="header-anchor" href="#_2-待插入结点的父结点为黑色" aria-hidden="true">#</a> 2. 待插入结点的父结点为黑色</h3><p>当父结点为黑色时，插入位置可能会出现以下四种情况：</p><p>所需操作：</p><ul><li>直接插入该结点，并将其染为红色.</li></ul><p><img src="'+n+'" alt="image-20230103105024451" loading="lazy"></p><p>实例，如下图：</p><p><img src="'+p+'" alt="image-20230102212718013" loading="lazy"></p><h3 id="_3-待插入结点的父结点为红色" tabindex="-1"><a class="header-anchor" href="#_3-待插入结点的父结点为红色" aria-hidden="true">#</a> 3. 待插入结点的父结点为红色</h3><p>根据待插入结点叔叔结点的不同又可以分为两种情况：</p><ol><li>待插入结点的叔叔结点是红色</li></ol><p>所需操作：【<strong>变色</strong>】</p><ol><li>将 “父结点” 变为黑色</li><li>将 “叔叔结点” 变为黑色</li><li>将祖父结点变为红色</li><li>以祖父结点作为 “当前结点” 继续进行后续操作 (此时整棵树还不是红黑树)</li></ol><p><img src="'+g+'" alt="image-20230102230548949" loading="lazy"></p><ol start="2"><li>待插入结点的叔叔结点是黑色</li></ol><p>所需操作：【<strong>旋转 + 变色</strong>】</p><p>当为中间两种情况时，可分别通过以 “父结点” 为原点进行<strong>左旋 (次左侧的情况)</strong> 或 <strong>右旋 (次右侧的情况)</strong> 变为最两侧的情况，然后进行以下操作：</p><ol><li>将 “父结点” 变为黑色</li><li>将 “祖父结点” 变为红色</li><li>以 “祖父结点” 为原点进行<strong>右旋 (最左侧的情况时)</strong> 或 <strong>左旋 (最右侧的情况时)</strong></li></ol><p><img src="'+c+'" alt="image-20230102230622831" loading="lazy"></p><p>实例：一次完整的插入操作：</p><p><img src="'+m+'" alt="image-20230102213729006" loading="lazy"></p><p>将变色好的子树还原到原树中，发现整颗树现在并不是红黑树，在其中存在需要【变色 + 旋转】的子树结构，根据对应操作对红黑树进行变形，如下图所示：</p><p><img src="'+d+'" alt="image-20230102214213394" loading="lazy"></p><p><img src="'+h+'" alt="image-20230102214738521" loading="lazy"></p><h2 id="删除操作" tabindex="-1"><a class="header-anchor" href="#删除操作" aria-hidden="true">#</a> 删除操作</h2><p>相较于插入操作，删除操作更多种类，具体分为以下几类：</p><ol><li>删除红色结点</li><li>删除黑色结点 <ol><li>有两个红色子结点的黑色结点</li><li>有一个红色子结点的黑色结点</li></ol></li><li>删除黑色叶子结点 (不为 <code>null</code> 的叶子结点) <ol><li>删除结点为根结点</li><li>待删除结点的兄弟结点为黑色 <ol><li>兄弟结点有红色叶子结点</li><li>兄弟结点没有红色子结点</li></ol></li><li>待删除结点的兄弟结点为红色</li></ol></li></ol><p>对于删除红色结点，直接删除即可.而黑色结点需要进行相关操作。</p><h3 id="_1-删除黑色结点时-其有一个红色子结点的情况" tabindex="-1"><a class="header-anchor" href="#_1-删除黑色结点时-其有一个红色子结点的情况" aria-hidden="true">#</a> 1.删除黑色结点时，其有一个红色子结点的情况</h3><p>下图为可能出现的各种情况：</p><p><img src="'+_+'" alt="image-20230103143707584" loading="lazy"></p><p>需要进行的操作：</p><ol><li>断开其与父结点和子结点的连接</li><li>其父结点连接到其唯一的红色子结点</li><li>将其子结点染为黑色</li></ol><p>如下图：</p><p><img src="'+u+'" alt="image-20230103144012377" loading="lazy"></p><div class="custom-container info"><p class="custom-container-title">相关信息</p><p>当删除结点有两个红色子结点时，可以忽略其中一个红色子结点，这样就可以看作有一个红色子结点的情况来进行操作</p></div><h3 id="_2-待删除结点为黑色叶子结点-非-null-值结点" tabindex="-1"><a class="header-anchor" href="#_2-待删除结点为黑色叶子结点-非-null-值结点" aria-hidden="true">#</a> 2.待删除结点为黑色叶子结点(非 <code>null</code> 值结点)</h3><h4 id="_2-1-待删除结点的兄弟结点为黑色且其兄弟结点有红色子结点" tabindex="-1"><a class="header-anchor" href="#_2-1-待删除结点的兄弟结点为黑色且其兄弟结点有红色子结点" aria-hidden="true">#</a> 2.1.待删除结点的兄弟结点为黑色且其兄弟结点有红色子结点</h4><p>有如下三种情况：</p><p><img src="'+b+'" alt="image-20230103144549167" loading="lazy"></p><p>红色子结点为兄弟结点的<strong>左子结点</strong>时，操作如下：【<strong>单旋 + 变色</strong>】</p><ol><li><p>删除待删除的叶子结点</p></li><li><p>以待删除结点的父结点为原点右旋</p></li><li><p>将父结点及兄弟结点的子结点染为黑色，兄弟结点染为红色</p></li></ol><p>如下图：</p><p><img src="'+f+'" alt="image-20230103144709225" loading="lazy"></p><p>红色子结点为兄弟结点的<strong>右子结点</strong>时，操作如下：【<strong>双旋 + 变色</strong>】</p><ol><li><p>删除待删除的叶子结点</p></li><li><p>以兄弟结点为原点左旋</p></li><li><p>再以父结点为原点右旋</p></li><li><p>最后父结点染为黑色</p></li></ol><p>如下图：</p><p><img src="'+y+'" alt="image-20230103144823496" loading="lazy"></p><div class="custom-container info"><p class="custom-container-title">相关信息</p><p>而当兄弟结点有两个红色子结点时，选择上述操作中的一种即可。</p></div><h4 id="_2-2-待删除结点的兄弟结点为黑色且其兄弟结点没有红色子结点" tabindex="-1"><a class="header-anchor" href="#_2-2-待删除结点的兄弟结点为黑色且其兄弟结点没有红色子结点" aria-hidden="true">#</a> 2.2.待删除结点的兄弟结点为黑色且其兄弟结点没有红色子结点</h4><p>有两种情况：</p><p>这两种情况的都需要进行变色，但是也有不同。</p><p><img src="'+x+'" alt="image-20230103145537076" loading="lazy"></p><p>当待删除结点的父结点为<strong>红色</strong>时，则需如下操作：【变色】</p><ol><li>父结点变为黑色</li><li>兄弟结点变为红色</li></ol><p><img src="'+z+'" alt="image-20230103145606506" loading="lazy"></p><p>当待删除结点的父结点为<strong>黑色</strong>是，则需如下操作：【<strong>变色 + 递归</strong>】</p><ol><li>父结点变为黑色</li><li>兄弟结点变为红色</li><li>将父结点当作 “待删除的黑色叶子结点” 一样处理</li></ol><p>将父结点看作待删除的黑色叶子结点，则需要进行的后续操作如下：</p><ol><li>父结点变 &quot;黑色&quot;</li><li>兄弟结点变 &quot;红色&quot;</li><li>再将父结点作为 ”待删除的黑色叶子结点“ 进行操作. (也即递归操作下去直至整颗树满足红黑树的性质即可)</li></ol><div class="custom-container warning"><p class="custom-container-title">注意</p><p>这里的只是对其他结点进行 “删除操作”中的变色，而不直接删除父结点.</p></div><p><img src="'+v+'" alt="image-20230103145630905" loading="lazy"></p><h4 id="_3-待删除结点的兄弟结点为红色" tabindex="-1"><a class="header-anchor" href="#_3-待删除结点的兄弟结点为红色" aria-hidden="true">#</a> 3.待删除结点的兄弟结点为红色</h4><p>待删除结点的兄弟结点为红色时有下面几种情况，需要进行一些操作将其转化为【待删除结点的兄弟结点为<strong>黑色</strong>】的情况，然后调用相关的操作即可.</p><p><img src="'+k+'" alt="image-20230103145716017" loading="lazy"></p><p>所需操作如下：</p><ol><li>以其父结点为原点右旋</li><li>父结点染为红色</li><li>祖父结点染为黑色</li></ol><p><img src="'+w+'" alt="image-20230103145755914" loading="lazy"></p><p>经过上述操作之后，就完成了响应转换，再进行【待删除结点的兄弟结点为<strong>黑色</strong>】情况的操作即可.</p>',79);function M(O,T){return s(),o("div",null,[q,t(" more "),N,V])}const E=i(B,[["render",M],["__file","4.html.vue"]]);export{E as default};
