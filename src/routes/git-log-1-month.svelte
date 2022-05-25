<svelte:head>
    <title>git log-1-month | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-log-1-month">git log-1-month</h1>
<h2 id="show-log-with-the-recent-month">Show log with the recent
month</h2>
<p>Git alias:</p>
<pre class="git"><code>log-1-month = log --since=1-month-ago</code></pre>
<p>Example:</p>
<pre class="shell"><code>git log-1-month</code></pre>
<h3
id="compare-show-log-with-the-recent-hour-day-week-month-year">Compare:
Show log with the recent hour, day, week, month, year</h3>
<p>Git alias:</p>
<pre class="git"><code>log-1-hour  = log --since=1-hour-ago
log-1-day   = log --since=1-day-ago
log-1-week  = log --since=1-week-ago
log-1-month = log --since=1-month-ago
log-1-year  = log --since=1-year-ago</code></pre>
<h3
id="compare-show-log-with-my-own-recent-hour-day-week-month-year">Compare:
Show log with my own recent hour, day, week, month, year</h3>
<p>Git alias:</p>
<pre class="git"><code>log-my-hour  = log --author $(git config user.email) --since=1-hour-ago
log-my-day   = log --author $(git config user.email) --since=1-day-ago
log-my-week  = log --author $(git config user.email) --since=1-week-ago
log-my-month = log --author $(git config user.email) --since=1-month-ago
log-my-year  = log --author $(git config user.email) --since=1-year-ago</code></pre>

</div>
