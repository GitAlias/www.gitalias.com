<svelte:head>
    <title>git hew-local | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-hew-local">git hew-local</h1>
<h2
id="delete-local-branches-that-have-been-merged-into-a-commit">Delete
local branches that have been merged into a commit</h2>
<p>Git alias:</p>
<pre class="git"><code>hew-local = !&quot;f() &lbrace; \
    hew-local-dry-run \&quot;$@\&quot; | \
    xargs git branch --delete ; \
&rbrace;; f \&quot;$@\&quot;&quot;</code></pre>
<p>Syntax:</p>
<pre class="shell"><code>hew-local [&lt;commit&gt;]</code></pre>
<p>Example with the default branch name:</p>
<pre class="shell"><code>git hew-local</code></pre>
<p>Example with a specific branch name:</p>
<pre class="shell"><code>git hew-local main</code></pre>
<p>Example with a specific commmit hash:</p>
<pre class="shell"><code>git hew-local 4677ad893ee038b113e22f6330da6ae710712f88</code></pre>
<p>If a branch is provided, or commit is provided, then this alias will
use it.</p>
<p>Otherwise, this alias will use the current branch name.</p>
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
