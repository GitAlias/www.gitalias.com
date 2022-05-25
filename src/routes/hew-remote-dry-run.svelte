<svelte:head>
    <title>git hew-remote-dry-run | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-hew-remote-dry-run">git hew-remote-dry-run</h1>
<h2
id="delete-remote-branches-that-have-been-merged-into-an-upstream-commit-dry-run">Delete
remote branches that have been merged into an upstream commit (dry
run)</h2>
<p>Git alias:</p>
<pre class="git"><code>hew-remote-dry-run = !&quot;f() &lbrace; \
    commit=$&lbrace;1:-$(git upstream-branch)&rbrace;; \
    git branch --remotes --merged \&quot;$commit\&quot; | \
    grep -v \&quot;^[[:space:]]*origin/$commit$\&quot; | \
    sed &#39;s#[[:space:]]*origin/##&#39; ; \
&rbrace;; f \&quot;$@\&quot;&quot;</code></pre>
<p>Syntax:</p>
<pre class="shell"><code>git hew-remote-dry-run [&lt;commit&gt;]</code></pre>
<p>Example with the default upstream branch name:</p>
<pre class="shell"><code>git hew-remote-dry-run</code></pre>
<p>Example with a specific upstream branch name:</p>
<pre class="shell"><code>git hew-remote-dry-run main</code></pre>
<p>Example with a specific upstream commit hash:</p>
<pre class="shell"><code>git hew-remote-dry-run 4677ad893ee038b113e22f6330da6ae710712f88</code></pre>
<p>If a branch is provided, or a commit is provided, then this alias
will use it.</p>
<p>Otherwise, this alias will use the upstream branch name.</p>
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
