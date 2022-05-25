<svelte:head>
    <title>git unpublish | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-unpublish">git unpublish</h1>
<h2 id="unpublish-the-current-branch">Unpublish the current branch</h2>
<p>Git alias:</p>
<pre class="git"><code>unpublish = !&quot;git push origin :$(git current-branch)&quot;</code></pre>
<p>Unpublish the current branch by deleting the remote version of the
current branch.</p>
<p>Example:</p>
<pre class="shell"><code>git unpublish</code></pre>
<p>Compare:</p>
<ul>
<li><p><a href="../git-publish-git-unpublish">git publish &amp; git
unpublish</a> (describes both)</p></li>
<li><p><a href="../git-publish">git publish</a></p></li>
<li><p><a href="../git-unpublish">git unpublish</a> (this
alias)</p></li>
</ul>

</div>
