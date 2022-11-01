import{_ as u}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as m,d as k,a as n,b as s,e as a,w as e,r as i}from"./app.053021ae.js";const d="/assets/mybatis-logo.cc7ca07d.png",b="/assets/1.72e4749f.png",v={},g=n("p",null,"mybatis 的基本使用",-1),_=n("p",null,[n("img",{src:d,alt:"mybatis",loading:"lazy"})],-1),y={href:"https://mybatis.org/mybatis-3/zh/index.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/mybatis/mybatis-3",target:"_blank",rel:"noopener noreferrer"},w=n("p",null,"ORM（Object Relationship Mapping）对象关系映射。",-1),f=n("ul",null,[n("li",null,"对象：Java的实体类对象"),n("li",null,"关系：关系型数据库"),n("li",null,"映射：二者之间的对应关系")],-1),x=n("h3",{id:"mapper-接口与对应的-xml-文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mapper-接口与对应的-xml-文件","aria-hidden":"true"},"#"),s(" mapper 接口与对应的 xml 文件")],-1),j=n("blockquote",null,[n("p",null,"例子： 查询所有用户的信息")],-1),D=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(),n("span",{class:"token namespace"},[s("com"),n("span",{class:"token punctuation"},"."),s("mapper")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("com"),n("span",{class:"token punctuation"},"."),s("pojo"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"User")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"UserMapper"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 查询所有的用户信息
   * `),n("span",{class:"token keyword"},"@return"),s(` 所有的用户信息
   */`)]),s(`
   `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"User"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"getAllUser"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-xml line-numbers-mode","data-ext":"xml"},[n("pre",{class:"language-xml"},[n("code",null,[n("span",{class:"token prolog"},'<?xml version="1.0" encoding="UTF-8"?>'),s(`
`),n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"DOCTYPE"),s(),n("span",{class:"token name"},"mapper"),s(),n("span",{class:"token name"},"PUBLIC"),s(),n("span",{class:"token string"},'"-//mybatis.org//DTD Mapper 3.0//EN"'),s(),n("span",{class:"token string"},'"http://mybatis.org/dtd/mybatis-3-mapper.dtd"'),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("mapper")]),s(),n("span",{class:"token attr-name"},"namespace"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("com.mapper.UserMapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token comment"},"<!--  查询所有的用户信息  -->"),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("select")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getAllUser"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"resultType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("com.pojo.User"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    SELECT * FROM smbms.smbms_user;
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("select")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("mapper")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token comment"},"//  smbms_user 对应的 java 类 "),s(`
`),n("span",{class:"token keyword"},"package"),s(),n("span",{class:"token namespace"},[s("com"),n("span",{class:"token punctuation"},"."),s("pojo")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("lombok"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token operator"},"*")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("java"),n("span",{class:"token punctuation"},"."),s("io"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"Serializable")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("java"),n("span",{class:"token punctuation"},"."),s("time"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"LocalDateTime")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@author"),s(` HouDongDong
 * `),n("span",{class:"token keyword"},"@create"),s(` 2022/9/7 9:10
 */`)]),s(`
`),n("span",{class:"token annotation punctuation"},"@Data"),s(`
`),n("span",{class:"token annotation punctuation"},"@ToString"),s(`
`),n("span",{class:"token annotation punctuation"},"@AllArgsConstructor"),s(`
`),n("span",{class:"token annotation punctuation"},"@NoArgsConstructor"),s(`
`),n("span",{class:"token annotation punctuation"},"@EqualsAndHashCode"),n("span",{class:"token punctuation"},"("),s("callSuper "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"User"),s(),n("span",{class:"token keyword"},"implements"),s(),n("span",{class:"token class-name"},"Serializable"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token keyword"},"long"),s(" serialVersionUID "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1L"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token doc-comment comment"},`/**
   * 主键ID
   */`),s(`
  `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"Long"),s(" id"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token doc-comment comment"},`/**
   * 用户编码
   */`),s(`
  `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"String"),s(" userCode"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token doc-comment comment"},`/**
   * 用户名称
   */`),s(`
  `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"String"),s(" userName"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token doc-comment comment"},`/**
   * 用户密码
   */`),s(`
  `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"String"),s(" userPassword"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token doc-comment comment"},`/**
   * 更新时间
   */`),s(`
  `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"LocalDateTime"),s(" modifyDate"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("p",null,[n("img",{src:b,alt:"image-20221031213414074",loading:"lazy"})],-1);function L(A,S){const t=i("ExternalLinkIcon"),p=i("Tabs");return r(),m("div",null,[g,k(" more "),_,n("p",null,[s("【官网】"),n("a",y,[s("mybatis – MyBatis 3 | 官网"),a(t)])]),n("p",null,[s("【github】 "),n("a",h,[s("mybatis/mybatis-3: MyBatis SQL mapper framework for Java (github.com)"),a(t)])]),w,f,x,j,a(p,{id:"41",data:[{title:"java"},{title:"xml"},{title:"java"}]},{tab0:e(({title:l,value:o,isActive:c})=>[D]),tab1:e(({title:l,value:o,isActive:c})=>[T]),tab2:e(({title:l,value:o,isActive:c})=>[U]),_:1}),C])}const N=u(v,[["render",L],["__file","2.html.vue"]]);export{N as default};
