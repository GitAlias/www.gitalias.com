<svelte:head>
    <title>git mncnf | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-mncnf">git mncnf</h1>
<h2 id="merge-with-no-autocommit-and-with-no-fast-forward">Merge with no
autocommit, and with no fast-forward</h2>
<p>Git alias:</p>
<pre class="git"><code>mncnf = merge --no-commit --no-ff</code></pre>
<p>Example:</p>
<pre class="shell"><code>git mncnf</code></pre>
<p>This does a merge, but without autocommit, and with a commit even if
the merge resolves as a fast-forward.</p>

</div>
