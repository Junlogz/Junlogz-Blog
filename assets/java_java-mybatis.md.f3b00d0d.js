import{_ as s,c as a,o as n,N as l}from"./chunks/framework.0799945b.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"java/java-mybatis.md"}'),e={name:"java/java-mybatis.md"},t=l(`<h2 id="_1-1-什么是mybatis" tabindex="-1">1.1.什么是Mybatis？ <a class="header-anchor" href="#_1-1-什么是mybatis" aria-label="Permalink to &quot;1.1.什么是Mybatis？&quot;">​</a></h2><ol><li>Mybatis是一个半ORM（对象关系映射）框架，它内部封装了JDBC，开发时只需要关注SQL语句本身，不需要花费精力去处理加载驱动、创建连接、创建statement等繁杂的过程。程序员直接编写原生态sql，可以严格控制sql执行性能，灵活度高。</li><li>MyBatis可以使用XML或注解来配置和映射原生信息，将POJO映射成数据库中的记录，避免了几乎所有的JDBC代码和手动设置参数以及获取结果集。</li><li>通过xml文件或注解的方式将要执行的各种statement配置起来，并通过java对象和statement中sql的动态参数进行映射生成最终执行的sql语句，最后由mybatis框架执行sql并将结果映射为java对象并返回。（从执行sql到返回result的过程）。</li></ol><h2 id="_1-2-mybatis的优点" tabindex="-1">1.2.MyBatis的优点 <a class="header-anchor" href="#_1-2-mybatis的优点" aria-label="Permalink to &quot;1.2.MyBatis的优点&quot;">​</a></h2><ol><li>基于SQL语句编程，相当灵活，不会对应用程序或者数据库的现有设计造成任何影响，SQL写在XML里，解除sql与程序代码的耦合，便于统一管理；提供XML标签，支持编写动态SQL语句，并可重用。</li><li>与JDBC相比，减少了50%以上的代码量，消除了JDBC大量冗余的代码，不需要手动开关连接；</li><li>很好的与各种数据库兼容（因为MyBatis使用JDBC来连接数据库，所以只要JDBC支持的数据库MyBatis都支持）。</li><li>能够与Spring很好的集成；</li><li>提供映射标签，支持对象与数据库的ORM字段关系映射；提供对象关系映射标签，支持对象关系组件维护。</li></ol><h2 id="_1-3-mybatis框架的缺点" tabindex="-1">1.3.MyBatis框架的缺点 <a class="header-anchor" href="#_1-3-mybatis框架的缺点" aria-label="Permalink to &quot;1.3.MyBatis框架的缺点&quot;">​</a></h2><ol><li>SQL语句的编写工作量较大，尤其当字段多、关联表多时，对开发人员编写SQL语句的功底有一定要求。</li><li>SQL语句依赖于数据库，导致数据库移植性差，不能随意更换数据库。</li></ol><h2 id="_1-4-mybatis框架适用场合" tabindex="-1">1.4.MyBatis框架适用场合 <a class="header-anchor" href="#_1-4-mybatis框架适用场合" aria-label="Permalink to &quot;1.4.MyBatis框架适用场合&quot;">​</a></h2><ol><li>MyBatis专注于SQL本身，是一个足够灵活的DAO层解决方案。</li><li>对性能的要求很高，或者需求变化较多的项目，如互联网项目，MyBatis将是不错的选择</li></ol><h2 id="_1-5-mybatis与hibernate有哪些不同" tabindex="-1">1.5.MyBatis与Hibernate有哪些不同？ <a class="header-anchor" href="#_1-5-mybatis与hibernate有哪些不同" aria-label="Permalink to &quot;1.5.MyBatis与Hibernate有哪些不同？&quot;">​</a></h2><ul><li>1.Hibernate是全自动，而MyBatis是半自动 [简单理解]</li></ul><p>Hibernate完全可以通过对象关系模型实现对数据库的操作，拥有完整的JavaBean对象与数据库的映射结构来自动生成SQL语句。而MyBatis仅有基本的字段映射，对象数据以及对象实际关系仍然需要通过定制SQL语句来实现和管理。</p><ul><li>2.Hibernate数据库移植性远大于MyBatis。</li></ul><p>Hibernate通过它强大的映射结构和hql语言，大大降低了对象与数据库（<a href="https://link.jianshu.com?t=http://lib.csdn.net/base/oracle" target="_blank" rel="noreferrer">Oracle</a>、<a href="https://link.jianshu.com?t=http://lib.csdn.net/base/mysql" target="_blank" rel="noreferrer">MySQL</a>等）的耦合性，而MyBatis由于需要手写sql，因此与数据库的耦合性直接取决于程序员写SQL的方法，如果SQL不具通用性而用了很多某数据库特性的sql语句的话，移植性也会随之降低很多，成本很高。</p><ul><li>3.Hibernate拥有完整的日志系统，MyBatis则欠缺一些。</li></ul><p>Hibernate日志系统非常健全，涉及广泛，包括：SQL记录、关系异常、优化警告、缓存提示、脏数据警告等；而MyBatis则除了基本记录功能外，功能薄弱很多。</p><ul><li>4.SQL直接优化上，MyBatis要比Hibernate方便很多</li></ul><p>由于MyBatis的sql都是写在xml里，因此优化sql比Hibernate方便很多。而Hibernate的sql很多都是自动生成的，无法直接维护sql；虽有hql，但功能还是不及sql强大，见到报表等变态需求时，hql也歇菜，也就是说hql是有局限的；hibernate虽然也支持原生sql，但开发模式上却与orm不同，需要转换思维，因此使用上不是非常方便。总之写sql的灵活度上Hibernate不及MyBatis。</p><p>安全性，Hibernate是预编译的，MyBatis可能存在SQL注入问题，另外使用Hibernate对数据库类型进行切换时，成本明显低于MyBatis</p><h2 id="_1-6-和-的区别是什么" tabindex="-1">1.6.#{}和\${}的区别是什么？ <a class="header-anchor" href="#_1-6-和-的区别是什么" aria-label="Permalink to &quot;1.6.#{}和\${}的区别是什么？&quot;">​</a></h2><ol><li>#{}是预编译处理，\${}是字符串替换。</li><li>Mybatis在处理#{}时，会将sql中的#{}替换为？号，调用PreparedStatement的set方法来赋值；</li><li>Mybatis在处理\${}时，就是把\${}替换成变量的值。</li><li>使用#{}可以有效的防止SQL注入，提高系统安全性。</li></ol><h2 id="_1-7-当实体类中的属性名和表中的字段名不一样-怎么办" tabindex="-1">1.7.当实体类中的属性名和表中的字段名不一样，怎么办？ <a class="header-anchor" href="#_1-7-当实体类中的属性名和表中的字段名不一样-怎么办" aria-label="Permalink to &quot;1.7.当实体类中的属性名和表中的字段名不一样，怎么办？&quot;">​</a></h2><p>第1种：通过在查询的sql语句中定义字段名的别名，让字段名的别名和实体类的属性名一致</p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">selectid</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">selectorder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">parametertype=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">int</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">resultetype=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">net.chenqiong.shop.order</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">selectorder_idid,order_noorderno,order_pricepriceformorderswhereorder_id=#{id};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>第2种：通过来映射字段名和实体类属性名的一一对应的关系。</p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">selectid</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">getOrder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">parameterType=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">int</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">resultMap=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">orderresultmap</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">select*fromorderswhereorder_id=#{id}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">resultMaptype</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">net.chenqiong.shop.order</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">id=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">orderresultmap</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!–用id属性来映射主键字段–&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">idproperty</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">column=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">order_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!–用result属性来映射非主键字段，property为实体类属性名，column为数据表中的属性–&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">resultproperty</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">orderno</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">column=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">order_no</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">resultproperty</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">price</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">column=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">order_price</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">reslutMap</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="_1-8-模糊查询like语句该怎么写" tabindex="-1">1.8.模糊查询like语句该怎么写? <a class="header-anchor" href="#_1-8-模糊查询like语句该怎么写" aria-label="Permalink to &quot;1.8.模糊查询like语句该怎么写?&quot;">​</a></h2><p>第1种：在Java代码中添加sql通配符。</p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">stringwildcardname=&quot;%smi%&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">names=mapper.selectlike(wildcardname);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">selectid</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">selectlike</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">select*fromfoowherebarlike#{value}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>第2种：在sql语句中拼接通配符，会引起sql注入</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">stringwildcardname=&quot;smi&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">list&lt;name&gt;names=mapper.selectlike(wildcardname);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;selectid=&quot;selectlike&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">select*fromfoowherebarlike&quot;%&quot;#{value}&quot;%&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/select&gt;</span></span></code></pre></div><h2 id="_1-9-mapper接口的工作原理是什么-mapper接口里的方法-参数不同时-方法能重载吗" tabindex="-1">1.9.Mapper接口的工作原理是什么？Mapper接口里的方法，参数不同时，方法能重载吗？ <a class="header-anchor" href="#_1-9-mapper接口的工作原理是什么-mapper接口里的方法-参数不同时-方法能重载吗" aria-label="Permalink to &quot;1.9.Mapper接口的工作原理是什么？Mapper接口里的方法，参数不同时，方法能重载吗？&quot;">​</a></h2><p>Dao接口即Mapper接口。接口的全限名，就是映射文件中的namespace的值；接口的方法名，就是映射文件中Mapper的Statement的id值；接口方法内的参数，就是传递给sql的参数。</p><p>Mapper接口是没有实现类的，当调用接口方法时，接口全限名+方法名拼接字符串作为key值，可唯一定位一个MapperStatement。在Mybatis中，每一个<code>&lt;select&gt;、&lt;insert&gt;、&lt;update&gt;、&lt;delete&gt;</code>标签，都会被解析为一个MapperStatement对象。</p><p>举例：com.mybatis3.mappers.StudentDao.findStudentById，可以唯一找到namespace为com.mybatis3.mappers.StudentDao下面id为findStudentById的MapperStatement。</p><p>Mapper接口里的方法，是不能重载的，因为是使用全限名+方法名的保存和寻找策略。Mapper接口的工作原理是JDK动态代理，Mybatis运行时会使用JDK动态代理为Mapper接口生成代理对象proxy，代理对象会拦截接口方法，转而执行MapperStatement所代表的sql，然后将sql执行结果返回。</p><h2 id="_1-10-mybatis是如何进行分页的-分页插件的原理是什么" tabindex="-1">1.10.Mybatis是如何进行分页的？分页插件的原理是什么？ <a class="header-anchor" href="#_1-10-mybatis是如何进行分页的-分页插件的原理是什么" aria-label="Permalink to &quot;1.10.Mybatis是如何进行分页的？分页插件的原理是什么？&quot;">​</a></h2><p>Mybatis使用RowBounds对象进行分页，它是针对ResultSet结果集执行的内存分页，而非物理分页。可以在sql内直接书写带有物理分页的参数来完成物理分页功能，也可以使用分页插件来完成物理分页。</p><p>分页插件的基本原理是使用Mybatis提供的插件接口，实现自定义插件，在插件的拦截方法内拦截待执行的sql，然后重写sql，根据dialect方言，添加对应的物理分页语句和物理分页参数。</p><h2 id="_1-11-mybatis是如何将sql执行结果封装为目标对象并返回的-都有哪些映射形式" tabindex="-1">1.11.Mybatis是如何将sql执行结果封装为目标对象并返回的？都有哪些映射形式？ <a class="header-anchor" href="#_1-11-mybatis是如何将sql执行结果封装为目标对象并返回的-都有哪些映射形式" aria-label="Permalink to &quot;1.11.Mybatis是如何将sql执行结果封装为目标对象并返回的？都有哪些映射形式？&quot;">​</a></h2><p>第一种是使用标签，逐一定义数据库列名和对象属性名之间的映射关系。</p><p>第二种是使用sql列的别名功能，将列的别名书写为对象属性名。</p><p>有了列名与属性名的映射关系后，Mybatis通过反射创建对象，同时使用反射给对象的属性逐一赋值并返回，那些找不到映射关系的属性，是无法完成赋值的。</p><h2 id="_1-12-如何执行批量插入" tabindex="-1">1.12.如何执行批量插入? <a class="header-anchor" href="#_1-12-如何执行批量插入" aria-label="Permalink to &quot;1.12.如何执行批量插入?&quot;">​</a></h2><p>首先,创建一个简单的insert语句:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;insertid=&quot;insertname&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">insertintonames(name)values(#{value})</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/insert&gt;</span></span></code></pre></div><p>然后在java代码中像下面这样执行批处理插入:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">list&lt;string&gt;names=newarraylist();</span></span>
<span class="line"><span style="color:#A6ACCD;">names.add(&quot;fred&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">names.add(&quot;barney&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">names.add(&quot;betty&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">names.add(&quot;wilma&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">//注意这里executortype.batch</span></span>
<span class="line"><span style="color:#A6ACCD;">sqlsessionsqlsession=</span></span>
<span class="line"><span style="color:#A6ACCD;">sqlsessionfactory.opensession(executortype.batch);</span></span>
<span class="line"><span style="color:#A6ACCD;">try{</span></span>
<span class="line"><span style="color:#A6ACCD;">namemappermapper=sqlsession.getmapper(namemapper.class);</span></span>
<span class="line"><span style="color:#A6ACCD;">for(stringname:names){</span></span>
<span class="line"><span style="color:#A6ACCD;">mapper.insertname(name);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">sqlsession.commit();</span></span>
<span class="line"><span style="color:#A6ACCD;">}catch(Exceptione){</span></span>
<span class="line"><span style="color:#A6ACCD;">e.printStackTrace();</span></span>
<span class="line"><span style="color:#A6ACCD;">sqlSession.rollback();</span></span>
<span class="line"><span style="color:#A6ACCD;">}finally{</span></span>
<span class="line"><span style="color:#A6ACCD;">sqlsession.close();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="_1-13-如何获取自动生成的-主-键值" tabindex="-1">1.13.如何获取自动生成的(主)键值? <a class="header-anchor" href="#_1-13-如何获取自动生成的-主-键值" aria-label="Permalink to &quot;1.13.如何获取自动生成的(主)键值?&quot;">​</a></h2><p>insert方法总是返回一个int值，这个值代表的是插入的行数。</p><p>如果采用自增长策略，自动生成的键值在insert方法执行完后可以被设置到传入的参数对象中。</p><p>示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;insertid=&quot;insertname&quot;usegeneratedkeys=&quot;true&quot;keyproperty=&quot;id&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">insertintonames(name)values(#{name})</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/insert&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">namename=newname();</span></span>
<span class="line"><span style="color:#A6ACCD;">name.setname(&quot;fred&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">introws=mapper.insertname(name);</span></span>
<span class="line"><span style="color:#A6ACCD;">//完成后,id已经被设置到对象中</span></span>
<span class="line"><span style="color:#A6ACCD;">system.out.println(&quot;rowsinserted=&quot;+rows);</span></span>
<span class="line"><span style="color:#A6ACCD;">system.out.println(&quot;generatedkeyvalue=&quot;+name.getid());</span></span></code></pre></div><h2 id="_1-14-在mapper中如何传递多个参数" tabindex="-1">1.14.在mapper中如何传递多个参数? <a class="header-anchor" href="#_1-14-在mapper中如何传递多个参数" aria-label="Permalink to &quot;1.14.在mapper中如何传递多个参数?&quot;">​</a></h2><ol><li>第一种：</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">publicUserselectUser(Stringname,Stringarea);</span></span>
<span class="line"><span style="color:#A6ACCD;">对应的xml,#{0}代表接收的是dao层中的第一个参数，#{1}代表dao层中第二</span></span>
<span class="line"><span style="color:#A6ACCD;">参数，更多参数一致往后加即可。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;selectid=&quot;selectUser&quot;resultMap=&quot;BaseResultMap&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">select*fromuser_user_t</span></span>
<span class="line"><span style="color:#A6ACCD;">whereuser_name=#{0}</span></span>
<span class="line"><span style="color:#A6ACCD;">anduser_area=#{1}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/select&gt;</span></span></code></pre></div><ol><li>第二种：使用@param注解:</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">publicinterfaceusermapper{</span></span>
<span class="line"><span style="color:#A6ACCD;">userselectuser(@param(&quot;username&quot;)stringusername,@param(&quot;hashedpassword&quot;)stringhashedpassword);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>然后,就可以在xml像下面这样使用(推荐封装为一个map,作为单个参数传递给mapper)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;selectid=&quot;selectuser&quot;resulttype=&quot;user&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">selectid,username,hashedpassword</span></span>
<span class="line"><span style="color:#A6ACCD;">fromsome_table</span></span>
<span class="line"><span style="color:#A6ACCD;">whereusername=#{username}</span></span>
<span class="line"><span style="color:#A6ACCD;">andhashedpassword=#{hashedpassword}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/select&gt;</span></span></code></pre></div><ol><li><p>第三种：多个参数封装成map</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">try{</span></span>
<span class="line"><span style="color:#A6ACCD;">//映射文件的命名空间.SQL片段的ID，就可以调用对应的映射文件中的SQL</span></span>
<span class="line"><span style="color:#A6ACCD;">//由于我们的参数超过了两个，而方法中只有一个Object参数收集，因此</span></span>
<span class="line"><span style="color:#A6ACCD;">我们使用Map集合来装载我们的参数</span></span>
<span class="line"><span style="color:#A6ACCD;">Map&lt;String,Object&gt;map=newHashMap();</span></span>
<span class="line"><span style="color:#A6ACCD;">map.put(&quot;start&quot;,start);</span></span>
<span class="line"><span style="color:#A6ACCD;">map.put(&quot;end&quot;,end);</span></span>
<span class="line"><span style="color:#A6ACCD;">returnsqlSession.selectList(&quot;StudentID.pagination&quot;,map);</span></span>
<span class="line"><span style="color:#A6ACCD;">}catch(Exceptione){</span></span>
<span class="line"><span style="color:#A6ACCD;">e.printStackTrace();</span></span>
<span class="line"><span style="color:#A6ACCD;">sqlSession.rollback();</span></span>
<span class="line"><span style="color:#A6ACCD;">throwe;</span></span>
<span class="line"><span style="color:#A6ACCD;">}finally{</span></span>
<span class="line"><span style="color:#A6ACCD;">MybatisUtil.closeSqlSession();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li></ol><h2 id="_1-15-mybatis动态sql有什么用-执行原理-有哪些动态sql" tabindex="-1">1.15.Mybatis动态sql有什么用？执行原理？有哪些动态sql？ <a class="header-anchor" href="#_1-15-mybatis动态sql有什么用-执行原理-有哪些动态sql" aria-label="Permalink to &quot;1.15.Mybatis动态sql有什么用？执行原理？有哪些动态sql？&quot;">​</a></h2><p>Mybatis动态sql可以在Xml映射文件内，以标签的形式编写动态sql，执行原理是根据表达式的值完成逻辑判断并动态拼接sql的功能。</p><p>Mybatis提供了9种动态sql标签：trim|where|set|foreach|if|choose|when|otherwise|bind。</p><h2 id="_1-16-xml映射文件中-除了常见的select-insert-updae-delete标签之外-还有哪些标签" tabindex="-1">1.16.Xml映射文件中，除了常见的select|insert|updae|delete标签之外，还有哪些标签？ <a class="header-anchor" href="#_1-16-xml映射文件中-除了常见的select-insert-updae-delete标签之外-还有哪些标签" aria-label="Permalink to &quot;1.16.Xml映射文件中，除了常见的select|insert|updae|delete标签之外，还有哪些标签？&quot;">​</a></h2><p><code>&lt;resultMap&gt;、&lt;parameterMap&gt;、&lt;sql&gt;、&lt;include&gt;、&lt;selectKey&gt;</code>，加上动态sql的9个标签，其中为sql片段标签，通过标签引入sql片段，为不支持自增的主键生成策略标签。</p><h2 id="_1-17-mybatis的xml映射文件中-不同的xml映射文件-id是否可以重复" tabindex="-1">1.17.Mybatis的Xml映射文件中，不同的Xml映射文件，id是否可以重复？ <a class="header-anchor" href="#_1-17-mybatis的xml映射文件中-不同的xml映射文件-id是否可以重复" aria-label="Permalink to &quot;1.17.Mybatis的Xml映射文件中，不同的Xml映射文件，id是否可以重复？&quot;">​</a></h2><p>不同的Xml映射文件，如果配置了namespace，那么id可以重复；如果没有配置namespace，那么id不能重复；</p><p>原因就是namespace+id是作为Map的key使用的，如果没有namespace，就剩下id，那么，id重复会导致数据互相覆盖。有了namespace，自然id就可以重复，namespace不同，namespace+id自然也就不同。</p><h2 id="_1-18-为什么说mybatis是半自动orm映射工具-它与全自动的区别在哪里" tabindex="-1">1.18.为什么说Mybatis是半自动ORM映射工具？它与全自动的区别在哪里？ <a class="header-anchor" href="#_1-18-为什么说mybatis是半自动orm映射工具-它与全自动的区别在哪里" aria-label="Permalink to &quot;1.18.为什么说Mybatis是半自动ORM映射工具？它与全自动的区别在哪里？&quot;">​</a></h2><p>Hibernate属于全自动ORM映射工具，使用Hibernate查询关联对象或者关联集合对象时，可以根据对象关系模型直接获取，所以它是全自动的。而Mybatis在查询关联对象或关联集合对象时，需要手动编写sql来完成，所以，称之为半自动ORM映射工具。</p><h2 id="_1-19-一对一、一对多的关联查询" tabindex="-1">1.19.一对一、一对多的关联查询？ <a class="header-anchor" href="#_1-19-一对一、一对多的关联查询" aria-label="Permalink to &quot;1.19.一对一、一对多的关联查询？&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;mappernamespace=&quot;com.lcb.mapping.userMapper&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!--association一对一关联查询--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;selectid=&quot;getClass&quot;parameterType=&quot;int&quot;resultMap=&quot;ClassesResultMap&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">select*fromclassc,teachertwherec.teacher_id=t.t_idand</span></span>
<span class="line"><span style="color:#A6ACCD;">c.c_id=#{id}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/select&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;resultMaptype=&quot;com.lcb.user.Classes&quot;id=&quot;ClassesResultMap&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!--实体类的字段名和数据表的字段名映射--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;idproperty=&quot;id&quot;column=&quot;c_id&quot;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;resultproperty=&quot;name&quot;column=&quot;c_name&quot;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;associationproperty=&quot;teacher&quot;javaType=&quot;com.lcb.user.Teacher&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;idproperty=&quot;id&quot;column=&quot;t_id&quot;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;resultproperty=&quot;name&quot;column=&quot;t_name&quot;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/association&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/resultMap&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!--collection一对多关联查询--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;selectid=&quot;getClass2&quot;parameterType=&quot;int&quot;resultMap=&quot;ClassesResultMap2&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">select*fromclassc,teachert,studentswherec.teacher_id=t.t_id</span></span>
<span class="line"><span style="color:#A6ACCD;">andc.c_id=s.class_idandc.c_id=#{id}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/select&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;resultMaptype=&quot;com.lcb.user.Classes&quot;id=&quot;ClassesResultMap2&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;idproperty=&quot;id&quot;column=&quot;c_id&quot;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;resultproperty=&quot;name&quot;column=&quot;c_name&quot;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;associationproperty=&quot;teacher&quot;javaType=&quot;com.lcb.user.Teacher&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;idproperty=&quot;id&quot;column=&quot;t_id&quot;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;resultproperty=&quot;name&quot;column=&quot;t_name&quot;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/association&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;collectionproperty=&quot;student&quot;ofType=&quot;com.lcb.user.Student&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;idproperty=&quot;id&quot;column=&quot;s_id&quot;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;resultproperty=&quot;name&quot;column=&quot;s_name&quot;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/collection&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/resultMap&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/mapper&gt;</span></span></code></pre></div><h2 id="_1-20-mybatis实现一对一有几种方式-具体怎么操作的" tabindex="-1">1.20.MyBatis实现一对一有几种方式?具体怎么操作的？ <a class="header-anchor" href="#_1-20-mybatis实现一对一有几种方式-具体怎么操作的" aria-label="Permalink to &quot;1.20.MyBatis实现一对一有几种方式?具体怎么操作的？&quot;">​</a></h2><p>有联合查询和嵌套查询,联合查询是几个表联合查询,只查询一次,通过在resultMap里面配置association节点配置一对一的类就可以完成；</p><p>嵌套查询是先查一个表，根据这个表里面的结果的外键id，去再另外一个表里面查询数据,也是通过association配置，但另外一个表的查询通过select属性配置。</p><h2 id="_1-21-mybatis是否支持延迟加载-如果支持-它的实现原理是什么" tabindex="-1">1.21.Mybatis是否支持延迟加载？如果支持，它的实现原理是什么？ <a class="header-anchor" href="#_1-21-mybatis是否支持延迟加载-如果支持-它的实现原理是什么" aria-label="Permalink to &quot;1.21.Mybatis是否支持延迟加载？如果支持，它的实现原理是什么？&quot;">​</a></h2><p>Mybatis仅支持association关联对象和collection关联集合对象的延迟加载，association指的就是一对一，collection指的就是一对多查询。在Mybatis配置文件中，可以配置是否启用延迟加载lazyLoadingEnabled=true|false。</p><p>它的原理是，使用CGLIB创建目标对象的代理对象，当调用目标方法时，进入拦截器方法，比如调用a.getB().getName()，拦截器invoke()方法发现a.getB()是null值，那么就会单独发送事先保存好的查询关联B对象的sql，把B查询上来，然后调用a.setB(b)，于是a的对象b属性就有值了，接着完成a.getB().getName()方法的调用。这就是延迟加载的基本原理。</p><p>当然了，不光是Mybatis，几乎所有的包括Hibernate，支持延迟加载的原理都是一样的。</p><h2 id="_1-22-mybatis的一级、二级缓存" tabindex="-1">1.22.Mybatis的一级、二级缓存 <a class="header-anchor" href="#_1-22-mybatis的一级、二级缓存" aria-label="Permalink to &quot;1.22.Mybatis的一级、二级缓存&quot;">​</a></h2><ol><li>一级缓存:基于PerpetualCache的HashMap本地缓存，其存储作用域为Session，当Sessionflush或close之后，该Session中的所有Cache就将清空，默认打开一级缓存。</li><li>二级缓存与一级缓存其机制相同，默认也是采用PerpetualCache，HashMap存储，不同在于其存储作用域为Mapper(Namespace)，并且可自定义存储源，如Ehcache。默认不打开二级缓存，要开启二级缓存，使用二级缓存属性类需要实现Serializable序列化接口(可用来保存对象的状态),可在它的映射文件中配置；</li><li>对于缓存数据更新机制，当某一个作用域(一级缓存Session/二级缓存Namespaces)的进行了C/U/D操作后，默认该作用域下所有select中的缓存将被clear。</li></ol><h2 id="_1-23-什么是mybatis的接口绑定-有哪些实现方式" tabindex="-1">1.23.什么是MyBatis的接口绑定？有哪些实现方式？ <a class="header-anchor" href="#_1-23-什么是mybatis的接口绑定-有哪些实现方式" aria-label="Permalink to &quot;1.23.什么是MyBatis的接口绑定？有哪些实现方式？&quot;">​</a></h2><p>接口绑定，就是在MyBatis中任意定义接口,然后把接口里面的方法和SQL语句绑定,我们直接调用接口方法就可以,这样比起原来了SqlSession提供的方法我们可以有更加灵活的选择和设置。</p><p>接口绑定有两种实现方式,一种是通过注解绑定，就是在接口的方法上面加上@Select、@Update等注解，里面包含Sql语句来绑定；另外一种就是通过xml里面写SQL来绑定,在这种情况下,要指定xml映射文件里面的namespace必须为接口的全路径名。当Sql语句比较简单时候,用注解绑定,当SQL语句比较复杂时候,用xml绑定,一般用xml绑定的比较多。</p><h2 id="_1-24-使用mybatis的mapper接口调用时有哪些要求" tabindex="-1">1.24.使用MyBatis的mapper接口调用时有哪些要求？ <a class="header-anchor" href="#_1-24-使用mybatis的mapper接口调用时有哪些要求" aria-label="Permalink to &quot;1.24.使用MyBatis的mapper接口调用时有哪些要求？&quot;">​</a></h2><ol><li>Mapper接口方法名和mapper.xml中定义的每个sql的id相同；</li><li>Mapper接口方法的输入参数类型和mapper.xml中定义的每个sql的parameterType的类型相同；</li><li>Mapper接口方法的输出参数类型和mapper.xml中定义的每个sql的resultType的类型相同；</li><li>Mapper.xml文件中的namespace即是mapper接口的类路径。</li></ol><h2 id="_1-25-简述mybatis的插件运行原理-以及如何编写一个插件" tabindex="-1">1.25.简述Mybatis的插件运行原理，以及如何编写一个插件 <a class="header-anchor" href="#_1-25-简述mybatis的插件运行原理-以及如何编写一个插件" aria-label="Permalink to &quot;1.25.简述Mybatis的插件运行原理，以及如何编写一个插件&quot;">​</a></h2><p>答：Mybatis仅可以编写针对ParameterHandler、ResultSetHandler、StatementHandler、Executor这4种接口的插件，Mybatis使用JDK的动态代理，为需要拦截的接口生成代理对象以实现接口方法拦截功能，每当执行这4种接口对象的方法时，就会进入拦截方法，具体就是InvocationHandler的invoke()方法，当然，只会拦截那些你指定需要拦截的方法。</p><p>编写插件：实现Mybatis的Interceptor接口并复写intercept()方法，然后在给插件编写注解，指定要拦截哪一个接口的哪些方法即可，记住，别忘了在配置文件中配置你编写的插件。</p>`,89),p=[t];function o(r,i,c,y,u,d){return n(),a("div",null,p)}const D=s(e,[["render",o]]);export{C as __pageData,D as default};
