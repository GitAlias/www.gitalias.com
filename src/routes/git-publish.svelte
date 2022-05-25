<svelte:head>
    <title>git publish | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-publish">git publish</h1>
<h2 id="publish-the-current-branch">Publish the current branch</h2>
<p>Git alias:</p>
<pre class="git"><code>publish = !&quot;git push --set-upstream origin $(git current-branch)&quot;</code></pre>
<p>Publish the current branch by pushing upstream to origin, and setting
the current branch to track the upstream branch.</p>
<p>Example:</p>
<pre class="shell"><code>git publish</code></pre>
<p>Compare:</p>
<ul>
<li><p><a href="../git-publish-git-unpublish">git publish &amp; git
unpublish</a> (describes both)</p></li>
<li><p><a href="../git-publish">git publish</a> (this alias)</p></li>
<li><p><a href="../git-unpublish">git unpublish</a></p></li>
</ul>

</div>
