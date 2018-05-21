<script>
export default {
  name: 'app-autocomplete',
  props: {
    placeholder: {
      type: String,
      required: true
    }
  }
}
</script>
<template>
  <div class="uk-margin-remove-bottom uk-width-1-1">
    <form class="uk-search uk-search-default uk-width-1-1 autocomplete">
      <span uk-search-icon></span>
      <input class="uk-search-input " type="search" :placeholder="placeholder">
      <div class="uk-width-1-1" id="drop" uk-dropdown="animation: uk-animation-fade; pos: bottom-justify; boundary: .autocomplete ;toggle: false; boundary-align: true">
        <ul class="uk-nav uk-dropdown-nav">
          <li>option 1</li>
          <li>option 2</li>
          <li>option 2</li>
        </ul>
      </div>
    </form>
  </div>
</template>
