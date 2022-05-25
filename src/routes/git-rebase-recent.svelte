<svelte:head>
    <title>git rebase-recent | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-rebase-recent">git rebase-recent</h1>
<h2 id="rebase-recent-commits-with-interactive">Rebase recent commits
with interactive</h2>
<p>Git alias:</p>
<pre class="git"><code>rebase-recent = !git rebase --interactive $(git remote-ref)</code></pre>
<p>Example:</p>
<pre class="shell"><code>git rebase-recent</code></pre>
<p>Thanks to jtolds on stackoverflow.</p>

</div>
