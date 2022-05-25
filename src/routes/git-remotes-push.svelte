<svelte:head>
    <title>git remotes-push | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-remotes-push">git remotes-push</h1>
<h2 id="for-each-remote-branch-push-it">For each remote branch, push
it</h2>
<p>Git alias:</p>
<pre class="git"><code>remotes-push = !git remote | xargs -I% -n1 git push %</code></pre>
<p>Example:</p>
<pre class="shell"><code>git remotes-push</code></pre>

</div>
