<template>
    <div class="row m-5">
        <div class="text-center">
            <h5>Item Lists</h5>
        </div>
    </div>

    <table class="my-3 table-bordered w-100">
        <thead class="text-center">
            <th>No.</th>
            <th>Name</th>  
            <th>Price</th>  
            <th>Action</th>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.item_id">
                <td>{{ item.item_id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td class="text-center">
                    <router-link :to="'edit/' + item.item_id" class="text-primary cursor-pointer"><u>Edit</u></router-link>
                    <span class="text-danger cursor-pointer ms-3" @click="deleteItem(item.item_id)"><u>Delete</u></span>
                </td>
            </tr>
        </tbody>
    </table>

    <div class="row text-center mb-5">
        <div class="col-12">
            <router-link to="/create" class="btn btn-primary">Create Item</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ItemLists',
    data() {
        return {
            items: [],
        }
    },
    mounted() {
        this.fecthItem();
    },
    methods: {
        async fecthItem() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/items');
                console.log(response.data);
                this.items = response.data;
            } catch (error) {
                console.error(error);
            }
        },

        async deleteItem(item_id) {
            try {
                if (!confirm('Are you sure you want to delete this item?')) {
                    return;
                }
                
                await axios.delete(`http://127.0.0.1:8000/api/items/${item_id}`);
                alert('Item deleted successfully');
                this.fecthItem();
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>

<style>
.cursor-pointer {
    cursor: pointer;
}
</style>