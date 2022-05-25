<svelte:head>
    <title>git last-tagged | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-last-tagged">git last-tagged</h1>
<h2 id="show-the-last-annotated-tag-in-all-branches">Show the last
annotated tag in all branches</h2>
<p>Git alias:</p>
<pre class="git"><code>last-tagged = !git describe --tags `grave;git rev-list --tags --max-count=1`grave;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git last-tagged</code></pre>

</div>
