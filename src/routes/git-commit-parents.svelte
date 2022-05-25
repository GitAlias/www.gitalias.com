<svelte:head>
    <title>git commit-parents | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-commit-parents">git commit-parents</h1>
<h2 id="show-the-commits-parents">Show the commit’s parents</h2>
<p>Git alias:</p>
<pre class="git"><code>commit-parents = !&quot;f()&lbrace; \
    git cat-file -p \&quot;$&lbrace;*:-HEAD&rbrace;\&quot; | \
    sed -n &#39;/0/,/^ *$/&lbrace;/^parent /p&rbrace;&#39;; \
&rbrace;;f&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git commit-parents</code></pre>

</div>
