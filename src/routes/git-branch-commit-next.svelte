<svelte:head>
    <title>git branch-commit-next | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-branch-commit-next">git branch-commit-next</h1>
<h2 id="show-a-branchs-next-commit-hash-or-hashes">Show a branch’s next
commit hash (or hashes)</h2>
<p>Git alias:</p>
<pre class="git"><code>branch-commit-next = &quot;!f() &lbrace; \
    branch=&quot;$&lbrace;1:-$(git current-branch)&rbrace;&quot;; \
    count=&quot;$&lbrace;2:-1&rbrace;&quot;; \
    git log --reverse --pretty=%H &quot;$branch&quot; | \
    grep -A &quot;$count&quot; $(git rev-parse HEAD) | \
    tail +2; \
&rbrace;; f&quot;</code></pre>
<p>Syntax:</p>
<pre class="shell"><code>git branch-commit-next [branch name [commit count]]</code></pre>
<p>Options:</p>
<ul>
<li><p>branch name: default is the current branch name.</p></li>
<li><p>commit count: default is 1</p></li>
</ul>
<p>Example: show the current branch’s next commit hash:</p>
<pre class="shell"><code>git branch-commit-next</code></pre>
<p>Example: show the “foo” branch’s next commit hash:</p>
<pre class="shell"><code>git branch-commit-next next</code></pre>
<p>Example: show the “foo” branch’s next 3 commit hashes:</p>
<pre class="shell"><code>git branch-commit-next foo 3</code></pre>
<p>Compare:</p>
<ul>
<li><p><a href="">git branch-commit-first</a> Compare:</p></li>
<li><p><a href="../git-branch-commit-first">git branch-commit-first</a>:
show a branch’s first commit hash (or hashes)</p></li>
<li><p><a href="../git-branch-commit-last">git branch-commit-last</a>:
show a branch’s last commit hash (or hashes)</p></li>
<li><p><a href="../git-branch-commit-prev">git branch-commit-prev</a>:
show a branch’s previous commit hash (or hashes)</p></li>
<li><p><a href="../git-branch-commit-next">git branch-commit-next</a>:
show a branch’s next commit hash (or hashes)</p></li>
</ul>

</div>
