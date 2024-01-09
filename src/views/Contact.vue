<template>
    <div style="padding-bottom: 50px;">
        <h2>Contact Us</h2>
        <form @submit.prevent="submitForm" class="contact-form">
            <label for="name" style="color: white;">Name:</label>
            <input type="text" id="name" v-model="formData.name" required class="form-input">

            <label for="email" style="color: white;">Email:</label>
            <input type="email" id="email" v-model="formData.email" required class="form-input">

            <label for="message" style="color: white;">Message:</label>
            <textarea id="message" v-model="formData.message" required class="form-textarea"></textarea>

            <button type="submit" class="form-button">Submit</button>
        </form>

        <div v-if="submitted" class="confirmation-message">
            <p>Thank you for your message, {{ formData.name }}!</p>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: '',
            },
            submitted: false,
        };
    },
    methods: {
        submitForm() {
            console.log('Form submitted:', this.formData);

            this.submitted = true;
        },
    },
};
</script>
  
<style scoped>
.contact-form {
    max-width: 400px;
    margin: auto;
    background-color: rgb(10, 10, 114);
    padding: 75px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: 'Roboto', sans-serif;

}


.contact-form .label {
    color: white;

}

.form-input,
.form-textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form-button {
    background-color: #4caf50;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.form-button:hover {
    background-color: #edf6ee;
    color: green;
}

.confirmation-message {
    margin-top: 20px;
    color: #f4f8f4;
    font-size: 30px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
}
@media screen and ( max-width: 422px) {
    .contact-form {
        max-width: 351px;
        padding: 94px;
    }
    .form-button {
        padding: 7px 23px;
        margin-left: 40%;
    }
}
</style>