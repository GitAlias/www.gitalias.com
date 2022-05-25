<svelte:head>
    <title>git remote-ref | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-remote-ref">git remote-ref</h1>
<h2 id="todo">TODO</h2>
<p>Git alias:</p>
<pre class="git"><code>remote-ref = !&quot;sh -c &#39; \
    local_ref=$(git symbolic-ref HEAD); \
    local_name=$&lbrace;local_ref##refs/heads/&rbrace;; \
    remote=$(git config branch.\&quot;#local_name\&quot;.remote || echo origin); \
    remote_ref=$(git config branch.\&quot;$local_name\&quot;.merge); \
    remote_name=$&lbrace;remote_ref##refs/heads/&rbrace;; \
    echo remotes/$remote/$remote_name&#39;&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git remote-ref</code></pre>
<p>Thanks to jtolds on stackoverflow</p>

</div>
