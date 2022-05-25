<svelte:head>
    <title>git ignore | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-ignore">git ignore</h1>
<h2
id="ignore-all-untracked-files-by-appending-them-to-.gitignore">Ignore
all untracked files by appending them to “.gitignore”</h2>
<p>Git alias:</p>
<pre class="gitalias"><code>ignore = &quot;!git status | grep -P \&quot;^\\t\&quot; | grep -vF .gitignore | sed \&quot;s/^\\t//\&quot; &gt;&gt; .gitignore&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git ignore</code></pre>

</div>
