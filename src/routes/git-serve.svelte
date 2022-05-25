<svelte:head>
    <title>git serve | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-serve">git serve</h1>
<h2 id="serve-the-local-directory-by-starting-a-git-server-daemon">Serve
the local directory by starting a git server daemon</h2>
<p>Git alias:</p>
<pre class="git"><code>serve = &quot;-c daemon.receivepack=true daemon --base-path=. --export-all --reuseaddr --verbose&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git serve</code></pre>
<p>Serve the local directory by starting a git server daemon, so others
can pull/push from my machine.</p>

</div>
