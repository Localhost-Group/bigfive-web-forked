<template>
  <v-footer class="pl-10 pt-10">
    <v-row class="footer-container">
      <v-col
        sm="12"
        md="6"
        class="pl-0 pt-0"
      >
        <v-row class="footer-wrapper pl-0">
          <v-col class="footer-heading">
            <a :href="whatsAppLink" target="_blank">
              <button class="button">预约咨询 Book a Consultation</button>
            </a><br>
            <a href="https://glows.my" target="_blank"><strong>WISDOER GLOBAL</strong></a>
          </v-col>

          <!-- <v-col
            cols="12"
            class="pt-0"
          >
            <a
              href="https://www.facebook.com/rubynorno/"
              aria-label="Gå til facebook"
            >
              <v-icon large>{{ mdiFacebook }}</v-icon>
            </a>

            <v-divider
              inset
              vertical
              class="mx-1"
            />

            <a
              href="https://github.com/rubynor"
              aria-label="Gå til github"
            >
              <v-icon large>{{ mdiGithub }}</v-icon>
            </a>

            <v-divider
              inset
              vertical
              class="mx-1"
            />

            <a
              href="https://twitter.com/rubynor"
              aria-label="Gå til twitter"
            >
              <v-icon large>{{ mdiTwitter }}</v-icon>
            </a>

            <v-divider
              inset
              vertical
              class="mx-1"
            />

            <a
              href="https://no.linkedin.com/company/rubynor-as"
              aria-label="Gå til linkedIn"
            >
              <v-icon large>{{ mdiLinkedin }}</v-icon>
            </a>
          </v-col> -->
          <v-col
            cols="12"
            class="footer-about"
          >
            No. 18, 1st Floor<br>
            Lorong Tunku Abdul Rahman 8A<br>
            96000 Sibu, Sarawak, Malaysia<br><br>
            <a href="mailto:wg@glows.my">wg@glows.my</a><br>
          </v-col>
          <v-col
            class="footer-text"
            cols="12"
          >
            © {{ new Date().getFullYear() }} — Rubynor - all rights reserved.
          </v-col>
        </v-row>
      </v-col>

      <!-- <v-col cols="auto">
        <h3 class="mb-2">
          Having questions about or problems with the site?
        </h3>
        Please read the <nuxt-link
          :to="localePath('faq')"
        >
          <a @click="logClick('FAQ')">FAQ</a>
        </nuxt-link>.
      </v-col> -->
      
    </v-row>
  </v-footer>
</template>

<script>
import { mdiFacebook, mdiTwitter, mdiGithub, mdiLinkedin } from '@mdi/js'

export default {
  name: 'Footer',
  data: () => ({
    mdiFacebook,
    mdiTwitter,
    mdiLinkedin,
    mdiGithub
  }),
  methods: {
    logClick (choice) {
      console.log(choice)
      this.$amplitude.getInstance().logEvent(`goes to ${choice}`, {})
    }
  }
}
</script>

<style scoped>
.footer-container {
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1200px;
}
.footer-heading {
  font-family: 'Passion One', cursive;
  font-size: 4rem;
  color: #4c4f5a;
  line-height: 3.5rem;
}
.footer-about {
  letter-spacing: .1em;
}
.footer-text {
  font-family: 'Didact Gothic', sans-serif;
  color: #b3b3b3;
}
.footer-wrapper {
  max-width: 1200px;
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {
  background-color: #3e8e41;
}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

</style>
