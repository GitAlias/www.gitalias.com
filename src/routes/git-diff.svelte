<svelte:head>
    <title>git diff-* | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-diff-">git diff-*</h1>
<h2 id="show-diff-in-various-ways">Show diff in various ways</h2>
<p>Git alias:</p>
<pre class="git"><code>diff-all = !&quot;for name in $(git diff --name-only $1); do git difftool $1 $name &amp; done&quot;
diff-changes = diff --name-status -r
diff-stat = diff --stat --ignore-space-change -r
diff-staged = diff --cached

# Diff using our preferred options. A.k.a. `grave;dd`grave;.
diff-deep = diff --check --dirstat --find-copies --find-renames --histogram --color</code></pre>
<p>Example:</p>
<pre class="shell"><code>git diff-all
git diff-changes
git diff-stat
git diff-deep</code></pre>

</div>
