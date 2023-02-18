<template><div><p>mybatis 的基本使用</p>
<!-- more -->
<p><img src="@source/framework/mybatis/image/mybatis-logo.png" alt="mybatis" loading="lazy"></p>
<p>【官网】<a href="https://mybatis.org/mybatis-3/zh/index.html" target="_blank" rel="noopener noreferrer">mybatis – MyBatis 3 | 官网<ExternalLinkIcon/></a></p>
<p>【github】 <a href="https://github.com/mybatis/mybatis-3" target="_blank" rel="noopener noreferrer">mybatis/mybatis-3: MyBatis SQL mapper framework for Java (github.com)<ExternalLinkIcon/></a></p>
<p>ORM（Object Relationship Mapping）对象关系映射。</p>
<ul>
<li>对象：Java的实体类对象</li>
<li>关系：关系型数据库</li>
<li>映射：二者之间的对应关系</li>
</ul>
<h1 id="xml-映射" tabindex="-1"><a class="header-anchor" href="#xml-映射" aria-hidden="true">#</a> XML 映射</h1>
<p>​	mybatis 中使用 接口与XML形成映射关系，接口中定义方法，便于应用层调用，XML 文件中书写 sql 语句，便于操作数据库，由于直接书写 sql 语句，所以 mybatis 更加易于精细的优化。</p>
<blockquote>
<p>简单实例： 查询所有用户的信息:</p>
</blockquote>
<p><img src="@source/framework/mybatis/image/image-20221102170446881.png" alt="image-20221102170446881" loading="lazy"></p>
<CodeTabs id="47" :data='[{"title":"java接口"},{"title":"XML"},{"title":"java实体类"},{"title":"SQL"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
   <span class="token doc-comment comment">/**
   * 查询所有的用户信息
   * <span class="token keyword">@return</span> 所有的用户信息
   */</span>
   <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token function">getAllUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.UserMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--  查询所有的用户信息  --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getAllUser<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.pojo.User<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    SELECT * FROM smbms.smbms_user;
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//  smbms_user 对应的 java 类 </span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 主键ID
   */</span>
  <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 用户编码
   */</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> userCode<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 用户名称
   */</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 用户密码
   */</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> userPassword<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 更新时间
   */</span>
  <span class="token keyword">private</span> <span class="token class-name">LocalDateTime</span> modifyDate<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab3="{ title, value, isActive }">
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment"># smbms.smbms_user 表</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> smbms_user
<span class="token punctuation">(</span>
    id           <span class="token keyword">bigint</span> <span class="token keyword">auto_increment</span> <span class="token keyword">comment</span> <span class="token string">'主键ID'</span><span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
    userCode     <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">'用户编码'</span><span class="token punctuation">,</span>
    userName     <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">'用户名称'</span><span class="token punctuation">,</span>
    userPassword <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">'用户密码'</span><span class="token punctuation">,</span>
    modifyDate   <span class="token keyword">datetime</span>    <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">'更新时间'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="custom-container info">
<p class="custom-container-title">映射关系</p>
<ul>
<li>接口 <code v-pre>getAllUser</code> 和 <code v-pre>&lt;select id=&quot;getAllUser&quot; resultType=&quot;com.pojo.User&quot;&gt;&lt;/select&gt;</code> 相映射</li>
<li>实体类 <code v-pre>User</code> 和 <code v-pre>smbms_user</code> 表相映射。</li>
</ul>
</div>
<h2 id="xml-映射文件中内容" tabindex="-1"><a class="header-anchor" href="#xml-映射文件中内容" aria-hidden="true">#</a> XML 映射文件中内容</h2>
<p>以下标签都是可选的，需要使用对应的功能时引入。</p>
<ul>
<li><code v-pre>cache</code> – 该命名空间的缓存配置。</li>
<li><code v-pre>cache-ref</code> – 引用其它命名空间的缓存配置。</li>
<li><code v-pre>resultMap</code> – 描述如何从数据库结果集中加载对象，是最复杂也是最强大的元素。</li>
<li><code v-pre>sql</code> – 可被其它语句引用的可重用语句块。</li>
<li><code v-pre>insert</code> – 映射插入语句。</li>
<li><code v-pre>update</code> – 映射更新语句。</li>
<li><code v-pre>delete</code> – 映射删除语句。</li>
<li><code v-pre>select</code> – 映射查询语句。</li>
</ul>
<h2 id="参数相关" tabindex="-1"><a class="header-anchor" href="#参数相关" aria-hidden="true">#</a> 参数相关</h2>
<p>在 mapper 接口中传递参数可以在对应的 <code v-pre>xml</code> 文件中获取。<code v-pre>xml</code> 文件中主要有两种获取参数的方式：</p>
<ul>
<li><code v-pre>#{argument}</code>：本质就是占位符赋值</li>
<li><code v-pre>${argument}</code>：本质就是字符串拼接</li>
</ul>
<div class="custom-container info">
<p class="custom-container-title">注意</p>
<ul>
<li><code v-pre>${}</code> 使用字符串拼接的方式拼接 sql，若为字符串类型或日期类型的字段进行赋值时，需要<strong>手动加单引号</strong>；</li>
<li><code v-pre>#{}</code> 使用占位符赋值的方式拼接 sql，此时为字符串类型或日期类型的字段进行赋值时，可以<strong>自动添加单引号</strong>。</li>
</ul>
</div>
<h3 id="单个参数" tabindex="-1"><a class="header-anchor" href="#单个参数" aria-hidden="true">#</a> 单个参数</h3>
<p>如果在 mapper 接口中只有一个参数，那么在 <code v-pre>xml</code> 可用【<strong>任意名称变量</strong>】接受这个参数来赋值。</p>
<CodeTabs id="161" :data='[{"title":"java"},{"title":"xml"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 根据用户 Id 查询用户信息
   * <span class="token keyword">@param</span> <span class="token parameter">userId</span> 用户 Id
   * <span class="token keyword">@return</span> 返回用户信息
   */</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token function">getAllUserById</span><span class="token punctuation">(</span><span class="token keyword">int</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.UserMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--  根据用户 Id 查询用户信息  --></span>
  <span class="token comment">&lt;!--  这里的 #{userID} 中的 userId 可以是 任意名称变量 ,eg: 可以是 x, _y 等 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getAllUserById<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mapUser<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    SELECT * FROM smbms.smbms_user where id = #{userId};
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="多个参数" tabindex="-1"><a class="header-anchor" href="#多个参数" aria-hidden="true">#</a> 多个参数</h3>
<p>​		若 mapper 接口中的方法参数为多个时，此时 MyBatis 会自动将这些参数放在一个map集合中：</p>
<p>会有两种形式</p>
<ul>
<li>以 <code v-pre>arg0,arg1, ...</code>为键，以参数为值；</li>
<li>以 <code v-pre>param1,param2,...</code>为键，以参数为值；</li>
</ul>
<p>例如通过 <code v-pre>#{arg0}</code> 或者 <code v-pre>#{param1}</code> 来获取第一个参数的值。</p>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>例如：若有两个参数，<strong>不要</strong>以这样的组合获取：<code v-pre>#{arg0}, #{param2}</code></p>
</div>
<h3 id="使用-param-注解标识参数" tabindex="-1"><a class="header-anchor" href="#使用-param-注解标识参数" aria-hidden="true">#</a> 使用 <code v-pre>@Param()</code> 注解标识参数</h3>
<p>在 mapper 接口中为每个参数标注 <code v-pre>@Param(&quot;参数名&quot;)</code> 注解，然后在 <code v-pre>xml</code> 文件中就可以通过 <code v-pre>#{参数名}</code> 来获取参数值。例如：</p>
<CodeTabs id="204" :data='[{"title":"java"},{"title":"xml"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 更新用户信息 (根据用户名和旧密码更新密码)
   * <span class="token keyword">@param</span> <span class="token parameter">userName</span>     用户名
   * <span class="token keyword">@param</span> <span class="token parameter">oldUserPwd</span>   旧密码
   * <span class="token keyword">@param</span> <span class="token parameter">newUserPwd</span>   新密码
   * <span class="token keyword">@return</span> 影响的行数
   */</span>
  <span class="token keyword">int</span> <span class="token function">updateUserPasswordInt</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"userName"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> userName<span class="token punctuation">,</span>
                            <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"oldUserPwd"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> oldUserPwd<span class="token punctuation">,</span>
                            <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"newUserPwd"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> newUserPwd<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.UserMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--  更新用户信息  --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateUserPasswordInt<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      UPDATE smbms.smbms_user SET userPassword = #{newUserPwd}
      WHERE userName = #{userName}
      AND userPassword = #{oldUserPwd};
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="其他参数" tabindex="-1"><a class="header-anchor" href="#其他参数" aria-hidden="true">#</a> 其他参数</h3>
<h4 id="实体类类型的参数" tabindex="-1"><a class="header-anchor" href="#实体类类型的参数" aria-hidden="true">#</a> 实体类类型的参数</h4>
<p>可以通过传入的实体类对象利用<strong>点操作符</strong>获取对应的属性值来赋值。例如：</p>
<CodeTabs id="221" :data='[{"title":"java"},{"title":"xml"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 增加用户
   * <span class="token keyword">@return</span> 影响的行数
   */</span>
  <span class="token keyword">int</span> <span class="token function">insertUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"UserMsg"</span><span class="token punctuation">)</span> <span class="token class-name">User</span> <span class="token class-name">UserMsg</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.UserMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--  增加用户  --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>insertUser<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        insert into smbms.smbms_user values (
            #{UserMsg.id},#{UserMsg.userCode},#{UserMsg.userName},
      			#{UserMsg.userPassword},#{UserMsg.modifyDate}
        );
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h4 id="map-类型的参数" tabindex="-1"><a class="header-anchor" href="#map-类型的参数" aria-hidden="true">#</a> <code v-pre>Map</code> 类型的参数</h4>
<p>传多个参数的另一种解决方案，将这些参数封装到 <code v-pre>Map</code> 集合中，然后在通过<strong>对应的键</strong>获取参数值，例如：</p>
<CodeTabs id="235" :data='[{"title":"java"},{"title":"xml"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
   * 查询用户
   * <span class="token keyword">@param</span> <span class="token parameter">infoMap</span> 传入的 Map
   * <span class="token keyword">@return</span> 用户信息
   */</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token function">getUserByMap</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> infoMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.UserMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--  增加用户  --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>insertUser<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        insert into smbms.smbms_user values (
            #{UserMsg.id},#{UserMsg.userCode},#{UserMsg.userName},
      			#{UserMsg.userPassword},#{UserMsg.modifyDate}
        );
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>使用 <code v-pre>Map</code> 作为参数时，不要使用 <code v-pre>@Param()</code> 注解，这会使 <code v-pre>Map</code> 中的键不能暴露在外面，就会导致 <code v-pre>#{key}</code> 失效。</p>
</div>
<h2 id="返回值相关" tabindex="-1"><a class="header-anchor" href="#返回值相关" aria-hidden="true">#</a> 返回值相关</h2>
<h3 id="返回实体类对象" tabindex="-1"><a class="header-anchor" href="#返回实体类对象" aria-hidden="true">#</a> 返回实体类对象</h3>
<h5 id="以实体类对象作为返回值" tabindex="-1"><a class="header-anchor" href="#以实体类对象作为返回值" aria-hidden="true">#</a> 以实体类对象作为返回值</h5>
<p>需要在 <code v-pre>xml</code> 文件中指定返回值的类型；即指定对应语句的 <code v-pre>resultType</code> 属性或者 <code v-pre>resultMap</code> 属性：</p>
<ol>
<li><code v-pre>resultType</code> 属性对应某个实体类，且<strong>该实体类中属性名与对应的表的字段名一致</strong>才可用；</li>
<li>若实体类中属性名与对应的表的字段名不一致时，可使用 <code v-pre>resultMap</code> 属性，具体用法在下面。</li>
</ol>
<CodeTabs id="272" :data='[{"title":"java"},{"title":"xml"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 返回对应用户
   * <span class="token keyword">@param</span> <span class="token parameter">userName</span> 用户名
   * <span class="token keyword">@param</span> <span class="token parameter">userRole</span> 用户角色
   * <span class="token keyword">@return</span> 用户信息
   */</span>
  <span class="token class-name">User</span> <span class="token function">getUserByNameRole</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"userName"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> userName <span class="token punctuation">,</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"userRole"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> userRole<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.UserMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--  根据 UserName  和  UserRole 查询用户  --></span>
  <span class="token comment">&lt;!-- com.pojo.User  为对应的实体类坐在路径 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getUserByNameRole<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.pojo.User<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    SELECT * FROM smbms.smbms_user WHERE userName = #{userName} AND userRole = #{userRole}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h5 id="将实体类对象的属性以属性名-属性值的形式装入-map" tabindex="-1"><a class="header-anchor" href="#将实体类对象的属性以属性名-属性值的形式装入-map" aria-hidden="true">#</a> 将实体类对象的属性以属性名，属性值的形式装入 <code v-pre>Map</code></h5>
