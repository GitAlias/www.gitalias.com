<svelte:head>
    <title>git wip | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-wip">git wip</h1>
<h2 id="alias-for-commit-work-in-progress">Alias for commit “work in
progress”</h2>
<p>Git alias:</p>
<pre class="git"><code>wip = !&quot;git add --all; git ls-files --deleted -z | xargs -0 git rm; git commit --message=wip&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git wip</code></pre>
<p>Compare:</p>
<ul>
<li><p><a href="../git-wip-git-unwip">git wip &amp; git unwip</a>
(overview)</p></li>
<li><p><a href="../git-wip">git wip</a> (this alias)</p></li>
<li><p><a href="../git-unwip">git unwip</a></p></li>
</ul>

</div>
