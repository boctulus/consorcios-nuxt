<template>
    <span>{{ text }}</span>
</template>

<script>
export default {
    name: 'TextAnimation',
    props: ['forwardDelay', 'backwardDelay', 'clearingDelay', 'messages'],
    data() {
        return {
            text: '',
            pt: 0,
            list: [ ]
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
                    setTimeout(() => {this.reverse(); },this.clearingDelay);                    
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
         for (let i=0; i< this.messages.length; i++){
            this.list[i] = {}; 
            this.list[i].msg = this.messages[i];
            this.list[i].len = this.messages[i].length;
            this.list[i].offset = 0;
            this.list[i].direction = 1;
        }
        this.forward();       
    },
    components: {
    }
}
</script>

<style scoped>
</style>