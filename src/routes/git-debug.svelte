<svelte:head>
    <title>git debug | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-debug">git debug</h1>
<h2 id="help-debugging-builtins">Help debugging builtins</h2>
<p>Git alias:</p>
<pre class="git"><code>debug = !GIT_PAGER= gdb --args git</code></pre>
<p>Example:</p>
<pre class="shell"><code>git debug</code></pre>
<p>When debugging builtins, we like to use <code>gdb</code> to analyze
the runtime state.</p>
<p>However, we have to disable the pager, and often we have to call the
program with arguments.</p>
<p>If the program to debug is a builtin, then we use this alias.</p>

</div>
