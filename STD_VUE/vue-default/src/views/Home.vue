<template>
  <div class="wrapper">
    <incSkipNav></incSkipNav>
    <incHeader></incHeader>
    <incAside></incAside>
    <incFooter></incFooter>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import incSkipNav from "../components/incSkipNav.vue";
import incHeader from "../components/incHeader.vue";
import incAside from "../components/incAside.vue";
import incFooter from "../components/incFooter.vue";

export default {
  name: "home",
  components: {
    incSkipNav, incHeader, incAside, incFooter
  },
  data() {
      return {}
  },
  created() {
  },
  watch: {
  },
  computed: {
  },
  computed: {
  },
  methods: {
  },
  mounted() {
      this.$nextTick(function() {
          ui.init();
      });
  }
};
</script>
