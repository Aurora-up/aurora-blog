<template><div><p>「并查集 Union Find」</p>
<!-- more -->
<p>并查集是一种可以动态维护若干个不重叠的集合，并支持查询与合并的数据结构.</p>
<ul>
<li>查询操作：查询某个元素属于哪个集合</li>
<li>合并操作：将两个集合合并为一个集合</li>
</ul>
<p>并查集中，每个集合以 “根结点” 作为代表，所以并查集的本质就是一个森林 (由若干个树 (集合) 组成).</p>
<h2 id="路径压缩" tabindex="-1"><a class="header-anchor" href="#路径压缩" aria-hidden="true">#</a> 路径压缩</h2>
<p>如果将并查集的每个集合以 “树” 的形式进行存储，这棵树在极端形况下可以会退化成一个链表，此时如果若要执行查询操作，时间复杂度为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span> ，这并不理想，在并查集中并不关心树的形状，其关键在于集合的代表：【根结点】，也即下面两个树是等价的.</p>
<p><img src="@source/Algorithm/data_struct/image/image-20230104151310041.png" alt="image-20230104151310041"></p>
<p>【路径压缩】在每次执行<strong>查询操作</strong>的同时，将访问过的每个结点 (也就是所查询元素的全部祖先) 都直接指向根结点。此时平均时间复杂度会降到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>l</mi><mi>o</mi><mi>g</mi><mtext> </mtext><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(log \ n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace"> </span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></p>
<CodeTabs id="34" :data='[{"title":"rust","id":"rust"},{"title":"java","id":"java"},{"title":"c++","id":"c++"}]' tab-id="language">
<template #tab0="{ title, value, isActive }">
<div class="language-rust line-numbers-mode" data-ext="rs"><pre v-pre class="language-rust"><code><span class="token keyword">struct</span> <span class="token type-definition class-name">UnionFind</span> <span class="token punctuation">{</span>
	id<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">usize</span><span class="token operator">></span><span class="token punctuation">,</span>      <span class="token comment">// 集合代表 (根结点)  </span>
	count<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span>        <span class="token comment">// 不相交集合个数</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">UnionFind</span> <span class="token punctuation">{</span>
	<span class="token comment">/// 初始化并查集</span>
	<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">new</span><span class="token punctuation">(</span>n<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> <span class="token keyword">Self</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> <span class="token keyword">mut</span> id <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">;</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>n <span class="token punctuation">{</span>
			id<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">Self</span> <span class="token punctuation">{</span>id <span class="token punctuation">,</span>  count<span class="token punctuation">:</span> n<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">/// 查找并查集所在集合</span>
	<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> <span class="token keyword">usize</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> <span class="token keyword">mut</span> x <span class="token operator">=</span> x<span class="token punctuation">;</span>
		<span class="token keyword">while</span> x <span class="token operator">!=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token punctuation">{</span>
			x <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>                
			<span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>    <span class="token comment">// 路径压缩</span>
		<span class="token punctuation">}</span>
		x
	<span class="token punctuation">}</span>

	<span class="token comment">/// 合并 x 所在的集合与 y 所在的集合</span>
	<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">merge</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> x <span class="token operator">==</span> y <span class="token punctuation">{</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
   	<span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> y<span class="token punctuation">;</span>        <span class="token comment">// 直接合并</span>
		<span class="token keyword">self</span><span class="token punctuation">.</span>count <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">/// 判断两个元素是否属于同一集合</span>
	<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">is_same_set</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
		<span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">/// 所有集合中不相交集合的个数</span>
	<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">count</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> <span class="token keyword">usize</span> <span class="token punctuation">{</span>
		<span class="token keyword">self</span><span class="token punctuation">.</span>count
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">UnionFind</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> id<span class="token punctuation">;</span>       <span class="token comment">// 集合代表 (根结点)</span>
  <span class="token keyword">int</span> count<span class="token punctuation">;</span>      <span class="token comment">// 所有集合中不相交的个数</span>

  <span class="token doc-comment comment">/**
   * 初始化并查集
   * <span class="token keyword">@param</span> <span class="token parameter">n</span> 集合个数
   */</span>
  <span class="token keyword">public</span> <span class="token class-name">UnionFind</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    id <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      id<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> n<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 查找 x 所在集合的代表 (根结点)
   * <span class="token keyword">@param</span> <span class="token parameter">x</span> 需要被查找的元素
   * <span class="token keyword">@return</span> x 所在集合的代表(根结点)
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">!=</span> id<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      x <span class="token operator">=</span> id<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
      id<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> id<span class="token punctuation">[</span>id<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>   <span class="token comment">// 路径压缩</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/**
   * 合并元素所在集合
   * <span class="token keyword">@param</span> <span class="token parameter">x</span> 某一集合元素
   * <span class="token keyword">@param</span> <span class="token parameter">y</span> 某一集合元素
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> fx <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> fy <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fx <span class="token operator">==</span> fy<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    id<span class="token punctuation">[</span>fx<span class="token punctuation">]</span> <span class="token operator">=</span> fy<span class="token punctuation">;</span>          <span class="token comment">// 直接合并</span>
    count <span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 判断是否属于同一集合
   * <span class="token keyword">@param</span> <span class="token parameter">x</span> 某集合元素
   * <span class="token keyword">@param</span> <span class="token parameter">y</span> 某集合元素
   * <span class="token keyword">@return</span> true: 同一集合 ; false: 不是同一集合
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSameSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> 所有集合中不相交集合的个数
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token comment">// 保存每个元素的父结点, 根结点的父结点为自己</span>
<span class="token keyword">int</span> fa<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 并查集的初始化： 初始化的并查集中每个结点都是都是单独的集合,因此根结点就是他本身.</span>
<span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> 
    fa<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 查询操作: 若 x 为树根, 则 x 代表集合, 否则递归访问 fa[x] 直至根结点</span>
<span class="token keyword">int</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>               <span class="token comment">// 返回 x 所在集合的代表元素</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">==</span> fa<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> x<span class="token punctuation">;</span>
  <span class="token keyword">return</span> fa<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>fa<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 路径压缩, fa直接赋值为根结点</span>
<span class="token punctuation">}</span>

<span class="token comment">// 合并操作: 合并元素 x 和 元素 y 所在的集合</span>
<span class="token keyword">void</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fa<span class="token punctuation">[</span>find<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// 直接将集合的根结点插入到</span>
<span class="token punctuation">}</span>

<span class="token comment">// 查询操作 (非递归)</span>
<span class="token keyword">int</span> <span class="token function">nr_find</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> root <span class="token operator">=</span> x<span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>fa<span class="token punctuation">[</span>root<span class="token punctuation">]</span> <span class="token operator">!=</span> root<span class="token punctuation">)</span> root <span class="token operator">=</span> fa<span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>   <span class="token comment">// 找到 x 所在集合的根结点</span>
  
  <span class="token keyword">int</span> i <span class="token operator">=</span> x<span class="token punctuation">;</span>
  <span class="token keyword">int</span> j<span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">!=</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    j <span class="token operator">=</span> fa<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>             
    fa<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> root<span class="token punctuation">;</span>          <span class="token comment">// 将 x 的所有祖先结点直接指向根结点</span>
    i <span class="token operator">=</span> j<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="按秩合并" tabindex="-1"><a class="header-anchor" href="#按秩合并" aria-hidden="true">#</a> 按秩合并</h2>
