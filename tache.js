import baseURL from './bd.js'
const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            taskName: '',
        }
    },
    async created() {
        try {
            const res = await axios.get(baseURL);

            this.tasks = res.data;
        } catch (e) {
            console.error(e);
        }
    },
    methods: {
        async addTask() {
            const res = await axios.post(baseURL, { name: this.taskName });

            this.tasks = [...this.tasks, res.data];

            this.taskName = "";
        },
        async deleteTask(id) {
            const res = await axios.delete(baseURL + id);

            this.tasks = [...this.tasks, res.data];

            this.taskName = "";
        }
    }


})
app.mount('#app');