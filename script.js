function bluff() {
document.getElementById("title").innerHTML = "Ya-hoo everybody! me'm slothwarden, and disa   ownen lil' page!";

}
<script>
if (window.location.pathname.endsWith('.html')) {
    window.location.href = window.location.pathname.replace('.html', '');
}
</script>
window.addEventListener("hashchange", () => {
if (window. location.hash === "#jarjarbinks") {
bluff();
();
}
});