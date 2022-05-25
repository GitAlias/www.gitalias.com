<svelte:head>
    <title>Install | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="install">Install</h1>
<h2 id="install-with-typical-usage">Install with typical usage</h2>
<p>Download the file <a
href="gitalias.txt"><code>gitalias.txt</code></a> and include it:</p>
<pre class="shell"><code>curl https://raw.githubusercontent.com/GitAlias/gitalias/main/gitalias.txt -o ~/.gitalias
git config --global include.path ~/.gitalias</code></pre>
<h2 id="install-with-custom-usage">Install with custom usage</h2>
<p>Download the file <a
href="gitalias.txt"><code>gitalias.txt</code></a> any way you want, such
as:</p>
<pre class="shell"><code>curl -O https://raw.githubusercontent.com/GitAlias/gitalias/main/gitalias.txt</code></pre>
<p>Manually edit your git config dot file any way you want, such as:</p>
<pre class="shell"><code>vi ~/.gitconfig</code></pre>
<p>Include the path to this file:</p>
<div class="sourceCode" id="cb4"><pre
class="sourceCode toml"><code class="sourceCode toml"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="kw">[</span><span class="dt">include</span><span class="kw">]</span></span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="dt">path</span> <span class="op">=</span> <span class="er">~/.gitalias</span></span></code></pre></div>

</div>
