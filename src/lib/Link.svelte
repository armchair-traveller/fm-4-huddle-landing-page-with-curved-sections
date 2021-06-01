<script>
  export let variant = "filled";
  let className = "";
  export { className as class };

  let styles = variant == "outline" ? "" : "";
</script>

<a href="##" class="text-white no-underline {className}">
  <slot />
</a>
