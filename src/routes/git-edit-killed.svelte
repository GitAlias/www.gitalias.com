<svelte:head>
    <title>git edit-killed | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-edit-killed">git edit-killed</h1>
<h2 id="edit-killed-files">Edit killed files</h2>
<p>Git alias:</p>
<pre class="git"><code>edit-killed = !&quot;f() &lbrace; git ls-files --killed | sort -u ; &rbrace;; `grave;git var GIT_EDITOR`grave; `grave;f`grave;&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git edit-killed</code></pre>
<p>Compare:</p>
<ul>
<li><a href="../git-edit-cached">git edit-cached</a></li>
<li><a href="../git-edit-deleted">git edit-deleted</a></li>
<li><a href="../git-edit-others">git edit-others</a></li>
<li><a href="../git-edit-ignored">git edit-ignored</a></li>
<li><a href="../git-edit-killed">git edit-killed</a> (this alias)</li>
<li><a href="../git-edit-modified">git edit-modified</a></li>
<li><a href="../git-edit-stage">git edit-stage</a></li>
<li><a href="../git-edit-unmerged">git edit-unmerged</a></li>
</ul>
<p>Compare corresponding aliases for add-*:</p>
<ul>
<li><a href="../git-add-cached">git add-cached</a></li>
<li><a href="../git-add-deleted">git add-deleted</a></li>
<li><a href="../git-add-others">git add-others</a></li>
<li><a href="../git-add-ignored">git add-ignored</a></li>
<li><a href="../git-add-killed">git add-killed</a></li>
<li><a href="../git-add-modified">git add-modified</a></li>
<li><a href="../git-add-stage">git add-stage</a></li>
<li><a href="../git-add-unmerged">git add-unmerged</a></li>
</ul>

</div>
