<svelte:head>
    <title>git add-alias | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-add-alias">git add-alias</h1>
<h2 id="create-a-new-git-alias">Create a new git alias</h2>
<p>Git alias:</p>
<pre class="git"><code>add-alias = &quot;!f() &lbrace; \
    if [ $# != 3 ]; then \
    echo \&quot;Usage: git add-alias ( --local | --global ) &lt;alias&gt; &lt;command&gt;\&quot;; \
    echo &quot;Error: this command needs 3 arguments.&quot;; \
    return 2; \
    fi; \
    if [ ! -z \&quot;$(git config \&quot;$1\&quot; --get alias.\&quot;$2\&quot;)\&quot; ]; then \
        echo &quot;Alias &quot;$2&quot; already exists, thus no change happened.&quot;; \
        return 3; \
    fi; \
    git config $1 alias.\&quot;$2\&quot; \&quot;$3\&quot; &amp;&amp; \
    return 0; \
    echo \&quot;Usage: git add-alias ( --local | --global ) &lt;alias&gt; &lt;command&gt;\&quot;; \
    echo &quot;Error: unknown failure.&quot;; \
    return 1; \
&rbrace;; f&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git add-alias --local myalias mycommand

git add-alias --global myalias mycommand</code></pre>

</div>
