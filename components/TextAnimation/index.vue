<template>
    <span>{{ text }}</span>
</template>

<script>
export default {
    name: 'TextAnimation',
    props: ['forwardDelay', 'backwardDelay'],
    data() {
        return {
            text: '',
            pt: 0,
            list: [
                { msg: 'Administración de consorcios' },
                { msg: 'Número 1 en La Plata' },
                { msg: 'El Grove' }
            ]
        };
    },
    computed: {    
    },
    methods: {
        changeText(){
            if (this.list[this.pt].direction == 1){
                if (this.list[this.pt].offset < this.list[this.pt].len){
                    this.list[this.pt].offset++;
                }else if (this.list[this.pt].offset == this.list[this.pt].len) {
                    this.list[this.pt].direction = -1;
                    clearTimeout(this.timeout);
                    this.reverse();
                }
            }else {
                // reverse
                if (this.list[this.pt].offset > 0){
                    this.list[this.pt].offset--;
                }else if (this.list[this.pt].offset == 0) {
                    this.list[this.pt].direction = 1;

                    if (this.pt == this.list.length -1 )
                        this.pt =0;
                    else 
                        this.pt++;

                    clearTimeout(this.timeout);
                    this.forward();
                }
            }    
            
            this.text = this.list[this.pt].msg.slice(0, this.list[this.pt].offset);
        },
        forward(){
            this.timeout = setInterval(this.changeText, this.forwardDelay);
        },
        reverse(){
            this.timeout = setInterval(this.changeText, this.backwardDelay);
        }     
    },
    created() {
        for (let i=0; i< this.list.length; i++){
            this.list[i].len = this.list[i].msg.length;
            this.list[i].offset = 0;
            this.list[i].direction = 1;
        }
        this.forward();
    }
}
</script>

<style scoped>
</style>