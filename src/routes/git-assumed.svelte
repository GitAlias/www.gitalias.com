<svelte:head>
    <title>git assumed | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-assumed">git assumed</h1>
<h2 id="show-which-files-are-assumed">Show which files are assumed</h2>
<p>Git alias:</p>
<pre class="git"><code>assumed = !&quot;git ls-files -v | grep ^h | cut -c 3-&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git assumed</code></pre>
<p>To see how this works, see <a
href="../git-assume-and-git-unassume">git assume-* &amp; git
unassume-*</a></p>

</div>
