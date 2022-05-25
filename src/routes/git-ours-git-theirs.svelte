<svelte:head>
    <title>git ours &amp; git theirs | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-ours-git-theirs">git ours &amp; git theirs</h1>
<h2 id="easy-merging-when-you-know-which-files-you-want">Easy merging
when you know which files you want</h2>
<p>Git alias:</p>
<pre class="git"><code>ours   = !&quot;f() &lbrace; git checkout --ours   $@ &amp;&amp; git add $@; &rbrace;; f&quot;
theirs = !&quot;f() &lbrace; git checkout --theirs $@ &amp;&amp; git add $@; &rbrace;; f&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git ours
git theirs</code></pre>
<p>Sometimes during a merge you want to take a file from one side
wholesale.</p>
<p>The following aliases expose the “ours” and “theirs” options which
let you pick a file(s) from the current branch or the merged branch
respectively.</p>
<p>Compare:</p>
<ul>
<li><p><a href="../git-ours">git ours</a> - Checkout our version of a
file and add it</p></li>
<li><p><a href="../git-theirs">git theirs</a> - Checkout their version
of a file and add it</p></li>
</ul>

</div>
