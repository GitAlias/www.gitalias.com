<svelte:head>
    <title>git log-fresh | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-log-fresh">git log-fresh</h1>
<h2
id="show-log-of-new-commits-after-you-fetched-with-stats-excluding-merges">Show
log of new commits after you fetched, with stats, excluding merges</h2>
<p>Git alias:</p>
<pre class="git"><code>log-fresh = log ORIG_HEAD.. --stat --no-merges</code></pre>
<p>Example:</p>
<pre class="shell"><code>git log-fresh</code></pre>

</div>
