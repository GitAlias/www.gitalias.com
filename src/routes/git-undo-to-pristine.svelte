<svelte:head>
    <title>git undo-to-pristine | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-undo-to-pristine">git undo-to-pristine</h1>
<h2 id="undo-commits-and-clean-all-differences">Undo commits and clean
all differences</h2>
<p>Git alias:</p>
<pre class="git"><code>undo-to-pristine = !git reset --hard &amp;&amp; git clean -dffx</code></pre>
<p>Example:</p>
<pre class="shell"><code>git undo-to-pristine</code></pre>
<p>See how to use this alias and related ones:</p>
<ul>
<li><a href="../git-undo">git undo-*</a></li>
<li><a href="../git-reset">git reset-*</a></li>
</ul>

</div>
