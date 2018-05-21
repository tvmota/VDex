<script>
import PkmnAutocomplete from '@/components/autocomplete/PkmnAutocomplete'
import PkmnCard from '@/components/card/PkmnCard'

export default {
  name: 'lists-cards',
  components: {
    PkmnAutocomplete,
    PkmnCard
  }
}
</script>
<template>
  <div class="uk-container uk-margin-medium-top uk-margin-medium-bottom">
    <div class="uk-flex" uk-grid>
      <pkmn-autocomplete placeholder="Procurar"></pkmn-autocomplete>
      <pkmn-card></pkmn-card>
      <pkmn-card></pkmn-card>
      <pkmn-card></pkmn-card>
      <pkmn-card></pkmn-card>
    </div>
  </div>
</template>
