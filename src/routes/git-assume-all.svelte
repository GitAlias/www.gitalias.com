<svelte:head>
    <title>git assume-all | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-assume-all">git assume-all</h1>
<h2 id="assume-all-files-are-unchanged">Assume all files are
unchanged</h2>
<p>Git alias:</p>
<pre class="git"><code>assume-all = &quot;!git st -s | awk &lbrace;&#39;print $2&#39;&rbrace; | xargs git assume&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git assume-all</code></pre>
<p>To see how this works, see <a
href="../git-assume-and-git-unassume">git assume-* &amp; git
unassume-*</a></p>

</div>
