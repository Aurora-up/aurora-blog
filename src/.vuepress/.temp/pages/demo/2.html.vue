<template><div><p>springboot 整和 Swagger</p>
<!-- more -->
<p><img src="@source/demo/image/image-20221126151324513.png" alt="image-20221126151324513" loading="lazy"></p>
<p>【<a href="https://swagger.io/" target="_blank" rel="noopener noreferrer">Swagger 官网<ExternalLinkIcon/></a>】</p>
<p>其是一个使用文档快速生成 API 接口文档的工具，既可以使用 <a href="https://editor.swagger.io/" target="_blank" rel="noopener noreferrer">Swagger Editor<ExternalLinkIcon/></a> 去生成 API 接口文档，也可以使用在各种语言或者框架中对 Swagger 的集成。</p>
<p><a href="https://app.swaggerhub.com" target="_blank" rel="noopener noreferrer">SwaggerHub<ExternalLinkIcon/></a>  可以在线编写 API 文档，并且可以生成不同语言的的版本.</p>
<p><img src="@source/demo/image/image-20221126155118210.png" alt="image-20221126155118210" loading="lazy"></p>
<p><a href="http://springfox.github.io/springfox/" target="_blank" rel="noopener noreferrer">Springfox<ExternalLinkIcon/></a> 是在 Spring 中的对 Swagger 的集成. Swagger 同时还支持自定义 UI 界面. <a href="https://doc.xiaominfo.com/" target="_blank" rel="noopener noreferrer">Knife4j<ExternalLinkIcon/></a> 是一个开源的 Swagger UI</p>
<blockquote>
<p>🚀 实例：在 Springboot 项目中使用 Springfox 和 Knife4j 生成 OpenAPI3 规范的 API 接口文档。</p>
</blockquote>
<p>导入相关依赖:</p>
<Tabs id="30" :data='[{"title":"Springfox"},{"title":"Knife4j"}]'>
<template #tab0="{ title, value, isActive }">
<p><a href="https://mvnrepository.com/artifact/io.springfox/springfox-boot-starter" target="_blank" rel="noopener noreferrer">Maven Repository: io.springfox » springfox-boot-starter (mvnrepository.com)<ExternalLinkIcon/></a></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>io.springfox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>springfox-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<p><a href="https://mvnrepository.com/artifact/com.github.xiaoymin/knife4j-springdoc-ui" target="_blank" rel="noopener noreferrer">Maven Repository: com.github.xiaoymin » knife4j-springdoc-ui (mvnrepository.com)<ExternalLinkIcon/></a></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.github.xiaoymin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>knife4j-springdoc-ui<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.0.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<p>配置相关：</p>
<CodeTabs id="47" :data='[{"title":"java 配置类"},{"title":"yaml 配置文件"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableOpenApi</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SwaggerConfig</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${knife4j.enable}"</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">Boolean</span> swaggerEnabled<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">createRestApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">OAS_30</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment">// 是否开启</span>
            <span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span>swaggerEnabled<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">// 扫描的路径使用 @Api 的 controller</span>
            <span class="token punctuation">.</span><span class="token function">apis</span><span class="token punctuation">(</span><span class="token class-name">RequestHandlerSelectors</span><span class="token punctuation">.</span><span class="token function">withMethodAnnotation</span><span class="token punctuation">(</span><span class="token class-name">ApiOperation</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment">// 指定路径处理, PathSelectors.any() 代表所有的路径</span>
            <span class="token punctuation">.</span><span class="token function">paths</span><span class="token punctuation">(</span><span class="token class-name">PathSelectors</span><span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">ApiInfo</span> <span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ApiInfoBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string">"webApi"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">"测试webAPI"</span><span class="token punctuation">)</span>
            <span class="token comment">//作者信息</span>
            <span class="token punctuation">.</span><span class="token function">contact</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Contact</span><span class="token punctuation">(</span><span class="token string">"HDD"</span><span class="token punctuation">,</span> <span class="token string">"https://aurora-up.gitee.io/aurora-blog/"</span><span class="token punctuation">,</span> <span class="token string">"2723787996@qq.com"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">"1.0.0"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
	<span class="token key atrule">mvc</span><span class="token punctuation">:</span>
		<span class="token key atrule">pathmatch</span><span class="token punctuation">:</span>
			<span class="token comment"># 配置策略</span>
      <span class="token key atrule">matching-strategy</span><span class="token punctuation">:</span> ant<span class="token punctuation">-</span>path<span class="token punctuation">-</span>matcher
      
 <span class="token key atrule">knife4j</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p>配置文件中主要使用的两个 API：</p>
<ul>
<li>
<p><a href="http://springfox.github.io/springfox/javadoc/current/springfox/documentation/spring/web/plugins/Docket.html" target="_blank" rel="noopener noreferrer">Docket<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="http://springfox.github.io/springfox/javadoc/current/springfox/documentation/spring/web/plugins/ApiSelectorBuilder.html" target="_blank" rel="noopener noreferrer">ApiSelectorBuilder<ExternalLinkIcon/></a></p>
</li>
</ul>
<p>可以通过其中的方法进行更多的配置.</p>
</div>
<p>使用相关：</p>
<CodeTabs id="78" :data='[{"title":"Controller"},{"title":"Entity"}]'>

<template #tab0="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/user"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Api</span><span class="token punctuation">(</span>tags <span class="token operator">=</span> <span class="token string">"UserController接口"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserHandler</span> <span class="token punctuation">{</span>

  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">UserHandler</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Autowired</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>userMapper <span class="token operator">=</span> userMapper<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> 返回所有用户信息
   */</span>
  <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/all-users"</span><span class="token punctuation">)</span>
  <span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"查看所有用户"</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Flux</span><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">getAllUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> allUser <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">getAllUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">ResponseEntity</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">contentType</span><span class="token punctuation">(</span><span class="token class-name">MediaType</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token class-name">MediaType</span><span class="token punctuation">.</span><span class="token constant">APPLICATION_JSON_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token class-name">Flux</span><span class="token punctuation">.</span><span class="token function">just</span><span class="token punctuation">(</span>allUser<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@EqualsAndHashCode</span><span class="token punctuation">(</span>callSuper <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Builder</span>
<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ApiModel</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"UserEntity对象"</span><span class="token punctuation">,</span> description <span class="token operator">=</span> <span class="token string">"用户表"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 主键ID
   */</span>
  <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"id"</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span>
  <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"id"</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 用户名称
   */</span>
  <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"姓名"</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 用户年龄
   */</span>
  <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"年龄"</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 用户性别
   */</span>
  <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"性别"</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> gender<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 用户密码
   */</span>
  <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"密码"</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 用户邮箱
   */</span>
  <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"邮箱"</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>效果如下:</p>
<p><img src="@source/demo/image/image-20221126165547977.png" alt="image-20221126165547977" loading="lazy"></p>
<p><img src="@source/demo/image/image-20221126165634719.png" alt="image-20221126165634719" loading="lazy"></p>
</div></template>


