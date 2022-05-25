<svelte:head>
    <title>git commit-is-merge | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-commit-is-merge">git commit-is-merge</h1>
<h2 id="is-the-commit-a-merge-commit-if-yes-exit-0-else-exit-1">Is the
commit a merge commit? If yes exit 0, else exit 1</h2>
<p>Git alias:</p>
<pre class="git"><code>commit-is-merge = !&quot;f()&lbrace; \
    [ -n \&quot;$(git commit-parents \&quot;$*\&quot; | sed &#39;0,/^parent /d&#39;)\&quot; ]; \
&rbrace;;f&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git commit-is-merge &amp;&amp; do-something || do-something-else</code></pre>

</div>
