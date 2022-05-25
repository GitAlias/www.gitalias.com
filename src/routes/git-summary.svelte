<svelte:head>
    <title>git summary | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-summary">git summary</h1>
<h2 id="show-a-summary-of-overview-metrics">Show a summary of overview
metrics</h2>
<p>Git alias:</p>
<pre class="git"><code>summary = &quot;!f() &lbrace; \
    printf \&quot;Summary of this branch...\n\&quot;; \
    printf \&quot;%s\n\&quot; $(git rev-parse --abbrev-ref HEAD); \
    printf \&quot;%s first commit timestamp\n\&quot; $(git log --date-order --format=%cI | tail -1); \
    printf \&quot;%s last commit timestamp\n\&quot; $(git log -1 --date-order --format=%cI); \
    printf \&quot;\nSummary of counts...\n\&quot;; \
    printf \&quot;%d commit count\n\&quot; $(git rev-list --count HEAD); \
    printf \&quot;%d date count\n\&quot; $(git log --format=oneline --format=\&quot;%ad\&quot; --date=format:\&quot;%Y-%m-%d\&quot; | awk &#39;&lbrace;a[$0]=1&rbrace;END&lbrace;for(i in a)&lbrace;n++;&rbrace; print n&rbrace;&#39;); \
    printf \&quot;%d tag count\n\&quot; $(git tag | wc -l); \
    printf \&quot;%d author count\n\&quot; $(git log --format=oneline --format=\&quot;%aE\&quot; | awk &#39;&lbrace;a[$0]=1&rbrace;END&lbrace;for(i in a)&lbrace;n++;&rbrace; print n&rbrace;&#39;); \
    printf \&quot;%d committer count\n\&quot; $(git log --format=oneline --format=\&quot;%cE\&quot; | awk &#39;&lbrace;a[$0]=1&rbrace;END&lbrace;for(i in a)&lbrace;n++;&rbrace; print n&rbrace;&#39;); \
    printf \&quot;%d local branch count\n\&quot; $(git branch | grep -v \&quot; -&gt; \&quot; | wc -l); \
    printf \&quot;%d remote branch count\n\&quot; $(git branch -r | grep -v \&quot; -&gt; \&quot; | wc -l); \
    printf \&quot;\nSummary of this directory...\n\&quot;; \
    printf \&quot;%s\n\&quot; $(pwd); \
    printf \&quot;%d file count via git ls-files\n\&quot; $(git ls-files | wc -l); \
    printf \&quot;%d file count via find command\n\&quot; $(find . | wc -l); \
    printf \&quot;%d disk usage\n\&quot; $(du -s | awk &#39;&lbrace;print $1&rbrace;&#39;); \
    printf \&quot;\nMost-active authors, with commit count and %%...\n\&quot;; git log-of-count-and-email | head -7; \
    printf \&quot;\nMost-active dates, with commit count and %%...\n\&quot;; git log-of-count-and-day | head -7; \
    printf \&quot;\nMost-active files, with churn count\n\&quot;; git churn | head -7; \
&rbrace;; f&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git summary

Summary of this branch...
main
2016-06-17T22:05:43-04:00 first commit timestamp
2022-01-10T19:41:43+00:00 last commit timestamp

Summary of counts...
330 commit count
112 date count
0 tag count
31 author count
22 committer count
1 local branch count
3 remote branch count

Summary of this directory...
~gitalias/gitalias
315 file count via git ls-files
4921 file count via find command
41912 disk usage

Most-active authors, with commit count and %...
246 74% joel@joelparkerhenderson.com
19 5% phd@phdru.name
13 3% alice@example.com

Most-active dates, with commit count and %...
16 4% 2019-01-16
14 4% 2016-06-19
10 3% 2019-07-03

Most-active files, with churn count
211 gitalias.txt
78 README.md
4 doc/install/install.md</code></pre>
<p>Summary of the branch:</p>
<ul>
<li>First commit timestamp</li>
<li>Last commit timestamp</li>
</ul>
<p>Summary of the counts:</p>
<ul>
<li>Commit count</li>
<li>Date count</li>
<li>Tag count</li>
<li>Author count</li>
<li>Committer count</li>
<li>Local branch count</li>
<li>Remote branch count</li>
</ul>
<p>Summary of the directory:</p>
<ul>
<li>Directory path</li>
<li>File count via git ls-files</li>
<li>File count via find command</li>
<li>Disk usage</li>
</ul>
<p>Summary of activity:</p>
<ul>
<li>Most-active authors</li>
<li>Most-active dates</li>
<li>Most-active files</li>
</ul>

</div>
