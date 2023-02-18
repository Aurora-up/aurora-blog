<template><div><p>Filter ，Interceptor</p>
<!-- more -->
<p><code v-pre>Filter</code> 和 <code v-pre>Interceptor</code> 都是 AOP 思想的产物，是对整个 <strong>【请求，响应】</strong> 过程的横向切面操作。</p>
<h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> Filter</h2>
<p>【Filter 的定义】</p>
<p>当你有一堆东西的时候，你只希望选择符合你要求的某一些东西。定义这些要求的工具，就是过滤器。</p>
<p><img src="@source/framework/springMVC/image/image-20221122215839348.png" alt="image-20221122215839348" loading="lazy"></p>
<p>【Filter 的一些使用实例、场景】</p>
<ul>
<li>
<p>认证过滤器</p>
</li>
<li>
<p>日志记录和审核过滤器</p>
</li>
<li>
<p>图像转换过滤器</p>
</li>
<li>
<p>数据压缩过滤器</p>
</li>
<li>
<p>加密过滤器</p>
</li>
<li>
<p>标记过滤器</p>
</li>
<li>
<p>触发资源访问事件的过滤器</p>
</li>
<li>
<p>字符集统一处理，数据转换处理等等</p>
</li>
</ul>
<p>在 SpringMVC 中并未对 <code v-pre>Filter</code> 进行重新封装，所以要想使用 <code v-pre>Filter</code>得用底层 Selvlet 的 <code v-pre>Filter</code> ，</p>
<p>要自定义 <code v-pre>Filter</code> 需要考虑的两个基本问题为：</p>
<ol>
<li>如何自定义 <code v-pre>Filter</code> ；</li>
<li>如何配置 <code v-pre>Filter</code> 的相关信息。</li>
</ol>
<h2 id="在-spring-boot-中使用-filter" tabindex="-1"><a class="header-anchor" href="#在-spring-boot-中使用-filter" aria-hidden="true">#</a> 在 Spring boot 中使用 Filter</h2>
<p><code v-pre>Filter</code> 的接口定义在 Java EE 中，<a href="https://javaee.github.io/javaee-spec/javadocs/javax/servlet/Filter.html" target="_blank" rel="noopener noreferrer">Filter (javaEE8)- javax.servlet.Filter<ExternalLinkIcon/></a>) 那么要自定义 <code v-pre>Filter</code> 时就需要 <code v-pre>implements</code> 该接口。</p>
<blockquote>
<p><code v-pre>Filter</code> 接口</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>
  
  <span class="token comment">// 初始化过滤器后执行的操作</span>
  <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">FilterConfig</span> filterConfig<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  
  <span class="token comment">// 对请求进行过滤</span>
  <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> var1<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> var2<span class="token punctuation">,</span> 
                <span class="token class-name">FilterChain</span> var3<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ServletException</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 销毁过滤器后执行的操作，主要用于对某些资源的回收</span>
  <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>Filter</code> 在什么时候被执行？</p>
