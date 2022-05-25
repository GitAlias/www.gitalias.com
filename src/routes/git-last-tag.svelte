<svelte:head>
    <title>git last-tag | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-last-tag">git last-tag</h1>
<h2 id="show-the-last-tag-in-the-current-branch">Show the last tag in
the current branch</h2>
<p>Git alias:</p>
<pre class="git"><code>last-tag = describe --tags --abbrev=0</code></pre>
<p>Example:</p>
<pre class="shell"><code>git last-tag</code></pre>
<h3 id="documentation-for-git-describe">Documentation for
<code>git describe</code></h3>
<dl>
<dt>
–tags
</dt>
<dd>
Instead of using only the annotated tags, use any tag found in refs/tags
namespace. This option enables matching a lightweight (non-annotated)
tag.
</dd>
<dt>
–abbrev=&lt;n&gt;
</dt>
<dd>
Instead of using the default 7 hexadecimal digits as the abbreviated
object name, use &lt;n&gt; digits, or as many digits as needed to form a
unique object name. An &lt;n&gt; of 0 will suppress long format, only
showing the closest tag.
</dd>
</dl>

</div>
