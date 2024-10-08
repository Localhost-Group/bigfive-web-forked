<template>
  <div>
    <h1>{{ $t('getResult.result') }}</h1>
    <div class="body-text">
      {{ $t('getResult.explanation') }} {{ $t('getResult.idInput') }}
      <br>
      <v-text-field v-model="id" class="pt-5" label="ID" hide-details="auto" :placeholder="$t('getResult.urlOrId')"
        :rules="[rules.valid]" />
      <v-card-actions>
        <v-spacer />
        <v-btn v-if="resultId" color="secondary" :to="localePath(`/result/${resultId}`)" large>
          {{ $t('getResult.viewPrevious') }}
        </v-btn>
        <v-btn color="primary" :to="localePath('/result/' + formatId(id))" large :disabled="!validMongoId(formatId(id))">
          {{ $t('getResult.getResult') }}
        </v-btn>
      </v-card-actions>
    </div>
  </div>
</template>

<script>
import { validMongoId, formatId } from '../../lib/helpers.js'

export default {
  name: 'ResultForm',
  data: () => ({
    id: '',
    resultId: false,
    rules: {
      valid: value => validMongoId(formatId(value)) || 'Not a valid ID'
    }
  }),
  head() {
    return {
      title: this.$t('results.seo.title'),
      meta: [
        { hid: 'title', name: 'title', content: this.$t('results.seo.title') },
        { hid: 'description', name: 'description', content: this.$t('results.seo.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('seo.keywords') },
        // Open Graph
        { hid: 'og:title', name: 'og:title', content: this.$t('results.seo.title') },
        { hid: 'og:description', name: 'og:description', content: this.$t('results.seo.description') },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$t('results.seo.title') },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t('results.seo.description') }
      ]
    }
  },
  mounted() {
    if (validMongoId(localStorage.getItem('resultId'))) {
      this.resultId = localStorage.getItem('resultId')
    }
  },
  methods: {
    validMongoId: validMongoId,
    formatId: formatId
  }
}
</script>

<style scoped>
.body-text {
  font-size: 1.3rem;
  line-height: 1.9;
}
</style>
