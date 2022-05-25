<svelte:head>
    <title>git topic-base-branch | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-topic-base-branch">git topic-base-branch</h1>
<h2 id="show-the-project-base-topic-branch-name">Show the project base
topic branch name</h2>
<p>Git alias:</p>
<pre class="git"><code>topic-base-branch = &quot;!git config --get init.topicBaseBranchName || git config --get init.defaultBranch&quot;</code></pre>
<p>Example:</p>
<pre><code>git topic-base-branch
main</code></pre>
<p>Customize this alias as you like for your own workflow.</p>
<p>When we do topic branches, we use a base topic branch, and use it to
create new topic branches, and also use it to receive changes from
completed topic branches.</p>
<p>The base topic branch defaults to the repo default branch, such as
the “main” branch; this makes it easy to use topic branching in many
popular git repos that use the “main” branch for trunk-based development
and integration of pull requests.</p>
<p>Some teams prefer to have a specific base topic branch that is
different than the repo default branch, typically in order to do various
integration tests and/or release processes.</p>
<p>For example, some teams prefer to have a branch named “topic” or
“development” or “integration”, in order to do continuous integration
tests and continuous delivery release processes.</p>
<p>You can customize the base topic branch name by using
<code>git config</code>.</p>
<p>You can customize it for your local repo, or your own user’s global
configuration, or your system configuration, by using
<code>git config</code>:</p>
<pre class="shell"><code>git config --local init.topicBaseBranchName &quot;foo&quot;

git config --global init.topicBaseBranchName &quot;foo&quot;

git config --system init.topicBaseBranchName &quot;foo&quot;</code></pre>
<p>Example:</p>
<pre><code>git config init.topicBaseBranchName &quot;foo&quot;
git topic-base-branch
foo</code></pre>

</div>
