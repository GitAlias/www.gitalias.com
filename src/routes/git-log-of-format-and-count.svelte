<svelte:head>
    <title>git log-of-format-and-count | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-log-of-format-and-count">git log-of-format-and-count</h1>
<h2 id="show-log-with-a-custom-format-string-and-count">Show log with a
custom format string and count</h2>
<p>Git alias:</p>
<pre class="git"><code>log-of-format-and-count = &quot;!f() &lbrace; format=\&quot;$1\&quot;; shift; git log $@ --format=oneline --format=&quot;$format&quot; | awk &#39;&lbrace;a[$0]++&rbrace;END&lbrace;for(i in a)&lbrace;print i, a[i], int((a[i]/NR)*100) \&quot;%\&quot;&rbrace;&rbrace;&#39; | sort; &rbrace;; f&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git log-of-format-and-count &lt;format&gt;</code></pre>
<p>Compare <a href="../git-log-of-count-and-format">git
log-of-count-and-format</a>.</p>

</div>