<CodeTabs id="283" :data='[{"title":"java"},{"title":"xml"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 通过用户 Id 查询用户信息
   * <span class="token keyword">@param</span> <span class="token parameter">id</span> 用户Id
   * <span class="token keyword">@return</span> 用户信息
   */</span>
  <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> <span class="token function">getAllUserInMap</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.UserMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 通过用户 Id 查询用户信息 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getAllUserInMap<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    SELECT * FROM smbms.smbms_user WHERE id = #{id}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="custom-container info">
<p class="custom-container-title">注意</p>
<p>注意 <code v-pre>xml</code> 文件中 <code v-pre>resultType</code> 为 <code v-pre>map</code> 类型。</p>
</div>
<h5 id="也可以将以主键作为-key-其他字段作为-value-。" tabindex="-1"><a class="header-anchor" href="#也可以将以主键作为-key-其他字段作为-value-。" aria-hidden="true">#</a> 也可以将以主键作为 <code v-pre>key</code> ，其他字段作为 <code v-pre>value</code> 。</h5>
<CodeTabs id="299" :data='[{"title":"java"},{"title":"xml"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 通过用户 Id 查询用户信息
   * <span class="token keyword">@param</span> <span class="token parameter">id</span> 用户Id
   * <span class="token keyword">@return</span> 用户信息
   */</span>
  <span class="token annotation punctuation">@MapKey</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span>
  <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token function">getAllUserInMap</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.UserMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 通过用户 Id 查询用户信息 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getAllUserInMap<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    SELECT * FROM smbms.smbms_user WHERE id = #{id}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="custom-container info">
