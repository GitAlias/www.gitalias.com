<svelte:head>
    <title>git diff-all | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-diff-all">git diff-all</h1>
<h2 id="for-each-diff-call-difftool">For each diff, call difftool</h2>
<p>Git alias:</p>
<pre class="git"><code>diff-all = !&quot;for name in $(git diff --name-only $1); do git difftool $1 $name &amp; done&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git diff-all</code></pre>

</div>
