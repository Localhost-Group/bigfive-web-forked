<template>
  <div>
    <v-app-bar app color="white" class="app-bar-shadow">
      <div class="toolbar-wrapper">
        <div class="d-flex align-center">
          <nuxt-link :to="localePath('/')">
            <transition appear name="rotate">
              <v-img alt="BigFive logo" class="shrink mr-2" contain :src="logoSrc" transition="fade-transition"
                width="200" />
            </transition>
          </nuxt-link>
        </div>
        <v-spacer />
        <v-btn text :to="localePath('result')" class="hidden-sm-and-down text-none font-weight-regular">
          {{ $t('toolbar.see_results') }}
        </v-btn>
        <v-btn text @click="goToCampus" class="hidden-sm-and-down text-none font-weight-regular green-btn">
          {{ $t('toolbar.go_to_campus') }}
        </v-btn>
        <v-menu v-model="drawer" bottom offset-y min-width="150">
          <template #activator="{ on }">
            <v-btn icon aria-label="Expand menu" v-on="on" @click="drawer = !drawer">
              <v-icon>{{ icons.mdiMenu }}</v-icon>
            </v-btn>
          </template>
          <v-list nav>
            <v-list-item v-for="item in items" :key="item.title"
              :to="item.url.startsWith('http') ? null : localePath(item.url)" link
              class="text-none font-weight-regular pl-5 body-2" @click="handleItemClick(item)">
              {{ item.title }}
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mdiMenu } from '@mdi/js'

export default {
  data: function () {
    const icons = { mdiMenu }
    return {
      drawer: false,
      logoSrc: require('@/assets/logo.svg'),
      icons
    }
  },
  computed: {
    items() {
      return [
        { title: this.$t('toolbar.result'), url: '/result' },
        { title: this.$t('toolbar.compare'), url: '/compare' },
        { title: this.$t('toolbar.privacy'), url: 'https://app.campusai.pl/privacy' }
      ]
    }
  },
  methods: {
    handleItemClick(item) {
      if (item.url.startsWith('http')) {
        window.open(item.url, '_blank');
      } else {
        this.$router.push(this.localePath(item.url));
      }
    },
    goToCampus() {
      window.open('https://campusai.pl/', '_blank');
    },
  },
}
</script>

<style>
.app-bar-shadow {
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1) !important;
}

.toolbar-wrapper {
  display: flex;
  flex-direction: row;
  margin: auto;
  max-width: 960px;
  width: 100%;
  height: 100%;
  align-items: center;
}

@keyframes spinHorizontal {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}

.rotate-enter-active {
  animation: spinHorizontal 1s;
}

.v-menu__content {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.02) !important;
}

.v-list-item:hover {
  background-color: transparent;
}

.v-list-item:hover .v-list-item__title {
  color: inherit;
}

.green-btn {
  background-color: #3AB54A !important;
  border-color: #3AB54A !important;
  border-radius: 15px;
  margin-left: 10px;
}

.green-btn span {
  color: white;
}
</style>
