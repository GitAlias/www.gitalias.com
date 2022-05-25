<svelte:head>
    <title>git lll | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-lll">git lll</h1>
<h2
id="log-list-long---show-log-list-with-our-preferred-options-and-long-information">Log
list long - Show log list with our preferred options and long
information</h2>
<p>Git alias:</p>
<pre class="git"><code>lll = log \
    --graph \
    --topo-order \
    --boundary \
    --decorate \
    --all \
    --date=iso8601-strict \
    --no-abbrev-commit \
    --abbrev=40 \
    --pretty=format:&#39;␟%ad␟%h␟%s␟%cn &lt;%ce&gt;␟%G?&#39; | \
    git name-rev --stdin --always --name-only | \
    awk &#39;BEGIN &lbrace; FS=&quot;␟&quot;; OFS=&quot;␟&quot;; &rbrace; &lbrace; $4 = substr($4, 1, 50); print $0; &rbrace;&#39; | \
    column -s&#39;␟&#39; -t</code></pre>
<p>Example:</p>
<pre class="shell"><code>git lll
*  2021-01-01T00:00:00+00:00  remotes/origin/main  Add feature foo  Alice Adams &lt;alice@example.com&gt;  N
…</code></pre>
<h3 id="compare">Compare</h3>
<p>Compare the alias <a href="../git-ll">git ll</a> a.k.a. <a
href="../git-log-list">git log-list</a> which is using:</p>
<ul>
<li><p>Short date format using YYYY-MM-DD (no time, no zone)</p></li>
<li><p>Short commit format using abbreviated hexadecimal (not full
hexadecimal)</p></li>
<li><p>Short author field using name (no email address)</p></li>
<li><p>Short layout without columns</p></li>
</ul>
<p>And the alias <a href="../git-lll">git lll</a> a.k.a. <a
href="../git-log-list-long">git log-list-long</a> which is using:</p>
<ul>
<li><p>Long date format using iso8601 strict
YYYY-MM-DDTHH:MM:SS+HH:MM</p></li>
<li><p>Long commit format using hash hexadecimal displayed as
name-rev</p></li>
<li><p>Long author field using name and email address</p></li>
<li><p>Long layout with columns</p></li>
</ul>

</div>
