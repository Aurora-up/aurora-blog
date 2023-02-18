<template><div><p>mybatis 动态 SQL</p>
<!-- more -->
<p>【动态 SQL】解决的问题：SQL语句的拼接。</p>
<h3 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h3>
<blockquote>
<p>主要用于某些判断条件为 <code v-pre>null</code> 或者为 <code v-pre>&quot;&quot;</code> (空字符串)可能会导致的查询失败。</p>
</blockquote>
<p>【参数】：</p>
<ul>
<li><code v-pre>test</code> : 在其中书写判断语句，判断语句中可以使用 <code v-pre>==</code> ，<code v-pre>!=</code> ，<code v-pre>&gt;</code> ，<code v-pre>&gt;=</code> 比较符号，对于复合条件，可以使用 <code v-pre>and</code> 和 <code v-pre>or</code> 进行连接。
<ul>
<li>当 <code v-pre>test</code> 中的条件成立时，在 <code v-pre>&lt;if&gt;&lt;/if&gt;</code> 中的 SQL 语句会生效；</li>
<li>不成立时，其中的 SQL 语句不会生效。</li>
</ul>
</li>
</ul>
<blockquote>
<p>例如：查询某一个班上学生成绩大于某个分数的学生的信息。</p>
</blockquote>
<p>查询时需要传递两个参数，一个是班级，一个是成绩。如果未传入成绩时，可以查询这个班所有学生的成绩。</p>
<Tabs id="45" :data='[{"title":"XML"},{"title":"java"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>findScoreGe<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.pojo.Student<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  SELECT * FROM all_students
  WHERE class_name = #{className}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>score!=null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    AND score > #{score};
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">StudentMapper</span> <span class="token punctuation">{</span>
   <span class="token doc-comment comment">/**
   * 查询某一个班上学生成绩大于某个分数的学生的信息
   * <span class="token keyword">@return</span> 符合条件的学生信息
   */</span>
   <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span> <span class="token function">findScoreGe</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"className"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> className<span class="token punctuation">,</span> 
                             <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"score"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> score<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p>在上面语句中，如果传入的 <code v-pre>score==null</code> ，那么就不将其中的 SQL 语句进行拼接。<code v-pre>if</code> 中的 <code v-pre>test</code> 中写的就是判定条件。</p>
</div>
<blockquote>
<p>例如：查询某一个班上学生成绩大于某个分数且排名大于某个名次的学生的信息。</p>
</blockquote>
<Tabs id="63" :data='[{"title":"XML"},{"title":"java"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>findScoreGeOneHundred<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.pojo.Student<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  SELECT * FROM all_students
  WHERE class_name = #{className}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>score!=null and rank!=null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    AND score > #{score}
    AND rank > #{rank}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">StudentMapper</span> <span class="token punctuation">{</span>
   <span class="token doc-comment comment">/**
   * 查询某一个班上学生成绩大于某个分数且排名大于某个名词的学生的信息
   * <span class="token keyword">@return</span> 符合条件的学生信息
   */</span>
   <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span> <span class="token function">findScoreGeOneHundred</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"className"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> className<span class="token punctuation">,</span> 
                             				   <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"score"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> score<span class="token punctuation">,</span>
                                       <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"rank"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> rank<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p><code v-pre>&lt;if&gt;&lt;/if&gt;</code> 也可以连续多次使用，这样如果某个 <code v-pre>&lt;if&gt;&lt;/if&gt;</code> 中的条件满足时，就可以将其中的 SQL 语句加上。</p>
</div>
<h3 id="choose、when-、otherwise" tabindex="-1"><a class="header-anchor" href="#choose、when-、otherwise" aria-hidden="true">#</a> choose、when 、otherwise</h3>
<blockquote>
<p>在 SQL 语句中有时不想使用所有的条件，而是从其中选择一个使用，就像 <code v-pre>switch</code> 语句一样。那么此时可以使用这套组合。</p>
</blockquote>
<p>【基本结构】</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>choose</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>when</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>when</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>when</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>when</span><span class="token punctuation">></span></span>
   	<span class="token comment">&lt;!-- 可以有多个 when --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>otherwise</span><span class="token punctuation">></span></span>
      ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>otherwise</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>choose</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p>依次执行 <code v-pre>when</code> 中的 <code v-pre>test</code> 判定条件，如果满足就会执行，并且跳出 <code v-pre>choose</code> ，若所有的 <code v-pre>when</code> 都没有执行，那么就是执行 <code v-pre>otherwise</code></p>
