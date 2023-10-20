<template>
  <v-container v-resize="onResize">
    <LazyFormLanguage v-if="!form.language" />
    <div v-else>
      <v-row>
        <v-col v-if="!testStarted" cols="10" class="pa-0">
          <v-text-field v-model="userEmail" label="Podaj swój adres e-mail" type="email"></v-text-field>
        </v-col>
        <v-col v-if="!testStarted">
          <v-btn @click="startTest" :disabled="!isValidEmail" color="#3AB54A" class="custom-start-button">
            Rozpocznij test
          </v-btn>
        </v-col>
      </v-row>

      <!-- Warunek sprawdzający, czy test został rozpoczęty -->
      <div v-if="testStarted">
        <v-progress-linear v-if="!test.done" :value="GET_PROGRESS" height="25" reactive rounded background-opacity="0.1"
          class="mb-3" :style="GET_PROGRESS > 49 && { color: 'white' }">
          {{ GET_PROGRESS }}%
        </v-progress-linear>
        <div v-for="question in GET_CURRENT_QUESTIONS" :key="question.id">
          <h2>{{ question.text }}</h2>
          <v-radio-group :value="GET_CURRENT_ANSWER(question.id)"
            @change="answer => SET_ANSWER({ id: question.id, answer })">
            <v-radio v-for="(choice, i) in question.choices" :key="i" :name="question.id" :value="choice.score"
              :off-icon="mdiRadioboxBlank" :on-icon="mdiRadioboxMarked" color="secondary" :label="choice.text" />
          </v-radio-group>
        </div>

        <v-row class="justify-center pt-4">
          <div v-if="!test.done">
            <v-btn large color="primary" :disabled="BACK_BUTTON_STATE" class="mr-2" @click="PREVIOUS_QUESTIONS">
              {{ $t("test.back") }}
            </v-btn>

            <v-btn large color="primary" :disabled="NEXT_BUTTON_STATE" @click="NEXT_QUESTIONS">
              {{ $t("test.next") }}
            </v-btn>
            <v-btn v-if="development" large color="primary" class="ml-2" @click="SKIP_QUESTIONS">
              dev: skip to end
            </v-btn>
          </div>

          <div v-else-if="loading" class="text-center">
            <v-progress-circular indeterminate color="secondary" size="128" />
          </div>

          <div v-else>
            <v-btn large color="secondary" :disabled="!isTestCompleted" @click="SUBMIT_TEST">
              {{ $t('test.seeResults') }}
            </v-btn>
          </div>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
.custom-start-button {
  color: white;
  background-color: #3AB54A;
  padding: 0 23px !important;
  height: 52px !important;
  box-shadow: none !important;
  border-radius: 20px;
}
</style>

<script>
import { mdiRadioboxMarked, mdiRadioboxBlank } from '@mdi/js'
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
import { sleep } from '../lib/helpers'

export default {
  name: 'Test',
  data: () => ({
    mdiRadioboxBlank,
    mdiRadioboxMarked,
    userEmail: '',
    testStarted: false,
  }),
  head: () => ({
    title: 'The test',
  }),
  computed: {
    ...mapState(['test', 'development', 'form', 'loading']),
    ...mapGetters([
      'GET_CURRENT_QUESTIONS',
      'GET_PROGRESS',
      'NEXT_BUTTON_STATE',
      'BACK_BUTTON_STATE',
      'GET_CURRENT_ANSWER',
    ]),
    isValidEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.userEmail);
    },
    isTestCompleted() {
      const questions = this.GET_CURRENT_QUESTIONS;
      const answers = questions.map(question => this.GET_CURRENT_ANSWER(question.id));
      return answers.every(answer => answer !== undefined);
    },
  },
  watch: {
    'test.done': async function (testDone) {
      if (testDone) {
        this.$confetti.start({ particlesPerFrame: 0.25, particles: [{ type: 'heart' }] })
        await sleep(4000)
        this.$confetti.stop()
      }
    },
  },
  mounted() {
    this.onResize()
    this.$amplitude.getInstance().logEvent('b5.test', { part: 'start' })
  },
  created() {
    this.SET_INVENTORY()
  },
  methods: {
    ...mapMutations(['SET_INVENTORY', 'SET_ANSWER', 'NEXT_QUESTIONS', 'PREVIOUS_QUESTIONS', 'SET_ITEMS_PER_PAGE', 'SKIP_QUESTIONS']),
    ...mapActions(['SUBMIT_TEST']),
    onResize() {
      window.innerWidth < 600 ? this.SET_ITEMS_PER_PAGE(1) : this.SET_ITEMS_PER_PAGE(3)
    },
    startTest() {
      if (this.isValidEmail) {
        localStorage.setItem('userEmail', this.userEmail);
        this.testStarted = true;
        this.$amplitude.getInstance().logEvent('b5.test', { part: 'start' });
      }
    },
  },
}
</script>
