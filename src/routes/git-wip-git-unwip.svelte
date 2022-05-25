<svelte:head>
    <title>git wip &amp; git unwip | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-wip-git-unwip">git wip &amp; git unwip</h1>
<h2 id="aliases-for-work-in-progress">Aliases for “work in
progress”</h2>
<p>Git alias:</p>
<pre class="git"><code>wip = !&quot;git add --all; git ls-files --deleted -z | xargs -0 git rm; git commit --message=wip&quot;

unwip = !&quot;git log -n 1 | grep -q -c wip &amp;&amp; git reset HEAD~1&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git wip

git unwip</code></pre>
<p>The wip alias is a quick way to add all new and modified files to the
index, while also cleaning the index from the files removed from the
working tree. This cleaning will facilitate a rebase, because there
won’t be any conflict due to an “unclean” working directory (not in sync
with the index).</p>
<p>The unwip alias is a quick way to restore deleted files to the
working tree.</p>
<p>From https://gist.github.com/492227 and VonC on stackoverflow.</p>

</div>
