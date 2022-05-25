<svelte:head>
    <title>git unwip | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-unwip">git unwip</h1>
<h2 id="alias-for-uncommit-work-in-progress">Alias for uncommit “work in
progress”</h2>
<p>Git alias:</p>
<pre class="git"><code>unwip = !&quot;git log -n 1 | grep -q -c wip &amp;&amp; git reset HEAD~1&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git unwip</code></pre>
<p>Compare:</p>
<ul>
<li><p><a href="../git-wip-git-unwip">git wip &amp; git unwip</a>
(overview)</p></li>
<li><p><a href="../git-wip">git wip</a></p></li>
<li><p><a href="../git-unwip">git unwip</a> (this alias)</p></li>
</ul>

</div>
