<svelte:head>
    <title>git topic-sync | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-topic-sync">git topic-sync</h1>
<h2
id="synchronize-the-current-topic-branch-by-doing-updates">Synchronize
the current topic branch by doing updates</h2>
<p>Git alias:</p>
<pre class="git"><code>topic-sync = &quot;!f()&lbrace; \
    new_branch=$(git current-branch); \
    old_branch=$(git topic-base-branch); \
    if [ \&quot;$new_branch\&quot; = \&quot;$old_branch\&quot; ]; then \
        printf \&quot;You are asking to do git topic-sync,\n\&quot;; \
        printf \&quot;but you are not on a new topic branch;\n\&quot;; \
        printf \&quot;you are on the base topic branch: $old_branch.\n\&quot;; \
        printf \&quot;Please checkout the topic branch that you want,\n\&quot;; \
        printf \&quot;then retry the git topic-sync command.\n\&quot;; \
    else \
        git pull; \
        git push; \
    fi; \
&rbrace;;f&quot;</code></pre>
<p>Example:</p>
<pre class="shell"><code>git topic-sync</code></pre>
<p>Customize this alias as you like for your own workflow.</p>
<p>Our workflow does these steps:</p>
<ol type="1">
<li><p>Pull any changes.</p></li>
<li><p>Push any changes.</p></li>
</ol>
<p>If you use any kind of testing framework, or test driven development,
then it can be wise to test your topic immediately after running this,
to ensure that any available updates are successfully integrated.</p>

</div>
