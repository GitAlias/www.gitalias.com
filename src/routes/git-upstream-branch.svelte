<svelte:head>
    <title>git upstream-branch | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-upstream-branch">git upstream-branch</h1>
<h2 id="get-the-upstream-branch-name">Get the upstream branch name</h2>
<p>Git alias:</p>
<pre class="git"><code>upstream-branch = !git for-each-ref --format=&#39;%(upstream:short)&#39; $(git symbolic-ref -q HEAD)</code></pre>
<p>Example:</p>
<pre class="shell"><code>git upstream-branch
origin/main</code></pre>
<p>Compare:</p>
<ul>
<li><p><a href="../git-current-branch">git current-branch</a> - Get the
current branch name</p></li>
<li><p><a href="../git-upstream-branch">git upstream-branch</a> - Get
the upstream branch name (this alias)</p></li>
</ul>

</div>
