<svelte:head>
    <title>git inbound | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-inbound">git inbound</h1>
<h2 id="show-incoming-changes-compared-to-upstream">Show incoming
changes compared to upstream</h2>
<p>Git alias:</p>
<pre class="git"><code>inbound = !git remote update --prune; git log ..@&lbrace;upstream&rbrace;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git inbound</code></pre>
<p>Compare <a href="../git-outbound">git outbound</a>.</p>

</div>
