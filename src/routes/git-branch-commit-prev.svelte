<svelte:head>
    <title>git branch-commit-prev | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-branch-commit-prev">git branch-commit-prev</h1>
<h2 id="show-a-branchs-previous-commit-hash-or-hashes">Show a branch’s
previous commit hash (or hashes)</h2>
<p>Git alias:</p>
<pre class="git"><code>branch-commit-prev = &quot;!f() &lbrace; \
    branch=&quot;$&lbrace;1:-$(git current-branch)&rbrace;&quot;; \
    count=&quot;$&lbrace;2:-1&rbrace;&quot;; \
    git log --pretty=%H &quot;$branch&quot; | \
    grep -A &quot;$count&quot; $(git rev-parse HEAD) | \
    tail +2; \
&rbrace;; f&quot;</code></pre>
<p>Syntax:</p>
<pre class="shell"><code>git branch-commit-prev [branch name [commit count]]</code></pre>
<p>Options:</p>
<ul>
<li><p>branch name: default is the current branch name.</p></li>
<li><p>commit count: default is 1</p></li>
</ul>
<p>Example: show the current branch’s previous commit hash:</p>
<pre class="shell"><code>git branch-commit-prev</code></pre>
<p>Example: show the “foo” branch’s previous commit hash:</p>
<pre class="shell"><code>git branch-commit-prev previous</code></pre>
<p>Example: show the “foo” branch’s previous 3 commit hashes:</p>
<pre class="shell"><code>git branch-commit-prev foo 3</code></pre>
<p>Compare:</p>
<ul>
<li><a href="../git-branch-commit-first">git branch-commit-first</a>:
show a branch’s first commit hash (or hashes)</li>
<li><a href="../git-branch-commit-last">git branch-commit-last</a>: show
a branch’s last commit hash (or hashes)</li>
<li><a href="../git-branch-commit-prev">git branch-commit-prev</a>: show
a branch’s previous commit hash (or hashes)</li>
<li><a href="../git-branch-commit-next">git branch-commit-next</a>: show
a branch’s next commit hash (or hashes)</li>
</ul>

</div>
