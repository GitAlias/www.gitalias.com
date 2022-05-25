<svelte:head>
    <title>git cleanout | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-cleanout">git cleanout</h1>
<h2 id="clean-a-working-tree-using-typical-options-then-checkout">Clean
a working tree using typical options then checkout</h2>
<p>Git alias:</p>
<pre class="git"><code>cleanout = !git clean -df &amp;&amp; git checkout -- .</code></pre>
<p>Example:</p>
<pre class="shell"><code>git cleanout</code></pre>

</div>