<p class="custom-container-title">注意</p>
<ul>
<li><code v-pre>xml</code> 文件中 <code v-pre>resultType</code> 为 <code v-pre>map</code> 类型。</li>
<li>需要使用 <code v-pre>@MapKey</code> 指定返回 <code v-pre>Map</code> 的 <code v-pre>key</code> 值</li>
</ul>
</div>
<h3 id="返回-list" tabindex="-1"><a class="header-anchor" href="#返回-list" aria-hidden="true">#</a> 返回 <code v-pre>List</code></h3>
<h5 id="返回-list-实体类" tabindex="-1"><a class="header-anchor" href="#返回-list-实体类" aria-hidden="true">#</a> 返回 <code v-pre>List&lt;实体类&gt;</code></h5>
<CodeTabs id="327" :data='[{"title":"java"},{"title":"xml"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 根据用户 Id 查询用户信息
   * <span class="token keyword">@param</span> <span class="token parameter">userId</span> 用户 Id
   * <span class="token keyword">@return</span> 返回用户信息
   */</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token function">getAllUserById</span><span class="token punctuation">(</span><span class="token keyword">int</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.UserMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--指定属性名和字段名对应的映射 
      id="mapUser" 表示该映射关系的名称
      type="com.pojo.User" 表示要映射哪个实体类
      column 表示表字段
      property 表示实体类属性 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mapUser<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.pojo.User<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userCode<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userCode<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userName<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userName<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userPassword<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userPassword<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modifyDate<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modifyDate<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">></span></span>
  
  <span class="token comment">&lt;!--  查询所有的用户  --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getAllUserById<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mapUser<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    SELECT * FROM smbms.smbms_user where id = #{userId};
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>虽然返回值类型是 <code v-pre>List&lt;User&gt;</code> ，但是只需要 <code v-pre>resultMap</code> 或者 <code v-pre>resultType</code> 指定 <code v-pre>List</code> 中元素的映射或类型即可。</p>
</div>
<h5 id="返回-list-map-string-object" tabindex="-1"><a class="header-anchor" href="#返回-list-map-string-object" aria-hidden="true">#</a> 返回 <code v-pre>List&lt;Map&lt;String, Object&gt;&gt;</code></h5>
<CodeTabs id="343" :data='[{"title":"java"},{"title":"xml"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 查询所有用户, 使用 List&lt;Map<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>String,</span> <span class="token attr-name">Object</span><span class="token punctuation">></span></span>>
   * <span class="token keyword">@return</span> 所有用户信息
   */</span>
  <span class="token annotation punctuation">@MapKey</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">getAllUserInList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.UserMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 查询所有用户 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getAllUserInList<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    SELECT * from smbms.smbms_user;
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="custom-container info">
<p class="custom-container-title">注意</p>
<ul>
<li>注意 <code v-pre>xml</code> 文件中 <code v-pre>resultType</code> 为 <code v-pre>map</code> 类型而非 <code v-pre>List</code>；</li>
<li><code v-pre>@MapKey()</code> 注解可用在返回值为 <code v-pre>List&lt;[Object,]Map&gt;</code> 的方法上的注解。它能够将存放对象的 <code v-pre>List</code> 转化为 <code v-pre>key</code> 值为对象的某一属性的 Map。属性有：<code v-pre>value</code>，填入的是对象的某个属性名，作为 <code v-pre>Map</code> 的 <code v-pre>key</code> 值。</li>
</ul>
<p><code v-pre>HashMap</code> 中的键是唯一的，所有选用的属性应该是表中的主键或唯一字段，<code v-pre>TreeMap</code> 中的键不唯一，可根据需要自定义键值。</p>
</div>
<h3 id="返回某个字段" tabindex="-1"><a class="header-anchor" href="#返回某个字段" aria-hidden="true">#</a> 返回某个字段</h3>
<p>根据该字段在实体类中对应的属性的返回值来决定返回值类型</p>
<CodeTabs id="374" :data='[{"title":"java"},{"title":"xml"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 查询 User 的数量
   * <span class="token keyword">@return</span> User 数量
   */</span>
  <span class="token keyword">int</span> <span class="token class-name">UserCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.UserMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--  查询 smbms_user 表中的用户数  --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UserCount<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>int<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    SELECT count(*) FROM smbms.smbms_user;
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="返回结果映射-resultmap" tabindex="-1"><a class="header-anchor" href="#返回结果映射-resultmap" aria-hidden="true">#</a> 返回结果映射 (<code v-pre>resultMap</code>)</h2>
<p><a href="https://mybatis.org/mybatis-3/zh/sqlmap-xml.html#%E7%BB%93%E6%9E%9C%E6%98%A0%E5%B0%84%EF%BC%88resultmap%EF%BC%89" target="_blank" rel="noopener noreferrer">结果映射配置<ExternalLinkIcon/></a></p>
<p>【普通使用】</p>
<p>​	当数据库中字段名称与对应的实体类属性名称不一致时，可以使用其；下面表中使用下划线连接，而实体类中使用驼峰式命名，对其进行映射。</p>
<Tabs id="394" :data='[{"title":"XML"},{"title":"SQL"},{"title":"java"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- XML 映射文件 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mapUser<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.pojo.User<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user_code<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userCode<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user_name<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userName<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user_password<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userPassword<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modify_date<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modifyDate<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><code v-pre>resultMap-id</code> 表示该映射的名称，在后续使用该映射时使用，eg: <code v-pre>resultMap=&quot;mapUser&quot;</code></p>
</li>
<li>
<p><code v-pre>resultMap-type</code> 表示要映射的实体类</p>
</li>
<li>
<p><code v-pre>id</code> 可以对主键或唯一字段设置，可提高整体性能，但只能设置一个</p>
</li>
<li>
<p><code v-pre>result</code> 用来配置字段与属性的映射</p>
</li>
<li>
<p><code v-pre>result-column</code> 字段名</p>
</li>
<li>
<p><code v-pre>result-property</code> 属性名</p>
</li>
</ul>
</template>
<template #tab1="{ title, value, isActive }">
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> smbms_user
<span class="token punctuation">(</span>
    id           <span class="token keyword">bigint</span> <span class="token keyword">auto_increment</span> <span class="token keyword">comment</span> <span class="token string">'主键ID'</span><span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
    user_code     <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">'用户编码'</span><span class="token punctuation">,</span>
    user_name     <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">'用户名称'</span><span class="token punctuation">,</span>
    user_password <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">'用户密码'</span><span class="token punctuation">,</span>
    modify_date   <span class="token keyword">datetime</span>    <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">'更新时间'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 主键ID
   */</span>
  <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 用户编码
   */</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> userCode<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 用户名称
   */</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 用户密码
   */</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> userPassword<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 更新时间
   */</span>
  <span class="token keyword">private</span> <span class="token class-name">LocalDateTime</span> modifyDate<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<div class="custom-container info">
<p class="custom-container-title">其他解决方案</p>
<p>​	如果表中的所有字段都是蛇形命名，而是实体类属性都是驼峰式命名，那么可以在 XML 配置文件中对齐进行配置来解决这一问题。</p>
<p>​	具体为配置 <code v-pre>&lt;settings&gt;</code> 中的 <code v-pre>mapUnderscoreToCamelCase</code> 属性。其默认值为 <code v-pre>false</code> (不开启)，配置为 <code v-pre>true</code> 时开启。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>settings</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mapUnderscoreToCamelCase<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>settings</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h3 id="多对一映射" tabindex="-1"><a class="header-anchor" href="#多对一映射" aria-hidden="true">#</a> 多对一映射</h3>
<p>因为一个表中的数据可能与其他表的数据相关，那么在数据库层面就有多对一的映射。</p>
<blockquote>
<p>例如：有一个公司职员信息表和一个公司部门信息表。</p>
</blockquote>
<Tabs id="457" :data='[{"title":"公司职员信息表 (t_emp)"},{"title":"公司部门信息表 (t_dept)"}]'>
<template #tab0="{ title, value, isActive }">
<table>
<thead>
<tr>
<th style="text-align:center">职工ID(eid)</th>
<th style="text-align:center">职工所属部门ID(departId)</th>
<th style="text-align:center">职工薪资(esalary)</th>
<th style="text-align:center">职工联系方式(email)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
</tbody>
</table>
</template>
<template #tab1="{ title, value, isActive }">
<table>
<thead>
<tr>
<th style="text-align:center">部门ID(departId)</th>
<th style="text-align:center">部门主管(departHead)</th>
<th style="text-align:center">部门主经营方向(departResearchDirection)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
</tbody>
</table>
</template>
</Tabs>
<div class="custom-container info">
<p class="custom-container-title">问题</p>
<p>​		若要根据员工ID查询一个员工个人信息及其所在部门信息，那么员工这一个人就会对应它所在部门的所有信息，这就会导致 部分信息对应一个员工，即多对一。那么就需要将数据层面的多对一映射关系转换到实体类之间。</p>
</div>
<blockquote>
<p>解决方案：</p>
<ol>
<li>使用 <code v-pre>resultMap</code> 中的  <code v-pre>result</code> 的级联属性</li>
<li>使用 <code v-pre>resultMap</code> 中 <code v-pre>association</code></li>
</ol>
</blockquote>
<CodeTabs id="547" :data='[{"title":"职员信息实体类"},{"title":"公司部门实体类"},{"title":"接口"},{"title":"XML—级联"},{"title":"XML-association"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span><span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> eid<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> departId<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Integer</span> esalary<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
  <span class="token comment">// 因为要查询其部门信息，所以要再加一个字段</span>
  <span class="token keyword">private</span> <span class="token class-name">Edepartment</span> <span class="token class-name">Edepart</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Edepartment</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span><span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> departId<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> departHead<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> departResearchDirection<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">EmployeeMapper</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 查询一个员工个人信息及其所在部门信息
   */</span>
  <span class="token class-name">Edepartment</span> <span class="token function">getEmployeesById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"eid"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> eid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab3="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.EmployeesMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  
  <span class="token comment">&lt;!-- 1.使用 result 级联 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resuleMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>empMapCase<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.pojo.Employess<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eid<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eid<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edpartNameId<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edpartNameId<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>esalary<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>esalary<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 部门信息部分使用级联 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Edepart.departId<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departId<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Edepart.departHead<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departHead<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Edepart.departResearchDirection<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departResearchDirection<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resuleMap</span><span class="token punctuation">></span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getAllUserInList<span class="token punctuation">"</span></span> <span class="token attr-name">resuleMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>empMapCase<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    SELECT * FROM t_emp 
    LEFT JOIN t_dept
    ON t_emp.departId = t.dept.departId
    WHERE t_emp.departId = #{eid};
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab4="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.EmployeesMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  
  <span class="token comment">&lt;!-- 2.使用 association --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resuleMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>empMap<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.pojo.Employess<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eid<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eid<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departId<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departId<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>esalary<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>esalary<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>association</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Edepart<span class="token punctuation">"</span></span> <span class="token attr-name">javatype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Edepartment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departId<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departId<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departHead<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departHead<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departResearchDirection<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departResearchDirection<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>association</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resuleMap</span><span class="token punctuation">></span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getAllUserInList<span class="token punctuation">"</span></span> <span class="token attr-name">resuleMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>empMap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    SELECT * FROM t_emp 
    LEFT JOIN t_dept
    ON t_emp.departId = t.dept.departId
    WHERE t_emp.departId = #{eid};
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>association</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Edepart<span class="token punctuation">"</span></span> <span class="token attr-name">javatype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Edepartment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>property</code> 为实体类属性。</li>
<li><code v-pre>javatype</code> 表示该属性对应的实体类。</li>
</ul>
</div>
<blockquote>
<p>另一种解决方案： 分部查询 + <code v-pre>association</code>；</p>
<p>将根据员工ID查询一个员工个人信息及其所在部门信息分解为先根据员工ID查询个人信息，然后再使用员工的所在部门 ID 去查询对应的部门信息。</p>
</blockquote>
<Tabs id="587" :data='[{"title":"员工接口"},{"title":"部门接口"},{"title":"XML—员工"},{"title":"XML—部门"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">EmployeeMapper</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 第一步：根据员工 ID 查询一个员工个人信息
   */</span>
  <span class="token class-name">Employee</span> <span class="token function">getEmployeesInfoById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"eid"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> eid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">EdepartmentMapper</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 第二步：根据部门ID 查询对应的部门信息
   */</span>
  <span class="token class-name">Edepartment</span> <span class="token function">getEdeptById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"did"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> did<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.EmployeesMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  
  <span class="token comment">&lt;!-- 3.使用 分部查询 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resuleMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>empMap<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.pojo.Employess<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eid<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eid<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edpartNameId<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edpartNameId<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>esalary<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>esalary<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>association</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Edepart<span class="token punctuation">"</span></span> 
                <span class="token attr-name">select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.EdepartmentMapper.getEdeptById<span class="token punctuation">"</span></span>
                <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>association</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resuleMap</span><span class="token punctuation">></span></span>
  
  <span class="token comment">&lt;!-- 根据员工 ID 查询一个员工个人信息 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getEmployeesInfoById<span class="token punctuation">"</span></span> <span class="token attr-name">resuleMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>empMap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    SELECT * FROM t_emp 
    WHERE t_emp.eid = #{eid};
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>property</code> 表示多对一中的那个一，即被赋值的属性。</li>
<li><code v-pre>select</code> 表示该属性的值来自哪个 SQL 查询语句，需要对应的方法名(注意路径)；</li>
<li><code v-pre>column</code> 表示传给下一步查询的条件。</li>
</ul>
</template>
<template #tab3="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.EdepartmentMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 根据部门ID 查询对应的部门信息 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getEdeptById<span class="token punctuation">"</span></span> <span class="token attr-name">resuleType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.pojo.Edepartment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    SELECT * FROM t_dept 
    WHERE t_dept.departId = #{did};
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<blockquote>
<p>分部查询更加灵活，因为是对不同接口中功能的组合，并且各个分部语句也能实现其他所需的功能（但这个需要开启延迟加载）。</p>
</blockquote>
<Tabs id="623" :data='[{"title":"全局开启"},{"title":"局部可控"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>settings</span><span class="token punctuation">></span></span>
 <span class="token comment">&lt;!-- 延迟加载全局开启，开启时，所有关联对象都会延迟加载--></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lazyLoadingEnabled<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

  <span class="token comment">&lt;!-- 当开启时，任何方法的调用都会加载该对象的所有属性。否则就会按需加载，其在 3.4.1 之后默认为 false 
	所有高于 3.4.1 可以不写。
	--></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>aggressiveLazyLoading<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>settings</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<ul>
<li>
<p>需要在开启全局延迟加载的情况下使用；</p>
</li>
<li>
<p><code v-pre>association-fetchType</code> 属性 ：  <code v-pre>lazy | eager</code></p>
</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.EmployeesMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  
  <span class="token comment">&lt;!-- 3.使用 分部查询 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resuleMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>empMap<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.pojo.Employess<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eid<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eid<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edpartNameId<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edpartNameId<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>esalary<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>esalary<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>association</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Edepart<span class="token punctuation">"</span></span> 
                <span class="token attr-name">select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.EdepartmentMapper.getEdeptById<span class="token punctuation">"</span></span>
                <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departId<span class="token punctuation">"</span></span>
                <span class="token attr-name">fetchType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eager<span class="token punctuation">"</span></span>     
                <span class="token punctuation">></span></span>  <span class="token comment">&lt;!-- 立即加载 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>association</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resuleMap</span><span class="token punctuation">></span></span>
  
  <span class="token comment">&lt;!-- 根据员工 ID 查询一个员工个人信息 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getEmployeesInfoById<span class="token punctuation">"</span></span> <span class="token attr-name">resuleMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>empMap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    SELECT * FROM t_emp 
    WHERE t_emp.eid = #{eid};
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h3 id="一对多映射" tabindex="-1"><a class="header-anchor" href="#一对多映射" aria-hidden="true">#</a> 一对多映射</h3>
<blockquote>
<p>需要查询部门信息及其所有员工的信息</p>
</blockquote>
<p>解决方案：</p>
<ol>
<li>使用 <code v-pre>collection</code></li>
<li>分部查询 + <code v-pre>collection</code></li>
</ol>
<blockquote>
<p>第一种：使用 <code v-pre>collection</code></p>
</blockquote>
<Tabs id="671" :data='[{"title":"公司部门实体类"},{"title":"接口"},{"title":"XML"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Edepartment</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span><span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> departId<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> departHead<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> departResearchDirection<span class="token punctuation">;</span>
  <span class="token comment">// 该部门的员工集合</span>
  <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> employees<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">EdepartmentMapper</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 根据部门ID 查询部门信息及其所有员工的信息
   */</span>
  <span class="token class-name">Edepartment</span> <span class="token function">getEdeptAndEmpsById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"did"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> did<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.EdepartmentMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DeptMap<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.pojo.Edepartment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departId<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departId<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departHead<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departHead<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departResearchDirection<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departResearchDirection<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 1.使用 collection --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>collection</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>employees<span class="token punctuation">"</span></span> <span class="token attr-name">ofType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Employee<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eid<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eid<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edpartNameId<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edpartNameId<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>esalary<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>esalary<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>collection</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">></span></span>
  
  
  <span class="token comment">&lt;!-- 根据部门ID 查询部门信息及其所有员工的信息 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getEdeptAndEmpsById<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DeptMap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    SELECT * FROM t_dept
    LEFT JOIN t_emp
    ON t_dept.departId = t_rmp.departId
    WHERE t_dept.departId = #{did}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&lt;collection property=&quot;employees&quot; ofType=&quot;Employee&quot;&gt;</code></p>
<ul>
<li><code v-pre>property</code> 表示一对多里面的那个一，即员工集合属性</li>
<li><code v-pre>ofType</code> 为集合里面元素的属性，即员工(<code v-pre>Employee</code>)</li>
</ul>
</template>
</Tabs>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>在 <code v-pre>&lt;collection&gt;</code> 中并没有设置其属性 <code v-pre>Edepart</code> ，即部门信息，这个并不需要在这里设置，不然就成套娃了。</p>
</div>
<blockquote>
<p>第二种：分部查询:</p>
</blockquote>
<ol>
<li>先根据部门ID 查询部门信息</li>
<li>再根据部门ID 查询所有的员工信息</li>
</ol>
<Tabs id="719" :data='[{"title":"部门接口"},{"title":"员工接口"},{"title":"XML—部门"},{"title":"XML—员工"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">EdepartmentMapper</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 第一步：先根据部门ID 查询部门信息
   */</span>
  <span class="token class-name">Edepartment</span> <span class="token function">getEdeptById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"did"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> did<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">EmployeeMapper</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 第二步：再根据部门ID 查询所有的员工信息
   */</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> <span class="token function">getEmployeesInfoByDid</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"did"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> did<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.EdepartmentMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DeptMap<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.pojo.Edepartment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departId<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departId<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departHead<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departHead<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departResearchDirection<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departResearchDirection<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>result</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 1.使用 collection --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>collection</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>employees<span class="token punctuation">"</span></span> 
                <span class="token attr-name">select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.EmployeesMapper.getEmployeesInfoByDid<span class="token punctuation">"</span></span>
                <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departId<span class="token punctuation">"</span></span>
                <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>collection</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">></span></span>
  
  
  <span class="token comment">&lt;!-- 第一步：先根据部门ID 查询部门信息 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getEdeptById<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DeptMap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    SELECT * FROM t_dept WHERE t_dept.departId = #{did}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>property</code> 表示对应的集合属性</li>
<li><code v-pre>select</code> 表示该属性来自哪个查询语句</li>
<li><code v-pre>column</code> 表示查询条件</li>
</ul>
</template>
<template #tab3="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mapper.EmployeesMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
 
  <span class="token comment">&lt;!-- 第二步：再根据部门ID 查询所有的员工信息 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getEmployeesInfoByDid<span class="token punctuation">"</span></span> <span class="token attr-name">resuleType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.pojo.Employee<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    SELECT * FROM t_emp WHERE t_emp.did = #{did};
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p>延迟加载也同样适用于该分部查询。可在开启全局延迟加载的情况下设置 <code v-pre>collection-fetch</code> 属性决定这一分部查询是否开启延迟加载。</p>
</div>
<h2 id="缓存相关" tabindex="-1"><a class="header-anchor" href="#缓存相关" aria-hidden="true">#</a> 缓存相关</h2>
<h3 id="一级缓存" tabindex="-1"><a class="header-anchor" href="#一级缓存" aria-hidden="true">#</a> 一级缓存</h3>
<h3 id="二级缓存" tabindex="-1"><a class="header-anchor" href="#二级缓存" aria-hidden="true">#</a> 二级缓存</h3>
<h3 id="第三方二级缓存" tabindex="-1"><a class="header-anchor" href="#第三方二级缓存" aria-hidden="true">#</a> 第三方二级缓存</h3>
</div></template>


