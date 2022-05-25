<svelte:head>
    <title>git add-unmerged | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-add-unmerged">git add-unmerged</h1>
<h2 id="add-unmerged-files">Add unmerged files</h2>
<p>Git alias:</p>
<pre class="git"><code>add-unmerged = !&quot;f() &lbrace; git ls-files --unmerged | cut -f2 | sort -u ; &rbrace;; git add `grave;f`grave;&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git add-unmerged</code></pre>
<p>Compare:</p>
<ul>
<li><a href="../git-add-cached">git add-cached</a></li>
<li><a href="../git-add-deleted">git add-deleted</a></li>
<li><a href="../git-add-others">git add-others</a></li>
<li><a href="../git-add-ignored">git add-ignored</a></li>
<li><a href="../git-add-killed">git add-killed</a></li>
<li><a href="../git-add-modified">git add-modified</a></li>
<li><a href="../git-add-stage">git add-stage</a> (this alias)</li>
<li><a href="../git-add-unmerged">git add-unmerged</a></li>
</ul>
<p>Compare corresponding aliases for edit-*:</p>
<ul>
<li><a href="../git-edit-cached">git edit-cached</a></li>
<li><a href="../git-edit-deleted">git edit-deleted</a></li>
<li><a href="../git-edit-others">git edit-others</a></li>
<li><a href="../git-edit-ignored">git edit-ignored</a></li>
<li><a href="../git-edit-killed">git edit-killed</a></li>
<li><a href="../git-edit-modified">git edit-modified</a></li>
<li><a href="../git-edit-stage">git edit-stage</a></li>
<li><a href="../git-edit-unmerged">git edit-unmerged</a></li>
</ul>

</div>
