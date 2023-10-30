<template>
  <div>
    <v-row style="justify-content: space-around;">
      <v-col cols="6" xs="6" sm="6" md="3">
        <!-- <img class="responsive" alt="scientific" :src="require('@/assets/scientific.png')" loading="lazy"> -->
        <h3 v-html="$t('frontpage.cards.scientific.title')" />
        <span color="#666">{{ $t('frontpage.cards.scientific.text') }}</span>
      </v-col>
      <v-col cols="3" xs="3" sm="3" md="3">
        <!-- <img class="responsive" alt="open source" :src="require('@/assets/open-source.png')" loading="lazy"> -->
        <h3 v-html="$t('frontpage.cards.open.title')" />
        <span color="#666">{{ $t('frontpage.cards.open.text') }}</span>
      </v-col>
      <v-col cols="6" xs="6" sm="6" md="3">
        <!-- <img class="responsive" alt="free" :src="require('@/assets/free.png')" loading="lazy"> -->
        <h3 v-html="$t('frontpage.cards.free.title')" />
        <span color="#666">{{ $t('frontpage.cards.free.text') }}</span>
      </v-col>

    </v-row>
    <v-row justify="center">
      <v-col class="text-center">
        <p class="msg-us">Jesli masz pytania, napisz do nas na <a href="mailto:info@campusai.pl">info@campusai.pl</a></p>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.responsive {
  max-width: 100%;
  height: auto;
}

.msg-us {
  padding-top: 30px;
}

h3 {
  padding-bottom: 5px;
  padding-top: 5px;
}
</style>
