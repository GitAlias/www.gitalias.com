<svelte:head>
    <title>git theirs | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-theirs">git theirs</h1>
<h2 id="checkout-their-version-of-a-file-and-add-it">Checkout their
version of a file and add it</h2>
<p>Git alias:</p>
<pre class="git"><code>theirs = !&quot;f() &lbrace; git checkout --theirs $@ &amp;&amp; git add $@; &rbrace;; f&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git theirs</code></pre>
<p>Compare:</p>
<ul>
<li><p><a href="../git-ours-git-theirs">git ours &amp; git theirs</a>
(describes both)</p></li>
<li><p><a href="../git-ours">git ours</a></p></li>
<li><p><a href="../git-theirs">git theirs</a> (this alias)</p></li>
</ul>

</div>
