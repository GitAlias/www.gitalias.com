<svelte:head>
    <title>git graphviz | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-graphviz">git graphviz</h1>
<h2 id="use-graphviz-tool-for-display">Use graphviz tool for
display</h2>
<p>Git alias:</p>
<pre class="git"><code>graphviz = !&quot;f() &lbrace; \
    echo &#39;digraph git &lbrace;&#39; ; git log --pretty=&#39;format:  %h -&gt; &lbrace; %p &rbrace;&#39; \&quot;$@\&quot; | sed &#39;s/[0-9a-f][0-9a-f]*/\&quot;&amp;\&quot;/g&#39; ; echo &#39;&rbrace;&#39;; \
&rbrace;; f&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git graphviz</code></pre>
<p>This produces output that can be displayed using dotty.</p>
<p>Example:</p>
<pre class="shell"><code>git graphviz HEAD~100..HEAD~60 | dotty /dev/stdin

git graphviz --first-parent main | dotty /dev/stdin</code></pre>

</div>
