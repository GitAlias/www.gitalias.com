<svelte:head>
    <title>git clone-lean | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-clone-lean">git clone-lean</h1>
<h2 id="clone-as-lean-as-possible">Clone as lean as possible</h2>
<p>Git alias:</p>
<pre class="git"><code>clone-lean = clone --depth 1 --filter=combine:blob:none+tree:0 --no-checkout</code></pre>
<p>Example:</p>
<pre class="shell"><code>git clone-lean</code></pre>
<p>This alias skips fetching unneeded objects from the server.</p>
<p>This is good to checkout just one subdirectory.</p>
<p>Command breakdown:</p>
<ul>
<li><p>–depth 1 does a shallow clone and implies
–single-branches</p></li>
<li><p>–filter=blob:none skips all blobs, but fetches all tree
objects</p></li>
<li><p>–filter=tree:0 skips unneeded trees</p></li>
<li><p>–filter=combine:FILTER1+FILTER2 is the syntax to use multiple
filters at once; trying to pass –filter multiple times fails with:
“multiple filter-specs cannot be combined”.</p></li>
</ul>
<p>This uses –filter=tree:0 added in Git 2.20 and –filter=combine
composite filter added in Git 2.24.</p>
<p>The server should be configured with:</p>
<pre><code>git config --local uploadpack.allowfilter 1
git config --local uploadpack.allowanysha1inwant 1</code></pre>
<p>An extension was made to the Git remote protocol to support this
feature in v2.19.0 and actually skip fetching unneeded objects. There
was server support then, but it can be locally tested.</p>
<p>Credit:
https://stackoverflow.com/questions/600079/how-do-i-clone-a-subdirectory-only-of-a-git-repository/52269934#52269934</p>

</div>
