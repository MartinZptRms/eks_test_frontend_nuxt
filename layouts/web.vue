<template>
    <div>
        <div class="min-h-full max-w-full">
            <!-- <ModalSignUpComponent /> -->
            <NavBarComponent class="p-4"/>
                <slot />
            <FooterComponent />        
        </div>
    </div>
</template>

<script>
    import NavBarComponent from '../components/web/NavBarComponent.vue';
    import FooterComponent from '../components/web/FooterComponent.vue';

    export default {
        components: {
            NavBarComponent,
            FooterComponent,
        },
        head: {
            title: 'Eks Website',
            link: [
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css' },
            ],
        },
    }
</script>
    