</div>
<blockquote>
<p>例如：根据学生的学号或学生的姓名进行查询，当两者都为空时，返回一个预置学生( <code v-pre>id=0</code>)</p>
</blockquote>
<Tabs id="98" :data='[{"title":"XML"},{"title":"java"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>findStudent<span class="token punctuation">"</span></span>
     <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Student<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  SELECT * FROM all_students
  WHERE class_name = #{className}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>choose</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>when</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      AND id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>when</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>when</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>studentName != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      AND studentName = #{studentName}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>when</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>otherwise</span><span class="token punctuation">></span></span>
      AND id = 0
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>otherwise</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>choose</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">StudentMapper</span> <span class="token punctuation">{</span>
   <span class="token doc-comment comment">/**
   * 根据学生的学号或学生的姓名进行查询
   * <span class="token keyword">@return</span> 符合条件的学生信息
   */</span>
   <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span> <span class="token function">findStudent</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"className"</span><span class="token punctuation">)</span> <span class="token class-name">String</span>  className<span class="token punctuation">,</span>
     												 <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">,</span> 
                             <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"studentName"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> studentName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h3 id="trim、where、-set" tabindex="-1"><a class="header-anchor" href="#trim、where、-set" aria-hidden="true">#</a> trim、where、 set</h3>
<div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p>使用 <code v-pre>&lt;if&gt;&lt;/if&gt;</code> 和 <code v-pre>&lt;choose&gt;&lt;/choose&gt;</code> 解决了 SQL 多个筛选条件时，后续的 <code v-pre>AND</code> 语句可能失败的情况，那么如果一开始的 <code v-pre>WHERE</code> 接一个判断语句就有问题的话，该如何解决？</p>
</div>
<p>例如下面情况。</p>
<Tabs id="117" :data='[{"title":"XML"},{"title":"SQL"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>findStudent<span class="token punctuation">"</span></span>
     <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Student<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  SELECT * FROM all_students
  WHERE 
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>className != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  		class_name = #{className}
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      AND id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>studentName != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      AND studentName = #{studentName}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<p>如果上面语句中 <code v-pre>className</code> ，<code v-pre>id</code> ，<code v-pre>studentName</code> 都为空的话， 会被解析为如下 SQL语句：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> all_students
<span class="token keyword">WHERE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>那么就这会导致查询失败，或者 <code v-pre>className</code> 为空，<code v-pre>id</code> 为 34 时，会解析为如下：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> all_students
<span class="token keyword">WHERE</span>
<span class="token operator">AND</span> id <span class="token operator">=</span> <span class="token number">34</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样也会导致查询失败</p>
</template>
</Tabs>
<p>【解决方案一】</p>
<blockquote>
<p>使用 <code v-pre>&lt;where&gt;&lt;/where&gt;</code> ：</p>
</blockquote>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>findStudent<span class="token punctuation">"</span></span>
     <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Student<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  SELECT * FROM all_students
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>where</span><span class="token punctuation">></span></span> 
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>className != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  		class_name = #{className}
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      AND id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>studentName != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      AND studentName = #{studentName}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>where</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p><code v-pre>&lt;where&gt;&lt;/where&gt;</code> 元素只会在子元素返回任何内容的情况下才插入  <code v-pre>WHERE</code> 子句。而且，若子句的开头为 <code v-pre>AND</code> 或 <code v-pre>OR</code>，则会将它们去除。</p>
</div>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>方案一中，对于后续的所有判断语句，必须以 <code v-pre>AND</code> 或者 <code v-pre>OR</code> 来开头，这对 SQL 的规范性有所要求，如果这个 <code v-pre>AND</code> 或者 <code v-pre>OR</code> 正好出现在上一条件的末尾。而不是开头，那么其就会无法被去掉，进而造成 SQL 语句的执行失败。</p>
</div>
<p>【解决方案二】</p>
<blockquote>
<p>使用 <code v-pre>&lt;trim&gt;&lt;/trim&gt;</code></p>
</blockquote>
<p>参数：</p>
<ul>
<li><code v-pre>prefix</code> trim 中整体语句的前缀</li>
<li><code v-pre>suffix</code> trim 中整体语句的后缀</li>
<li><code v-pre>prefixOverrides</code> trim 中每个独立语句想要省去的前缀</li>
<li><code v-pre>suffixOverrides</code> trim 中每个独立语句想要省去的后缀</li>
</ul>
<div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p>当 trim 中没有任何语句时，<code v-pre>prefix</code> 和 <code v-pre>suffix</code> 中的内容就不会生效。</p>
</div>
<p>与 <code v-pre>&lt;where&gt;&lt;/where&gt;</code> 等价的写法：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>trim</span> <span class="token attr-name">prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>WHERE<span class="token punctuation">"</span></span> <span class="token attr-name">prefixOverrides</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>AND | OR <span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>trim</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p><code v-pre>prefixOverrides=&quot;AND | OR &quot;</code> 标签前缀为 <code v-pre>AND</code> 或者 <code v-pre>OR</code> 的都会省去</p>
</div>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>findStudent<span class="token punctuation">"</span></span>
     <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Student<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  SELECT * FROM all_students
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>trim</span> <span class="token attr-name">prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>WHERE<span class="token punctuation">"</span></span> <span class="token attr-name">prefixOverrides</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>AND | OR <span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>className != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  		class_name = #{className}
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      AND id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>studentName != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      AND studentName = #{studentName}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>trim</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在更新语句中，也可以使用 <code v-pre>&lt;trim&gt;&lt;/trim&gt;</code> 元素来替代 <code v-pre>&lt;set&gt;&lt;/set&gt;</code> 元素，并且可以将条件不成立语句后面的 <code v-pre>,</code> 省去。</p>
<p>对于 <code v-pre>&lt;set&gt;&lt;/set&gt;</code> 元素本身来说，若子句的开头为 【<code v-pre>,</code>】 , 则会将其去除。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modifyUserInfo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  update smbms.smbms_user
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>trim</span> <span class="token attr-name">prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SET<span class="token punctuation">"</span></span> <span class="token attr-name">suffixOverrides</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>,<span class="token punctuation">"</span></span> <span class="token attr-name">suffix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>WHERE id = #{id}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userCode != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>userCode = #{user.userCode},<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userName != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>userName = #{user.userName},<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userPassword != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>userPassword = #{user.userPassword},<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>trim</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> foreach</h3>
<p>对于需要迭代的集合，数组，那么就可以使用 foreach 元素。</p>
<p>【参数】</p>
<ul>
<li><code v-pre>collection</code>  为可迭代的类型</li>
<li><code v-pre>item</code> 为迭代的每个一个元素</li>
<li><code v-pre>index</code> 每个迭代元素的索引</li>
<li><code v-pre>separator</code> 为每个迭代元素之间的间隔符</li>
<li><code v-pre>open</code> 为第一迭代元素前加的字符</li>
<li><code v-pre>close</code> 为最后一个迭代元素后加的字符</li>
</ul>
<blockquote>
<p>例如：通过 id 数组 批量删除用户</p>
</blockquote>
<Tabs id="255" :data='[{"title":"java"},{"title":"XML-1"},{"title":"XML-2"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 通过 id 数组批量删除用户
   * <span class="token keyword">@param</span> <span class="token parameter">ids</span> id 数组
   * <span class="token keyword">@return</span> 影响行数
   */</span>
  <span class="token class-name">Integer</span> <span class="token function">deleteUsersById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"ids"</span><span class="token punctuation">)</span> <span class="token class-name">Long</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ids<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>deleteUsersById<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  DELETE FROM smbms.smbms_user
  WHERE smbms_user.id IN
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">collection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ids<span class="token punctuation">"</span></span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span>
           <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>,<span class="token punctuation">"</span></span> <span class="token attr-name">open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(<span class="token punctuation">"</span></span> <span class="token attr-name">close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    #{id}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>delete</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment"># 上面 xml 等价的 sql 语句</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> smbms<span class="token punctuation">.</span>smbms_user 
