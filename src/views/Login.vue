<template>
  <section>
    <v-container>
      <v-row class="d-flex justify-center">
        <div id="Login" class="col-sm-12 col-md-6 justify-center">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              class="font-weight-bold font-roboto mt-15 pt-16"
              required
            ></v-text-field>

            <v-text-field
            class="mt-4"
              v-model="password"
               :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="SenhaRules"
              :type="show1 ? 'text' : 'password'"
              label="Senha"
              required
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn
              elevation="7"
              :disabled="!valid"
              color="blue darken-1"
              class="white--text mr-4 font-weight-bold font-roboto texte-center"
              @click="login"
            >
              login
            </v-btn>
          </v-form>
        </div>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    senha: "",
    senhaRules: [
      (v) => !!v || "Password is required",
      (v) => /.+@.+\..+/.test(v) || "Senha must be valid",
    ],
    show1: false,
    password: "Password",
  }),

  methods: {
    login() {
      this.$refs.form.login();
      // redirecionamento de pagina
        this.$router.push("/teste");
    },
  },
};
</script>