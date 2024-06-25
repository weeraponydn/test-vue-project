<template>
    <div class="row mt-5">
        <div class="col-8 offset-2">
            <h5 class="text-center">Edit item</h5>
        </div>
    </div>

    <div class="row">
        <div class="col-8 offset-2">
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" v-model="name">
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" v-model="description"></textarea>
                </div>
                <div class="mb-3">
                    <label for="price" class="form-label">Price</label>
                    <input type="number" class="form-control" id="price" v-model="price">
                </div>
                <div class="mb-3">
                    <label for="quantity" class="form-label">Quantity</label>
                    <input type="number" class="form-control" id="quantity" v-model="quantity">
                </div>
                <div class="text-center mb-3">
                    <button class="btn btn-primary" @click.prevent="submitForm">Edit</button>
                    <router-link to="/" class="ms-3 btn btn-secondary">Cancel</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'EditItem',
    data() {
        return {
            item_id: this.$route.params.item_id,
            name: '',
            description: '',
            price: '',
            quantity: '',
        }
    },
    mounted() {
        this.fetchItem();
    },
    methods: {
        async fetchItem() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/items/${this.item_id}`);
                this.name = response.data.name;
                this.description = response.data.description;
                this.price = response.data.price;
                this.quantity = response.data.quantity;
            } catch (error) {
                console.log(error);
            }
        },
        async submitForm() {
            await axios.patch(`http://127.0.0.1:8000/api/items/${this.item_id}`, {
                name: this.name,
                description: this.description,
                price: this.price,
                quantity: this.quantity
            });

            alert('Item updated successfully');
            this.$router.push('/');
        }
    }

}
</script>

<style>

</style>