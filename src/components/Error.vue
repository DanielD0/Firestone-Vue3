<template>
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Occurrio un error:</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
            @click="error = null"
        ></button>
    </div>
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
    setup(){
        const error = inject('error')

        return {error}
    }
}
</script>