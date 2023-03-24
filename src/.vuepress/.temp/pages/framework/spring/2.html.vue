<template><div><p>Spring IOC</p>
<!-- more -->
<h2 id="spring-ioc" tabindex="-1"><a class="header-anchor" href="#spring-ioc" aria-hidden="true">#</a> Spring IOC</h2>
<p>​		IOC  (Inversion of Control) 控制反转，是 Spring 的核心思想之一；其可以简单理解为将你设计好的对象交给容器集中管理，而不是传统意义上的在你的对象内部直接控制。在 Spring 中这个容器就称为 【IOC 容器】.</p>
<p>其本质区别如下图：</p>
<p><img src="@source/framework/spring/image/image-20221116102111136.png" alt="image-20221116102111136"></p>
<p><img src="@source/framework/spring/image/image-20221116102141216.png" alt="image-20221116102141216"></p>
<h2 id="向-ioc-容器中配置-bean" tabindex="-1"><a class="header-anchor" href="#向-ioc-容器中配置-bean" aria-hidden="true">#</a> 向 IOC 容器中配置 bean</h2>
<h3 id="xml-配置" tabindex="-1"><a class="header-anchor" href="#xml-配置" aria-hidden="true">#</a> XML 配置</h3>
<p>XML 配置较为繁琐，大多用于不支持注解的第三方库。</p>
<h3 id="java-配置" tabindex="-1"><a class="header-anchor" href="#java-配置" aria-hidden="true">#</a> java 配置</h3>
<p>​		是 XML 配置的一种替代方式，使用的 java 代码进行配置，灵活性更高，但是可读性较差，其【较适用】的场景是在 springboot 项目中代替 XML 配置某些第三方库的一些较为复杂的全局配置。当然在其中也可以配置自定义的 <code v-pre>bean</code> 。</p>
<blockquote>
<p>在一个类上添加 <a href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Configuration.html" target="_blank" rel="noopener noreferrer"><code v-pre>@Configuration</code><ExternalLinkIcon/></a> 注解将其声明为配置类。</p>
</blockquote>
<p>要想为将自定义的 <code v-pre>bean</code> 交给 IOC 容器时，可使用 <a href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Bean.html" target="_blank" rel="noopener noreferrer"><code v-pre>@Bean</code><ExternalLinkIcon/></a> 注解</p>
<p>例如：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BeanConfig</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">"userDao"</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token class-name">UserDaoImpl</span> <span class="token function">userDao</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">UserDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">"userService"</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token class-name">UserServiceImpl</span> <span class="token function">userService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">UserServiceImpl</span> userService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    userService<span class="token punctuation">.</span><span class="token function">setUserDao</span><span class="token punctuation">(</span><span class="token function">userDao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> userService<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注解配置" tabindex="-1"><a class="header-anchor" href="#注解配置" aria-hidden="true">#</a> 注解配置</h3>
<p>纯注解配置更加灵活，但需要注意其前提是必须配置注解扫描器；</p>
<h4 id="配置注解扫描器" tabindex="-1"><a class="header-anchor" href="#配置注解扫描器" aria-hidden="true">#</a> 配置注解扫描器</h4>
<blockquote>
<p>设置<code v-pre>ComponentScan</code>的<code v-pre>basePackage</code></p>
</blockquote>
<p>例如需要扫描 <code v-pre>com</code> 包中的内容：</p>
<p><img src="@source/framework/spring/image/image-20221118112135759.png" alt="image-20221118112135759"></p>
<Tabs id="66" :data='[{"title":"XML"},{"title":"注解"},{"title":"java"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- 用于 XML 配置文件中 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>com<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">context:</span>component-scan</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 扫描多个 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>com.service;com.entity<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">context:</span>component-scan</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>context:component-scan</code> 有两个子属性</p>
<ul>
<li>
<p><code v-pre>context:exclude-filter</code> 排除</p>
</li>
<li>
<p><code v-pre>context:include-filter</code> 包含， 需要设置 <code v-pre>use-default-filters=&quot;false&quot;</code></p>
</li>
</ul>
<p>可根据这两者属性进行自定义。来避免一些重复扫描的问题。</p>
<p></p>
</template>
<template #tab1="{ title, value, isActive }">
<p><a href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/ComponentScan.html" target="_blank" rel="noopener noreferrer"><code v-pre>@ComponentScan</code><ExternalLinkIcon/></a></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 用于 java 配置类上</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">"com"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 用于实际编写的代码中</span>
<span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token string">"com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ul>
<li>扫描包的范围并不是越大越好，过大会导致扫描过慢，根据不同情形下的需要扫描指定目录即可。</li>
<li><code v-pre>Springboot</code> 中默认使用启动类所在的目录作为扫描的目录。</li>
</ul>
</div>
<h4 id="相关注解" tabindex="-1"><a class="header-anchor" href="#相关注解" aria-hidden="true">#</a> 相关注解</h4>
<p>配置好注解扫描器之后，Spring 会自动扫描所有带有 ：</p>
<ol>
<li><code v-pre>@Component</code> : 将当前类作为 bean 添加到 IOC 容器中，用于一般组件</li>
<li><code v-pre>@Controller</code> : 用于控制层</li>
<li><code v-pre>@Service</code> : 用于服务层</li>
<li><code v-pre>@Repository</code> : 用于持久层</li>
</ol>
<p>这四个注解的类。</p>
<p>​		其中 <code v-pre>@Component</code> 是其他三个注解的别名，所以这四个注解的<strong>功能都一样</strong>，都是将当前类作为 <code v-pre>bean</code> 添加到 IOC 容器中；只有语义上的差别。</p>
<Tabs id="149" :data='[{"title":"@Component"},{"title":"@Controller"},{"title":"@Service"},{"title":"@Repository"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Indexed</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@AliasFor</span><span class="token punctuation">(</span>
    annotation <span class="token operator">=</span> <span class="token class-name">Component</span><span class="token punctuation">.</span><span class="token keyword">class</span>
  <span class="token punctuation">)</span>
  <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@AliasFor</span><span class="token punctuation">(</span>
    annotation <span class="token operator">=</span> <span class="token class-name">Component</span><span class="token punctuation">.</span><span class="token keyword">class</span>
  <span class="token punctuation">)</span>
  <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab3="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Repository</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@AliasFor</span><span class="token punctuation">(</span>
    annotation <span class="token operator">=</span> <span class="token class-name">Component</span><span class="token punctuation">.</span><span class="token keyword">class</span>
  <span class="token punctuation">)</span>
  <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<ul>
