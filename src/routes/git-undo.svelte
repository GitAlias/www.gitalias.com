<svelte:head>
    <title>git undo-* | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-undo-">git undo-*</h1>
<h2 id="move-backwards-on-the-commit-chain">Move backwards on the commit
chain</h2>
<p>Git alias:</p>
<pre class="git"><code>undo-commit        = reset --soft HEAD~1
undo-commit-hard   = reset --hard HEAD~1
undo-commit-hard-clean  = !git reset --hard HEAD~1 &amp;&amp; git clean -df
undo-to-pristine   = !git reset --hard &amp;&amp; git clean -dffx
undo-to-upstream   = !git reset --hard $(git upstream-branch)</code></pre>
<p>Example:</p>
<pre class="shell"><code>git undo-commit
git undo-commit-hard
git undo-commit-hard-clean
git undo-to-pristine
git undo-to-upstream</code></pre>
<p>These aliases are intentionally identical to the <a
href="../git-reset">git reset-*</a> aliases.</p>
<p>This is because, in our experience, novices tend to prefer the word
“undo” whereas experts tend to prefer the word “reset”.</p>

</div>
