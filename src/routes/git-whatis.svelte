<svelte:head>
    <title>git whatis | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-whatis">git whatis</h1>
<h2 id="given-a-git-object-try-to-show-it-briefly">Given a git object,
try to show it briefly</h2>
<p>Git alias:</p>
<pre class="git"><code>whatis = show --no-patch --pretty=&#39;tformat:%h (%s, %ad)&#39; --date=short</code></pre>
<p>Example:</p>
<pre class="shell"><code>git whatis</code></pre>

</div>
