<svelte:head>
    <title>git log | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-log">git log</h1>
<h2 id="log-helpers">Log helpers</h2>
<p>Git alias:</p>
<pre class="git"><code># Show log in our preferred format for our key performance indicators. A.k.a. `grave;ll`grave;.
log-like = log --graph --topo-order --date=short --abbrev-commit --decorate --all --boundary --pretty=format:&#39;%Cgreen%ad %Cred%h%Creset -%C(yellow)%d%Creset %s %Cblue[%cn]%Creset %Cblue%G?%Creset&#39;

# Show log in our preferred format for our key performance indicators, with long items. A.k.a. `grave;lll`grave;.
log-like-long = log --graph --topo-order --date=iso8601-strict --no-abbrev-commit --decorate --all --boundary --pretty=format:&#39;%Cgreen%ad %Cred%h%Creset -%C(yellow)%d%Creset %s %Cblue[%cn &lt;%ce&gt;]%Creset %Cblue%G?%Creset&#39;

# Show log with dates in our local timezone
log-local = log --date=local

# Show log as a graph
log-graph = log --graph --all --oneline --decorate

# TODO
log-refs = log --all --graph --decorate --oneline --simplify-by-decoration --no-merges
log-timeline = log --format=&#39;%h %an %ar - %s&#39;
log-local = log --oneline origin..HEAD
log-fetched = log --oneline HEAD..origin/main</code></pre>
<p>Example:</p>
<pre class="shell"><code>git log-like
git log-like-long
git log-local
git log-graph
git log-refs
git log-timeline
git log-local
git log-fetched</code></pre>
<h3 id="show-log-with-the-recent-hour-day-week-month-year">Show log with
the recent hour, day, week, month, year</h3>
<p>Git alias:</p>
<pre class="git"><code>log-1-hour  = log --since=1-hour-ago
log-1-day   = log --since=1-day-ago
log-1-week  = log --since=1-week-ago
log-1-month = log --since=1-month-ago
log-1-year  = log --since=1-year-ago

Example:

`grave;`grave;`grave;shell
git log-1-hour
git log-1-day
git log-1-week
git log-1-month
git log-1-year</code></pre>
<h3 id="show-log-with-my-own-recent-hour-day-week-month-year">Show log
with my own recent hour, day, week, month, year</h3>
<p>Git alias:</p>
<pre class="git"><code>log-my-hour  = log --author $(git config user.email) --since=1-hour-ago
log-my-day   = log --author $(git config user.email) --since=1-day-ago
log-my-week  = log --author $(git config user.email) --since=1-week-ago
log-my-month = log --author $(git config user.email) --since=1-month-ago
log-my-year  = log --author $(git config user.email) --since=1-year-ago</code></pre>
<p>Example:</p>
<pre class="shell"><code>git log-my-hour
git log-my-day
git log-my-week
git log-my-month
git log-my-year</code></pre>

</div>
