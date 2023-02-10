<script>
import { onMount } from 'svelte'
onMount(() => {
    const s = document.createElement('script')
    const tag = document.getElementById('utterances')
    s.setAttribute('repo',"cadecuddy/blog-comments")
    s.setAttribute('issue-term',"pathname")
    s.setAttribute('label',"comments")
    s.setAttribute('theme',"github-light")
    s.setAttribute('crossorigin',"anonymous")
    s.src = 'https://utteranc.es/client.js'
    tag.parentNode.insertBefore(s, tag)
})
</script>

<div id="utterances"></div>
