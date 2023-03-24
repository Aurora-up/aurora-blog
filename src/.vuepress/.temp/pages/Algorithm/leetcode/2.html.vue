<template><div><!-- more -->
<h2 id="二叉树相关习题" tabindex="-1"><a class="header-anchor" href="#二叉树相关习题" aria-hidden="true">#</a> 二叉树相关习题</h2>
<h3 id="_919-完全二叉树插入器" tabindex="-1"><a class="header-anchor" href="#_919-完全二叉树插入器" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/complete-binary-tree-inserter/" target="_blank" rel="noopener noreferrer">919.完全二叉树插入器<ExternalLinkIcon/></a></h3>
<p>题目输入的是一颗使用【二叉链表存储结构的完全二叉树】，然后需要对其进行三个操作：</p>
<ul>
<li>以层序遍历的方式输出结点</li>
<li>插入一个结点到二叉树，并返回该插入结点的父结点</li>
<li>返回整个完全二叉树的根结点</li>
</ul>
<p>【思路】</p>
<p>由于题目中二叉树的存储方式是不存储「父结点」的二叉链表形式，那么此时插入一个结点的话，需要遍历整颗二叉树后寻找其父结点，代价过大。然而完全二叉树还可以使用「数组」以层序遍历的顺序存储，这个可通过索引快速的定位「父结点」。</p>
<p>一维数组从 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>0</mn></mrow><annotation encoding="application/x-tex">0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> 开始，当结点的索引为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi></mrow><annotation encoding="application/x-tex">i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span></span></span></span> 时，其父结点的索引为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">⌈</mo><mfrac><mrow><mi>i</mi><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac><mo stretchy="false">⌉</mo></mrow><annotation encoding="application/x-tex">⌈\frac{i-1}{2} ⌉</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2007em;vertical-align:-0.345em;"></span><span class="mopen">⌈</span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8557em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose">⌉</span></span></span></span> ，其左子结点的索引为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>2</mn><mo>×</mo><mi>i</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2×i+1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7429em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> ，右子结点的索引为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>2</mn><mo>×</mo><mi>i</mi><mo>+</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">2×i+2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7429em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span> 。</p>
<p>【步骤】</p>
<ol>
<li>将以二叉链表存储的完全二叉树转换为数组存储，存储顺序为层序遍历，也即对树进行「广度优先遍历」的同时存入数组。</li>
<li>插入结点时，直接插入数组末尾即可，然后通过索引寻找「父结点」</li>
</ol>
<details class="hint-container details"><summary>代码实现</summary>
<CodeTabs id="52" :data='[{"title":"c++"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">CBTInserter</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    TreeNode<span class="token operator">*</span> root<span class="token punctuation">;</span>       <span class="token comment">// 完全二叉树的根结点</span>
    vector<span class="token operator">&lt;</span>TreeNode<span class="token operator">*</span><span class="token operator">></span> h<span class="token punctuation">;</span>  <span class="token comment">// 以层序遍历存储完全二叉树 </span>
