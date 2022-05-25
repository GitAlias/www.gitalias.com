<svelte:head>
    <title>git cleaner | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-cleaner">git cleaner</h1>
<h2 id="clean-a-working-tree-using-more-powerful-options">Clean a
working tree using more powerful options</h2>
<p>Git alias:</p>
<pre class="git"><code>cleaner = clean -dff</code></pre>
<p>Example:</p>
<pre class="shell"><code>git cleaner</code></pre>
<p>This will remove untracked files from the working tree.</p>
<h3 id="documentation-of-git-clean-flags">Documentation of
<code>git clean</code> flags</h3>
<dl>
<dt>
-d
</dt>
<dd>
Normally, when no &lt;path&gt; is specified, git clean will not recurse
into untracked directories to avoid removing too much. Specify -d to
have it recurse into such directories as well. If any paths are
specified, -d is irrelevant; all untracked files matching the specified
paths (with exceptions for nested git directories mentioned under
–force) will be removed.
</dd>
<dt>
-f, –force
</dt>
<dd>
If the Git configuration variable clean.requireForce is not set to
false, git clean will refuse to delete files or directories unless given
-f or -i. Git will refuse to modify untracked nested git repositories
(directories with a .git subdirectory) unless a second -f is given.
</dd>
</dl>

</div>
