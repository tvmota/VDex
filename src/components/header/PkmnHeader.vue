<script>
export default {
  name: 'app-header'
}
</script>
<template>
  <nav class="uk-navbar uk-background-muted uk-panel" uk-navbar>
    <div class="uk-navbar-left">
      <a href="#" class="uk-navbar-item uk-logo">
        <img alt="VDex" height="46" src="../../assets/pkmn.svg" width="46" uk-svg>
        VDex
      </a>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
  .pkmnLogo {
    background-image: url('../../assets/pkmn.svg');
    background-size: cover;
  }
</style>
