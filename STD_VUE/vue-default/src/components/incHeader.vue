<template>
<header class="header out-sec">
  <div class="header-inner in-sec">
    <div class="logo-area">
      <p class="logo"><router-link to="/">LOGO</router-link></p>
    </div>
    <div class="gnb-area">
      <nav class="gnb">
        <ul class="node1-list">
          <li class="node1-item" @mouseenter="gnbOpen" @mouseleave="gnbClose" @focus="gnbOpen" @blur="gnbClose">
            <router-link to="/Menu11" class="node1-link" aria-expanded="false">Menu1</router-link>
            <div class="node2-wrap">
              <ul class="node2-list">
                <li class="node2-item"><a href="/Menu11" class="node2-link">Menu11</a></li>
              </ul>
            </div>
          </li>
          <li class="node1-item" @mouseenter="gnbOpen" @mouseleave="gnbClose" @focus="gnbOpen" @blur="gnbClose">
            <router-link to="/Menu21" class="node1-link" aria-expanded="false">Menu2</router-link>
            <div class="node2-wrap">
              <ul class="node2-list">
                <li class="node2-item"><a href="/Menu21" class="node2-link">Menu21</a></li>
              </ul>
            </div>
          </li>
          <li class="node1-item" @mouseenter="gnbOpen" @mouseleave="gnbClose" @focus="gnbOpen" @blur="gnbClose">
            <router-link to="/Menu31" class="node1-link" aria-expanded="false">Menu3</router-link>
            <div class="node2-wrap">
              <ul class="node2-list">
                <li class="node2-item"><a href="/Menu31" class="node2-link">Menu31</a></li>
              </ul>
            </div>
          </li>
          <li class="node1-item" @mouseenter="gnbOpen" @mouseleave="gnbClose" @focus="gnbOpen" @blur="gnbClose">
            <router-link to="/Menu41" class="node1-link" aria-expanded="false">Menu4</router-link>
            <div class="node2-wrap">
              <ul class="node2-list">
                <li class="node2-item"><a href="/Menu41" class="node2-link">Menu41</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
		<div class="drawer-area">
			<button type="button" class="jpk btn btn-drawer sidebar-closer" aria-controls="sidebar" aria-expanded="true"><span><i class="ico">Sidebar 닫기</i></span></button>
		</div>
  </div>
</header>
</template>

<script>
export default {
  name: "App",
  data() {
      return {}
  },
  methods: {
    gnbOpen: function(event){
      $(event.target).addClass('is-active');
    },
    gnbClose: function(event){
      $(event.target).removeClass('is-active');
    },
  },
};
</script>
