<svelte:head>
    <title>git grep-all | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-grep-all">git grep-all</h1>
<h2 id="find-text-in-any-commit-ever">Find text in any commit ever</h2>
<p>Git alias:</p>
<pre class="git"><code>grep-all = !&quot;f() &lbrace; git rev-list --all | xargs git grep \&quot;$@\&quot;; &rbrace;; f&quot;</code></pre>
<p>Syntax:</p>
<pre class="shell"><code>git grep-all &lt;text&gt; …</code></pre>
<p>Example:</p>
<pre class="shell"><code>git grep-all foo</code></pre>

</div>
