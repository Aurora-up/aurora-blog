<template><div><p>请求、响应</p>
<!-- more -->
<h1 id="基于注解的编程模型" tabindex="-1"><a class="header-anchor" href="#基于注解的编程模型" aria-hidden="true">#</a> 基于注解的编程模型</h1>
<h2 id="控制器" tabindex="-1"><a class="header-anchor" href="#控制器" aria-hidden="true">#</a> 控制器</h2>
<p>SpringMVC 中的 MVC 模型中的 “C” 就是 Controller .</p>
<p>可以在某个类上声明 <code v-pre>@Controller</code> 作为 web Controller.</p>
<ul>
<li>
<p><a href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/servlet/mvc/Controller.html" target="_blank" rel="noopener noreferrer"><code v-pre>@Controller</code><ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/RestController.html" target="_blank" rel="noopener noreferrer"><code v-pre>@RestController</code><ExternalLinkIcon/></a> = <code v-pre>@Controllrt</code> + <code v-pre>@ResponseBody</code></p>
</li>
</ul>
<div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p><code v-pre>@RestController</code> 是一个组合注解，如上所示，其用于 RESTful 风格的 API 设计.传统的 web 应用与 前端之间不分离，所以需要 ModeView 模型，那么对于一个请求需要返回一个渲染好的页面，而 <code v-pre>@ResponseBody</code> 可以将方法的返回值直接作为响应正文，这样对于前后端分离的应用来说更加适用.</p>
</div>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span><span class="token punctuation">(</span><span class="token string">"/test"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloHandler</span> <span class="token punctuation">{</span>
  
  <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/hello"</span><span class="token punctuation">)</span>             
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">helloMVC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"Hello StringMVC"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//  访问   ...../test/hello 路径响应 Hello StringMVC </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p><code v-pre>@Controller</code> 注解为 Spring 注解模型之一，在 Springboot 中不需要直接配置，因为其启动类上的注解是一个组合注解，其中包含下面的注解扫描方式，在 Spring 中使用需要将其配置在扫描 Bean 的包范围下：</p>
</div>
<CodeTabs id="39" :data='[{"title":"java 配置类"},{"title":"Spring 启动类"},{"title":"XML"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@CompentScan</span><span class="token punctuation">(</span><span class="token string">"com.learn.Controller"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebConfig</span> <span class="token punctuation">{</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@CompentScan</span><span class="token punctuation">(</span><span class="token string">"com.learn.Controller"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/beans<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/p<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/context<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
        http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context
        https://www.springframework.org/schema/context/spring-context.xsd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.example.web<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

    <span class="token comment">&lt;!-- ... --></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="请求映射" tabindex="-1"><a class="header-anchor" href="#请求映射" aria-hidden="true">#</a> 请求映射</h2>
<p>在类上加上 控制器 之后就可以在该类中进行请求映射了。</p>
<p><a href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/RequestMapping.html" target="_blank" rel="noopener noreferrer"><code v-pre>@RequestMapping</code><ExternalLinkIcon/></a> 注解用于将请求映射到控制器方法. 它具有各种<strong>属性</strong>,可以通过：</p>
<ul>
<li>(path) URL，对于 URL 的模式匹配两种，具体在 <a href="http://docs.jcohy.com/docs/spring-framework/5.3.22/html5/zh-cn/web.html#mvc-ann-requestmapping-uri-templates" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a></li>
<li>(method) HTTP 方法，可指定的 Http 方法，具体在 <a href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/RequestMethod.html" target="_blank" rel="noopener noreferrer">RequestMethod <ExternalLinkIcon/></a> 中</li>
<li>(param) 请求参数，</li>
<li>(headers) 请求头参数，</li>
<li>(consumes，produces) 媒体类型，</li>
</ul>
<p>进行匹配. 可以在<strong>类级别</strong>使用它来表示共享映射,或在<strong>方法级</strong>别上用于缩小到特定的请求映射范围.</p>
<p>封装 Http 请求方法的请求映射注解：</p>
<ul>
<li><code v-pre>@GetMapping</code></li>
<li><code v-pre>@PostMapping</code></li>
<li><code v-pre>@PutMapping</code></li>
<li><code v-pre>@DeleteMapping</code></li>
<li><code v-pre>@PatchMapping</code></li>
</ul>
<blockquote>
<p><code v-pre>consumes</code> 可以根据【<strong>请求的</strong> <code v-pre>Content-Type</code>】 缩小请求映射范围</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">"/adduser"</span><span class="token punctuation">,</span> 
             consumes <span class="token operator">=</span> <span class="token string">"application/json"</span><span class="token punctuation">)</span> 
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p><code v-pre>consumes</code> 属性还支持否定表达式 ：</p>
<ul>
<li>例如,<code v-pre>!text/plain</code> 表示除 <code v-pre>text/plain</code> 之外的任何内容类型.</li>
</ul>
<p>也可以指定 <a href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/MediaType.html" target="_blank" rel="noopener noreferrer">MediaType<ExternalLinkIcon/></a> 中的常量类型作为限制:</p>
<ul>
<li>例如, <code v-pre>MediaType.APPLICATION_JSON_VALUE</code></li>
</ul>
</div>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>可以在类级别声明共享 <code v-pre>consumes</code> 属性. 但是,与大多数其他请求映射属性不同,在<strong>类级别</strong>使用时,会对方法级别<code v-pre>consumes</code> 属性<strong>覆盖</strong>而不是扩展.</p>
</div>
<blockquote>
<p><code v-pre>produces</code> 根据 <code v-pre>Accept</code> 请求头和控制器方法<strong>生成的内容</strong>类型列表来缩小请求映射</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">"/users/{userId}"</span><span class="token punctuation">,</span> 
            produces <span class="token operator">=</span> <span class="token string">"application/json"</span><span class="token punctuation">)</span> 
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">String</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其性质同 <code v-pre>consumes</code> 一致。</p>
<h1 id="函数式编程模型" tabindex="-1"><a class="header-anchor" href="#函数式编程模型" aria-hidden="true">#</a> 函数式编程模型</h1>
</div></template>


