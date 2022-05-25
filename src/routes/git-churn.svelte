<svelte:head>
    <title>git churn | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-churn">git churn</h1>
<h2 id="show-log-of-files-that-have-many-changes">Show log of files that
have many changes</h2>
<p>Git alias:</p>
<pre class="git"><code>churn = !&quot;f() &lbrace; \
    git log \
    --all \
    --find-copies \
    --find-renames \
    --name-only \
    --format=&#39;format:&#39; \
    \&quot;$@\&quot; | \
    awk &#39;NF&lbrace;a[$0]++&rbrace;END&lbrace;for(i in a)&lbrace;print a[i], i&rbrace;&rbrace;&#39; | \
    sort -rn; \
&rbrace;;f&quot;</code></pre>
<p>Show churn for whole repo:</p>
<pre class="shell"><code>git churn</code></pre>
<p>Show churn for specific directories:</p>
<pre class="shell"><code>git churn app lib</code></pre>
<p>Show churn for a time range:</p>
<pre class="shell"><code>git churn --since=1-month-ago</code></pre>
<p>These are all standard arguments to <code>git log</code>.</p>
<p>It’s possible to get valuable insight from history of a project not
only by viewing individual commits, but by analyzing sets of changes as
a whole.</p>
<p>For instance, <code>git churn</code> compiles stats about which files
change the most.</p>
<p>For example, to see where work on an app was focused on in the past
month:</p>
<pre class="shell"><code>git churn --since=1-month-ago app/ | tail</code></pre>
<p>This can also highlight potential problems with technical debt in a
project. A specific file changing too often is generally a red flag,
since it probably means the file either needed to be frequently fixed
for bugs, or the file holds too much responsibility and should be split
into smaller units.</p>
<p>Similar methods of history analysis can be employed to see which
people were responsible recently for development of a certain part of
the codebase.</p>
<p>For instance, to see who contributed most to the API part of an
application:</p>
<pre class="shell"><code>git log --format=&#39;%an&#39; --since=1-month-ago app/controllers/api/ | sort | uniq -c | sort -rn | head
109 Alice Anderson
13 Bob Brown
7 Carol Clark</code></pre>
<p>Credit:</p>
<ul>
<li><p>Written by <a href="http://coreyhaines.com/">Corey
Haines</a></p></li>
<li><p>Scriptified by Gary Bernhardt</p></li>
<li><p>Obtained from
https://github.com/garybernhardt/dotfiles/blob/main/bin/git-churn</p></li>
<li><p>Comments by Mislav
http://mislav.uniqpath.com/2014/02/hidden-documentation/</p></li>
<li><p>Edited for GitAlias.com repo by Joel Parker Henderson</p></li>
</ul>

</div>
