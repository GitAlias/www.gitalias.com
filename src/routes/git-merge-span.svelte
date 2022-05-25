<svelte:head>
    <title>git merge-span | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-merge-span">git merge-span</h1>
<h2 id="merge-span-aliases">Merge span aliases</h2>
<p>Git alias:</p>
<pre class="git"><code># Given a merge commit, find the span of commits that exist(ed).
# Not so useful in itself, but used by other aliases.
# Thanks to Rob Miller for the merge-span-* aliases.
merge-span = !&quot;f() &lbrace; \
    echo $(git log -1 $2 --merges --pretty=format:%P | cut -d&#39; &#39; -f1)$1$(git log -1 $2 --merges --pretty=format:%P | \
    cut -d&#39; &#39; -f2); \
&rbrace;; f&quot;

# Find the commits that were introduced by a merge
merge-span-log = &quot;!git log `grave;git merge-span .. $1`grave;&quot;

# Show the changes that were introduced by a merge
merge-span-diff = !&quot;git diff `grave;git merge-span ... $1`grave;&quot;

# Show the changes that were introduced by a merge, in your difftool
merge-span-difftool = !&quot;git difftool `grave;git merge-span ... $1`grave;&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git merge-span
git merge-span-log
git merge-span-diff
git merge-span-difftool</code></pre>
<p>Compare:</p>
<ul>
<li><a href="../git-merge-span">git merge-span</a> (this page)</li>
<li><a href="../git-merge-span-log">git merge-span-log</a></li>
<li><a href="../git-merge-span-diff">git merge-span-diff</a></li>
<li><a href="../git-merge-span-difftool">git
merge-span-difftool</a></li>
</ul>

</div>