<li>
<p>使用上面注解之后，默认使用 <strong>类名首字母小写的驼峰形式</strong> 作为 <code v-pre>bean</code> 的 <code v-pre>id</code> 属性，</p>
<ul>
<li>
<p>例如： <code v-pre>@Component</code> 声明在 <code v-pre>UserService</code> 类上，默认的 id 就是 <code v-pre>userService</code></p>
</li>
<li>
<p>也可自定义 <code v-pre>id</code> 属性。eg: <code v-pre>@Component(&quot;myBean&quot;)</code></p>
</li>
</ul>
</li>
<li>
<p><code v-pre>ElementType.TYPE</code> 表明注解可用于类，接口，注解类型，以及枚举的声明中。</p>
</li>
</ul>
</div>
<h2 id="为-ioc-容器中的-bean-作依赖注入" tabindex="-1"><a class="header-anchor" href="#为-ioc-容器中的-bean-作依赖注入" aria-hidden="true">#</a> 为 IOC 容器中的 bean 作依赖注入</h2>
<h3 id="setter-注入" tabindex="-1"><a class="header-anchor" href="#setter-注入" aria-hidden="true">#</a> Setter 注入</h3>
<p>Spring 3.x 中使用</p>
<ul>
<li>在 XML 文件中配置 Setter 注入</li>
</ul>
<Tabs id="205" :data='[{"title":"XML"},{"title":"java"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userService<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.service.UserServiceImpl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userDao<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userDao<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token punctuation">{</span>

  <span class="token keyword">private</span> <span class="token class-name">UserDaoImpl</span> userDao<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token function">findUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userDao<span class="token punctuation">.</span><span class="token function">findUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * set dao.
   * <span class="token keyword">@param</span> <span class="token parameter">userDao</span> user dao
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUserDao</span><span class="token punctuation">(</span><span class="token class-name">UserDaoImpl</span> userDao<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>userDao <span class="token operator">=</span> userDao<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<ul>
<li>在注解和Java配置中配置 Setter 注入</li>
</ul>
<p>直接在 <code v-pre>Setter</code> 方法上使用 <code v-pre>@Autowired</code> 注解即可。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token punctuation">{</span>

  <span class="token keyword">private</span> <span class="token class-name">UserDaoImpl</span> userDao<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token function">findUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userDao<span class="token punctuation">.</span><span class="token function">findUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * set dao.
   * <span class="token keyword">@param</span> <span class="token parameter">userDao</span> user dao
   */</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUserDao</span><span class="token punctuation">(</span><span class="token class-name">UserDaoImpl</span> userDao<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>userDao <span class="token operator">=</span> userDao<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="constructor-注入" tabindex="-1"><a class="header-anchor" href="#constructor-注入" aria-hidden="true">#</a> Constructor 注入</h3>
<p>Spring 4.x 中使用</p>
<ul>
<li>在 XML 文件中配置 Constructor 注入</li>
</ul>
<Tabs id="237" :data='[{"title":"XML"},{"title":"java"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userService<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.service.UserServiceImpl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>constructor-arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userDao<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userDao<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token punctuation">{</span>

  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">UserDaoImpl</span> userDao<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Constructor.
   * <span class="token keyword">@param</span> <span class="token parameter">userDaoImpl</span> user dao impl
   */</span>
  <span class="token keyword">public</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token class-name">UserDaoImpl</span> userDaoImpl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>userDao <span class="token operator">=</span> userDaoImpl<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token function">findUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userDao<span class="token punctuation">.</span><span class="token function">findUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<ul>
<li>在注解和Java配置中配置 Setter 注入</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token punctuation">{</span>

  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">UserDaoImpl</span> userDao<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Constructor.
   * <span class="token keyword">@param</span> <span class="token parameter">userDaoImpl</span> user dao impl
   */</span>
  <span class="token annotation punctuation">@Autowired</span>     <span class="token comment">// 这里的 @Autowired 也可以省略</span>
  <span class="token keyword">public</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">UserDaoImpl</span> userDaoImpl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>userDao <span class="token operator">=</span> userDaoImpl<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token function">findUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userDao<span class="token punctuation">.</span><span class="token function">findUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基于注解的注入" tabindex="-1"><a class="header-anchor" href="#基于注解的注入" aria-hidden="true">#</a> 基于注解的注入</h3>
<p>以 <code v-pre>@Autowired</code>（自动注入）注解注入为例，修饰符有三个属性：<code v-pre>Constructor</code>，<code v-pre>byType</code>，<code v-pre>byName</code>。默认按照 <code v-pre>byType</code> 注入。</p>
<ul>
<li><strong>constructor</strong>：通过构造方法进行自动注入，spring 会匹配与构造方法参数类型一致的 bean 进行注入，如果有一个多参数的构造方法，一个只有一个参数的构造方法，在容器中查找到多个匹配多参数构造方法的 bean，那么 spring 会优先将 bean 注入到多参数的构造方法中。</li>
<li><strong>byName</strong>：被注入 bean 的 id 名必须与 set 方法后半截匹配，并且 id 名称的第一个单词首字母必须小写，这一点与手动 set 注入有点不同。</li>
<li><strong>byType</strong>：查找所有的set方法，将符合符合参数类型的bean注入。</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token punctuation">{</span>
	
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">UserDaoImpl</span> userDao<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token function">findUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userDao<span class="token punctuation">.</span><span class="token function">findUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ul>
<li>当使用 <code v-pre>@Autowired</code> 注入时，默认使用 <code v-pre>byType</code> 选择对应的 <code v-pre>bean</code> 时，如果有多个 <code v-pre>bean</code> 的对应的类型是一样的，那么 <code v-pre>byType</code> 就是失效，此时就会自动转为使用 <code v-pre>byName</code> 进行选择。</li>
<li>当上述情况无法通过 <code v-pre>byName</code> 选择时，并且此时 IOC 容器中有多个类型匹配的 <code v-pre>bean</code> ，那么此时可使用 <code v-pre>@Qualifier</code> 注解来指定 <code v-pre>bean</code> 的 <code v-pre>id</code> 即可。</li>
</ul>
</div>
</div></template>


