<svelte:head>
    <title>git commit-message-key-lines | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-commit-message-key-lines">git commit-message-key-lines</h1>
<h2 id="show-the-commits-keyword-marker-lines">Show the commit’s
keyword-marker lines</h2>
<p>Git alias:</p>
<pre class="git"><code>commit-message-key-lines = &quot;!f()&lbrace; \
    echo \&quot;Commit: $1\&quot;; git log \&quot;$1\&quot; --format=fuller | \
    grep \&quot;^[[:blank:]]*[[:alnum:]][-[:alnum:]]*:\&quot; | \
    sed \&quot;s/^[[:blank:]]*//; s/:[[:blank:]]*/: /\&quot;; \
&rbrace;; f&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git commit-message-key-lines ce505d161fccdbc8d4bf12047846de7433ad6d04</code></pre>
<p>Show each line in the commit message that starts with optional
whitespace, then a keyword (i.e. alphanum and dash characters), then a
colon. The purpose is to help with analytics and reports.</p>
<p>Example commit and message:</p>
<pre class="shell"><code>commit ce505d161fccdbc8d4bf12047846de7433ad6d04
Author: Alice Adams &lt;alice@example.com&gt;
Date:   Tue May 28 11:53:47 2019 -0700

    Add feature foo

    This commit does some good things.

    Time: 8 hours
    Cost: 800 USD</code></pre>
<p>Example command:</p>
<pre class="shell"><code>git commit-message-key-lines ce505d161fccdbc8d4bf12047846de7433ad6d04</code></pre>
<p>Example output:</p>
<p>`grave;`grave;`grave;shell Commit: ce505d161fccdbc8d4bf12047846de7433ad6d04 Author:
Alice Adams <a href="mailto:alice@example.com"
class="email">alice@example.com</a> Date: Tue May 28 11:53:47 2019 -0700
Time: 8 hours Cost: 800 USD</p>
<p>The alias intentionally normalizes the output:</p>
<ul>
<li><p>Start the output with “Commit: <commit>” so we know which
commit.</p></li>
<li><p>Omit leading blanks i.e. print flush left.</p></li>
<li><p>After the colon, use one space, not a tab, or multiple spaces,
etc.</p></li>
</ul>
<p>Known issues:</p>
<ul>
<li>TODO: improve the keyword matcher so it requires the keyword to end
in an alphanum (not a dash), and also so the dash is a separator i.e.
the matcher does not accept a dash followed by another dash.</li>
</ul>

</div>
