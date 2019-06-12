<template>
  <div id="content" class="content">
    <div class="content-header">
      <div class="in-sec">
        <h1>content-header</h1>
      </div>
    </div>
    <div class="content-body">
      <div class="in-sec">
        <p>content-body</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "",
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
}
</script>
