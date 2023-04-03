<template>
    <Disclosure as="nav" class="h-full" v-slot="{ open }">
        <div class="h-full mx-auto max-w-fullHD px-4 sm:px-0">
            <div class="flex w-full h-full items-center justify-between xl:justify-center">
                <div class="flex w-full items-center md:justify-center">
                    <div class="flex-shrink-0 md:hidden">
                        <DisclosureButton class="inline-flex items-center justify-center rounded-md bg-orange-600 p-2 text-white hover:bg-orange-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span class="sr-only">Abrir</span>
                            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                        </DisclosureButton>
                    </div>
                    <div class="md:block">
                        <div class="flex items-baseline text-center">
                            <NuxtLink class="text-mpurple lg:text-xl sm:text-lg px-3 py-2 rounded-md font-montserratRegular cursor-pointer" to="/">
                                Restaurante
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <DisclosurePanel class="md:hidden">
            <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                <DisclosureButton class="text-mpurple px-3 py-2 rounded-md text-sm block font-montserratBold">Item 1</DisclosureButton>
                <DisclosureButton class="text-mpurple px-3 py-2 rounded-md text-sm block font-montserratRegular">Item 2</DisclosureButton>
                <DisclosureButton class="text-mpurple px-3 py-2 rounded-md text-sm block font-montserratRegular">Item 3</DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>


<script>
    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems,TransitionRoot,TransitionChild,Dialog, DialogPanel, DialogTitle  } from '@headlessui/vue';
    import { Bars3Icon, BellIcon, XMarkIcon, UserCircleIcon,ArrowDownIcon,EyeIcon,EyeSlashIcon } from '@heroicons/vue/24/outline';
    import { VueperSlides, VueperSlide } from 'vueperslides';
    import 'vueperslides/dist/vueperslides.css';

   export default {
        components: { VueperSlides, VueperSlide, Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems,TransitionRoot,TransitionChild,Dialog, DialogPanel, DialogTitle,
        Bars3Icon, BellIcon, XMarkIcon, UserCircleIcon,ArrowDownIcon,EyeIcon,EyeSlashIcon, },
        props: [],
        data(){
            return {
                openModalPacient : false,
                openModalDr : false,
                passwordInput : 'password',
                email_dr: 'dra.mariamsmith@gmail.com',
                password_dr: 'demo',
                email_patient: 'fernando@medizona.com.mx',
                password_patient: 'demo',
                user : null,
            }
        },
        mounted() {
        },
        methods : {
        }
    }
</script>
