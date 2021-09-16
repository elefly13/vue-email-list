Vue.config.devtools = true;


// Attraverso l'apposita API di Boolean
// (https://flynn.boolean.careers/exercises/api/random/mail)
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue(
    {
        el: "#app",
        data: {
            arrayMail: [],
            mail: null,
        },
        methods: {
        },
        mounted() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => {
                    // console.log(result.data.response);
                    this.mail = result.data.response;
                    console.log(this.mail);
                    this.arrayMail.push(this.mail);
                });
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => {
                    // console.log(result.data.response);
                    this.mail = result.data.response;
                    console.log(this.mail);
                    this.arrayMail.push(this.mail);
                });
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => {
                    // console.log(result.data.response);
                    this.mail = result.data.response;
                    console.log(this.mail);
                    this.arrayMail.push(this.mail);
                });
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => {
                    // console.log(result.data.response);
                    this.mail = result.data.response;
                    console.log(this.mail);
                    this.arrayMail.push(this.mail);
                });
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => {
                    // console.log(result.data.response);
                    this.mail = result.data.response;
                    console.log(this.mail);
                    this.arrayMail.push(this.mail);
                });
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => {
                    // console.log(result.data.response);
                    this.mail = result.data.response;
                    console.log(this.mail);
                    this.arrayMail.push(this.mail);
                });
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => {
                    // console.log(result.data.response);
                    this.mail = result.data.response;
                    console.log(this.mail);
                    this.arrayMail.push(this.mail);
                });
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => {
                    // console.log(result.data.response);
                    this.mail = result.data.response;
                    console.log(this.mail);
                    this.arrayMail.push(this.mail);
                });
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => {
                    // console.log(result.data.response);
                    this.mail = result.data.response;
                    console.log(this.mail);
                    this.arrayMail.push(this.mail);
                });
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => {
                    // console.log(result.data.response);
                    this.mail = result.data.response;
                    console.log(this.mail);
                    this.arrayMail.push(this.mail);
                });    
        }

    }
    
)