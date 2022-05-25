<svelte:head>
    <title>git get &amp; git put | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-get-git-put">git get &amp; git put</h1>
<h2 id="synchronize-changes-for-the-current-branch">Synchronize changes
for the current branch</h2>
<p>Git alias:</p>
<pre class="git"><code>get = !git fetch --prune &amp;&amp; git pull --rebase &amp;&amp; git submodule update --init --recursive
put = !git commit --all &amp;&amp; git push</code></pre>
<p>Example:</p>
<pre class="shell"><code>git get
git put</code></pre>
<p>Our workflow does these steps:</p>
<ul>
<li><p>git get: fetch and prune, pull and rebase, then update
submodules.</p></li>
<li><p>git put: commit all items, then push.</p></li>
</ul>
<p>If you want to preserve merges, then we recommend you set this:</p>
<pre class="shell"><code>git config pull.rebase preserve</code></pre>
<p>TODO:</p>
<ul>
<li><p>Handle tags</p></li>
<li><p>Delete superfluous branches</p></li>
<li><p>Add error handing</p></li>
</ul>
<p>Compare:</p>
<ul>
<li><p><a href="../git-get-git-put">git get &amp; git put</a> (this
page)</p></li>
<li><p><a href="../git-get">git get</a></p></li>
<li><p><a href="../git-put">git put</a></p></li>
</ul>

</div>
