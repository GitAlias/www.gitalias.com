<svelte:head>
    <title>git intercommit | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-intercommit">git intercommit</h1>
<h2 id="use-interdiff-to-see-patch-modifications">Use interdiff to see
patch modifications</h2>
<p>Git alias:</p>
<pre class="git"><code>intercommit = !sh -c &#39;git show &quot;$1&quot; &gt; .git/commit1 &amp;&amp; git show &quot;$2&quot; &gt; .git/commit2 &amp;&amp; interdiff .git/commit[12] | less -FRS&#39; -</code></pre>
<p>Example:</p>
<pre class="shell"><code>git intercommit</code></pre>
<p>If upstream applied a slightly modified patch, and we want to see the
modifications, then we use the program <code>interdiff</code> of the
patchutils package, and call “interdiff” between commits.</p>

</div>