</blockquote>
<p>在 Spring boot 中而言，默认使用 Tomcat 作为网络中间层，而 Tomcat 本质也是一个 Servlet 实例。</p>
<p>在 SpringMVC 的底层也是由 <code v-pre>DispatcherServlet</code> 来控制其整个运行的。而 <code v-pre>Filter</code> 属于 Servlet 容器的原生组件，所以可以得出 Filter 的处理 <code v-pre>request</code> 和 <code v-pre>response</code> 时的介入阶段：</p>
<p><img src="@source/framework/springMVC/image/image-20221122164141158.png" alt="image-20221122164141158" loading="lazy"></p>
<h3 id="_1-第一种方式" tabindex="-1"><a class="header-anchor" href="#_1-第一种方式" aria-hidden="true">#</a> 1. 第一种方式</h3>
<ol>
<li>实现 <code v-pre>Filter</code> 接口，</li>
<li>使用 java 配置方式配置。</li>
</ol>
<CodeTabs id="123" :data='[{"title":"自定义的 Filter"},{"title":"Filter 配置"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoginFilter</span> <span class="token keyword">implements</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">FilterConfig</span> filterConfig<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"初始化过滤器: {}"</span><span class="token punctuation">,</span> filterConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> servletRequest<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> servletResponse<span class="token punctuation">,</span> <span class="token class-name">FilterChain</span> filterChain<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>
    <span class="token comment">//对请求进行预处理</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"过滤器开始对请求进行预处理："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">HttpServletRequest</span> request <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span><span class="token punctuation">)</span> servletRequest<span class="token punctuation">;</span>
    <span class="token class-name">String</span> requestUri <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getRequestURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"请求的接口为："</span> <span class="token operator">+</span> requestUri<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//通过 doFilter 方法实现过滤功能</span>
    filterChain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>servletRequest<span class="token punctuation">,</span> servletResponse<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 上面的 doFilter 方法执行结束后用户的请求已经返回</span>
    <span class="token keyword">long</span> endTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该用户的请求已经处理完毕，请求花费的时间为："</span> <span class="token operator">+</span> <span class="token punctuation">(</span>endTime <span class="token operator">-</span> startTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"销毁过滤器"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> webFilterConfig <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token class-name">LoginFilter</span> loginFilter<span class="token punctuation">;</span>    <span class="token comment">// 自定义的过滤器</span>
  
  <span class="token doc-comment comment">/**
   * FilterRegistrationBean<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">></span></span>  
   *     FilterRegistrationBean 为 Filter 的配置 Bean
   *     T 为自定义的过滤器
   * <span class="token keyword">@return</span> 配置好的 Filter 配置 Bean
   */</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">FilterRegistrationBean</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">LoginFilter</span><span class="token punctuation">></span></span> <span class="token function">loginFilterBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> filterBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FilterRegistrationBean</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">LoginFilter</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    filterBean<span class="token punctuation">.</span><span class="token function">setFilter</span><span class="token punctuation">(</span>loginFilter<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置该过滤器要过滤的请求路径</span>
    filterBean<span class="token punctuation">.</span><span class="token function">setUrlPatterns</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">"/user/all-users"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"{}"</span><span class="token punctuation">,</span> filterBean<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> filterBean<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p><code v-pre>Filter</code> 是底层 Servlet 中的组件，其生命周期与 Servlet 容器相关，但是要想在 Spring 中使用，那么就要将其作为 Bean 交给 Spring 管理，</p>
