<template>
  <section>
    <v-container>
      <v-row>
        <v-col sm="12" xs="12" md="12">
          <v-card class="Card" max-width="400">
            <v-card-text>
              <p
                class="
                  header
                  font-weight-bold font-roboto
                  text-decoration-underline
                "
              >
                Esta quase pronto!! <small>Passo 2/2</small>
              </p>
              <p class="header font-weight-bold font-roboto font-weigh-black">
                Copie e cole este código no seu Studio:
              </p>
            </v-card-text>
            <v-card-actions>
              <div class="text-center mb-4">
                <v-btn
                  v-on:focus="$event.target.select()"
                  class="white--text"
                  elevation="6"
                  depressed
                  color="teal darken-4"
                  @click="copy"
                  ref="clone"
                >
                  Copiar script!
                </v-btn>
              </div>
            </v-card-actions>
            <div id="app">
              <v-textarea
                v-on:focus="$event.target.select()"
                no-resize
                auto-grow
                filled
                class="textarea"
                ref="clone"
                readonly
                :value="text"
                color="teal darken-3"
                rows="1"
              />
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <div class="text">
          <h3
            class="
              font-weight-black
              text-center
              font-weight-bold
              text-decoration-underline
              pt-2
              font-roboto
            "
          >
            Aplicando o código no seu site:
          </h3>
          <h2 class="text-center font-weight-black font-weight-bold pt-0">
            <small>1. Se você entende de HTML</small>
          </h2>
          <p class="text-center pt-0">moleza, já sabe como fazer.</p>
          <h2 class="text-center font-weight-bold font-weight-black pt-0">
            <small> 2. Se você não entende de HTML e não quer arriscar</small>
          </h2>
          <p class="text-center pt-0">
            basta encaminhar o código para seu desenvolvedor.
          </p>
        </div>
      </v-row>
    </v-container>
    <div class="Footer">
      <Footer1 />
    </div>
  </section>
</template>
<script>
import Footer1 from "../components/Footer1.vue";
export default {
  data() {
    return {
      lead: { telefone: "", email: "", nome: "", mensagem:"", },
    };
  },
  methods: {
    copy() {
      this.$refs.clone.focus();
      document.execCommand("copy");
    },
  },
  components: {
    Footer1,
  },
  computed: {
    text() {
      return `<script id="callwhatsapp" data-mensagem="${this.lead.mensagem}" data-numero="${this.lead.telefone}" data-email="${this.lead.email}" data-nome="${this.lead.nome}" src="https://live.callwhats.net/inject_whatsapp.js">  </ script>`;
    },
  },
  mounted() {
    const lead = localStorage.getItem("lead");
    if (lead) this.lead = JSON.parse(lead);
  },
};
</script>
<style>
.header {
  color: black;
}

.text {
  background-color: rgba(248, 248, 248, 0);
  margin-left: auto;
  margin-top: auto;
  margin: auto;
}

.Card {
  margin: auto;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}

.Footer {
  position: relative;
  margin-top: auto;
}
</style>