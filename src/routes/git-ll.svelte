<svelte:head>
    <title>git ll | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-ll">git ll</h1>
<h2
id="log-list---show-log-list-with-our-preferred-options-and-short-information">Log
list - Show log list with our preferred options and short
information</h2>
<p>Git alias:</p>
<pre class="git"><code>ll = log \
    --graph \
    --topo-order \
    --decorate \
    --all \
    --boundary \
    --date=short \
    --abbrev-commit \
    --pretty=format:&#39;%Cgreen%ad %Cred%h%Creset -%C(yellow)%d%Creset %s %Cblue[%cn]%Creset %Cblue%G?%Creset&#39;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git ll
* 2021-01-01 a1b2c3d - Add feature foo [Alice Adams] N
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
