<svelte:head>
    <title>git topic-move | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-topic-move">git topic-move</h1>
<h2 id="rename-the-current-topic-branch">Rename the current topic
branch</h2>
<p>Git alias:</p>
<pre class="git"><code>topic-move = &quot;!f()&lbrace; \
    new_branch=\&quot;$1\&quot;; \
    old_branch=$(git current-branch); \
    git branch --move \&quot;$old_branch\&quot; \&quot;$new_branch\&quot;; \
    git push origin \&quot;:$old_branch\&quot; \&quot;$new_branch\&quot;; \
&rbrace;;f&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git topic-move foo</code></pre>
<p>Customize this alias as you like for your own workflow.</p>
<p>Our workflow does these steps:</p>
<ol type="1">
<li><p>Move the local branch.</p></li>
<li><p>Move the remote branch by pushing to origin.</p></li>
</ol>

</div>
