<svelte:head>
    <title>git optimizer | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-optimizer">git optimizer</h1>
<h2
id="optimize-a-repo-our-preferred-way-i.e.-by-pruning-and-repacking">Optimize
a repo our preferred way i.e. by pruning and repacking</h2>
<p>Git alias:</p>
<pre class="git"><code>optimizer = !git pruner; git repacker; git prune-packed</code></pre>
<p>Example:</p>
<pre class="shell"><code>git optimizer</code></pre>
<p>The purpose of this command is to do everything possible to optimize
the repository.</p>
<p>This command takes a long time to run, perhaps even overnight.</p>
<p>This command calls our other aliases:</p>
<ul>
<li><p><a href="../git-pruner">git pruner</a></p></li>
<li><p><a href="../git-repacker">git repacker</a></p></li>
</ul>
<p>This command also calls <code>git prune-packed</code>. This step may
be unnecessary.</p>

</div>
