<svelte:head>
    <title>git init-empty | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-init-empty">git init-empty</h1>
<h2 id="initalize-a-repo-with-an-empty-rebaseable-commit">Initalize a
repo with an empty rebaseable commit</h2>
<p>Git alias:</p>
<pre class="git"><code>init-empty = !&quot;f() &lbrace; \
    git init &amp;&amp; \
    git commit --allow-empty --allow-empty-message --message &#39;&#39;; \
&rbrace;; f&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git init-empty</code></pre>
<p>This initialization makes it easier to do later git rebase commands,
because it enables a rebase to go all the way back to the first
commit.</p>

</div>