<p>对秩的定义有很多，例如：树高 / 集合的大小，按秩合并是一种启发式合并，将 “小的结构” 合并到 “大的结构” 上，这里使用树高作为秩的定义，也即将较矮的树合并到较高的树，直接将较低的树的根结点的父结点赋值为较高的树的根结点，这样合并后，较低的树每次合并后树高 +<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn></mrow><annotation encoding="application/x-tex">1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 。这样在平均情况下，整体的时间复杂度会更小，对于一般的并查集，只使用按秩合并的话，将所有集合合并到一起的时间复杂度是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mi>l</mi><mi>o</mi><mi>g</mi><mtext> </mtext><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(nlog \ n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace"> </span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span> 那么每次<strong>查询操作</strong>的时间复杂度为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>l</mi><mi>o</mi><mi>g</mi><mtext> </mtext><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(log \ n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace"> </span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span>.</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>同时采用 “路径压缩” 和 “按秩合并” 时，时间复杂度会降到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>α</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(α(n))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">))</span></span></span></span> ，其增长比 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>l</mi><mi>o</mi><mi>g</mi><mtext> </mtext><mi>n</mi></mrow><annotation encoding="application/x-tex">log \ n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace"> </span><span class="mord mathnormal">n</span></span></span></span> 更慢，所以  <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>α</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(α(n))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">))</span></span></span></span> 是<strong>近似于常数阶</strong>的时间复杂度.</p>
</div>
<CodeTabs id="56" :data='[{"title":"rust","id":"rust"},{"title":"java","id":"java"},{"title":"c++","id":"c++"}]' tab-id="language">
<template #tab0="{ title, value, isActive }">
<div class="language-rust line-numbers-mode" data-ext="rs"><pre v-pre class="language-rust"><code><span class="token keyword">struct</span> <span class="token type-definition class-name">UnionFind</span> <span class="token punctuation">{</span>
	id<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">usize</span><span class="token operator">></span><span class="token punctuation">,</span>      <span class="token comment">// 集合代表 (根结点)  </span>
	rank<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">usize</span><span class="token operator">></span><span class="token punctuation">,</span>    <span class="token comment">// 秩 (树高)</span>
	count<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span>        <span class="token comment">// 不相交集合个数</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">UnionFind</span> <span class="token punctuation">{</span>
	<span class="token comment">/// 初始化并查集</span>
	<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">new</span><span class="token punctuation">(</span>n<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> <span class="token keyword">Self</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> <span class="token keyword">mut</span> id <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">;</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> <span class="token keyword">mut</span> rank <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">;</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>n <span class="token punctuation">{</span>
			id<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
			rank<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">Self</span> <span class="token punctuation">{</span>id <span class="token punctuation">,</span> rank <span class="token punctuation">,</span> count<span class="token punctuation">:</span> n<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">/// 查找并查集所在集合</span>
	<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> <span class="token keyword">usize</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> <span class="token keyword">mut</span> x <span class="token operator">=</span> x<span class="token punctuation">;</span>
		<span class="token keyword">while</span> x <span class="token operator">!=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token punctuation">{</span>
			x <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>                
			<span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>    <span class="token comment">// 路径压缩</span>
		<span class="token punctuation">}</span>
		x
	<span class="token punctuation">}</span>

	<span class="token comment">/// 合并 x 所在的集合与 y 所在的集合</span>
	<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">merge</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> x <span class="token operator">==</span> y <span class="token punctuation">{</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span>rank<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">self</span><span class="token punctuation">.</span>rank<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token punctuation">{</span>          <span class="token comment">// y 所在树高于 x, 将 x 合并到 y</span>
			<span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> y<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span>rank<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">self</span><span class="token punctuation">.</span>rank<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token punctuation">{</span>       <span class="token comment">// 树高相同且不是同一集合, 树高 + 1 </span>
				<span class="token keyword">self</span><span class="token punctuation">.</span>rank<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">self</span><span class="token punctuation">.</span>count <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">/// 判断两个元素是否属于同一集合</span>
	<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">is_same_set</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
		<span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">/// 所有集合中不相交集合的个数</span>
	<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">count</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> <span class="token keyword">usize</span> <span class="token punctuation">{</span>
		<span class="token keyword">self</span><span class="token punctuation">.</span>count
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">UnionFind</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> id<span class="token punctuation">;</span>       <span class="token comment">// 集合代表 (根结点)</span>
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> rank<span class="token punctuation">;</span>     <span class="token comment">// 每个集合的秩(树高)</span>
  <span class="token keyword">int</span> count<span class="token punctuation">;</span>      <span class="token comment">// 所有集合中不相交的个数</span>

  <span class="token doc-comment comment">/**
   * 初始化并查集
   * <span class="token keyword">@param</span> <span class="token parameter">n</span> 集合个数
   */</span>
  <span class="token keyword">public</span> <span class="token class-name">UnionFind</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    id <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    rank <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      id<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
      rank<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> n<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 查找 x 所在集合的代表 (根结点)
   * <span class="token keyword">@param</span> <span class="token parameter">x</span> 需要被查找的元素
   * <span class="token keyword">@return</span> x 所在集合的代表(根结点)
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">!=</span> id<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      x <span class="token operator">=</span> id<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
      id<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> id<span class="token punctuation">[</span>id<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>         <span class="token comment">// 路径压缩</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 合并元素所在集合
   * <span class="token keyword">@param</span> <span class="token parameter">x</span> 某一集合元素
   * <span class="token keyword">@param</span> <span class="token parameter">y</span> 某一集合元素
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> fx <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> fy <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fx <span class="token operator">==</span> fy<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rank<span class="token punctuation">[</span>fx<span class="token punctuation">]</span> <span class="token operator">&lt;</span> rank<span class="token punctuation">[</span>fy<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      id<span class="token punctuation">[</span>fx<span class="token punctuation">]</span> <span class="token operator">=</span> fy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
      id<span class="token punctuation">[</span>fy<span class="token punctuation">]</span> <span class="token operator">=</span> fx<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>rank<span class="token punctuation">[</span>fx<span class="token punctuation">]</span> <span class="token operator">==</span> rank<span class="token punctuation">[</span>fy<span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// 树高相同且不是同一集合, 树高 + 1</span>
        rank<span class="token punctuation">[</span>fx<span class="token punctuation">]</span> <span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    count <span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 判断是否属于同一集合
   * <span class="token keyword">@param</span> <span class="token parameter">x</span> 某集合元素
   * <span class="token keyword">@param</span> <span class="token parameter">y</span> 某集合元素
   * <span class="token keyword">@return</span> true: 同一集合 ; false: 不是同一集合
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSameSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> 所有集合中不相交集合的个数
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token comment">// 保存每个元素的父结点, 根结点的父结点为自己</span>
<span class="token keyword">int</span> fa<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 每个集合的秩 (这里用树高表示秩)</span>
<span class="token keyword">int</span> rank<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span> 

<span class="token comment">// 并查集的初始化： 初始化的并查集中每个结点都是都是单独的集合,因此根结点就是他本身.</span>
<span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fa<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
    rank<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 查询操作: 若 x 为树根, 则 x 代表集合, 否则递归访问 fa[x] 直至根结点</span>
<span class="token keyword">int</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>               <span class="token comment">// 返回 x 所在集合的代表元素</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">==</span> fa<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> x<span class="token punctuation">;</span>
  <span class="token keyword">return</span> fa<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>fa<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 路径压缩, fa直接赋值为根结点</span>
<span class="token punctuation">}</span>

<span class="token comment">// 合并操作: 合并元素 x 和 元素 y 所在的集合</span>
<span class="token keyword">void</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> fx <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span> fy <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
 	
  <span class="token keyword">if</span> <span class="token punctuation">(</span>fx <span class="token operator">==</span> fy<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">;</span>       <span class="token comment">// 在同一集合中,无需合并</span>
  
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rank<span class="token punctuation">[</span>fx<span class="token punctuation">]</span> <span class="token operator">></span> rank<span class="token punctuation">[</span>fy<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">// fx 所在树高于 fy, 将 fy 合并到 fx</span>
    fa<span class="token punctuation">[</span>fy<span class="token punctuation">]</span> <span class="token operator">=</span> fx<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
    fa<span class="token punctuation">[</span>fx<span class="token punctuation">]</span> <span class="token operator">=</span> fy<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rank<span class="token punctuation">[</span>fx<span class="token punctuation">]</span> <span class="token operator">==</span> rank<span class="token punctuation">[</span>fy<span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// 树高相同且不是同一集合, 树高 + 1 </span>
      rank<span class="token punctuation">[</span>fy<span class="token punctuation">]</span> <span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="并查集的应用" tabindex="-1"><a class="header-anchor" href="#并查集的应用" aria-hidden="true">#</a> 并查集的应用</h2>
<p>在一般应用中，并查集中的每个集合往往需要维护更多的信息来解决更为复杂的问题，以下是两种常见的应用.</p>
<h3 id="维护集合的大小" tabindex="-1"><a class="header-anchor" href="#维护集合的大小" aria-hidden="true">#</a> 维护集合的大小</h3>
<p>在按秩合并中，即可使用树高，也能使用集合大小 (集合中元素的个数)，下面为同时维护集合大小的并查集.</p>
<CodeTabs id="79" :data='[{"title":"rust","id":"rust"},{"title":"java","id":"java"},{"title":"c++","id":"c++"}]' tab-id="language">
<template #tab0="{ title, value, isActive }">
<div class="language-rust line-numbers-mode" data-ext="rs"><pre v-pre class="language-rust"><code><span class="token keyword">struct</span> <span class="token type-definition class-name">UnionFind</span> <span class="token punctuation">{</span>
	id<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">usize</span><span class="token operator">></span><span class="token punctuation">,</span>      <span class="token comment">// 集合代表 (根结点)  </span>
	size<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">usize</span><span class="token operator">></span><span class="token punctuation">,</span>    <span class="token comment">// 每个集合元素数量</span>
	count<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span>        <span class="token comment">// 不相交集合个数</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">UnionFind</span> <span class="token punctuation">{</span>
	<span class="token comment">/// 初始化并查集</span>
	<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">new</span><span class="token punctuation">(</span>n<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> <span class="token keyword">Self</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> <span class="token keyword">mut</span> id <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">;</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> <span class="token keyword">mut</span> size <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">;</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span>n <span class="token punctuation">{</span>
			id<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
			size<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">Self</span> <span class="token punctuation">{</span>id <span class="token punctuation">,</span> size <span class="token punctuation">,</span>count<span class="token punctuation">:</span> n<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">/// 查找并查集所在集合</span>
	<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> <span class="token keyword">usize</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> <span class="token keyword">mut</span> x <span class="token operator">=</span> x<span class="token punctuation">;</span>
		<span class="token keyword">while</span> x <span class="token operator">!=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token punctuation">{</span>
			x <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>                
			<span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>    <span class="token comment">// 路径压缩</span>
		<span class="token punctuation">}</span>
		x
	<span class="token punctuation">}</span>

	<span class="token comment">/// 合并 x 所在的集合与 y 所在的集合</span>
	<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">merge</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> x <span class="token operator">==</span> y <span class="token punctuation">{</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token keyword">self</span><span class="token punctuation">.</span>size<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">self</span><span class="token punctuation">.</span>size<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token punctuation">{</span>         <span class="token comment">// 将 x 合并到 y 中</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> y<span class="token punctuation">;</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>size<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>size<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>        <span class="token comment">// y 集合中元素增加</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>                                 <span class="token comment">// 将 y 合并到 x 中</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>id<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>size<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>size<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span>        <span class="token comment">// x 集合中元素增加</span>
        <span class="token punctuation">}</span>
		<span class="token keyword">self</span><span class="token punctuation">.</span>count <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">/// 判断两个元素是否属于同一集合</span>
	<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">is_same_set</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> <span class="token keyword">bool</span> <span class="token punctuation">{</span>
		<span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">/// 所有集合中不相交集合的个数</span>
	<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">count</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> <span class="token keyword">usize</span> <span class="token punctuation">{</span>
		<span class="token keyword">self</span><span class="token punctuation">.</span>count
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">UnionFind</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> id<span class="token punctuation">;</span>       <span class="token comment">// 集合代表 (根结点)</span>
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> size<span class="token punctuation">;</span>     <span class="token comment">// 每个集合中的元素的数量</span>
  <span class="token keyword">int</span> count<span class="token punctuation">;</span>      <span class="token comment">// 所有集合中不相交的个数</span>

  <span class="token doc-comment comment">/**
   * 初始化并查集
   * <span class="token keyword">@param</span> <span class="token parameter">n</span> 集合个数
   */</span>
  <span class="token keyword">public</span> <span class="token class-name">UnionFind</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    id <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    size <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      id<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
      size<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> n<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 查找 x 所在集合的代表 (根结点)
   * <span class="token keyword">@param</span> <span class="token parameter">x</span> 需要被查找的元素
   * <span class="token keyword">@return</span> x 所在集合的代表(根结点)
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">!=</span> id<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      x <span class="token operator">=</span> id<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
      id<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> id<span class="token punctuation">[</span>id<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>         <span class="token comment">// 路径压缩</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 合并元素所在集合
   * <span class="token keyword">@param</span> <span class="token parameter">x</span> 某一集合元素
   * <span class="token keyword">@param</span> <span class="token parameter">y</span> 某一集合元素
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> fx <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> fy <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fx <span class="token operator">==</span> fy<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>size<span class="token punctuation">[</span>fx<span class="token punctuation">]</span> <span class="token operator">&lt;</span> size<span class="token punctuation">[</span>fy<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      id<span class="token punctuation">[</span>fx<span class="token punctuation">]</span> <span class="token operator">=</span> fy<span class="token punctuation">;</span>
      size<span class="token punctuation">[</span>fy<span class="token punctuation">]</span> <span class="token operator">+=</span> size<span class="token punctuation">[</span>fx<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
      id<span class="token punctuation">[</span>fy<span class="token punctuation">]</span> <span class="token operator">=</span> fx<span class="token punctuation">;</span>
      size<span class="token punctuation">[</span>fx<span class="token punctuation">]</span> <span class="token operator">+=</span> size<span class="token punctuation">[</span>fy<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    count <span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 判断是否属于同一集合
   * <span class="token keyword">@param</span> <span class="token parameter">x</span> 某集合元素
   * <span class="token keyword">@param</span> <span class="token parameter">y</span> 某集合元素
   * <span class="token keyword">@return</span> true: 同一集合 ; false: 不是同一集合
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSameSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> 所有集合中不相交集合的个数
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token comment">// 保存每个元素的父结点, 根结点的父结点为自己</span>
<span class="token keyword">int</span> fa<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 每个集合中元素的个数</span>
<span class="token keyword">int</span> size<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span> 

<span class="token comment">// 并查集的初始化： 初始化的并查集中每个结点都是都是单独的集合,因此根结点就是他本身.</span>
<span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fa<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
    size<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 查询操作: 若 x 为树根, 则 x 代表集合, 否则递归访问 fa[x] 直至根结点</span>
<span class="token keyword">int</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>               <span class="token comment">// 返回 x 所在集合的代表元素</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">==</span> fa<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> x<span class="token punctuation">;</span>
  <span class="token keyword">return</span> fa<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>fa<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 路径压缩, fa直接赋值为根结点</span>
<span class="token punctuation">}</span>

<span class="token comment">// 合并操作: 合并元素 x 和 元素 y 所在的集合</span>
<span class="token keyword">void</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> fx <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span> fy <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
 	<span class="token keyword">if</span> <span class="token punctuation">(</span>size<span class="token punctuation">[</span>fx<span class="token punctuation">]</span> <span class="token operator">></span> size<span class="token punctuation">[</span>fy<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fa<span class="token punctuation">[</span>fy<span class="token punctuation">]</span> <span class="token operator">=</span> fx<span class="token punctuation">;</span>                      <span class="token comment">// 将 fy 合并到 fx 集合 </span>
 		size<span class="token punctuation">[</span>fx<span class="token punctuation">]</span> <span class="token operator">+=</span> size<span class="token punctuation">[</span>fy<span class="token punctuation">]</span><span class="token punctuation">;</span>             <span class="token comment">// fx 集合数量增加</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
    fa<span class="token punctuation">[</span>fx<span class="token punctuation">]</span> <span class="token operator">=</span> fy<span class="token punctuation">;</span>                      <span class="token comment">// 将 fx 合并到 fy 集合 </span>
    size<span class="token punctuation">[</span>fy<span class="token punctuation">]</span> <span class="token operator">+=</span> size<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>              <span class="token comment">// fy 集合数量增加</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="带权并查集" tabindex="-1"><a class="header-anchor" href="#带权并查集" aria-hidden="true">#</a> 带权并查集</h3>
<p>并查集本身是由若干树组成的森林，可以在树中<strong>每条边上记录一个权值</strong>，在代码实现中，维护一个数组 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi></mrow><annotation encoding="application/x-tex">d</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span></span></span></span> ，用 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi><mo stretchy="false">[</mo><mi>x</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">d[x]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">d</span><span class="mopen">[</span><span class="mord mathnormal">x</span><span class="mclose">]</span></span></span></span> 保存结点 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 到父结点 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mi>a</mi><mo stretchy="false">[</mo><mi>x</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">fa[x]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">a</span><span class="mopen">[</span><span class="mord mathnormal">x</span><span class="mclose">]</span></span></span></span> 之间的边权。在每次路径压缩过后，每个访问的结点都会直接指向树根，如果在路径压缩过程中同时更新这些结点的 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi></mrow><annotation encoding="application/x-tex">d</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span></span></span></span> 值，也即利用路径压缩的过程来统计每个结点到树根之间的路径上的一些信息。</p>
</div></template>


