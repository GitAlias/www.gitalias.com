<svelte:head>
    <title>git mainly | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-mainly">git mainly</h1>
<h2 id="make-local-like-main">Make local like main</h2>
<p>Git alias:</p>
<pre class="git"><code>mainly = !git checkout main &amp;&amp; git fetch origin --prune &amp;&amp; git reset --hard origin/main</code></pre>
<p>Example:</p>
<pre class="shell"><code>git mainly</code></pre>
<p>Do everything we can to make the local repo like the main branch.</p>
<p>TODO: handle tags, and delete superfluous branches, and add error
handling.</p>

</div>
