<svelte:head>
    <title>git pruner | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-pruner">git pruner</h1>
<h2
id="prune-using-our-recommnded-way-i.e.-prune-everything-unreachable-now">Prune
using our recommnded way i.e. prune everything unreachable now</h2>
<p>Git alias:</p>
<pre class="git"><code>pruner = !&quot;git prune --expire=now; git reflog expire --expire-unreachable=now --rewrite --all&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git pruner</code></pre>
<p>This command takes a long time to run, perhaps even overnight.</p>
<p>This is useful for removing unreachable objects from all places.</p>
<p>By <a href="http://www.codegnome.com/">CodeGnome</a></p>

</div>
