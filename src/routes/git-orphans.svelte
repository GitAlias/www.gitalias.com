<svelte:head>
    <title>git orphans | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-orphans">git orphans</h1>
<h2 id="find-all-objects-that-arent-referenced-by-any-other-object">Find
all objects that aren’t referenced by any other object</h2>
<p>Git alias:</p>
<pre class="git"><code>orphans = fsck --full</code></pre>
<p>Example:</p>
<pre class="shell"><code>git orphans</code></pre>
<p>To help an orphan, we can create a new branch with the orphan’s
commit hash, then merge it into our current branch:</p>
<pre class="shell"><code>git branch foo &lt;commit&gt;
git merge foo</code></pre>

</div>
