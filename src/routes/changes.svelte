<svelte:head>
    <title>Changes | GitAlias.com</title>
</svelte:head>

<div class="prose">

<h1 id="changes">Changes</h1>
<h2 id="section">27.0.0</h2>
<ul>
<li><p>Add documentation</p></li>
<li><p>Add option of custom license</p></li>
<li><p>Fix some broken/missing markdown links</p></li>
<li><p>Add alias for “default-branch”</p></li>
<li><p>Redo alias “cleaner” to be simpler, and add alias
“cleanest”</p></li>
<li><p>Rename aliases that are abbreviations for consistency:</p>
<ul>
<li><p>From “me” to “mncnf” (merge –no-commit –no-ff)</p></li>
<li><p>From “pp” to “prp” (pull –rebase=preserve)</p></li>
<li><p>From “log-changes” to “lor” (log –oneline –reverse)</p></li>
</ul></li>
<li><p>Rename aliases for clarity and consistency:</p>
<ul>
<li><p>From “topic-base” to “topic-base-branch”</p></li>
<li><p>From “lasttagged” to “last-tagged”</p></li>
<li><p>From “top-name” to “top”</p></li>
<li><p>From “log-…-date” to “log-date-…”</p></li>
<li><p>From “log-like” to “log-list”, and from “log-like-love” to
“log-list-long”</p></li>
<li><p>From “…earliest…” to “…first…”, and from “…latest…” to
“…last…”</p></li>
<li><p>From “reset-commit-clean” to “reset-commit-hard-clean”, and from
“undo-commit-clean” to “undo-commit-hard-clean”</p></li>
<li><p>From “topic-start”/“topic-stop” to
“topic-begin”/“topic-end”</p></li>
<li><p>From “cull…” to “hew…” in order to be more-semantic that we’re
axing branches; also add “hew…-dry-run” in order to show what’s
happening without delete.</p></li>
</ul></li>
<li><p>Refactor short aliases to call long semantic aliases</p>
<ul>
<li><p>“dd” calls diff-deep</p></li>
<li><p>“gg” calls grep-group</p></li>
<li><p>“ll” calls log-list</p></li>
<li><p>“lll” calls log-list-long</p></li>
</ul></li>
</ul>

</div>
