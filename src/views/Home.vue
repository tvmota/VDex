<script>
import PkmnHeader from '@/components/header/PkmnHeader'
import PkmnFooter from '@/components/footer/PkmnFooter'
// @ is an alias to /src
export default {
  name: 'home',
  components: {
    PkmnHeader,
    PkmnFooter
  }
}
</script>
<template>
  <div class="grid-main">
    <header role="reader">
      <pkmn-header></pkmn-header>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <pkmn-footer></pkmn-footer>
    </footer>
  </div>
</template>