<span class="token keyword">WHERE</span> smbms_user<span class="token punctuation">.</span>id <span class="token operator">IN</span> <span class="token punctuation">(</span> ? <span class="token punctuation">,</span> ? <span class="token punctuation">,</span> ?<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>deleteUsersById<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  DELETE FROM smbms.smbms_user
  WHERE smbms_user.id =
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">collection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ids<span class="token punctuation">"</span></span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>or<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    #{id}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>delete</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment"># 上面 xml 等价的 sql 语句</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> smbms<span class="token punctuation">.</span>smbms_user 
<span class="token keyword">WHERE</span> smbms_user<span class="token punctuation">.</span>id <span class="token operator">=</span> ? <span class="token operator">or</span> ? <span class="token operator">or</span> ? <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<blockquote>
<p>例如：批量添加用户</p>
</blockquote>
<Tabs id="273" :data='[{"title":"java"},{"title":"XML"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 批量添加用户
   * <span class="token keyword">@param</span> <span class="token parameter">users</span> 用户集合
   * <span class="token keyword">@return</span> 影响行数
   */</span>
  <span class="token class-name">Integer</span> <span class="token function">insertUsers</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"users"</span><span class="token punctuation">)</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> users<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>insertUsers<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  INSERT INTO smbms.smbms_user VALUES
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">collection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>users<span class="token punctuation">"</span></span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>,<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    (#{user.id}, #{user.userCode}, #{user.userName},null, null)
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment"># 上面 xml 等价的 sql 语句</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> smbms<span class="token punctuation">.</span>smbms_user 
<span class="token keyword">VALUES</span> <span class="token punctuation">(</span>?<span class="token punctuation">,</span> ?<span class="token punctuation">,</span> ?<span class="token punctuation">,</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token boolean">null</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			 <span class="token punctuation">(</span>?<span class="token punctuation">,</span> ?<span class="token punctuation">,</span> ?<span class="token punctuation">,</span><span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token boolean">null</span><span class="token punctuation">)</span><span class="token punctuation">,</span>	
       <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<p>上述的的元素常用于各个 SQL 语句中，还有</p>
</div></template>


