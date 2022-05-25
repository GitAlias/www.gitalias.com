<svelte:head>
    <title>git repacker | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="git-repacker">git repacker</h1>
<h2
id="repack-a-repo-using-our-recommended-way-i.e.-as-linus-torvalds-describes">Repack
a repo using our recommended way i.e. as Linus Torvalds describes</h2>
<p>Git alias:</p>
<pre class="git"><code>repacker = repack -a -d -f --depth=300 --window=300 --window-memory=1g</code></pre>
<p>Example:</p>
<pre class="shell"><code>git repacker</code></pre>
<p>This command takes a long time to run, perhaps even overnight.</p>
<p>It does the equivalent of “git gc –aggressive” but done
<em>properly</em>, which is to do something like:</p>
<pre class="shell"><code>git repack -a -d --depth=250 --window=250</code></pre>
<p>The depth setting is about how deep the delta chains can be; make
them longer for old history - it’s worth the space overhead.</p>
<p>The window setting is about how big an object window we want each
delta candidate to scan.</p>
<p>And here, you might well want to add the “-f” flag (which is the
“drop all old deltas”, since you now are actually trying to make sure
that this one actually finds good candidates.</p>
<p>And then it’s going to take forever and a day (ie a “do it overnight”
thing). But the end result is that everybody downstream from that
repository will get much better packs, without having to spend any
effort on it themselves.</p>
<p>http://metalinguist.wordpress.com/2007/12/06/the-woes-of-git-gc-aggressive-and-how-git-deltas-work/</p>
<p>We also add the –window-memory limit of 1 gig, which helps protect us
from a window that has very large objects such as binary blobs.</p>

</div>
