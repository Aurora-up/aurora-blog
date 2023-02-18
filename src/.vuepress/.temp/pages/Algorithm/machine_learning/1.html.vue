<template><div><p>决策树算法</p>
<!-- more -->
<h1 id="决策树" tabindex="-1"><a class="header-anchor" href="#决策树" aria-hidden="true">#</a> 决策树</h1>
<p>Decision Tree — 非参数的有监督学习</p>
<p>基本流程：</p>
<p><img src="@source/Algorithm/machine_learning/image/image-20221106144427088.png" alt="image-20221106144427088" loading="lazy"></p>
<div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p>三种情况导致递归返回：</p>
<ol>
<li>当前结点包含的样本全属于同一类别，无需划分；</li>
<li>当前<strong>属性集为空</strong>，或是所有样本在所有属性上取值相同，无法划分；
<ul>
<li>将该节点标记为叶节点，并将其<strong>类别设定为【该节点】所含样本最多的类别</strong>。—— 后验分布</li>
</ul>
</li>
<li>当前结点包含的<strong>样本集合为空</strong>，不能划分
<ul>
<li>将该节点标记为叶节点，但将其<strong>类别设定为【其父节点】所含样本最多的类别</strong>。——先验分布</li>
</ul>
</li>
</ol>
</div>
<h4 id="划分选择" tabindex="-1"><a class="header-anchor" href="#划分选择" aria-hidden="true">#</a> 划分选择</h4>
<p>​		算法关键在于选择【最优划分属性】，一个好的属性可以将对类别进行明确的划分。随着划分过程的不断进行，希望决策树的分支节点所包含的样本尽可能的属于同一类别。即该节点的 “<strong>纯度</strong>” 越来越高。</p>
<p>​		与纯度相反的一个概念是 <strong>熵</strong>。</p>
<div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p>熵：熵是描述信息的不确定度的，是随机变量不确定度的度量。熵越大，信息的不确定度越大，信息越”混乱”，越不符合决策树分类的需求。</p>
</div>
<p>信息熵:</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>E</mi><mi>n</mi><mi>t</mi><mo stretchy="false">(</mo><mi>D</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mrow><mi mathvariant="normal">∣</mi><mi>y</mi><mi mathvariant="normal">∣</mi></mrow></munderover><msup><mi>p</mi><mi>k</mi></msup><mtext> </mtext><mo>×</mo><mtext> </mtext><mi>l</mi><mi>o</mi><msub><mi>g</mi><mn>2</mn></msub><msub><mi>p</mi><mi>k</mi></msub></mrow><annotation encoding="application/x-tex">
Ent(D)=-\sum_{k=1}^{|y|}p^k \ × \ log_2p_k
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mord mathnormal">n</span><span class="mord mathnormal">t</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3.2631em;vertical-align:-1.3021em;"></span><span class="mord">−</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.961em;"><span style="top:-1.8479em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.386em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∣</span><span class="mord mathnormal mtight" style="margin-right:0.03588em;">y</span><span class="mord mtight">∣</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.3021em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8991em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span></span></span></span><span class="mspace"> </span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace"> </span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">o</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></p>
<PDF url="/ml.pdf" page="73"/></div></template>


