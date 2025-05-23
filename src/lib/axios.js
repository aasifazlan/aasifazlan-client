import axios from "axios";

const api=axios.create({
    baseURL:import.meta.env.DEV
		? "http://localhost:5000/api"
		: "https://mern-ecom-backend-oay9.onrender.com/api",
})

export default api;