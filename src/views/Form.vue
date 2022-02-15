<template>
  <section>
    <v-container>
      <v-row class="d-flex justify-center">
        <h3 class="font-weight-bold font-roboto text-center">
          Capture facilmente o contato dos visitantes do seu site!
        </h3>
        <span class="white black--text text-center font-roboto"
          >Com um botão de WhatsApp, o visitante não precisa ir até o celular,
          salvar o número na agenda e só depois começar uma conversa.<strong
            ><br>Facilite o caminho para seu cliente chegar até você!</strong
          >
        </span>
      </v-row>
      <v-row class="d-flex justify-center mt-12">
         <div class="col-sm-12 col-md-6">
          <div id="form">
            <div class="input-container">
              <p
                class="
                  header
                  font-weight-bold font-roboto
                  text-decoration-underline
                "
              >
                Vamos criar seu botão gratuito!! <small>Passo 1/2</small>
              </p>
              <label class="Msg font-weight-bold font-italic font-weight-black"
                >Qual mensagem mostrar no topo para seus clientes?</label
              >
              <input
                v-model="mensagem"
                type="text"
                name="mensagem"
                class="form-control"
                placeholder="Digite a mensagem aqui!"
                required
              />
            </div>
            <div>
              <div class="input-container">
                <label
                  class="number font-weight-bold font-italic font-weight-black"
                  >Qual número de WhatsApp você quer usar?</label
                >
                <input
                  v-model="numero"
                  type="text"
                  name="telefone"
                  class="form-control"
                  placeholder="+55 (00) 12345-6789"
                  required
                />
              </div>
              <div class="input-container">
                <label
                  class="email font-weight-bold font-italic font-weight-black"
                  >Em qual email quer receber o codigo?</label
                >
                <input
                  v-model="email"
                  type="text"
                  name="email"
                  class="form-control"
                  placeholder="Digite seu e-mail aqui!"
                  required
                />
              </div>
              <div class="input-container">
                <label
                  class="name font-weight-bold font-italic font-weight-black"
                >
                  Qual o seu nome?</label
                >
                <input
                  v-model="nome"
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Digite seu nome aqui!"
                  required
                />
              </div>
              <div class="text-center mb-4">
                <v-btn
                  class="white--text"
                  elevation="7"
                  depressed
                  color="teal darken-4"
                  @click="postlead"
                >
                  Criar Botao do WhatsApp
                </v-btn>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="img">
            <img src="/preview/preview.png" alt="preview" class="seu-site" />
          </div>
        </div>
      </v-row>
      <v-row>
        <div class="texts mt-7">
          <h3 class="font-weight-bold text-center text-decoration-underline">
            Gerando o código do botão:
          </h3>
          <h4 class="font-weight-bold font-roboto mt-5">
            1. Após preencher os campos acima, um código vai ser gerado
            automaticamente.
          </h4>
          <h4 class="font-weight-bold font-roboto mt-3">
            2. Uma cópia dessas mensagens também serão enviada para seu email
            cadastrado.
          </h4>
          <h4 class="font-weight-bold font-roboto mt-3">
            3. Depois de instalado, você vai começar a receber as mensagens no
            número de WhatsApp informado acima.
          </h4>
        </div>  
      </v-row>
      <div class="d-flex flex-wrap justify-center mt-12 mb-8">
        <div id="facilite" style="max-width: 300px" class="ma-3">
          <v-card
            flat
            elevation="10"
            tile
            class="teal darken-4 --text text-center cartao"
          >
            <div class="facilite">
              <img src="/Footer/primeira.png" alt="facilite" class="facilite" />
            </div>
            <v-card-text class="white--text pt-0 font-weight-bold font-italic">
              FACILITE PARA O VISITANTE!
              <v-card-text class="white--text pt-0 font-weight-bold"
                >As pessoas têm pressa. É muito prático para o visitante clicar
                no botão e começar a falar sobre sua oferta.</v-card-text
              >
            </v-card-text>
          </v-card>
        </div>
        <div id="confianca" style="max-width: 300px" class="ma-3">
          <v-card
            flat
            elevation="10"
            tile
            class="teal darken-4 --text text-center cartao"
          >
            <div class="confianca">
              <img
                src="/Footer/segunda.png"
                alt="confianca"
                class="confianca"
              />
            </div>
            <v-card-text class="white--text pt-0 font-weight-bold font-italic">
              CONFIANÇA!
              <v-card-text class="white--text pt-0 font-weight-bold"
                >Quando uma pessoa sabe que consegue entrar em contato com a
                empresa, ela fica muito mais confiante para
                comprar.</v-card-text
              >
            </v-card-text>
          </v-card>
        </div>
        <div id="tempo" style="" class="ma-3">
          <v-card
            flat
            elevation="10"
            tile
            class="teal darken-4 --text text-center cartao"
          >
            <div class="tempo">
              <img src="/Footer/terceira.png" alt="tempo" class="tempo" />
            </div>
            <v-card-text class="white--text pt-0 font-weight-bold font-italic">
              TEMPO É DINHEIRO!
              <v-card-text class="white--text pt-0 font-weight-bold"
                >80% das mensagens enviadas para o WhatsApp são vistas em 5
                minutos. Aproveite a empolgação do seu prospect.</v-card-text
              >
            </v-card-text>
          </v-card>
        </div>
      </div>
    </v-container>
    <div class="Footer1">
      <Footer1 />
    </div>
  </section>
</template>
<script>
import Footer1 from "../components/Footer1.vue";
export default {
  name: "Form",
  data() {
    return {
      numero: null,
      email: null,
      nome: null,
      mensagem: null,
    };
  },
  methods: {
    //envia dados para a api
    async postlead() {
      //constroi objeto do lead
      const lead = {
        telefone: this.numero,
        email: this.email,
        nome: this.nome,
        mensagem: this.mensagem 
      };
      //faz o envio dos dados dos objetos para api
      const req = await fetch(
        "https://desolate-headland-66239.herokuapp.com/api/leads",
        {
          method: "POST",
          body: JSON.stringify({ data: lead }),
          headers: { "Content-Type": "application/json" },
        }
      ).then((data) => {
        localStorage.setItem("lead", JSON.stringify(lead));
        // redirecionamento de pagina
        this.$router.push("/link");
        console.log(data);
      });

      console.log(req);
    },
  },
  mounted() {},
  components: {
    Footer1,
  },
};
</script>
<style scoped>
#form {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.116);
  margin-left: auto;
  margin-top: auto;
  margin: auto;
  background-color: #fff;
  border-radius: 7px !important;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin: 20px;
  font-size: smaller;
}
input {
  padding: 8px 7px;
  border: 1px solid rgba(160, 160, 160, 0.705);
}
.img {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.116);
  border-radius: 4px !important;
}

.seu-site {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  width: 100%;
}
.texts {
  background-color: rgba(119, 119, 119, 0);
  margin-left: auto;
  margin-top: auto;
  margin: auto;
}

.cartao {
  max-width: 300px;
  border-radius: 8px !important;
  padding: 8px;
}
</style>