<span class="token keyword">public</span><span class="token operator">:</span>
  	<span class="token comment">// BFS </span>
    <span class="token function">CBTInserter</span><span class="token punctuation">(</span>TreeNode<span class="token operator">*</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token operator">-></span>root <span class="token operator">=</span> root<span class="token punctuation">;</span>
        queue<span class="token operator">&lt;</span>TreeNode<span class="token operator">*</span><span class="token operator">></span> q<span class="token punctuation">;</span>
        q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">auto</span> node <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            q<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            h<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token operator">-></span>left<span class="token punctuation">)</span> q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token operator">-></span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token operator">-></span>right<span class="token punctuation">)</span> q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token operator">-></span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">auto</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">TreeNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        h<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> k <span class="token operator">=</span> h<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> p <span class="token operator">=</span> <span class="token punctuation">(</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>         <span class="token comment">// 父结点索引 </span>
        <span class="token comment">// 判断当前结点是左子结点还是右子结点</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">==</span> k<span class="token punctuation">)</span> h<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token operator">-></span>left <span class="token operator">=</span> t<span class="token punctuation">;</span>
        <span class="token keyword">else</span> h<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token operator">-></span>right <span class="token operator">=</span> t<span class="token punctuation">;</span>
        <span class="token keyword">return</span> h<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token operator">-></span>val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    TreeNode<span class="token operator">*</span> <span class="token function">get_root</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token operator">-></span>root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * Your CBTInserter object will be instantiated and called as such:
 * CBTInserter* obj = new CBTInserter(root);
 * int param_1 = obj->insert(val);
 * TreeNode* param_2 = obj->get_root();
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</details>
<h3 id="_515-在每个树行中找最大值" tabindex="-1"><a class="header-anchor" href="#_515-在每个树行中找最大值" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/find-largest-value-in-each-tree-row/" target="_blank" rel="noopener noreferrer">515.在每个树行中找最大值<ExternalLinkIcon/></a></h3>
<p>题目的要求是求解二叉树中每层结点值的最大值，并且使用的二叉链表存储的二叉树，那么可对整颗二叉树进行一次遍历即可，在遍历的同时更新每层的最大值即可，使用「深度优先遍历」或者「宽度优先遍历」都可以。</p>
<p>「DFS」做法：</p>
<p>DFS 每次的操作是向下扩展或者向上回溯，每次的递归操作都伴随着所在层数的改变，由于二叉树的深度未知，所以需要一个 <code v-pre>max_depth</code> 在 DFS 的同时记录二叉树的深度，然后每到达一层，就更新这层的最大值。步骤：</p>
<ol>
<li><strong>处理边界</strong>：当所在结点为 <code v-pre>null</code> 时，回溯。</li>
<li><strong>DFS 时伴随的操作</strong>：更新最大深度 <code v-pre>max_depth</code>，更新每层的最大值(第一次新的一层到达时，直接填入)；</li>
<li><strong>扩展分支</strong>：因为是二叉树，所以向左扩展，或者向右扩展。</li>
</ol>
<p>「BFS」做法：</p>
<p>BFS 本身就是层序遍历，每次都是遍历一层，但平时写 BFS，一次循环只遍历一层的一个结点，该层的其他结点还在队列中，所以只需要在每次循环中遍历完队列中所有的结点就可以每次遍历一层结点，然后记录最大值即可。</p>
<details class="hint-container details"><summary>代码实现</summary>
<CodeTabs id="94" :data='[{"title":"c++"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token comment">// DFS</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
  <span class="token comment">// 第 key 层的 最大值 value</span>
  unordered_map<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">></span> hash<span class="token punctuation">;</span>
  <span class="token keyword">int</span> max_depth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token function">largestValues</span><span class="token punctuation">(</span>TreeNode<span class="token operator">*</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> ans<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> max_depth <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> 
      ans<span class="token punctuation">.</span><span class="token function">emplace_back</span><span class="token punctuation">(</span>hash<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span>TreeNode<span class="token operator">*</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> d<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 问题边界 */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token comment">// 更新层数</span>
    max_depth <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>max_depth<span class="token punctuation">,</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* 到达每层时，需要的操作 */</span>
    <span class="token comment">// 第一次到达一层时，直接加入</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>hash<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> hash<span class="token punctuation">[</span>d<span class="token punctuation">]</span> <span class="token operator">=</span> root<span class="token operator">-></span>val<span class="token punctuation">;</span>
    <span class="token keyword">else</span> hash<span class="token punctuation">[</span>d<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>hash<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token punctuation">,</span> root<span class="token operator">-></span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 再次到达时，更新最大值</span>

    <span class="token comment">/* 向下扩展 */</span>
    <span class="token comment">// 遍历左子树</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token operator">-></span>left<span class="token punctuation">,</span> d <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 遍历右子树</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token operator">-></span>right<span class="token punctuation">,</span> d <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// BFS</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
  vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token function">largestValues</span><span class="token punctuation">(</span>TreeNode<span class="token operator">*</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    queue<span class="token operator">&lt;</span>TreeNode<span class="token operator">*</span><span class="token operator">></span> q<span class="token punctuation">;</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> ans<span class="token punctuation">;</span>
    q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> level_node_num <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">int</span> max_val <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">31</span><span class="token punctuation">;</span>
      <span class="token comment">// 每次遍历完队列里的所有值，也即遍历一层</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span>level_node_num<span class="token punctuation">;</span>level_node_num<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">auto</span> t <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        q<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        max_val <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>t<span class="token operator">-></span>val<span class="token punctuation">,</span> max_val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token operator">-></span>left<span class="token punctuation">)</span> q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>t<span class="token operator">-></span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token operator">-></span>right<span class="token punctuation">)</span> q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>t<span class="token operator">-></span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      ans<span class="token punctuation">.</span><span class="token function">emplace_back</span><span class="token punctuation">(</span>max_val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</details>
<h3 id="_513-找树左下角的值" tabindex="-1"><a class="header-anchor" href="#_513-找树左下角的值" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/find-bottom-left-tree-value/" target="_blank" rel="noopener noreferrer">513.找树左下角的值<ExternalLinkIcon/></a></h3>
<p>题目要求是找树中最底层结点的最左层结点，通过一次遍历即可，「宽度优先遍历」和「深度优先遍历」都可以做到。</p>
<p>「宽度优先遍历」:BFS 是从上至下，从左到右的层序遍历，所以只需在 BFS 的同时记录每一层的最左结点，然后每到下一层，再更新这个最左结点即可。</p>
<p>「深度优先遍历」:DFS 是深度优先，在 DFS 优先遍历左子树，然后到达每层时，更新最左结点即可。</p>
<details class="hint-container details"><summary>代码实现</summary>
<CodeTabs id="113" :data='[{"title":"c++"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token comment">// DFS</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
  <span class="token keyword">int</span> left_node <span class="token punctuation">,</span> max_depth<span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token function">findBottomLeftValue</span><span class="token punctuation">(</span>TreeNode<span class="token operator">*</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> left_node<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span>TreeNode<span class="token operator">*</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> depth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token comment">// 深度增加时，更新最左结点</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>depth <span class="token operator">></span> max_depth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      max_depth <span class="token operator">=</span> depth<span class="token punctuation">;</span>
      left_node <span class="token operator">=</span> root<span class="token operator">-></span>val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 先搜左子结点</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token operator">-></span>left<span class="token punctuation">,</span> depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 再搜右子结点</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token operator">-></span>right<span class="token punctuation">,</span> depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>  
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// BFS</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
  <span class="token keyword">int</span> <span class="token function">findBottomLeftValue</span><span class="token punctuation">(</span>TreeNode<span class="token operator">*</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    queue<span class="token operator">&lt;</span>TreeNode<span class="token operator">*</span><span class="token operator">></span> q<span class="token punctuation">;</span>
    q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> left_node <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> level_size <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">int</span> flag <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>    <span class="token comment">// 标记</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span>level_size <span class="token punctuation">;</span>level_size<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">auto</span> t <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        q<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">// 每遍历到一层，只用这层的第一个元素(最左结点)更新</span>
          left_node <span class="token operator">=</span> t<span class="token operator">-></span>val<span class="token punctuation">;</span>
          flag <span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token operator">-></span>left<span class="token punctuation">)</span> q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>t<span class="token operator">-></span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token operator">-></span>right<span class="token punctuation">)</span> q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>t<span class="token operator">-></span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> 
    <span class="token keyword">return</span> left_node<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</details>
<h3 id="_103-二叉树的锯齿形层序遍历" tabindex="-1"><a class="header-anchor" href="#_103-二叉树的锯齿形层序遍历" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/" target="_blank" rel="noopener noreferrer">103. 二叉树的锯齿形层序遍历<ExternalLinkIcon/></a></h3>
<p>题目要求对二叉树奇数深度层进行从左至右的遍历，对偶数层进行从右至左的遍历。可直接使用双端队列：</p>
<ul>
<li>奇数深度时，队列左出右进</li>
<li>偶数深度时，队列右出左进</li>
</ul>
<details class="hint-container details"><summary>代码实现</summary>
<CodeTabs id="138" :data='[{"title":"c++"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
  vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">>></span> <span class="token function">zigzagLevelOrder</span><span class="token punctuation">(</span>TreeNode<span class="token operator">*</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    deque<span class="token operator">&lt;</span>TreeNode<span class="token operator">*</span><span class="token operator">></span> q<span class="token punctuation">;</span>
    q<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">>></span> levels<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> levels<span class="token punctuation">;</span>
    <span class="token keyword">bool</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>  <span class="token comment">// 奇数层 == true or 偶数层 == false </span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> level_size <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> cur_level<span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span>level_size<span class="token punctuation">;</span> level_size <span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 奇数层</span>
          <span class="token keyword">auto</span> t <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          q<span class="token punctuation">.</span><span class="token function">pop_front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 从左至右</span>
          cur_level<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>t<span class="token operator">-></span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token operator">-></span>left<span class="token punctuation">)</span> q<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>t<span class="token operator">-></span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token operator">-></span>right<span class="token punctuation">)</span> q<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>t<span class="token operator">-></span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>     <span class="token comment">// 偶数层</span>
          <span class="token keyword">auto</span> t <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          q<span class="token punctuation">.</span><span class="token function">pop_back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 从右至左</span>
          cur_level<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>t<span class="token operator">-></span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token operator">-></span>right<span class="token punctuation">)</span> q<span class="token punctuation">.</span><span class="token function">push_front</span><span class="token punctuation">(</span>t<span class="token operator">-></span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token operator">-></span>left<span class="token punctuation">)</span> q<span class="token punctuation">.</span><span class="token function">push_front</span><span class="token punctuation">(</span>t<span class="token operator">-></span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      flag <span class="token operator">=</span> flag <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      levels<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>cur_level<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> levels<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</details>
<h3 id="_310-最小高度树" tabindex="-1"><a class="header-anchor" href="#_310-最小高度树" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/minimum-height-trees/" target="_blank" rel="noopener noreferrer">310. 最小高度树<ExternalLinkIcon/></a></h3>
<p>树形 dp 模板题。求最小高度树，也即寻找树的“中心”，</p>
</div></template>


