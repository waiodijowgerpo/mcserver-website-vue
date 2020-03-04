<template>
    <div class="row">
        <div class="col s12">
            <div class="card">
                <div class="card-content">
                    <Loader :show="isContentLoading"></Loader>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loader from '../../components/Loader';

export default {
    components: {
        Loader,
    },
    data() {
        return {
            isContentLoading: true,
        }
    }
}
</script>