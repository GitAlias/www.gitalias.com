<svelte:head>
    <title>git grep-* | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-grep-">git grep-*</h1>
<h2 id="grep-helpers">Grep helpers</h2>
<p>Git alias:</p>
<pre class="git"><code># Find text in any commit ever.
grep-all = !&quot;f() &lbrace; git rev-list --all | xargs git grep \&quot;$@\&quot;; &rbrace;; f&quot;

# Find text and group the output lines. A.k.a. `grave;gg`grave;.
grep-group = grep --break --heading --line-number --color

# Find text with ack-like formatting.
grep-ack = \
    -c color.grep.linenumber=\&quot;bold yellow\&quot; \
    -c color.grep.filename=\&quot;bold green\&quot; \
    -c color.grep.match=\&quot;reverse yellow\&quot; \
    grep --break --heading --line-number</code></pre>
<p>Example:</p>
<pre class="shell"><code>git grep-all
git grep-group
git grep-ack</code></pre>

</div>