</div>
<p>日志输出：</p>
<p><img src="@source/framework/springMVC/image/image-20221122174112638.png" alt="image-20221122174112638" loading="lazy"></p>
<h3 id="_2-第二种方式" tabindex="-1"><a class="header-anchor" href="#_2-第二种方式" aria-hidden="true">#</a> 2.第二种方式</h3>
<p>在第一种方式中使用 java 配置来配置 Filter 的相关配置，除了这种方式，还有使用注解的形式：</p>
<ul>
<li>为实现 <code v-pre>Filter</code> 的类加上 <a href="https://docs.oracle.com/javaee/7/api/javax/servlet/annotation/WebFilter.html" target="_blank" rel="noopener noreferrer"><code v-pre>@WebFilter</code><ExternalLinkIcon/></a> 注解</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@WebFilter</span><span class="token punctuation">(</span>filterName <span class="token operator">=</span> <span class="token string">"MyFilterWithAnnotation"</span><span class="token punctuation">,</span> urlPatterns <span class="token operator">=</span> <span class="token string">"/user/all-users"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyFilterWithAnnotation</span> <span class="token keyword">implements</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>

   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p>这样定义 <code v-pre>Filter</code> 之后，配置和实现都有了，但是其并不能被 Spring 发现，可以将 <a href="https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/web/servlet/ServletComponentScan.html" target="_blank" rel="noopener noreferrer"><code v-pre>@ServletComponentScan</code><ExternalLinkIcon/></a>添加到启动类上。</p>
<p>在 SpringBootApplication 上使用 <code v-pre>@ServletComponentScan</code> 注解后，Servlet（控制器）、Filter（过滤器）、Listener（监听器）可以直接通过 <a href="https://docs.oracle.com/javaee/7/api/javax/servlet/annotation/WebFilter.html" target="_blank" rel="noopener noreferrer"><code v-pre>@WebServlet</code><ExternalLinkIcon/></a>、<a href="https://docs.oracle.com/javaee/7/api/javax/servlet/annotation/WebFilter.html" target="_blank" rel="noopener noreferrer"><code v-pre>@WebFilter</code><ExternalLinkIcon/></a>、<a href="https://docs.oracle.com/javaee/7/api/javax/servlet/annotation/WebListener.html" target="_blank" rel="noopener noreferrer"><code v-pre>@WebListener</code><ExternalLinkIcon/></a> 注解自动注册到Spring容器中，无需其他代码。</p>
</div>
<h3 id="多个过滤器顺序配置问题" tabindex="-1"><a class="header-anchor" href="#多个过滤器顺序配置问题" aria-hidden="true">#</a> 多个过滤器顺序配置问题</h3>
<p>具体实现功能时，一个过滤器可能不够，需要使用多个过滤器，那么就需要为这多个过滤器设置执行顺序问题。</p>
<h3 id="_1-第一种方式-1" tabindex="-1"><a class="header-anchor" href="#_1-第一种方式-1" aria-hidden="true">#</a> 1.第一种方式</h3>
<p>使用 java 配置，<code v-pre>setOrder(int order)</code> 同一请求路径中，对应过滤器的设置的 order 越小优先级越高</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> webFilterConfig <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token class-name">LoginFilter</span> loginFilter<span class="token punctuation">;</span>     

  <span class="token annotation punctuation">@Autowired</span>
  <span class="token class-name">LoginFilter2</span> loginFilter2<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">FilterRegistrationBean</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">LoginFilter</span><span class="token punctuation">></span></span> <span class="token function">loginFilterBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> filterBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FilterRegistrationBean</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">LoginFilter</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    filterBean<span class="token punctuation">.</span><span class="token function">setFilter</span><span class="token punctuation">(</span>loginFilter<span class="token punctuation">)</span><span class="token punctuation">;</span>
    filterBean<span class="token punctuation">.</span><span class="token function">setOrder</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    filterBean<span class="token punctuation">.</span><span class="token function">setUrlPatterns</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">"/user/all-users"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"{}"</span><span class="token punctuation">,</span> filterBean<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> filterBean<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">FilterRegistrationBean</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">LoginFilter2</span><span class="token punctuation">></span></span> <span class="token function">loginFilterBean2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> filterBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FilterRegistrationBean</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">LoginFilter2</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    filterBean<span class="token punctuation">.</span><span class="token function">setFilter</span><span class="token punctuation">(</span>loginFilter2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    filterBean<span class="token punctuation">.</span><span class="token function">setOrder</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    filterBean<span class="token punctuation">.</span><span class="token function">setUrlPatterns</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">"/user/all-users"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"{}"</span><span class="token punctuation">,</span> filterBean<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> filterBean<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>LoginFilter2</code> 的 order 更小，所以先执行：</p>
<p><img src="@source/framework/springMVC/image/image-20221122181822288.png" alt="image-20221122181822288" loading="lazy"></p>
<h3 id="_2-第二种方式-1" tabindex="-1"><a class="header-anchor" href="#_2-第二种方式-1" aria-hidden="true">#</a> 2.第二种方式</h3>
<p>可以使用 <a href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/core/annotation/Order.html" target="_blank" rel="noopener noreferrer"><code v-pre>@Order</code><ExternalLinkIcon/></a> 注解来控制 <code v-pre>Filter Bean</code> 的<strong>执行顺序</strong>，所以前提是将 <code v-pre>Filter</code> 的添加到 IOC 容器中，同样也是设置的值越小优先级就越高。</p>
<p>但是这种方式并不推荐，因为有可能我们需要多条 <code v-pre>Filter chain</code> ，那么使用这个去管理就不太容易。</p>
<CodeTabs id="192" :data='[{"title":"LoginFilter2"},{"title":"LoginFilter"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@WebFilter</span><span class="token punctuation">(</span>filterName <span class="token operator">=</span> <span class="token string">"LoginFilter2"</span><span class="token punctuation">,</span> urlPatterns <span class="token operator">=</span> <span class="token string">"/user/all-users"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoginFilter2</span> <span class="token keyword">implements</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">FilterConfig</span> filterConfig<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"LoginFilter2 初始化"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Filter</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>filterConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> servletRequest<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> servletResponse<span class="token punctuation">,</span> <span class="token class-name">FilterChain</span> filterChain<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"LoginFilter2 开始执行"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    filterChain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>servletRequest<span class="token punctuation">,</span> servletResponse<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"loginFilter2 销毁"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Filter</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoginFilter</span> <span class="token keyword">implements</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">FilterConfig</span> filterConfig<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"初始化过滤器: {}"</span><span class="token punctuation">,</span> filterConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> servletRequest<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> servletResponse<span class="token punctuation">,</span> <span class="token class-name">FilterChain</span> filterChain<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>
    <span class="token comment">//对请求进行预处理</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"过滤器1开始对请求进行预处理："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">HttpServletRequest</span> request <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span><span class="token punctuation">)</span> servletRequest<span class="token punctuation">;</span>
    <span class="token class-name">String</span> requestUri <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getRequestURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"请求的接口为："</span> <span class="token operator">+</span> requestUri<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//通过 doFilter 方法实现过滤功能</span>
    filterChain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>servletRequest<span class="token punctuation">,</span> servletResponse<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 上面的 doFilter 方法执行结束后用户的请求已经返回</span>
    <span class="token keyword">long</span> endTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该用户的请求已经处理完毕，请求花费的时间为："</span> <span class="token operator">+</span> <span class="token punctuation">(</span>endTime <span class="token operator">-</span> startTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"销毁过滤器1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p><img src="@source/framework/springMVC/image/image-20221122181822288.png" alt="image-20221122181822288" loading="lazy"></p>
<h2 id="interceptor" tabindex="-1"><a class="header-anchor" href="#interceptor" aria-hidden="true">#</a> Interceptor</h2>
<p>【拦截器的定义】</p>
<p>在一个流程正在进行的时候，你希望干预它的进展，甚至终止它进行，这是拦截器做的事情。</p>
<p><img src="@source/framework/springMVC/image/image-20221122215351054.png" alt="image-20221122215351054" loading="lazy"></p>
<p>【拦截器的使用场景】</p>
<p>SpringMVC 中有对应的拦截器接口 <a href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/servlet/HandlerInterceptor.html" target="_blank" rel="noopener noreferrer">HandlerInterceptor 接口<ExternalLinkIcon/></a> ，可通过实现该接口定制自己的拦截器。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">HandlerInterceptor</span> <span class="token punctuation">{</span>
  <span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> 
                            <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">postHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> 
                          <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> 
                          <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">ModelAndView</span> modelAndView<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">afterCompletion</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> 
                               <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> 
                               <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个拦截器的执行过程：</p>
<p><img src="@source/framework/springMVC/image/image-20221122195454869.png" alt="image-20221122195454869" loading="lazy"></p>
<div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<ul>
<li><code v-pre>preHandle</code> 在执行对应的 <code v-pre>Contrlloer</code> 之前；</li>
<li><code v-pre>postHandle</code> 在执行对应的 <code v-pre>Controller</code> 之后；</li>
<li><code v-pre>afterCompletion</code> 在完成此次<strong>请求</strong>之后。</li>
</ul>
</div>
<blockquote>
<p>访问 <code v-pre>/userinfo</code> 之前必须处于登录状态，对于第一次访问将其拦截后重定向至首页，(这里省去了检查登录状态，直接重定向至首页去登录)</p>
</blockquote>
<Tabs id="252" :data='[{"title":"loginInterceptor"},{"title":"配置拦截器"},{"title":"LoginHandler"}]'>
<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> loginInterceptor <span class="token keyword">implements</span> <span class="token class-name">HandlerInterceptor</span> <span class="token punctuation">{</span>

  <span class="token doc-comment comment">/**
   *
   * <span class="token keyword">@param</span> <span class="token parameter">request</span>    请求体
   * <span class="token keyword">@param</span> <span class="token parameter">response</span>   响应体
   * <span class="token keyword">@param</span> <span class="token parameter">handler</span>
   * <span class="token keyword">@return</span> 布尔值:
   *   true  : 处理程序的执行链继续执行
   *   false : DispatcherServlet 假定拦截器本身已处理请求，并不再执行后续执行链中的其他的拦截器和对应Controller
   */</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> 
                           <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"preHandle , 执行 Controller 之前"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"访问的当前路径必须先登录"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 在 Session 上下文中保存错误信息</span>
    <span class="token class-name">HttpSession</span> session <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">,</span> <span class="token string">"请先登录"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 重定向到首页去登录</span>
    response<span class="token punctuation">.</span><span class="token function">sendRedirect</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getContextPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"/index"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>


  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">postHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> 
                         <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> 
                         <span class="token class-name">ModelAndView</span> modelAndView<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"postHandle, 执行完 Controller 之后"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">HandlerInterceptor</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">postHandle</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> modelAndView<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterCompletion</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> 
                              <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"afterCompletion , 本次请求结束之后"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">HandlerInterceptor</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">afterCompletion</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> adminWebConfig <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>

  <span class="token doc-comment comment">/**
   * 配置拦截器
   * <span class="token keyword">@param</span> <span class="token parameter">InterceptorRegistry</span> 拦截器注册中心
   */</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addInterceptors</span><span class="token punctuation">(</span><span class="token class-name">InterceptorRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置一个拦截器</span>
    registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token function">loginInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">addPathPatterns</span><span class="token punctuation">(</span><span class="token string">"/userinfo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//  添加要拦截的路径</span>
    <span class="token comment">//      .excludePathPatterns("不拦截的路径")</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>要为拦截器添加不拦截的路径使用 <code v-pre>excludePathPatterns()</code></li>
<li><code v-pre>/**</code> 默认是所有路径包括静态资源。</li>
</ul>
</template>
<template #tab2="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoginHandler</span> <span class="token punctuation">{</span>
  
  <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/index"</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">indexInfo</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">HttpSession</span> session <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Object</span> msg <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"这里是首页"</span> <span class="token operator">+</span> <span class="token string">"   "</span> <span class="token operator">+</span> msg<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<p><img src="@source/framework/springMVC/image/image-20221122204043542.png" alt="image-20221122204043542" loading="lazy"></p>
<h3 id="多个-interperctor-执行顺序问题。" tabindex="-1"><a class="header-anchor" href="#多个-interperctor-执行顺序问题。" aria-hidden="true">#</a> 多个 Interperctor 执行顺序问题。</h3>
<ul>
<li>默认为配置文件中的配置顺序</li>
<li>使用 <code v-pre>order()</code> 方法，越小优先级越高</li>
</ul>
<CodeTabs id="293" :data='[{"title":"默认配置"},{"title":"order()"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//  先执行 loginInterceptor ,  再执行 authorityInterceptor </span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> adminWebConfig <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>

  <span class="token doc-comment comment">/**
   * 配置拦截器
   * <span class="token keyword">@param</span> <span class="token parameter">registry</span> 拦截器注册中心
   */</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addInterceptors</span><span class="token punctuation">(</span><span class="token class-name">InterceptorRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token function">loginInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">addPathPatterns</span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           

    registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token function">authorityInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">addPathPatterns</span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//  先执行 authorityInterceptor  , 再执行loginInterceptor</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> adminWebConfig <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addInterceptors</span><span class="token punctuation">(</span><span class="token class-name">InterceptorRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token function">loginInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">addPathPatterns</span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           


    registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token function">authorityInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">addPathPatterns</span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>过滤器，拦截器，dispatch，Controller  整个大致的执行流程：</p>
<p><img src="@source/framework/springMVC/image/image-20221122212812819.png" alt="image-20221122212812819" loading="lazy"></p>
</div></template>


