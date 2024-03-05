import{_ as s,o as a,c as n,N as l}from"./chunks/framework.8fabc3de.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/4.3-4.7小记.md"}'),p={name:"articles/4.3-4.7小记.md"},e=l(`<h2 id="_1-上传数据增加" tabindex="-1">1. 上传数据增加 <a class="header-anchor" href="#_1-上传数据增加" aria-label="Permalink to &quot;1. 上传数据增加&quot;">​</a></h2><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">ApiOperation</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">上传数据</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">PostMapping</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/uploadFile</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">OperatorLog</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">moduleName</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> Module</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">APPSTORE</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">businessName</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> EC</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">EMM_APPSTORE_BUSINESS_NAME_APPSTORE</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">businessDesc</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> EC</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">EMM_APPSTORE_BUSINESS_DESC_EXTERNAL_APPLICATION_UPLOAD</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">R</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">uploadFile</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">AppUploadDTO</span><span style="color:#BABED8;"> dto</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> errorList </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> commonApplicationsUploadService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">excelImport</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">dto</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">errorList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isEmpty</span><span style="color:#89DDFF;">())</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> R</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 处理导入失败的数据</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> R</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">failed</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">部分数据导入失败，请查看错误列表</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">setData</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">errorList</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">excelImport</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">AppUploadDTO</span><span style="color:#BABED8;"> dto</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">excelImportForMultiLines</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">dto</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getExcelFile</span><span style="color:#89DDFF;">(),</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">excelImportForMultiLines</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Object</span><span style="color:#BABED8;"> file</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">int</span><span style="color:#BABED8;"> headNum</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">excelImport</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">file</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">500</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> headNum</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">Param</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">excelImport</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Object</span><span style="color:#BABED8;"> file</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">Param</span><span style="color:#BABED8;"> param</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">int</span><span style="color:#BABED8;"> batchSize</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">int</span><span style="color:#BABED8;"> headNumber</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">ImportExcelListener</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">T</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">Interface</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">Param</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> listener </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">ImportExcelListener</span><span style="color:#89DDFF;">&lt;&gt;(</span><span style="color:#82AAFF;">excelService</span><span style="color:#89DDFF;">(),</span><span style="color:#BABED8;"> param</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> batchSize</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">file </span><span style="color:#89DDFF;">instanceof</span><span style="color:#BABED8;"> File</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        ExcelUtils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fileCheck</span><span style="color:#89DDFF;">((</span><span style="color:#BABED8;">File</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> file</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">        EasyExcel</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">((</span><span style="color:#BABED8;">File</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> file</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">excelEntityType</span><span style="color:#89DDFF;">(),</span><span style="color:#BABED8;"> listener</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">sheet</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">headRowNumber</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">headNumber</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">doRead</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">file </span><span style="color:#89DDFF;">instanceof</span><span style="color:#BABED8;"> MultipartFile</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        ExcelUtils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fileCheck</span><span style="color:#89DDFF;">((</span><span style="color:#BABED8;">MultipartFile</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> file</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            EasyExcel</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">(((</span><span style="color:#BABED8;">MultipartFile</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> file</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">getInputStream</span><span style="color:#89DDFF;">(),</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">excelEntityType</span><span style="color:#89DDFF;">(),</span><span style="color:#BABED8;"> listener</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">sheet</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">headRowNumber</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">headNumber</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">doRead</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">IOException</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            e</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printStackTrace</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">RuntimeException</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The &#39;file&#39; parameter is incorrect! The Excel file object is not supported, Only support File or MutipartFile!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> listener</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getErrorList</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">这是一个excel导入的功能，我现在需要校验packageName、appName、osType是否为空，如果为空的话返回一条message，类似packageName为空，在CommonApplicationsUploadEntity多增加一个什么数据结构的字段好，然后在</span></span>
<span class="line"><span style="color:#babed8;">   excelDataCheck判断后set进入CommonApplicationsUploadEntity</span></span>
<span class="line"><span style="color:#babed8;">   </span></span>
<span class="line"><span style="color:#babed8;">   public class CommonApplicationsUploadEntity extends BaseEntity   implements Serializable{</span></span>
<span class="line"><span style="color:#babed8;">	private static final long serialVersionUID = 1L;</span></span>
<span class="line"><span style="color:#babed8;">    /**</span></span>
<span class="line"><span style="color:#babed8;">     * 包名</span></span>
<span class="line"><span style="color:#babed8;">     */</span></span>
<span class="line"><span style="color:#babed8;">    @TableField(updateStrategy = FieldStrategy.NOT_NULL)</span></span>
<span class="line"><span style="color:#babed8;">    @ExcelProperty(index = 0)</span></span>
<span class="line"><span style="color:#babed8;">	private String packageName;</span></span>
<span class="line"><span style="color:#babed8;">    /**</span></span>
<span class="line"><span style="color:#babed8;">     * 应用名称</span></span>
<span class="line"><span style="color:#babed8;">     */</span></span>
<span class="line"><span style="color:#babed8;">    @TableField(updateStrategy = FieldStrategy.NOT_NULL)</span></span>
<span class="line"><span style="color:#babed8;">    @ExcelProperty(index = 1)</span></span>
<span class="line"><span style="color:#babed8;">	private String appName;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    @TableField(updateStrategy = FieldStrategy.NOT_NULL)</span></span>
<span class="line"><span style="color:#babed8;">    @ExcelProperty(index = 2)</span></span>
<span class="line"><span style="color:#babed8;">    private String osType;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    /**</span></span>
<span class="line"><span style="color:#babed8;">     *应用签名</span></span>
<span class="line"><span style="color:#babed8;">     */</span></span>
<span class="line"><span style="color:#babed8;">    @TableField(updateStrategy = FieldStrategy.NOT_NULL)</span></span>
<span class="line"><span style="color:#babed8;">    @ExcelProperty(index = 3)</span></span>
<span class="line"><span style="color:#babed8;">    private String appSign;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    /**</span></span>
<span class="line"><span style="color:#babed8;">     *  应用sha256</span></span>
<span class="line"><span style="color:#babed8;">     */</span></span>
<span class="line"><span style="color:#babed8;">    @TableField(value = &quot;app_sha&quot;)</span></span>
<span class="line"><span style="color:#babed8;">    @ExcelProperty(index = 4)</span></span>
<span class="line"><span style="color:#babed8;">    private String appSha256;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    @TableField(updateStrategy = FieldStrategy.NOT_NULL)</span></span>
<span class="line"><span style="color:#babed8;">    private Long sort;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">   </span></span>
<span class="line"><span style="color:#babed8;">   @Override</span></span>
<span class="line"><span style="color:#babed8;">    public boolean excelDataCheck(CommonApplicationsUploadEntity entity) {</span></span>
<span class="line"><span style="color:#babed8;">        if (ObjectUtil.isEmpty(entity)||ObjectUtil.isEmpty(entity.getAppName())</span></span>
<span class="line"><span style="color:#babed8;">                ||checkOsType(entity.getOsType())||ObjectUtil.isEmpty(entity.getPackageName())){</span></span>
<span class="line"><span style="color:#babed8;">            LogUtils.error(log,&quot;External Application is Not Satisfiable,packageName:{},appName:{}&quot;,entity.getPackageName(),entity.getAppName());</span></span>
<span class="line"><span style="color:#babed8;">            return false;</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">        CommonApplicationsUploadEntity one = this.getOne(Wrappers.lambdaQuery(CommonApplicationsUploadEntity.class).eq(CommonApplicationsUploadEntity::getPackageName, entity.getPackageName()));</span></span>
<span class="line"><span style="color:#babed8;">        if (ObjectUtil.isNotEmpty(one)){</span></span>
<span class="line"><span style="color:#babed8;">            entity = BeanCopyUtils.copy(one,CommonApplicationsUploadEntity.class);</span></span>
<span class="line"><span style="color:#babed8;">            this.removeById(one);</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">        return true;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span></code></pre></div><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">CommonApplicationsUploadEntity</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">BaseEntity</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">implements</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Serializable</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 校验失败信息列表</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">private</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> checkFailMsgs</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">boolean</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">excelDataCheck</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">CommonApplicationsUploadEntity</span><span style="color:#BABED8;"> entity</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">boolean</span><span style="color:#BABED8;"> checkResult </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> checkFailMsgs </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">ArrayList</span><span style="color:#89DDFF;">&lt;&gt;();</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">ObjectUtil</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isEmpty</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">entity</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">||</span><span style="color:#BABED8;"> ObjectUtil</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isEmpty</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">entity</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAppName</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">||</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">checkOsType</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">entity</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getOsType</span><span style="color:#89DDFF;">())</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">||</span><span style="color:#BABED8;"> ObjectUtil</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isEmpty</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">entity</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPackageName</span><span style="color:#89DDFF;">()))</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C792EA;">String</span><span style="color:#BABED8;"> checkFailMsg </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">ObjectUtil</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isEmpty</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">entity</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPackageName</span><span style="color:#89DDFF;">()))</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            checkFailMsg </span><span style="color:#89DDFF;">+=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">packageName为空，</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">ObjectUtil</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isEmpty</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">entity</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAppName</span><span style="color:#89DDFF;">()))</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            checkFailMsg </span><span style="color:#89DDFF;">+=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">appName为空，</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">checkOsType</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">entity</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getOsType</span><span style="color:#89DDFF;">()))</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            checkFailMsg </span><span style="color:#89DDFF;">+=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">osType为空或不合法，</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">        checkFailMsgs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">checkFailMsg</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">substring</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> checkFailMsg</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">length</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#BABED8;">        checkResult </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">false;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">CommonApplicationsUploadEntity</span><span style="color:#BABED8;"> one </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">getOne</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">Wrappers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lambdaQuery</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">CommonApplicationsUploadEntity</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">class</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">eq</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">CommonApplicationsUploadEntity</span><span style="color:#89DDFF;font-style:italic;">::</span><span style="color:#BABED8;">getPackageName</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> entity</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPackageName</span><span style="color:#89DDFF;">()));</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">ObjectUtil</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isNotEmpty</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">one</span><span style="color:#89DDFF;">))</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        entity </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> BeanCopyUtils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">copy</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">one</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> CommonApplicationsUploadEntity</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">class</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">removeById</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">one</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    entity</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCheckFailMsgs</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">checkFailMsgs</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> checkResult</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">@Data</span></span>
<span class="line"><span style="color:#babed8;">public class ApplicationUploadDTO {</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    private static final long serialVersionUID = 1L;</span></span>
<span class="line"><span style="color:#babed8;">    /**</span></span>
<span class="line"><span style="color:#babed8;">     * 包名</span></span>
<span class="line"><span style="color:#babed8;">     */</span></span>
<span class="line"><span style="color:#babed8;">    private String packageName;</span></span>
<span class="line"><span style="color:#babed8;">    /**</span></span>
<span class="line"><span style="color:#babed8;">     * 应用名称</span></span>
<span class="line"><span style="color:#babed8;">     */</span></span>
<span class="line"><span style="color:#babed8;">    private String appName;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    private String osType;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    /**</span></span>
<span class="line"><span style="color:#babed8;">     *应用签名</span></span>
<span class="line"><span style="color:#babed8;">     */</span></span>
<span class="line"><span style="color:#babed8;">    private String appSign;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    /**</span></span>
<span class="line"><span style="color:#babed8;">     *  应用sha256</span></span>
<span class="line"><span style="color:#babed8;">     */</span></span>
<span class="line"><span style="color:#babed8;">    private String appSha256;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    private Long sort;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    /**</span></span>
<span class="line"><span style="color:#babed8;">     * 校验失败信息列表</span></span>
<span class="line"><span style="color:#babed8;">     */</span></span>
<span class="line"><span style="color:#babed8;">    private List&lt;String&gt; checkFailMsgs;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">@Override</span></span>
<span class="line"><span style="color:#babed8;">    public boolean excelDataCheck(CommonApplicationsUploadEntity entity) {</span></span>
<span class="line"><span style="color:#babed8;">        boolean checkResult = true;</span></span>
<span class="line"><span style="color:#babed8;">        List&lt;String&gt; checkFailMsgs = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#babed8;">        if (ObjectUtil.isEmpty(entity) || ObjectUtil.isEmpty(entity.getAppName())</span></span>
<span class="line"><span style="color:#babed8;">                || checkOsType(entity.getOsType()) || ObjectUtil.isEmpty(entity.getPackageName())) {</span></span>
<span class="line"><span style="color:#babed8;">            String checkFailMsg = &quot;&quot;;</span></span>
<span class="line"><span style="color:#babed8;">            if (ObjectUtil.isEmpty(entity.getPackageName())) {</span></span>
<span class="line"><span style="color:#babed8;">                checkFailMsg += &quot;packageName为空，&quot;;</span></span>
<span class="line"><span style="color:#babed8;">            }</span></span>
<span class="line"><span style="color:#babed8;">            if (ObjectUtil.isEmpty(entity.getAppName())) {</span></span>
<span class="line"><span style="color:#babed8;">                checkFailMsg += &quot;appName为空，&quot;;</span></span>
<span class="line"><span style="color:#babed8;">            }</span></span>
<span class="line"><span style="color:#babed8;">            if (checkOsType(entity.getOsType())) {</span></span>
<span class="line"><span style="color:#babed8;">                checkFailMsg += &quot;osType为空或不合法，&quot;;</span></span>
<span class="line"><span style="color:#babed8;">            }</span></span>
<span class="line"><span style="color:#babed8;">            checkFailMsgs.add(checkFailMsg.substring(0, checkFailMsg.length() - 1));</span></span>
<span class="line"><span style="color:#babed8;">            checkResult = false;</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">        CommonApplicationsUploadEntity one = this.getOne(Wrappers.lambdaQuery(CommonApplicationsUploadEntity.class).eq(CommonApplicationsUploadEntity::getPackageName, entity.getPackageName()));</span></span>
<span class="line"><span style="color:#babed8;">        if (ObjectUtil.isNotEmpty(one)) {</span></span>
<span class="line"><span style="color:#babed8;">            entity = BeanCopyUtils.copy(one, CommonApplicationsUploadEntity.class);</span></span>
<span class="line"><span style="color:#babed8;">            this.removeById(one);</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">        entity.setCheckFailMsgs(checkFailMsgs);</span></span>
<span class="line"><span style="color:#babed8;">        return checkResult;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">@Override</span></span>
<span class="line"><span style="color:#babed8;">    public List&lt;ApplicationUploadDTO&gt; excelImport(AppUploadDTO dto) {</span></span>
<span class="line"><span style="color:#babed8;">        List&lt;CommonApplicationsUploadEntity&gt; commonApplicationsUploadEntities = null;</span></span>
<span class="line"><span style="color:#babed8;">        List&lt;ApplicationUploadDTO&gt; applicationUploadDTOs = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">        try{</span></span>
<span class="line"><span style="color:#babed8;">//            this.excelImportForMultiLines(dto.getExcelFile(), 2);</span></span>
<span class="line"><span style="color:#babed8;">            commonApplicationsUploadEntities = this.excelImport(dto.getExcelFile(), (Object) null, 500, 2);</span></span>
<span class="line"><span style="color:#babed8;">            applicationUploadDTOs = BeanCopyUtils.copyList(commonApplicationsUploadEntities, ApplicationUploadDTO.class);</span></span>
<span class="line"><span style="color:#babed8;">        }catch (ExcelDataConvertException e){</span></span>
<span class="line"><span style="color:#babed8;">            if (e.getCellData() != null){</span></span>
<span class="line"><span style="color:#babed8;">                LogUtils.error(log,&quot;Excel Data Format ERROR! FormulaData:{},NumberValue:{},column:{},row:{}&quot;,</span></span>
<span class="line"><span style="color:#babed8;">                        e.getCellData().getFormulaData(),e.getCellData().getNumberValue(),e.getColumnIndex(),e.getRowIndex());</span></span>
<span class="line"><span style="color:#babed8;">            }</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">        return applicationUploadDTOs;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">/**</span></span>
<span class="line"><span style="color:#babed8;">     * 校验失败信息列表</span></span>
<span class="line"><span style="color:#babed8;">     */</span></span>
<span class="line"><span style="color:#babed8;">    @TableField(exist = false)</span></span>
<span class="line"><span style="color:#babed8;">    private List&lt;String&gt; checkFailMsgs;</span></span></code></pre></div><h2 id="_2-文件下发权限" tabindex="-1">2. 文件下发权限 <a class="header-anchor" href="#_2-文件下发权限" aria-label="Permalink to &quot;2. 文件下发权限&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">/api/emm-config/admin/configStrategy/mail/getConfigDetail</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">原因定位：</span></span></code></pre></div><p>原因定位：新增下发配置时所属部门与所属设备部门未插入 修复方案：新增时插入用户所属部门与所示设备部门 测试建议：可在184进行验证，租户管理员新增用户部门和设备部门的数据权限均为A的子管理员A，新增下发配置“1”，租户管理员更改子管理员A的用户部门和设备部门的数据权限均为B，子管理员A登录管理平台查看下发配置查询不到旧数据“1”</p><p>原因定位：新增下发配置时所属部门与所属设备部门未插入、设备部门字段注释未返回 修复方案：新增时插入用户所属部门与所示设备部门、返回设备部门字段 测试建议：可在184进行验证，登录管理台、新增下发配置、点击“详情”查看数据归属</p><h2 id="_3-配置文件" tabindex="-1">3. 配置文件 <a class="header-anchor" href="#_3-配置文件" aria-label="Permalink to &quot;3. 配置文件&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">api/emm-strategy/admin/deviceConfigFile/page</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">设备配置</span></span>
<span class="line"><span style="color:#babed8;">api/emm-strategy/admin/deviceConfigFile/getConfigItem</span></span></code></pre></div><p>加权限</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">设备注册日志</span></span>
<span class="line"><span style="color:#babed8;">api/emm-audit/admin/deviceregister/page --- 加了</span></span>
<span class="line"><span style="color:#babed8;">注销</span></span>
<span class="line"><span style="color:#babed8;">api/emm-audit/admin/deviceLogout/page --- 加了</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">设备审核日志</span></span>
<span class="line"><span style="color:#babed8;">api/emm-base/admin/deviceAuditLog/page --- 加了</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">设备上下线日志</span></span>
<span class="line"><span style="color:#babed8;">api/emm-base/admin/deviceonlineofflinelog/page --- 加了</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">设备推送指令日志</span></span>
<span class="line"><span style="color:#babed8;">api/emm-command/admin/logeDetail/page --- 加了</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">设备状态变更日志</span></span>
<span class="line"><span style="color:#babed8;">/api/emm-base/admin/deviceStatusChangeLog/page -- 加了 --- 已提交1.3</span></span></code></pre></div><h2 id="_4-e" tabindex="-1">4. e <a class="header-anchor" href="#_4-e" aria-label="Permalink to &quot;4. e&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">api/emm-strategy/admin/strategy/saveOrUpdate</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">/api/emm-strategy/admin/deviceConfigFile/getConfigItem</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">api/emm-strategy/admin/deviceConfigFileDetail/detail</span></span></code></pre></div><h2 id="_5-beyond字段" tabindex="-1">5. beyond字段 <a class="header-anchor" href="#_5-beyond字段" aria-label="Permalink to &quot;5. beyond字段&quot;">​</a></h2><p>设备账户维护新增、编辑</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">api/emm-base/admin/user/getDevUserListWithDept</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">/api/emm-base/admin/user/saveDevAccount</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">AndroidPasswordConfig=Password Configuration</span></span>
<span class="line"><span style="color:#babed8;">AndroidDeviceRestrictionsConfig=Device Restrictions</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">AndroidPasswordConfig=密码配置</span></span>
<span class="line"><span style="color:#babed8;">AndroidDeviceRestrictionsConfig=设备限制配置</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sysadmin-7QR89N</span></span></code></pre></div><h2 id="_6-bug-【27环境】在设备帐户列表新增的数据与用户帐户新增的数据有冲突" tabindex="-1">6. bug 【27环境】在设备帐户列表新增的数据与用户帐户新增的数据有冲突 <a class="header-anchor" href="#_6-bug-【27环境】在设备帐户列表新增的数据与用户帐户新增的数据有冲突" aria-label="Permalink to &quot;6. bug 【27环境】在设备帐户列表新增的数据与用户帐户新增的数据有冲突&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">查询</span></span>
<span class="line"><span style="color:#babed8;">/api/emm-base/admin/user/getDevUserListWithDept</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">设备账户维护添加</span></span>
<span class="line"><span style="color:#babed8;">/api/emm-base/admin/user/saveDevAccount</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">用户账户维护保存</span></span>
<span class="line"><span style="color:#babed8;">/api/emm-base/admin/user/save</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">/api/emm-base/admin/user/getUserWithDept</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">UserEntity entity = getUserByUserNameWithLogicDelete(admin.getTenantId(), deviceAccountDTO.getUserName());</span></span></code></pre></div><p>原因定位：设备模式拆分，按条件搜索设备模式失败 修复方案：添加设备模式条件查询 测试建议：可在184进行验证，登录管理台、设备列表、按条件搜索设备模式</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">UserEntity getUserByUserNameWithLogicDelete(String tenantId, String userName, Integer userType);</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">@Override</span></span>
<span class="line"><span style="color:#babed8;">    public UserEntity getUserByUserNameWithLogicDelete(String tenantId, String userName, Integer userType) {</span></span>
<span class="line"><span style="color:#babed8;">        return this.getOne(Wrappers.&lt;UserEntity&gt;lambdaQuery()</span></span>
<span class="line"><span style="color:#babed8;">                .eq(UserEntity::getTenantId, tenantId)</span></span>
<span class="line"><span style="color:#babed8;">                .eq(UserEntity::getUserName, userName)</span></span>
<span class="line"><span style="color:#babed8;">                .eq(UserEntity::getUserType, userType)</span></span>
<span class="line"><span style="color:#babed8;">        );</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span></code></pre></div><p>原因定位：在设备帐户列表新增的数据与用户帐户新增的数据有冲突 修复方案：修改设备帐户列表新增和用户帐户新增的重复校验添加userType 测试建议：可在182进行验证，登录管理台、在设备帐户维护新增设备账户A、在用户帐户维护新增用户账户A</p><p>原因定位：需要加数据权限 修复方案：添加数据权限 测试建议：可在184进行验证</p><h2 id="_7-bug-【27】发布策略时-操作日志的操作明细缺少-策略模版名称" tabindex="-1">7. bug 【27】发布策略时，操作日志的操作明细缺少[策略模版名称] <a class="header-anchor" href="#_7-bug-【27】发布策略时-操作日志的操作明细缺少-策略模版名称" aria-label="Permalink to &quot;7. bug 【27】发布策略时，操作日志的操作明细缺少[策略模版名称]&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">/api/emm-strategy/admin/modelInfo/releaseSave</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">.addHead(&quot;modelName&quot;, modelInfoEntity.getModelName())</span></span>
<span class="line"><span style="color:#babed8;">                </span></span>
<span class="line"><span style="color:#babed8;">                </span></span>
<span class="line"><span style="color:#babed8;">                .add(&quot;modelName&quot;, &quot;emm-strategy-modelName&quot;);</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">api/emm-config/admin/WiFiConfigStrategy/wifi/updateConfig</span></span></code></pre></div><p>原因定位：发布策略时，操作日志的操作明细缺少[策略模版名称] 修复方案：发布策略时，日志生产添加[策略模版名称] 测试建议：可在182进行验证</p><p>原因定位：更改配置状态时，操作日志的操作明细缺少[配置名称] 修复方案：发布策略时，日志生产添加[配置名称] 测试建议：可在182进行验证</p><h2 id="_8-设备列表增加设备型号devicemodel-导出列表文件需要增加devicemodel列" tabindex="-1">8. 设备列表增加设备型号deviceModel, 导出列表文件需要增加deviceModel列； <a class="header-anchor" href="#_8-设备列表增加设备型号devicemodel-导出列表文件需要增加devicemodel列" aria-label="Permalink to &quot;8. 设备列表增加设备型号deviceModel,  导出列表文件需要增加deviceModel列；&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">admin/deviceInfo</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="_9-设备账户维护—导出设备账户表格没有-设备所有权-字段" tabindex="-1">9. 设备账户维护—导出设备账户表格没有“设备所有权”字段 <a class="header-anchor" href="#_9-设备账户维护—导出设备账户表格没有-设备所有权-字段" aria-label="Permalink to &quot;9. 设备账户维护—导出设备账户表格没有“设备所有权”字段&quot;">​</a></h2><p>原因定位：导出需要添加设备所有权字段 修复方案：添加设备所有权 测试建议：可在184进行验证</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">/api/emm-base/admin/user/deviceAccount/export</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">写一个BelongTypeEnum枚举，有3种类型, 0-属性未知-Unknown 1-个人所有-Personally Owned 2-公司所有-Company Owned</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">仿照下面的枚举</span></span>
<span class="line"><span style="color:#babed8;">public enum ReleaseListTypeEnum {</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 否</span></span>
<span class="line"><span style="color:#babed8;">    NOT_RELEASED(0, &quot;未发布&quot;, &quot;Unpublished&quot;),</span></span>
<span class="line"><span style="color:#babed8;">    // 是</span></span>
<span class="line"><span style="color:#babed8;">    RELEASED(1, &quot;已发布&quot;, &quot;Published&quot;),</span></span>
<span class="line"><span style="color:#babed8;">    // 正在发布</span></span>
<span class="line"><span style="color:#babed8;">    IN_RELEASE(-1, &quot;正在发布&quot;, &quot;publishing&quot;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    private final int code;</span></span>
<span class="line"><span style="color:#babed8;">    private final String name;</span></span>
<span class="line"><span style="color:#babed8;">    private final String euName;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    ReleaseListTypeEnum(int code, String name, String euName) {</span></span>
<span class="line"><span style="color:#babed8;">        this.code = code;</span></span>
<span class="line"><span style="color:#babed8;">        this.name = name;</span></span>
<span class="line"><span style="color:#babed8;">        this.euName = euName;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    public int getCode() {</span></span>
<span class="line"><span style="color:#babed8;">        return code;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    public String getName() {</span></span>
<span class="line"><span style="color:#babed8;">        return name;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    public String getEuName() {</span></span>
<span class="line"><span style="color:#babed8;">        return euName;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    public static String getEuName(int code) {</span></span>
<span class="line"><span style="color:#babed8;">        for (ReleaseListTypeEnum statusEnum : values()) {</span></span>
<span class="line"><span style="color:#babed8;">            if (code == statusEnum.code) {</span></span>
<span class="line"><span style="color:#babed8;">                if (RequestContextTraceUtils.getLocale().equals(Locale.CHINA)) {</span></span>
<span class="line"><span style="color:#babed8;">                    return statusEnum.name;</span></span>
<span class="line"><span style="color:#babed8;">                } else {</span></span>
<span class="line"><span style="color:#babed8;">                    return statusEnum.euName;</span></span>
<span class="line"><span style="color:#babed8;">                }</span></span>
<span class="line"><span style="color:#babed8;">            }</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">        return &quot;undefined&quot;;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    public static String getName(int code) {</span></span>
<span class="line"><span style="color:#babed8;">        for (ReleaseListTypeEnum statusEnum : values()) {</span></span>
<span class="line"><span style="color:#babed8;">            if (code == statusEnum.code) {</span></span>
<span class="line"><span style="color:#babed8;">                if (RequestContextTraceUtils.getLocale().equals(Locale.CHINA)) {</span></span>
<span class="line"><span style="color:#babed8;">                    return statusEnum.name;</span></span>
<span class="line"><span style="color:#babed8;">                } else {</span></span>
<span class="line"><span style="color:#babed8;">                    return statusEnum.euName;</span></span>
<span class="line"><span style="color:#babed8;">                }</span></span>
<span class="line"><span style="color:#babed8;">            }</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">        return &quot;undefined&quot;;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">}</span></span></code></pre></div>`,50),o=[e];function t(c,r,i,y,D,F){return a(),n("div",null,o)}const B=s(p,[["render",t]]);export{d as __pageData,B as default};
