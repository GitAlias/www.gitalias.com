<svelte:head>
    <title>git hew | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-hew">git hew</h1>
<h2 id="delete-all-branches-that-have-been-merged-into-a-commit">Delete
all branches that have been merged into a commit</h2>
<p>Git alias:</p>
<pre class="git"><code>hew = !git hew-local &quot;$@&quot; &amp;&amp; git hew-remote &quot;$@&quot;;</code></pre>
<p>Syntax:</p>
<pre class="shell"><code>hew [&lt;commit&gt;]</code></pre>
<p>Example with default branch name:</p>
<pre class="shell"><code>git hew</code></pre>
<p>Example with specific branch name:</p>
<pre class="shell"><code>git hew main</code></pre>
<p>Example with specific commit hash:</p>
<pre class="shell"><code>git hew 4677ad893ee038b113e22f6330da6ae710712f88</code></pre>
<p>Compare these:</p>
<ul>
<li><a href="../git-hew">git hew</a></li>
<li><a href="../git-hew-dry-run">git hew-dry-run</a></li>
<li><a href="../git-hew-local">git hew-local</a></li>
<li><a href="../git-hew-local-dry-run">git hew-local-dry-run</a></li>
<li><a href="../git-hew-remote">git hew-remote</a></li>
<li><a href="../git-hew-remote-dry-run">git hew-remote-dry-run</a></li>
</ul>

</div>
