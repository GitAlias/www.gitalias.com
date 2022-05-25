<svelte:head>
    <title>git add | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-add">git add</h1>
<h2 id="aliases-to-add-files">Aliases to add files</h2>
<h3 id="shortcuts">Shortcuts</h3>
<ul>
<li><a href="../git-a">git a</a> = add</li>
<li><a href="../git-aa">git aa</a> = add –all</li>
<li><a href="../git-ap">git ap</a> = add –patch</li>
<li><a href="../git-au">git au</a> = add –update</li>
</ul>
<h3 id="add-all-paths-of-the-given-type">Add all paths of the given
type</h3>
<p>Git alias:</p>
<pre class="git"><code>add-cached   = !&quot;f() &lbrace; git ls-files --cached             | sort -u ; &rbrace;; git add `grave;f`grave;&quot;
add-deleted  = !&quot;f() &lbrace; git ls-files --deleted            | sort -u ; &rbrace;; git add `grave;f`grave;&quot;
add-others   = !&quot;f() &lbrace; git ls-files --others             | sort -u ; &rbrace;; git add `grave;f`grave;&quot;
add-ignored  = !&quot;f() &lbrace; git ls-files --ignored            | sort -u ; &rbrace;; git add `grave;f`grave;&quot;
add-killed   = !&quot;f() &lbrace; git ls-files --killed             | sort -u ; &rbrace;; git add `grave;f`grave;&quot;
add-modified = !&quot;f() &lbrace; git ls-files --modified           | sort -u ; &rbrace;; git add `grave;f`grave;&quot;
add-stage    = !&quot;f() &lbrace; git ls-files --stage    | cut -f2 | sort -u ; &rbrace;; git add `grave;f`grave;&quot;
add-unmerged = !&quot;f() &lbrace; git ls-files --unmerged | cut -f2 | sort -u ; &rbrace;; git add `grave;f`grave;&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git add-cached
git add-deleted
git add-others
git add-ignored
git add-killed
git add-modified
git add-stage
git add-unmerged</code></pre>
<p>These aliases intentionally match the aliases <a
href="../git-edit">git edit-*</a>.</p>

</div>
