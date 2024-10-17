<template>
  <v-footer class="pl-10 pt-10">
    <v-row class="footer-wrapper pl-0">
      <v-col cols="12" class="footer-about">
        <!-- <a
          href="https://wa.me/message/DTN4ST4TTRBWG1"
          target="_blank"
        >
          <button class="button">预约咨询 Book a Consultation</button>
        </a><br><br> -->
        <!-- <h5>
          <a
            href="https://glows.my"
            target="_blank"
            style="color: darkblue; font-size: 1.5rem;"
          >WISDOER GLOBAL</a>
        </h5>
        No. 18, 1st Floor<br>
        Lorong Tunku Abdul Rahman 8A<br>
        96000 Sibu, Sarawak, Malaysia<br><br>
        <a href="mailto:wg@glows.my">wg@glows.my</a><br> -->
      </v-col>
      <v-col class="footer-text" cols="12">
        © {{ new Date().getFullYear() }} —
        <a href="https://www.campus.ai/uk/" target="_blank">Campus.ai</a>, under
        the
        <a href="https://en.wikipedia.org/wiki/MIT_License" target="_blank"
          >MIT license</a
        >. Credits to
        <a href="https://github.com/rubynor" target="_blank">Rubynor AS</a>
        <!-- © {{ new Date().getFullYear() }} — Campus AI.
        Strona korzysta z projektu BigFive stworzonego przez <a href="https://github.com/rubynor"
          target="_blank">rubynor</a> -->
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mdiFacebook, mdiTwitter, mdiGithub, mdiLinkedin } from "@mdi/js";

export default {
  name: "Footer",
  data: () => ({
    mdiFacebook,
    mdiTwitter,
    mdiLinkedin,
    mdiGithub
  }),
  methods: {
    logClick(choice) {
      console.log(choice);
      this.$amplitude.getInstance().logEvent(`goes to ${choice}`, {});
    }
  }
};
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
  font-family: "Passion One", cursive;
  font-size: 4rem;
  color: #4c4f5a;
  line-height: 3.5rem;
}

.footer-about {
  letter-spacing: 0.1em;
}

.footer-text {
  font-family: "Didact Gothic", sans-serif;
  color: #b3b3b3;
  text-align: center;
}

.footer-text a {
  color: #49bb58 !important;
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
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 15px;
  box-shadow: none;
  transform: none;
}

.button:hover {
  background-color: #3e8e41;
}

.button:active {
  background-color: #3e8e41;
  box-shadow: none;
  transform: none;
}

.button span {
  display: block;
}
</style>
